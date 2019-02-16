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
    let date = a[0].split('-').reverse().join('/');
    let time = "";
    let timea = a[1].substr(0, 2);
    timea === "00" ? time = "??:??" : time = String(Number(timea) + 1).concat(a[1].substr(2, 3));
    this.date = date;
    this.time = time;
  }

  checkResult(res: string) {
    return res === null ? "?" : res;
  }
}
