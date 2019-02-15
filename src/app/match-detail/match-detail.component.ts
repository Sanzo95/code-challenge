import { Component, Input } from '@angular/core';
import { Match } from '../models/match';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.css']
})
export class MatchDetailComponent {

  @Input()
  matchSelected: Match;


  constructor() { }
}
