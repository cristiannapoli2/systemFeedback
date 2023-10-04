import { Component, OnInit } from '@angular/core';
import { Feedback } from '../model/feedback';
import { FeedbackService } from '../servizi/feedback.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Tag } from '../model/tag';
import { TokenJWT } from '../model/TokenJWT';
import { User } from '../model/user';



@Component({
  selector: 'app-form-feedback',
  templateUrl: './form-feedback.component.html',
  styleUrls: ['./form-feedback.component.css']
})
export class FormFeedbackComponent implements OnInit{

  message!: string;
  feedback: Feedback = new Feedback();
  feeds:Feedback[]=[];
  idfeedback!: number;
  tags!:Tag[];
  token :TokenJWT=new TokenJWT();
  user!:User[];
 

  

  constructor(private crud: FeedbackService,private activatedRoute: ActivatedRoute, private router: Router){}
  
  insertFeedback(feedback: Feedback): void {
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
  ngOnInit(): void {

    this.crud.getUsers().subscribe((user: User[]) => {
      this.user = user;
    });

    this.crud.getTags().subscribe((tags: Tag[]) => {
      this.tags = tags;
    });

    this.idfeedback = this.activatedRoute.snapshot.params ['id'];
    this.crud.getFeedback(this.idfeedback).subscribe((feedback:Feedback) =>{
      this.feedback = feedback;
    });
   
  }
}
