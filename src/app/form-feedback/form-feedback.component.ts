import { Component, OnInit } from "@angular/core";
import { Feedback } from "../model/feedback";
import { FeedbackService } from "../servizi/feedback.service";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from "../model/user";
import { Tag } from "../model/tag";
import { TokenJWT } from "../model/TokenJWT";

import { loginService } from "../servizi/login-service";

@Component({
  selector: "app-form-feedback",
  templateUrl: "./form-feedback.component.html",
  styleUrls: ["./form-feedback.component.css"],
})
export class FormFeedbackComponent implements OnInit {
  token!: TokenJWT;
  message!: string;
  feedback: Feedback = new Feedback();
  feeds: Feedback[] = [];
  idfeedback!: number;
  tags: Tag[] = [];
  users: User[] = [];
  adminAccount!: string;
  

  constructor(
    private crud: FeedbackService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private auth: loginService
  ) {}

  ngOnInit(): void {
    this.adminAccount = this.auth.currentAccount;
    this.crud.getUsers().subscribe((users: User[]) => {
      this.users = users;
    });
    
    

    this.crud.getTags().subscribe((tags: Tag[]) => {
      this.tags = tags;
    });
    
    this.token = this.auth.token;
   
    this.feedback.sentBy = this.token.username;
    this.idfeedback = this.activatedRoute.snapshot.params["id"];
    this.crud.getFeedback(this.idfeedback).subscribe((feedback: Feedback) => {
      this.feedback = feedback;
    });
  }

  // insertFeedback(feedback: Feedback): void {
  //   this.crud.addFeedback(feedback).subscribe((message: string) => {
  //     this.message = message;
  //   });
  // }
  
  getFeedback(id: number): any {
    this.crud.getFeedback(id).subscribe((feedObs: Feedback) => {
      this.feedback = feedObs;
    });
  }

  onSearch(): void {
    this.feedback = this.getFeedback(this.feedback.id);
    this.token = this.auth.token;
  }

  resetMessage(): void {
    this.message = "";
  }

  onSubmit(): void {
    if (this.feeds.length == null) {
      this.crud.addFeedback(this.feedback).subscribe((message: string) => {
        this.message = message;
        this.router.navigate(["tabellaFeed"]);
      });
      this.feedback = new Feedback();
    } else {
      this.crud.addFeedback(this.feedback).subscribe((message: string) => {
        this.message = message;
        this.router.navigate(["tabellaFeed"]);
      });
      this.feedback = new Feedback();
    }
  }
}
