import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LandingPage } from '../landing/landing.page';
import { BrowserModule } from '@angular/platform-browser';
import { DetailsPage } from '../details/details.page';


@NgModule({
  declarations: [
    LandingPage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'details/:id', component: DetailsPage }
    ])
  ],
  providers: [],
  bootstrap: []
})
export class DetallesModule { }
