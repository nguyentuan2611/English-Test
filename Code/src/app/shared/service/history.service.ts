import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryService  extends BaseService {
  private _sharedHeaders = new HttpHeaders();

  constructor(private http: HttpClient) {
    super();
    this._sharedHeaders = this._sharedHeaders.set(
        "Content-Type",
        "application/json"
    );
  }

  getHistory(id:number){
    return this.http.post(`${environment.apiUrl}/getListResult?id=${id}`, { headers: this._sharedHeaders })
    .pipe(catchError(this.handleError));
  }
}
