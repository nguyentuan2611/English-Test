import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private router: Router){}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) {
                console.log(this.hasToken());

    if(!this.hasToken()){
      localStorage.removeItem('token')
      this.router.navigate(['/login'])
      return false
    }

    return true
  }

  hasToken(): boolean{
    const token = localStorage.getItem('token')

    if(token) return true

    return false
  }

}
