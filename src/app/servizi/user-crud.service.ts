import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User} from '../model/user';
import { Role } from '../model/role';

@Injectable({
  providedIn: 'root'
})
export class UserCrudService {
  uri: string = 'http://localhost:8096'

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json',
    }), 
  };

  constructor(private http:HttpClient) { }

  addUser(user: User): Observable<string> {
    return this.http.post<string>(`${this.uri}/upsertUser`, user);
  }
  getUsers(page:number): Observable <User[]> {
    return this.http.get<User[]>(`${this.uri}/getUsers/${page}`)
  }
  deleteUser(id:number):Observable<string>{
    return this.http.get<string>(`${this.uri}/deleteUser/${id}`)
  }
  getUser(id:number): Observable <User> {
    return this.http.get<User>(`${this.uri}/getUser/${id}`)
  }

  getUsersDim():Observable<number>{
    return this.http.get<number>(`${this.uri}/getSize`)
  }

  getRoles():Observable<Role[]>{
    return this.http.get<Role[]>(`${this.uri}/getRoles`)
  }

}
