import { TestModuleService } from './../../test-module.service';
import { question } from './../../../../shared/model/question.model';
import { TestService } from './../../../../shared/service/test.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-test-question',
  templateUrl: './test-question.component.html',
  styleUrls: ['./test-question.component.scss']
})
export class TestQuestionComponent implements OnInit {

  questionIndex: number;

  questions: question[] = [];

  currentQuestion: question = new question;

  op1: boolean = false;
  op2: boolean = false;
  op3: boolean = false;
  op4: boolean = false;

  constructor(private activeRoute: ActivatedRoute,
              private testModuleService: TestModuleService)
            {this.questionIndex = 0;}

  ngOnInit(): void {
    this.getQuestions();

    this.activeRoute.params.subscribe((param)=>{
      this.questionIndex = param['index']

      !this.questionIndex ? this.questionIndex = 1 : {}

      this.currentQuestion = this.questions[this.questionIndex - 1]
    })
  }

  onOptionChange(num: any){
    switch(num){
      case 1: this.op2 = this.op3 = this.op4 = false; break
      case 2: this.op1 = this.op3 = this.op4 = false; break
      case 3: this.op1 = this.op2 = this.op4 = false; break
      case 4: this.op1 = this.op2 = this.op3 = false; break
    }
  }

  getQuestions(){
    this.testModuleService.currentQuestions.subscribe(res=>{
      this.questions = res
    })
  }

}
