import { question } from './../../../shared/model/question.model';
import { lastValueFrom } from 'rxjs';
import { TestModuleService } from './../test-module.service';
import { Router } from '@angular/router';
import { TestService } from './../../../shared/service/test.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CountdownComponent } from 'ngx-countdown';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-test-process',
  templateUrl: './test-process.component.html',
  styleUrls: ['./test-process.component.scss']
})
export class TestProcessComponent implements OnInit {
  @ViewChild('cd', { static: false }) private countdown!: CountdownComponent;

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
