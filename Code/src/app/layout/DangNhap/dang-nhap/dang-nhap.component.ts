import { user } from './../../../shared/model/user.model';
import { Component, OnInit } from '@angular/core';
import { LoginService} from '../../../shared/service/login.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
imports: [
  FormsModule
]
@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {
  public user: user = new user;
  constructor(private loginService: LoginService ,private router: Router ) {

   }

  ngOnInit(): void {
  }

  public login(){
    localStorage.setItem('token', 'hihi')

    this.loginService.login(this.user).subscribe(res => {
      let dataRes = res as {
        resCode: string,
        message: string,
        data:{
          id:string,
          userName: string,
          fullName: string
        }
      }

      localStorage.setItem('token', dataRes.data.id)

      const token: any = localStorage.getItem('token')

      console.log(token);


    },err => console.log(err));
  }
}
