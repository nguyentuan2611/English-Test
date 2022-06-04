import { LoginService } from './../../shared/service/login.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from 'src/app/shared/model/user.model';
import { SignUpService } from 'src/app/shared/service/sign-up.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dangky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.scss']
})
export class DangkyComponent implements OnInit {
  public user: user = new user;

  inforUser = this.fb.group({
    "fullName": ["",[Validators.required]],
    "userName": ["",[Validators.required]],
    "email": ["",[Validators.required, Validators.email]],
    "password": ["",[Validators.required, Validators.minLength(6)]],
  })
  isBoolean :boolean;

  constructor(private signUpService: SignUpService , private router: Router, private fb:FormBuilder) {
    this.isBoolean = true;
  }

  ngOnInit(): void {
  }

  signUp(){

    this.inforUser.value;
    this.signUpService.signUp(this.inforUser.value).subscribe(res => {
      let dataRes = res as {
        resCode: string,
        message: string,
        data:{
          userName: string,
          fullName: string
        }
      }


      if(dataRes.resCode == 'S001'){
        alert(dataRes.message);
        this.router.navigate(['/login']);
      }
      else if(dataRes.resCode == 'D001'){
        this.isBoolean = false;
      }

    },err => console.log(err));
  }
}
