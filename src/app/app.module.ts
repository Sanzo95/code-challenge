import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MatchdayDetailComponent } from './matchday-detail/matchday-detail.component';
import { MatchdayComponent } from './matchday/matchday.component';
import { TeamComponent } from './team/team.component';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    MatchdayDetailComponent,
    MatchdayComponent,
    TeamComponent,
    MatchDetailComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
