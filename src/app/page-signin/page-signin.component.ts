import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";
@Component({
  selector: 'app-page-signin',
  templateUrl: './page-signin.component.html',
  styleUrls: ['./page-signin.component.css']
})
export class PageSigninComponent implements OnInit {
  returnUrl: string;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

    if(this.authService.getSession()){
      this.authorized();
    }
  }

  authorized(){
    this.router.navigate([this.returnUrl]);
  }

}
