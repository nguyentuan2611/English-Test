import { Component, HostListener, OnInit } from '@angular/core';
import { RankingService } from 'src/app/shared/service/ranking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
   score: any []

  constructor(private rankingservice: RankingService) {
    this.score = []
  }

  ngOnInit(): void {
    this.getRank();
  }

  getRank () {
    this.rankingservice.getScore().subscribe(res => {
      let dataRes = res as {
        resCode: string,
        message: string,
        data: [{
          id: string,
          name: string,
          time: string,
          score: string
      }]
    }
    let score = dataRes.data
    score.forEach(element => {
      this.score.push({
        name: element.name,
        time: element.time,
        score: element.score
      })
      console.log(this.score)
    });

    })
  }
}
