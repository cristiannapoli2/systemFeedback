import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from '../model/users';

@Injectable({
  providedIn: 'root'
})
export class UserCrudService {
  uri: string = 'http://localhost:8080'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
    }), 
  };

  constructor(private http:HttpClient) { }

  addUser(user: Users): Observable<string> {
    return this.http.post<string>(`${this.uri}/upsertUser`, user);
  }
  getUsers(id:number): Observable <Users> {
    return this.http.get<Users>(`${this.uri}/getUsers/${id}`)
  }
  deleteUser(id:number):Observable<string>{
    return this.http.get<string>(`${this.uri}/deleteUser/${id}`)
  }
  updateUser(user:Users):Observable<string>{
    return this.http.post<string>(`${this.uri}/upsertUser`, user)
  }
  getUsersDim():Observable<number>{
    return this.http.get<number>(`${this.uri}/getUsersDim`)
  }
}
