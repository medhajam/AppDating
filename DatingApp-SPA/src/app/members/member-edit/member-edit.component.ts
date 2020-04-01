import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { User } from 'src/app/_models/user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from 'src/app/_services/alertify.service';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/_services/user.service';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrls: ['./member-edit.component.css']
})
export class MemberEditComponent implements OnInit {
user: User;
@ViewChild('editForm', {static: true}) editform: NgForm;
@HostListener('window:beforeunload', ['$event'])
unloadNotification($event: any){
  if (this.editform.dirty) {
    $event.returnValue = true;
  }
}

  // tslint:disable-next-line: max-line-length
  constructor(private route: ActivatedRoute, private alertify: AlertifyService, private userService: UserService, private auth: AuthService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {this.user = data['user']; });
  }
Enregistrer() {
  // tslint:disable-next-line: max-line-length
  this.userService.UpdateUser(this.auth.decryptedToken.nameid, this.user).subscribe(next => {this.alertify.success('Toutes vos modifications ont été enregistrées !!');
                                                                                             this.editform.reset(this.user); },
  error => { this.alertify.error(error); });
}
}
