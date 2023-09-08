import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders,} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Account } from '../model/account';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  private isUserLogged = false;
  token!: string;
  uri: string = 'http://localhost:8080';
  currentUser!: string;

  constructor(private http: HttpClient) { }

  loginUser(account:Account): Observable <string>{
    this.currentUser = account.username;
    return this.http.post<string>(`${this.uri}/getLoginToken`, account);
  }

  isUserLoggedin(): boolean {
    if (this.token != undefined){
      this.isUserLogged = true;
    }else{
      this.isUserLogged = false; 
    }
    return this.isUserLogged;
  }
}
