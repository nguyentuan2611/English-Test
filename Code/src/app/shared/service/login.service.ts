import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from '../model/user.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {
    private _sharedHeaders = new HttpHeaders();
    public user = {
      id : '',
      username : '',
      fullName : '',
    };
    constructor(private http: HttpClient) {
        super();
        this._sharedHeaders = this._sharedHeaders.set(
            "Content-Type",
            "application/json"
        );
    }
    login (user: user){
      return this.http.post(`${environment.apiUrl}/checkLogin`, user, { headers: this._sharedHeaders })
        .pipe(catchError(this.handleError));
    }

    getUserById(id: number){
      return this.http.post(`${environment.apiUrl}/getUserById?id=${id}`, { headers: this._sharedHeaders })
    .pipe(catchError(this.handleError));
    }
}

