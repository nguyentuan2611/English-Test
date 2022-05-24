import {HttpClient, HttpHeaders} from '@angular/common/http';
import { catchError } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { user } from '../model/user.model';
import { BaseService } from './base.service';


@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor() { }
}
