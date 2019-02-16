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
  date: string;
  time: string;

  constructor() {
  }

  teamSelected(idTeam: number) {
    this.idTeamSelected = idTeam;
  }

  toDate(d: string) {
    let a = d.split('T');
    this.date = a[0].split('-').reverse().join('/');
    let time = a[1].substr(0, 2);
    this.time = time === "00" ? "??:??" : String(Number(time) + 1).concat(a[1].substr(2, 3));
  }

  checkResult(res: string) {
    return res === null ? "?" : res;
  }
}
