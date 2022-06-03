import { question } from './../../shared/model/question.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestModuleService {
  private questions = new BehaviorSubject<question[]>([])
  private answers = new BehaviorSubject([])
  private result = new BehaviorSubject({})
  currentQuestions = this.questions.asObservable();
  currentAnswers = this.answers.asObservable();
  currentResult = this.result.asObservable();

  constructor() { }

  updateQuestions(questions: question[]) {
    this.questions.next(questions)
  }

  updateAnswers(answers: any){
    this.answers.next(answers)
  }

  updateResult(result: any) {
    this.result.next(result)
  }

}
