import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppConfig } from "./config";

@Injectable()
export class UserService {

  constructor(private http : HttpClient) { }

  getUser(userId:string) {
    return this.http.get(AppConfig.dataStoreUrl + 'users/' + userId);
  }

}
