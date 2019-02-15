import { Component } from '@angular/core';
import { Match } from './models/match';
import { MatchService } from './match.service';
import { Team } from './models/team';
import { TeamService } from './team.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private static index: number;
  private static count: number;

  constructor(private matchService: MatchService, private teamService: TeamService) {
    AppComponent.index = 0;
    AppComponent.count = 0;
    this.getMatches();
    this.getTeams();
  }

  headers: HttpHeaders[] = [
    new HttpHeaders({'X-Auth-Token': 'aa89ef54a73b4df6a2e389906426b90b'}),
    new HttpHeaders({'X-Auth-Token': '039441a2aed54418a0a05234a1648399'}),
    new HttpHeaders({'X-Auth-Token': 'eadbe242b10d49b08de6a036d9d969f3'}),
    new HttpHeaders({'X-Auth-Token': 'cc3783de26fd43d6834f277d37eaed39' }),
    new HttpHeaders({'X-Auth-Token': 'aaa38f78b6cd4d869c93b7b7413216ef'})
  ];

  matchDaySelected: number;
  matches: Match[] = [];
  teams: Team[] = [];

  matchdaySelected(id: number) {
    this.matchDaySelected = id;
    this.setTeamOfMatchDay(id);
  }

  getMatches() {
    const errorHandler = error => {
      this.checkToken();
      this.matchService
        .getMatches(this.headers[AppComponent.index])
        .subscribe(response => (this.matches = response), errorHandler);
    };
    this.checkToken();
    this.matchService
      .getMatches(this.headers[AppComponent.index])
      .subscribe(response => (this.matches = response), errorHandler);
  }

  getTeams() {
    const errorHandler = error => {
      this.checkToken();
      this.teamService
        .getTeams(this.headers[AppComponent.index])
        .subscribe(response => (this.teams = response), errorHandler);
    };
    this.checkToken();
    this.teamService
      .getTeams(this.headers[AppComponent.index])
      .subscribe(response => (this.teams = response), errorHandler);
  }

  getTeamByID(id: number): Team {
    return this.teams.find(t => t.id === id);
  }

  setTeamOfMatchDay(id: number) {
    for (const match of this.matches) {
      match.homeTeam.crestUrl = this.getTeamByID(match.homeTeam.id).crestUrl
        ? this.getTeamByID(match.homeTeam.id).crestUrl
        : 'http://placehold.jp/100/ffffff/043c75/400x400.png?text=Image%0ANot%0AFound';
      match.awayTeam.crestUrl = this.getTeamByID(match.awayTeam.id).crestUrl
        ? this.getTeamByID(match.awayTeam.id).crestUrl
        : 'http://placehold.jp/100/ffffff/043c75/400x400.png?text=Image%0ANot%0AFound';
    }
  }

  checkToken() {
    if (AppComponent.count === 9) {
      AppComponent.count = 0;
      if (AppComponent.index < this.headers.length) {
      AppComponent.index += 1;
      } else {
        AppComponent.index = 0;
      }
    }
    AppComponent.count++;
  }

}
