import { TestService } from './../../../shared/service/test.service';
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { question } from 'src/app/shared/model/question.model';

@Component({
  selector: 'app-test-process',
  templateUrl: './test-process.component.html',
  styleUrls: ['./test-process.component.scss']
})
export class TestProcessComponent implements OnInit {

  processBar: boolean = true;

  questions: MenuItem[] = [];
  activeItem: MenuItem = {};

  constructor() { }

  ngOnInit(): void {

    this.questions = Array.from({ length: 30 }, (_, i) => ({ label: `Câu ${i+1}`, routerLink: `test-question/${i+1}`}));

    this.activeItem = this.questions[0];

    setTimeout(() => {
      this.processBar = false;
    }, 3000);
  }

}
