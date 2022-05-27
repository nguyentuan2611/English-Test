import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { user } from 'src/app/shared/model/user.model';
import { SignUpService } from 'src/app/shared/service/sign-up.service';

@Component({
  selector: 'app-dangky',
  templateUrl: './dang-ky.component.html',
  styleUrls: ['./dang-ky.component.scss']
})
export class DangkyComponent implements OnInit {
  public user: user = new user;
  constructor(private signUpService: SignUpService , private router: Router) { }

  ngOnInit(): void {
  }

  signUp(){

    this.signUpService.signUp(this.user).subscribe(res => {
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
        alert(dataRes.message);
      }
    },err => console.log(err));
  }

}
