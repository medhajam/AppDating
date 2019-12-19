import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {

  }
login() {
this.authService.Login(this.model).subscribe(next => {console.log('Success'); }, error => {console.log('Erruer authentification'); });
}
loggedIn(){
  return ! !localStorage.getItem('token');
}
logOut() {
  localStorage.removeItem('token');
}
}
