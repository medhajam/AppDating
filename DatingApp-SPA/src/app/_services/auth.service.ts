import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
 
export class AuthService {
baseUrl: any = 'http://localhost:55245/api/Auth/';
jwthelper = new JwtHelperService();
decryptedToken: any;
constructor(private http: HttpClient) {}


Login(model: any) {
return  this.http.post(this.baseUrl + 'login', model).pipe(
        map((response: any) => {const user = response;
                                if (user) {
                                  localStorage.setItem('token', user.token);
                                  this.decryptedToken = this.jwthelper.decodeToken( user.token);
                                }
        })
        );
      }

LoggedIn() {
  const token = localStorage.getItem('token');
  return !this.jwthelper.isTokenExpired(token);
}

  Register(model: any) {
  return  this.http.post(this.baseUrl + 'register', model);
  }
}
