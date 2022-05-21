import { question } from './../../../../shared/model/question.model';
import { TestService } from './../../../../shared/service/test.service';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-question',
  templateUrl: './test-question.component.html',
  styleUrls: ['./test-question.component.scss']
})
export class TestQuestionComponent implements OnInit, OnChanges {

  questions: question[] = [];

  currentQuestion!: question;

  constructor(private route: ActivatedRoute,
              private TestService: TestService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);

  }

  ngOnInit(): void {
    this.TestService.getQuestions().subscribe((res: any) =>{
      this.questions = res["data"]
      this.currentQuestion = this.questions[this.route.snapshot.params['index'] - 1]
    })

    console.log(this.currentQuestion);

  }

  async getQuestions(){

  }

}
