import { Component, OnInit} from '@angular/core';
import { Feedback } from '../model/feedback';
import { FeedbackService } from '../servizi/feedback.service';
import { loginService } from '../servizi/login-service';
import { TokenJWT } from '../model/TokenJWT';

@Component({
  selector: 'app-tab-feedback',
  templateUrl: './tab-feedback.component.html',
  styleUrls: ['./tab-feedback.component.css']
})
export class TabFeedbackComponent implements OnInit{
  feedbacks: Feedback[] = [];
  message!: string;
  token!: TokenJWT;
  page!:number;
  nPagine!:number;
  

  constructor(private crud: FeedbackService, private auth: loginService){}


  ngOnInit(): void {
    this.token = this.auth.token;
    this.page = 0;
    this.getFeedImp(this.page);
  }

  getFeedbacks(): void {
    this.crud.getFeedbacks(this.page).subscribe((feedbacks: Feedback[]) => {
      this.feedbacks = feedbacks;
    });
  }
  
  getFeedImp(page:number): void{
    this.crud.getFeedbacksdim().subscribe((dim:number)=>{
      this.nPagine = Math.round(dim/5);
    })
    if(page<0){
      this.page = 0;
    }
    else if(page>this.nPagine){
      this.page = this.nPagine;
    }
    else{
      this.page = page;
    }
    this.crud.getFeedbacks(this.page).subscribe((feedbacks:Feedback[])=>{
      this.feedbacks = feedbacks;
      this.message = "";
    })
    if(this.feedbacks.length==0){
      this.nPagine = this.nPagine-1;
    }
  }
  
}
