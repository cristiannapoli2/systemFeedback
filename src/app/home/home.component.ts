import { Component, OnInit } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { loginService } from "../servizi/login-service";
import { TokenJWT } from "../model/TokenJWT";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private auth: loginService) {}

  adminAccount!: string;
  
  token!: TokenJWT;
  ngOnInit(): void {
    this.adminAccount = this.auth.currentAccount;
    
    this.token = this.auth.token;
  }
}
