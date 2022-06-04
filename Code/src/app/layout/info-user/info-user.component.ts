import { Component, OnInit } from '@angular/core';
import { HistoryService } from 'src/app/shared/service/history.service';
import { LoginService } from 'src/app/shared/service/login.service';

@Component({
  selector: 'app-info-user',
  templateUrl: './info-user.component.html',
  styleUrls: ['./info-user.component.scss']
})
export class InfoUserComponent implements OnInit {
  result:any;
  user:any;
  id:number;
  constructor(private historyService: HistoryService , private loginService: LoginService) {
  this.id = Number(localStorage.getItem('token'))
  }

  ngOnInit(): void {
     this.historyService.getHistory(this.id).subscribe(res => {
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
      this.result = dataRes.data
     });

     this.loginService.getUserById(this.id).subscribe(res => {
      let dataRes = res as {
        resCode: string,
        message: string,
        data: [{
          id: string,
          name: string,
          username: string,
          password: string,
          email: string
        }]
      }
      this.user = dataRes.data;
      console.log(this.user);

     })


  }

}
