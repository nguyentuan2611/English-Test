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
  answers: any[] = [];

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

      if(this.answers.find( f => f.id == this.currentQuestion.id)){
        var currentAnswer = this.answers.find( f => f.id == this.currentQuestion.id)
        switch(currentAnswer.answer){
          case this.currentQuestion.option1: this.onOptionChange(1); this.op1 = true; break
          case this.currentQuestion.option2: this.onOptionChange(2); this.op2 = true; break
          case this.currentQuestion.option3: this.onOptionChange(3); this.op3 = true; break
          case this.currentQuestion.option4: this.onOptionChange(4); this.op4 = true; break
        }
      }else{
        this.op1 = this.op2 = this.op3 = this.op4 = false
      }
    })

  }

  getQuestions(){
    this.testModuleService.currentQuestions.subscribe(res=>{
      this.questions = res
    })
  }

  onOptionChange(num: any){
    var answer = this.answers.find(f => f.id === this.currentQuestion.id)

    this.answers = this.answers.filter(arr => arr !== answer)

    switch(num){
      case 1: this.answers.push({ id: this.currentQuestion.id, answer: this.currentQuestion.option1})
              this.op2 = this.op3 = this.op4 = false; break
      case 2: this.answers.push({ id: this.currentQuestion.id, answer: this.currentQuestion.option2})
              this.op1 = this.op3 = this.op4 = false; break
      case 3: this.answers.push({ id: this.currentQuestion.id, answer: this.currentQuestion.option3})
              this.op1 = this.op2 = this.op4 = false; break
      case 4: this.answers.push({ id: this.currentQuestion.id, answer: this.currentQuestion.option4})
              this.op1 = this.op2 = this.op3 = false; break
    }
    this.updateAnswers()
  }

  updateAnswers(){
    this.testModuleService.updateAnswers(this.answers)
  }

}
