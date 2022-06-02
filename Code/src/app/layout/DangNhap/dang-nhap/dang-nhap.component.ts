import { user } from './../../../shared/model/user.model';
import { Component, OnInit } from '@angular/core';
import { LoginService} from '../../../shared/service/login.service';
import { Router } from '@angular/router';
import { EventEmitter }  from 'events';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {
  loginEvent = new EventEmitter
  public user: user = new user;
  constructor(private loginService: LoginService ,private route: Router ) {

   }

  ngOnInit(): void {
  }

  public login(){
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
      localStorage.setItem('fullname', dataRes.data.fullName)

      this.loginEvent.emit(dataRes.data.fullName);

      this.route.navigate(['/test'])



    },err => console.log(err));
  }
}
