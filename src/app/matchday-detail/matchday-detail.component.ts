import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Match } from '../models/match';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-matchday-detail',
  templateUrl: './matchday-detail.component.html',
  styleUrls: ['./matchday-detail.component.css']
})
export class MatchdayDetailComponent implements OnChanges {
  @Input()
  id: number;
  matches: Match[] = [];

  constructor(private matchService: MatchService) {
  }

  ngOnChanges() {
    const successhandler = response => {
      console.log(response);
      this.matches = response;
    };

    const errorhandler = error => {
      this.matches = error;
    };

    this.matchService
      .getMatchesByDay(this.id)
      .subscribe(successhandler, errorhandler);
  }
}
