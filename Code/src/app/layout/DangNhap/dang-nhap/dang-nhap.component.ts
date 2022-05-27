import { user } from './../../../shared/model/user.model';
import { Component, OnInit } from '@angular/core';
import { LoginService} from '../../../shared/service/login.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
      this.loginService.setUserLogin(dataRes.data);
      console.log(this.loginService.getUserLogin());
      this.router.navigate(['/']);
    },err => console.log(err));

  }
}
