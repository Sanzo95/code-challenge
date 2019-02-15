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

  getMatchDaysAndata(): number[] {
    const days: number[] = [];
    for (let i = 1; i < 20; i++) {
      days[i - 1] = i;
    }
    return days;
  }

  getMatchDaysRitorno(): number[] {
    const days: number[] = [];
    for (let i = 20; i < 39; i++) {
      days[i - 20] = i;
    }
    return days;
  }
}
