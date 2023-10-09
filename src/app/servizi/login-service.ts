import { Injectable, OnInit } from "@angular/core";
import { TokenJWT } from "../model/TokenJWT";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../model/user";

@Injectable({
  providedIn: "root",
})
export class loginService implements OnInit {
  uri: string = "http://localhost:8096";
  isUserLogged=false;
  token!: TokenJWT;
  currentAccount!: string;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  login(user: User): Observable<TokenJWT> {
    this.currentAccount = user.username;
    return this.http.post<TokenJWT>(`${this.uri}/login`, user);
  }

  isUserLoggedIn(): boolean {
    if (this.token != null) {
      this.isUserLogged = true;
      
    } else {
      this.isUserLogged = false;
    }
    return this.isUserLogged;
  }
}
