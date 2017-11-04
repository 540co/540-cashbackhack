import { Component, OnInit, Inject } from '@angular/core';

import { ActivatedRoute, Router } from "@angular/router";

import { AppStateService } from "../app-state.service";
import { AuthService } from "../auth.service";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  private sub:any;

  constructor(
    private route : ActivatedRoute,
    private router : Router,
    @Inject private authService : AuthService) { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.authService.login(params.email);

        console.log('Params: ', params);

        this.router.navigate(['/my-deals']);
      });
  }

}
