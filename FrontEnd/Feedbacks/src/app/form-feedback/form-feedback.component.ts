import { Component } from '@angular/core';
import { Feedback } from '../model/feedback';
import { FeedbackService } from '../servizi/feedback.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-form-feedback',
  templateUrl: './form-feedback.component.html',
  styleUrls: ['./form-feedback.component.css']
})
export class FormFeedbackComponent {

  message!: string;
  feedback: Feedback = new Feedback();
  feeds:Feedback[]=[]
  idfeedback!: number;

  constructor(private crud: FeedbackService,private activatedRoute: ActivatedRoute, private router: Router){}


  ngOnInit(): void {
    this.idfeedback = this.activatedRoute.snapshot.params ['id'];
    this.crud.getFeedback(this.idfeedback).subscribe((feedback:Feedback) =>{
      this.feedback = feedback;
    });
  }

  insertTag(feedback: Feedback): void {
    this.crud.addFeedback(feedback).subscribe((message: string) => {
      this.message = message;
    });
  }

  getFeedback(id: number): any{
    this.crud.getFeedback(id).subscribe(( feedObs: Feedback) => {this.feedback = feedObs})
  }

  onSearch(): void {
    this.feedback = this.getFeedback(this.feedback.id);
  }

  resetMessage(): void{
    this.message = "";
  }

  onSubmit(): void {
    if(this.feeds.length==null){
      this.crud.addFeedback(this.feedback).subscribe((message:string)=>{
        this.message=message;
        this.router.navigate(["tabellaFeed"]);
      });
      this.feedback = new Feedback();
    }
    else{
      this.crud.addFeedback(this.feedback).subscribe((message:string)=>{
        this.message=message;
        this.router.navigate(["tabellaFeed"]);
      })
      this.feedback = new Feedback();
    }

  }
}
