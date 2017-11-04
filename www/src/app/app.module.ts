import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { RouterModule, Routes } from '@angular/router';
import { DealsComponent } from './deals/deals.component';
import { StoresComponent } from './stores/stores.component';

import { AppStateService } from "./app-state.service";
import { AuthService } from "./auth.service";
import { UserService } from "./user.service";
import { DealService } from "./deal.service";
import { AuthComponent } from './auth/auth.component';

import { MomentModule } from 'angular2-moment';
import {HttpClientModule} from '@angular/common/http';
import { SignoutComponent } from './signout/signout.component';
import { StoreDealsComponent } from './store-deals/store-deals.component';
import { DealsListComponent } from './deals-list/deals-list.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'stores', component: StoresComponent },
  { path: 'stores/:storeId/deals', component: StoreDealsComponent },
  { path: 'my-deals', component: DealsComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'signout', component: SignoutComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    DealsComponent,
    StoresComponent,
    AuthComponent,
    SignoutComponent,
    StoreDealsComponent,
    DealsListComponent
  ],
  imports: [
    MomentModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
     appRoutes,
     { enableTracing: true } // <-- debugging purposes only
   )
  ],
  providers: [
    AppStateService,
    AuthService,
    UserService,
    DealService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
