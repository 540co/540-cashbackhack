import { Component, OnInit, Input, Inject, OnChanges  } from '@angular/core';

import { DealService } from "../deal.service";

@Component({
  selector: 'app-deals-list',
  templateUrl: './deals-list.component.html',
  styleUrls: ['./deals-list.component.scss']
})
export class DealsListComponent implements OnInit, OnChanges  {
  public myDeals:any = [];
  public loading = true;
  @Input("domains") domains:string[] = [];

  constructor(
    @Inject private dealService:DealService) { }

  ngOnInit() {

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("Deal list domains = ", this.domains);
    this.loading = true;
    this.myDeals = [];
    if (this.domains && this.domains.length > 0) {
      this.dealService.getDeals(this.domains)
        .subscribe(dealsRes => {
          this.myDeals = this.combineDeals(dealsRes);
          this.loading = false;
          console.log(this.myDeals);
        });
    }
  }

  combineDeals(deals) {
    var allDeals = [];

    for (var i = 0, len = deals.coupons.length; i < len; i++) {
      var item = deals.coupons[i];
      if (item.app == "honey") {
        for (var j = 0, jlen = item.coupons.length; j < jlen; j++) {
          var deal = item.coupons[j];
          if (deal.visible) {
            deal.name = item.name;
            deal.app = item.app;
            deal.dealType = "coupon";

            if (deal.expires) {
              deal.expires = new Date(deal.expires * 1000).toISOString();
            }

            allDeals.push(deal);
          }
        }

      } else if (item.app == "ebates") {
        item.dealType = "coupon";
        allDeals.push(item);
      }
    }

    for (var i = 0, len = deals.cashback.length; i < len; i++) {
      var deal = deals.cashback[i];
      deal.dealType = "cashback";
      deal.app = "ebates";
      allDeals.push(deal);
    }

    return allDeals;
  }

}
