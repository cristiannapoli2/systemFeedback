import { Component, OnInit } from "@angular/core";
import { User } from "../model/user";
import { Router } from "@angular/router";
import { loginService } from "../servizi/login-service";
import { TokenJWT } from "../model/TokenJWT";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  message!: string;
  currentAccount!: string;

  ngOnInit(): void {}

  constructor(private auth: loginService, private router: Router) {}

  subscription(user: User): void {
    this.auth.login(user).subscribe((token: TokenJWT) => {
      this.auth.token = token;
      this.auth.isUserLoggedIn();
      // alert(
      //   "Username: " +
      //     this.auth.token.username +
      //     "\n" +
      //     "Role: " +
      //     this.auth.token.role +
      //     "\n" +
      //     "Date: " +
      //     this.auth.token.expDate
      // );
      // alert(this.token.role);
      this.router.navigate(["tabellaFeed"]);
    });
  }

  resetMessage() {
    this.message = "";
  }
  onSubmit() {
    this.subscription(this.user);
    this.auth.isUserLoggedIn();
  }
}
