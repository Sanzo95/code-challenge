import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Match } from '../models/match';
import { MatchService } from '../match.service';

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

  matchesSelected: Match[] = [];

  matchSSelected: Match;

  matchDayString = 'matchDay';
  constructor(private matchService: MatchService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getMatches(changes[this.matchDayString].currentValue);
  }

  matchSelected(match: Match) {
    this.matchSSelected = match;
  }

  getMatches(id: number) {
    const matchesTemp: Match[] = [];

    for (const match of this.matches) {
      if (match.matchday === id) {
        matchesTemp.push(match);
      }
    }
    this.matchesSelected = matchesTemp;
  }
}
