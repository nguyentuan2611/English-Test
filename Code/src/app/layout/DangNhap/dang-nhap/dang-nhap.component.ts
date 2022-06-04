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
  isBoolean ;

  constructor(private loginService: LoginService, private route: Router,  private fb:FormBuilder) {
    this.isBoolean = true;
  }

  ngOnInit(): void {
  }

  public login(){

    this.loginService.login(this.inforUser.value).subscribe(res => {
      let dataRes = res as {
        resCode: string,
        message: string,
        data:{
          id:string,
          userName: string,
          fullName: string
        }
      }

      if(dataRes.resCode == "SUCCESS"){
        localStorage.setItem('token', dataRes.data.id)
      localStorage.setItem('fullname', dataRes.data.fullName)

      this.loginEvent.emit(dataRes.data.fullName);

      this.route.navigate(['/test'])
      }
      else{
        this.isBoolean = false;
      }

    },err => console.log(err));
  }
}
