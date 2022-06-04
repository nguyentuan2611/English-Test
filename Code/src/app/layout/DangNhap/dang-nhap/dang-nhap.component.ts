import { user } from './../../../shared/model/user.model';
import { Component, OnInit } from '@angular/core';
import { LoginService} from '../../../shared/service/login.service';
import { Router } from '@angular/router';
import { EventEmitter }  from 'events';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-dang-nhap',
  templateUrl: './dang-nhap.component.html',
  styleUrls: ['./dang-nhap.component.scss']
})
export class DangNhapComponent implements OnInit {
  loginEvent = new EventEmitter
  public user: user = new user;

  inforUser = this.fb.group({
    "userName": ["",[Validators.required]],
    "password": ["",[Validators.required, Validators.minLength(6)]]
  })

  isSpinning = false;
  loginSuccess = false;

  constructor(private loginService: LoginService,
              private route: Router,
              private fb:FormBuilder) {}

  ngOnInit(): void {
  }

  public login(){
    this.isSpinning = true

    this.loginService.login(this.inforUser.value).subscribe(res => {
      let dataRes = res as {
        resCode: string,
        message: string,
        data:{
          id:string,
          userName: string,
          fullName: string,
          password: string,
          email: string
        }
      }

      if(dataRes.message == "Login success!"){
        localStorage.setItem('token', dataRes.data.id)
        localStorage.setItem('fullname', dataRes.data.fullName)
        localStorage.setItem('userName', dataRes.data.userName)
        localStorage.setItem('password', dataRes.data.password)
        localStorage.setItem('email', dataRes.data.email)

        this.loginEvent.emit(dataRes.data.fullName);

        setTimeout(() => {
          this.route.navigate(['/test'])
          this.isSpinning = false
        }, 3000);
      }
      else{
        this.loginSuccess = true;
        this.isSpinning = false;
      }

    });
  }
}
