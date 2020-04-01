import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/user';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {
baseUrl = environment.apiUrl;
constructor(private http: HttpClient) { }

GetUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl + 'users');
}

GetUser(id): Observable<User> {
  return this.http.get<User>(this.baseUrl + 'users/' + id);
}
UpdateUser(id: number, user: User){
  return this.http.put(this.baseUrl + 'users/' + id, user);
}
}
