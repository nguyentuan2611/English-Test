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
  }
}
