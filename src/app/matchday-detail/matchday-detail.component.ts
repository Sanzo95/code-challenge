import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
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

  matchDayString = 'matchDay';
  constructor(private matchService: MatchService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.getMatches(changes[this.matchDayString].currentValue);
  }

  getMatches(id: number) {
    const matchesTemp: Match[] = [];

    for (const match of this.matches) {
      if (match.matchday === id) {
        matchesTemp.push(match);
      }
    }
    this.matchesSelected = matchesTemp;
    /*const successhandler = response => {
      console.log(response);
      this.matches = response;
    };

    const errorhandler = error => {
      this.matches = error;
    };

    this.matchService
      .getMatchesByDay(id)
      .subscribe(successhandler, errorhandler);
*/
  }
}
