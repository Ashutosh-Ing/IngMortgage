import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ing-app';

  constructor(private loginService: LoginService) {

  }

  isUserLogin() {
    this.loginService.authenticated;
  }

  onLogout() {
    this.loginService.authenticated = false;
  }
}
