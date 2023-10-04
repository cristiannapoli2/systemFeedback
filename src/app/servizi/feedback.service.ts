import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Feedback } from '../model/feedback';
import { Tag } from '../model/tag';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  uri: string = 'http://localhost:8095'
  uri1: string = 'http://localhost:8094'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
    }),
  };

  constructor(private http:HttpClient) { }

  addFeedback(feedback:Feedback): Observable <string>{
    alert("Add Feed ok!")
    return this.http.post<string>(`${this.uri}/upsertFeedback`, feedback)
  }

  getFeedbacks(page:number): Observable <Feedback[]>{
    return  this.http.get<Feedback[]>(`${this.uri}/getFeedbacks/${page}`)
  }

  deleteFeedback(id:number):Observable<string>{
    return this.http.get<string>(`${this.uri}/deleteFeedback/${id}`)
  }

  getFeedbacksdim():Observable<number>{
    return this.http.get<number>(`${this.uri}/getFeedbacksDim`)
  }

  getFeedback(id:number):Observable <Feedback>{
    return this.http.get<Feedback>(`${this.uri}/getFeedback/${id}`)
  }

  getTags():Observable<Tag[]>{
    return this.http.get<Tag[]>(`${this.uri1}/getTags`)
  }

}
