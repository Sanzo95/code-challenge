import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Match } from '../models/match';
import { MatchService } from '../match.service';

@Component({
  selector: 'app-matchday',
  templateUrl: './matchday.component.html',
  styleUrls: ['./matchday.component.css']
})
export class MatchdayComponent {
  @Input()
  matches: Match[] = [];

  @Output()
  matchdayOutput = new EventEmitter<number>();

  constructor(private matchService: MatchService) {

  }

  getMatchdays(): number[] {
    const days: number[] = [];
    for (let i = 1; i < 39; i++) {
      days[i - 1] = i;
    }
    return days;
  }

}
