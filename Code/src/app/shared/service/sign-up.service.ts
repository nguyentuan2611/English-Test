import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { user } from '../model/user.model';
import { BaseService } from './base.service';


@Injectable({
  providedIn: 'root'
})
export class SignUpService  extends BaseService {

  private _sharedHeaders = new HttpHeaders();
  public data = [];
  constructor(private http: HttpClient) {
    super();
    this._sharedHeaders = this._sharedHeaders.set(
        "Content-Type",
        "application/json"
    );
  }

  signUp(user: user){
    return this.http.post(`${environment.apiUrl}/register`, user, { headers: this._sharedHeaders })
      .pipe(catchError(this.handleError));
  }
}
