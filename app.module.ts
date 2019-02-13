import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http'
import { AppComponent } from './app.component';
import { MatchdayDetailComponent } from './matchday-detail/matchday-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MatchdayDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
