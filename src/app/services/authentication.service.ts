import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
  private apiUrl = '/api/users';
  constructor(private http:Http) {

  }

  setSession(user){
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  }

  getSession(){
    let user = JSON.parse(localStorage.getItem('user'));
    return user;
  }

  clearSession(){
    localStorage.removeItem('user')
  }

  login(login: string, password: string) {
    return this.http.get(this.apiUrl + `?login=${login}&password=${password}`)
      .map((res: Response) => {
        let data = res.json().data;
        if (!data || !data.length) {
          throw new Error('User not found');
        }
        return this.setSession(data)
      });

  }

  logout() {
    localStorage.removeItem('user');
  }
}
