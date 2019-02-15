import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Match } from '../models/match';

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

  constructor() {}

  getMatchDaysAndata(): number[] {
   return Array.from({length: 19}, (v, i) => i + 1);
  }

  getMatchDaysRitorno(): number[] {
    return Array.from({length: 19}, (v, i) => i + 20);
  }
}
