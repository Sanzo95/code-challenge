import { Component, Input } from '@angular/core';
import { Team } from '../models/team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  @Input()
  squadre: Team[] = [];

  constructor(private teamService: TeamService) { }

  getTeamFromID(id: number): Team {
    for (const team of this.squadre) {
      if (team.id === id) {
        return team;
      }
    }
    return null;
  }

  addInfoSelectedTeam(id: number) {
    this.setActiveCompetitionSelected(id);
    this.setPlayerTeamSelected(id);
  }

  setActiveCompetitionSelected(id: number) {
    const successHandler = (response) => {
      this.getTeamFromID(id).activeCompetitions = response;
      console.log(this.squadre);
    };
    const errorHandler = (error) => {
      console.log('errore', error);
    };
    this.teamService.getActiveCompetition(id).subscribe(successHandler, errorHandler);
  }

  setPlayerTeamSelected(id: number) {
    const successHandler = (response) => {
      this.getTeamFromID(id).squad = response;
      console.log(this.squadre);

    };
    const errorHandler = (error) => {
      console.log('errore', error);
    };
    this.teamService.getSquad(id).subscribe(successHandler, errorHandler);
  }
}
