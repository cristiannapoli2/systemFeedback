import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TokenJWT } from './model/TokenJWT';
import { loginService } from './servizi/login-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'System Feedback';
  currentPage: string = '';
  risultatoLogin:boolean=true;
  adminAccount!: string;
  token!: TokenJWT;

  constructor(private router: Router, private auth: loginService) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentPage = event.url;
      }
    });
    this.adminAccount = this.auth.currentAccount;
    this.token = this.auth.token;
    // this.risultatoLogin=this.auth.isUserLoggedIn();
    
    
  }
}
