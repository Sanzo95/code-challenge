import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchDetailComponent } from './match-detail/match-detail.component';
import { MatchdayDetailComponent } from './matchday-detail/matchday-detail.component';
import { MatchdayComponent } from './matchday/matchday.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path: 'matchday', component: MatchdayComponent },
  { path: 'matchday/matchday-detail/:id', component: MatchdayDetailComponent },
  { path: 'matchday/matchday-detail/match-detail/:id', component: MatchDetailComponent },
  { path: 'matchday/matchday-detail/match-detail/team/:id', component: TeamComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {


}
