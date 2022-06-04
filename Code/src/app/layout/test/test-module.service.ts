import { question } from './../../shared/model/question.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestModuleService {
  private questions = new BehaviorSubject<question[]>([])
  private answers = new BehaviorSubject([])
  currentQuestions = this.questions.asObservable();
  currentAnswers = this.answers.asObservable();

  constructor() { }

  updateQuestions(questions: question[]) {
    this.questions.next(questions)
  }

  updateAnswers(answers: any){
    this.answers.next(answers)
  }

}
