import { question } from './../../../shared/model/question.model';
import { lastValueFrom } from 'rxjs';
import { TestModuleService } from './../test-module.service';
import { Router } from '@angular/router';
import { TestService } from './../../../shared/service/test.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { TestQuestionComponent } from './test-question/test-question.component';
import { CountdownComponent } from 'ngx-countdown';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-test-process',
  templateUrl: './test-process.component.html',
  styleUrls: ['./test-process.component.scss'],
  providers: [TestQuestionComponent]
})
export class TestProcessComponent implements OnInit {
  @ViewChild(CountdownComponent) private countdown!: CountdownComponent;

  questions: question[] = [];

  hasResult: boolean = false;
  result: any = {}

  processBar: boolean = true;
  isSpinning: boolean = false;

  countdownConfig = {
    leftTime: 15*60,
    demmand: true,
    format: 'mm:ss'
  }

  tabs: MenuItem[] = [];
  activeTab: MenuItem = {};
  tabIndex: number = 1;

  constructor(  private testService: TestService,
                private testModuleService: TestModuleService,
                private route: Router,
                public datePipe: DatePipe) { }

  async ngOnInit() {

    this.tabs = Array.from({ length: 30 }, (_, i) => ({
      label: `Quiz ${i+1}`,  skipLocationChange: true,
      routerLink: `test-question/${i+1}`,
      command: (event) => {
        this.tabIndex = i+1;
      }
    }));

    this.activeTab = this.tabs[0];

    const data: any = await lastValueFrom(this.testService.getQuestions())

    this.questions = data['data']

    this.testModuleService.updateQuestions(this.questions)

    setTimeout(() => {
      this.processBar = false;
    }, 3000);

  }

  onCountDownEvent(e: any){

    var time: Date = new Date(0,0,0,0,0,0,(15*60*1000 - e.left))

    if(e.action == 'done'){
      this.testModuleService.currentAnswers.subscribe(res =>{
        var result = {
          id: Number(localStorage.getItem('token')),
          timed: this.datePipe.transform(time, 'mm:ss'),
          listAnswer: res
        }
        this.loadResult(result)

    })
    }else if(e.action == 'pause'){
      this.testModuleService.currentAnswers.subscribe(res =>{
        var result = {
          id: Number(localStorage.getItem('token')),
          timed: this.datePipe.transform(time, 'mm:ss'),
          listAnswer: res
        }
        this.loadResult(result)

      })
    }
  }

  loadResult(rs: any){
    this.testService.sendAnswers(rs).subscribe(res =>{
      this.isSpinning = true
      let dataRes = res as {
        data:{ numCorrect: number, numrank: number, scores: string, time: string }
      }
      this.result = dataRes.data
      setTimeout(() => {
        this.hasResult = true
        this.isSpinning = false
      }, 3000);
    })
  }

  finishFunction(){
    this.countdown.pause()
  }

  nextbackBtnFunction(right: boolean){
    if(right){
      this.route.navigate(['test','test-process','test-question',this.tabIndex + 1], { skipLocationChange: true })
      this.tabIndex += 1
    }else{
      this.route.navigate(['test','test-process','test-question',this.tabIndex - 1], { skipLocationChange: true })
      this.tabIndex -= 1
    }
  }
}
