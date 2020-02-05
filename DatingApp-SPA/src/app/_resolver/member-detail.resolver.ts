import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { User } from '../_models/user';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()

export class MemberDetailsResolver implements Resolve<User> {

    constructor(private userservive: UserService,
                private router: Router, private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        return this.userservive.GetUser(route.params['id']).pipe(
            catchError(error => 
                {
                 this.alertify.error(error);
                 this.router.navigate(['/members']);
                 return of(null);
                }
                ));
    }

}