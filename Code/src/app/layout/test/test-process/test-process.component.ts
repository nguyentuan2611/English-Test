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

  processBar: boolean = false;
  countdownConfig = {
    leftTime: 30*60,
    demmand: true,
    format: 'mm:ss'
  }

  questions: MenuItem[] = [];
  activeItem: MenuItem = {};

  constructor( private testService: TestService,
                private router: Router) { }

  ngOnInit(): void {

    this.questions = Array.from({ length: 30 }, (_, i) => ({
      label: `Quiz ${i+1}`,
      routerLink: ['test-question', i+1],

    }));

    this.activeItem = this.questions[0];

    setTimeout(() => {
      this.processBar = false;
    }, 3000);
  }

}
