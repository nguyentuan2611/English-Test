import { Component, HostListener, OnInit } from '@angular/core';
import { LoginService } from '../shared/service/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  public isLogin = false;
  mediaWidth: any;


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.mediaWidth = window.innerWidth;
  }

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.mediaWidth = window.innerWidth;

    this.checkLogin();

  }

  logout(){
    localStorage.removeItem('token')
  }

  checkLogin(){
    console.log( this.loginService.getUserLogin());
    if(this.loginService.getUserLogin().fullName == ''){
      console.log( 'no user is login ');
      this.isLogin = false;
    }
    else{
      console.log( ' user is login');
      this.isLogin = true;
    }
  }

}
