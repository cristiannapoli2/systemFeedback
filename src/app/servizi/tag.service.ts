import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tag } from '../model/tag';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  uri: string = 'http://localhost:8094'
  uri1: string = 'http://localhost:8095'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
    }), 
  };

  constructor(private http:HttpClient) { }
  
  addTag(tag: Tag): Observable<string> {
    alert("Add Tag ok!")
    return this.http.post<string>(`${this.uri}/upsertTag`, tag); 
  }
  
  getTags(page:number): Observable <Tag[]> {
    return this.http.get<Tag[]>(`${this.uri}/getTags/${page}`)
  }
 
  deleteTag(id:number):Observable<string>{
    return this.http.get<string>(`${this.uri}/deleteTag/${id}`)
  }
  getTagsDim():Observable<number>{
    return this.http.get<number>(`${this.uri}/getSize`)
  }

  getTag(id:number): Observable <Tag> {
    return this.http.get<Tag>(`${this.uri}/getTag/${id}`)
  }

  getTagsFeed():Observable<Tag[]>{
    return this.http.get<Tag[]>(`${this.uri}/getTags`)
  }

  
}