import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { DevDbService } from './utils/data.service';

import { AppComponent } from './app.component';
import {SuiModule} from 'ng2-semantic-ui';

import { Http } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    SuiModule,
    BrowserModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(DevDbService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private http: Http){
    http.get('api/data')
      .toPromise()
      .then(res => res.json().data)
      .then(data => console.log(data));
  }
}
