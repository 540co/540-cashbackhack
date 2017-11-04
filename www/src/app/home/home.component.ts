import { Component, OnInit, Inject } from '@angular/core';
import { AppConfig } from "../config";
import { Location } from "@angular/common";
import { Router } from "@angular/router";

import { AppStateService } from "../app-state.service";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public oauthUrl:string = AppConfig.oauthUrl;

  constructor(
    private location : Location,
    private router : Router,
    @Inject private authService : AuthService) { }

  ngOnInit() {
    console.log("Current user = ", this.authService.getCurrentUser());
    if (this.authService.isLoggedIn()) {
      this.router.navigate(["/my-deals"]);
    }
  }

  getOAuthUrl() {
    var currentUrl = new URL(window.location.href);
    return AppConfig.oauthUrl + "?redirect_url=" +
      currentUrl.protocol + "//" + currentUrl.hostname +
      (currentUrl.port ? ":" + currentUrl.port : "") +
      this.location.prepareExternalUrl("auth/");
  }

}
