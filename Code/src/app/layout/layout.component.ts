import { Router } from '@angular/router';
import { Component, HostListener, OnInit } from '@angular/core';
import { LoginService } from '../shared/service/login.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isLogin: boolean = false;
  fullname: string = '';
  mediaWidth: any;


  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.mediaWidth = window.innerWidth;
  }

  constructor(private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit() {
    this.mediaWidth = window.innerWidth;

    this.checkLogin();

  }

  logout(){
    localStorage.removeItem('token')
    this.router.url === '/' ? this.router.navigate(['/login']) : this.router.navigate(['/'])
  }
  infoUser(){
    this.router.url === '/' ? this.router.navigate(['/infoUser']) : this.router.navigate(['/'])
  }

  checkLogin(){
    const token = localStorage.getItem('token')
    const name: any = localStorage.getItem('fullname')

    token ? this.isLogin = true : this.isLogin = false
    token ? this.fullname = name : {}
  }

}
