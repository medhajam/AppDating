import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router) { }

  ngOnInit() {

  }
login() {
// tslint:disable-next-line: max-line-length
this.authService.Login(this.model).subscribe(next => {
  this.alertify.success('Success'); 
}, error => {
  this.alertify.error('Erruer authentification'); 
}, () => {
this.router.navigate(['/members']);
});
}
loggedIn(){
  return ! !localStorage.getItem('token');
}
logOut() {
  localStorage.removeItem('token');
  this.alertify.message('Vous êtes déconnecté');
  this.router.navigate(['/home']);
}
}
