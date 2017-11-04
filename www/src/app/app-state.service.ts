import { Injectable } from '@angular/core';

@Injectable()
export class AppStateService {

  public userId:string = null;

  constructor() {
    this.userId = sessionStorage.getItem('auth_userId');
  }

}
