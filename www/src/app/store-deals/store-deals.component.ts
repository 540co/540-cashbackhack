import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-store-deals',
  templateUrl: './store-deals.component.html',
  styleUrls: ['./store-deals.component.scss']
})
export class StoreDealsComponent implements OnInit {
  domain:string;

  constructor(
    private route : ActivatedRoute,
    private router : Router) { }

  ngOnInit() {
    this.sub = this.route
      .params
      .subscribe(params => {
        this.domain = params.storeId
      });
  }

}
