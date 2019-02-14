import { Component } from '@angular/core';
import { Match } from './models/match';
import { MatchService } from './match.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  matchDaySelected: number;

  matches: Match[] = [];

  constructor(private matchService: MatchService) {
    this.getMatches();
  }

  matchdaySelected(id: number) {
    this.matchDaySelected = id;
  }

  getMatches() {
    const successHandler = (response) => {
      this.matches = response;
    };

    const errorHandler = (error) => {
      console.log('errore', error);
    };
    this.matchService.getMatches().subscribe(successHandler, errorHandler);
  }
}
