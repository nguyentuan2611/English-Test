import { lastValueFrom } from 'rxjs';
import { Component, HostListener, OnInit } from '@angular/core';
import { RankingService } from 'src/app/shared/service/ranking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
   score: any[]

  constructor(private rankingservice: RankingService) {
    this.score = []
  }

  async ngOnInit(){
    await this.getRank();
    console.log(this.score);
  }

  async getRank () {

    this.score = []

    const res: any = await lastValueFrom(this.rankingservice.getScore())
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
    this.score = dataRes.data
  }
}
