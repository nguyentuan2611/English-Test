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
export class TestQuestionComponent implements OnInit, OnChanges {

  questionIndex: any;

  questions: question[] = [];

  currentQuestion: question = new question;

  op1: boolean = false;
  op2: boolean = false;
  op3: boolean = false;
  op4: boolean = false;

  constructor(private activeRoute: ActivatedRoute,
              private router:  Router,
              private testService: TestService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

 async ngOnInit() {

    this.questionIndex = this.activeRoute.snapshot.params['index']

    await this.getQuestions();

    this.currentQuestion = this.questions[this.questionIndex - 1]

  }

  onOptionChange(num: any){
    switch(num){
      case 1: this.op2 = this.op3 = this.op4 = false; break
      case 2: this.op1 = this.op3 = this.op4 = false; break
      case 3: this.op1 = this.op2 = this.op4 = false; break
      case 4: this.op1 = this.op2 = this.op3 = false; break
    }
  }

  async getQuestions(){
    const data: any = await lastValueFrom(this.testService.getQuestions());

    this.questions = data['data'];
  }

}
