import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Match } from '../models/match';
import { Team } from '../models/team';

@Component({
  selector: 'app-matchday-detail',
  templateUrl: './matchday-detail.component.html',
  styleUrls: ['./matchday-detail.component.css']
})
export class MatchdayDetailComponent implements OnChanges {

  @Input()
  matchDay: number;
  @Input()
  matches: Match[] = [];
  @Input()
  teams: Team[] = [];

  matchesSelected: Match[] = [];

  matchSSelected: Match;

  matchDayString = 'matchDay';
  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getMatches(changes[this.matchDayString].currentValue);
  }

  matchSelected(match: Match) {
    this.matchSSelected = match;
  }

  getMatches(id: number) {
    this.matchesSelected = this.matches.filter(e => e.matchday === id);
  }
}
