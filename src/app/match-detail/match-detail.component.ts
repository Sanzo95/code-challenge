import { Component, Input } from '@angular/core';
import { Match } from '../models/match';
import { Team } from '../models/team';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent {

  @Input()
  matchSelected: Match;
  @Input()
  teams: Team[] = [];
  idTeamSelected: number;

  constructor() { }

  teamSelected(idTeam: number) {
    this.idTeamSelected = idTeam;
  }
}
