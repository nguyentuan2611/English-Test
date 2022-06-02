import { question } from './../../../shared/model/question.model';
import { lastValueFrom } from 'rxjs';
import { TestModuleService } from './../test-module.service';
import { Router } from '@angular/router';
import { TestService } from './../../../shared/service/test.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ContentChild } from '@angular/core';
import { TestQuestionComponent } from './test-question/test-question.component';

@Component({
  selector: 'app-test-process',
  templateUrl: './test-process.component.html',
  styleUrls: ['./test-process.component.scss'],
  providers: [TestQuestionComponent]
})
export class TestProcessComponent implements OnInit {
  @ContentChild(TestQuestionComponent)
  private testques!: TestQuestionComponent;

  questions: question[] = [];

  processBar: boolean = true;
  countdownConfig = {
    leftTime: 30*60,
    demmand: true,
    format: 'mm:ss'
  }

  tabs: MenuItem[] = [];
  activeTab: MenuItem = {};
  tabIndex: number = 1;

  constructor(  private testService: TestService,
                private testModuleService: TestModuleService,
                private route: Router) { }

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
    if(e.action == 'done'){
      // console.log(this.testques);

      // this.testModuleService.currentAnswers.subscribe(res =>{
      //   console.log(res);
      // })
    }
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
