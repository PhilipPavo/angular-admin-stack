import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

import {NgForm} from '@angular/forms';

@Component({
  selector: 'form-signin',
  templateUrl: './form-signin.component.html',
  styleUrls: ['./form-signin.component.css']
})
export class FormSigninComponent implements OnInit {
  @Output() authorized:EventEmitter<string> = new EventEmitter();
  constructor(private authService: AuthenticationService) {}

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.authService.login(form.value.login, form.value.password) .subscribe(
      user => {
        this.authorized.emit('success');
      },
      error => {
        console.error(error);
      });
  }
}
