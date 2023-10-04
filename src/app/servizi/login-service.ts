import { Injectable } from "@angular/core";
import { TokenJWT } from "../model/TokenJWT";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../model/user";

@Injectable({
  providedIn: "root",
})
export class loginService {
  uri: string = "http://localhost:8096";
  private isUserLogged = false;
  token!: TokenJWT;
  currentAccount!: string;
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };

  constructor(private http: HttpClient) {}

  login(user: User): Observable<TokenJWT> {
    return this.http.post<TokenJWT>(
      `${this.uri}/login`,
      user,
      this.httpOptions
    );
  }

  isUserLoggedIn(): boolean {
    if (this.token != undefined) {
      this.isUserLogged = true;
    } else {
      this.isUserLogged = false;
    }
    return this.isUserLogged;
  }
}
