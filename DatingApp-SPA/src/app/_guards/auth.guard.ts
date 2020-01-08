import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private alert: AlertifyService, private auhService: AuthService) {}
  canActivate(): boolean {
    if (this.auhService.LoggedIn()) {
      return true;
    }
    this.alert.error('Veuillez vous connercter');
    this.router.navigate(['']);
    return false;
  }
}
