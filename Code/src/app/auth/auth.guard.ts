import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  constructor(private router: Router){}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot) {

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
