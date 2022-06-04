import { Component, Input, OnInit } from '@angular/core';
import { faClock, faHome, faUndo, faShare, faAward } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.scss']
})
export class TestResultComponent implements OnInit {
  @Input() result!: { numCorrect: number, numRank: number, scores: string, time: string }

  resultTitle = ''

  timeIcon = faClock
  scoreIcon = faAward
  backIcon = faUndo
  homeIcon = faHome
  shareIcon = faShare

  correctPercent = 0

  processFormat = (percent: number): string => `${this.result.numCorrect} Correct answer`;

  constructor() { }

  ngOnInit(): void {
    console.log(this.result);
    this.result.numRank == 0 ? this.resultTitle = `This result is not your best!! try harder next time`
      : this.resultTitle = `Congratulation!! You have reached top ${this.result.numRank}`
    this.correctPercent = this.result.numCorrect / 30 * 100
  }

}
