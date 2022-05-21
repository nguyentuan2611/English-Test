import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  normalranks: any[] = [
    {
      name: "Bu",
      time: "30:00",
      correct: "30/30"
    },
    {
      name: "Bu",
      time: "30:00",
      correct: "30/30"
    },
    {
      name: "Bu",
      time: "30:00",
      correct: "30/30"
    },
    {
      name: "Bu",
      time: "30:00",
      correct: "30/30"
    }
  ];

  constructor() { }

  ngOnInit(): void {

  }




}
