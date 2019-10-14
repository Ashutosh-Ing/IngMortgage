import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  authenticated: boolean = false;

  httpClient: HttpClient;

  token: string = '';

  constructor(private http: HttpClient) {
    this.httpClient = http;
  }

  login(userName, password) {
    console.log('Auth service Login');

    let login = this.httpClient.post(environment.apiUrl + '/login/getToken', {
      username: userName,
      password: password
    });

    return login;
  }

  isAuthenticated() {
    return this.authenticated;
  }
}
