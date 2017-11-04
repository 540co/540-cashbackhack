import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  isLoggedIn () {
    return !!this.getCurrentUser();
  }

  getCurrentUser () {
    return sessionStorage.getItem("auth_userId");
  }

  login(userId) {
    console.log("Saving user id in session store = ", userId);
    sessionStorage.setItem("auth_userId", userId);
  }

  logout() {
    sessionStorage.removeItem("auth_userId");
  }

}
