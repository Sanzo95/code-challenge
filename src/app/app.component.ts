import { Component } from '@angular/core';
import { Match } from './models/match';
import { MatchService } from './match.service';
import { Team } from './models/team';
import { TeamService } from './team.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  matchDaySelected: number;

  matches: Match[] = [];
  teams: Team[] = [];

  constructor(private matchService: MatchService, private teamService: TeamService) {
    this.getMatches();
    this.getTeams();
  }

  matchdaySelected(id: number) {
    this.matchDaySelected = id;
    this.setTeamOfMatchDay(id);
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
  getTeams() {
    const successHandler = (response) => {
      this.teams = response;
      console.log(this.teams);
    };
    const errorHandler = (error) => {
      console.log('errore', error);
    };
    this.teamService.getTeams().subscribe(successHandler, errorHandler);
  }

  getTeamByID(id: number): Team {
    for (const team of this.teams) {
      if (team.id === id) {
        return team;
      }
    }
    return null;
  }

  setTeamOfMatchDay(id: number) {
    for (const match of this.matches) {
      match.homeTeam.crestUrl = this.getTeamByID(match.homeTeam.id).crestUrl;
      match.awayTeam.crestUrl = this.getTeamByID(match.awayTeam.id).crestUrl;
    }
  }

}
