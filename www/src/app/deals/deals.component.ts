import { Component, OnInit, Inject } from '@angular/core';
import { Router } from "@angular/router";

import { AppStateService } from "../app-state.service";
import { UserService } from "../user.service";
import { AuthService } from "../auth.service";
import { DealService } from "../deal.service";

import * as moment from 'moment';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss']
})
export class DealsComponent implements OnInit {
  public myDeals:any = [];
  public domains:string[];

  constructor(
    private router : Router,
    @Inject public authService:AuthService,
    @Inject private userService:UserService,
    @Inject private dealService:DealService) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.userService.getUser(this.authService.getCurrentUser())
        .subscribe(res => {

          var domains = res.entities[0].domains;
          console.log("Domains = ", domains);

          this.domains = domains.map(item => {
            return item.domain
          });
          console.log("Domain list = ", this.domains);
        });
    } else {
      this.router.navigate(["/"]);
    }
  }

}
