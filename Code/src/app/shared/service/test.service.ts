import { question } from './../model/question.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class TestService extends BaseService {

  private _sharedHeaders = new HttpHeaders();
  constructor(private http: HttpClient) {
      super();
      this._sharedHeaders = this._sharedHeaders.set(
          "Content-Type",
          "application/json"
      );
  }

  getQuestions(){
    return this.http.get(`${environment.apiUrl}/getListQuestion`, { headers: this._sharedHeaders })
        .pipe(catchError(this.handleError));
  }

}
