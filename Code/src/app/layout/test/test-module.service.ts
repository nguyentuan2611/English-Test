import { question } from './../../shared/model/question.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestModuleService {
  private questions = new BehaviorSubject<question[]>([])
  currentQuestions = this.questions.asObservable();

  constructor() { }

  updateQuestions(questions: question[]) {
    this.questions.next(questions)
    // console.log(this.questions);
  }

  updateAnswer(question: question){
    this.questions.value.find(f => f.id === question.id)
  }
}
