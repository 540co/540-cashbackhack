import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from "./config";

@Injectable()
export class DealService {

  constructor(private http : HttpClient) { }

  getDeals(stores : string[]) {
    return this.http.get(AppConfig.apiBaseUrl + 'deals?store=' + stores.join(","));
  }

}
