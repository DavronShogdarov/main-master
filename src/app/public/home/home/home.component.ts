import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  authStatus: boolean = false;
  adminStatus: boolean = false;
  userStatus: boolean = false;
  constructor(public authService: AuthService, private locationSt: LocationStrategy) {}

  ngOnInit(): void {
    this.authService.getToken();

    this.authService.getAuthListener().subscribe((data) => {
      this.authStatus = data;
    });

    this.authService.decodedToken().roles.includes('ADMIN')
      ? (this.adminStatus = true)
      : (this.adminStatus = false);

    this.authService.decodedToken().roles.includes('USER')
      ? (this.userStatus = true)
      : (this.userStatus = false);


    this.preventBackButton();
  }

  preventBackButton() {
    history.pushState(null, location.href);
    this.locationSt.onPopState(() => {
      history.pushState(null, location.href)
    })
  }

  logout() {
    this.authService.logout();
  }


}
