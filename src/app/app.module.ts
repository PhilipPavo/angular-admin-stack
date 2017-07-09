import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DevDbService } from './utils/data.service';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import {SuiModule} from 'ng2-semantic-ui';
//
import { AuthGuard } from './guards/index';
// Services
import {AuthenticationService} from './services/authentication.service'
import {AlertService} from "./utils/alert.service";

// Pages
import { PageHomeComponent } from './page-home/page-home.component';
import { PageSigninComponent } from './page-signin/page-signin.component';
import { FormSigninComponent } from './page-signin/form-signin/form-signin.component';
import { AlertComponent } from './alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageSigninComponent,
    FormSigninComponent,
    AlertComponent
  ],
  imports: [
    FormsModule,
    SuiModule,
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(DevDbService),
    routing
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){

  }
}
