import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Team } from '../models/team';
import { TeamService } from '../team.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnChanges {
  private static index = 0;
  private static count = 0;

  @Input()
  squadre: Team[] = [];

  @Input()
  teamSelected: number;

  private headers: HttpHeaders[] = [
    new HttpHeaders({ 'X-Auth-Token': 'aa89ef54a73b4df6a2e389906426b90b' }),
    new HttpHeaders({ 'X-Auth-Token': '039441a2aed54418a0a05234a1648399' }),
    new HttpHeaders({ 'X-Auth-Token': 'eadbe242b10d49b08de6a036d9d969f3' }),
    new HttpHeaders({ 'X-Auth-Token': 'cc3783de26fd43d6834f277d37eaed39' }),
    new HttpHeaders({ 'X-Auth-Token': 'aaa38f78b6cd4d869c93b7b7413216ef' })
  ];

  team: Team;
  constructor(private teamService: TeamService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.team = this.getTeamFromID(this.teamSelected);
    this.addInfoSelectedTeam(this.teamSelected);
  }

  getTeamFromID(id: number): Team {
    return this.squadre.find(t => t.id === id);
  }

  addInfoSelectedTeam(id: number) {
    if (this.team.activeCompetitions == null) {
      this.setActiveCompetitionSelected(id);
    }

    if (this.team.squad == null) {
      this.setPlayerTeamSelected(id);
    }
  }

  checkToken() {
    if (TeamComponent.count === 10) {
      TeamComponent.count = 0;
      if (TeamComponent.index < this.headers.length) {
        TeamComponent.index += 1;
      } else {
        TeamComponent.index = 0;
      }
    }
    TeamComponent.count++;
  }

  setActiveCompetitionSelected(id: number) {
    const errorHandler = () => {
      this.checkToken();
      this.teamService
        .getActiveCompetition(id, this.headers[TeamComponent.index])
        .subscribe(
          response => (this.team.activeCompetitions = response),
          errorHandler
        );
    };
    this.checkToken();
    this.teamService
      .getActiveCompetition(id, this.headers[TeamComponent.index])
      .subscribe(
        response => (this.team.activeCompetitions = response),
        errorHandler
      );
  }

  setPlayerTeamSelected(id: number) {
    const errorHandler = () => {
      this.checkToken();
      this.teamService
        .getSquad(id, this.headers[TeamComponent.index])
        .subscribe(response => (this.team.squad = response), errorHandler);
    };
    this.checkToken();
    this.teamService
      .getSquad(id, this.headers[TeamComponent.index])
      .subscribe(response => (this.team.squad = response), errorHandler);
  }
}
