import { Component, OnInit, Inject } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from "../auth.service";

@Component({
  selector: 'app-signout',
  templateUrl: './signout.component.html',
  styleUrls: ['./signout.component.scss']
})
export class SignoutComponent implements OnInit {

  constructor(
    private router:Router,
    @Inject private authService : AuthService) { }

  ngOnInit() {
    this.authService.logout();
    this.router.navigate(["/"]);
  }

}
