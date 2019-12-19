import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};
  @Output() CancelRegistration = new EventEmitter();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

Register() {
this.authService.Register(this.model).subscribe(() => {console.log('Success'); }, error => {console.log(error); });
}

Cancel() {
this.CancelRegistration.emit(false);
}

}
