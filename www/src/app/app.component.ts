import { Component, Inject, OnInit } from '@angular/core';

import { AuthService } from "./auth.service";

import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  searchModel:any = {};
  constructor(
    private router : Router,
    @Inject public authService:AuthService) {}

  ngOnInit() {
    this.searchInput = new FormControl('', Validators.required);
    this.searchForm = new FormGroup({
      searchInput: this.searchInput
    });
  }

  onSubmitSearch() {
    this.router.navigate(["/stores", this.searchModel.domain, "deals"]);
  }
}
