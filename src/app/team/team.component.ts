import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { Team } from '../models/team';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnChanges {
  @Input()
  squadre: Team[] = [];

  @Input()
  teamSelected: number;

  team: Team;
  constructor(private teamService: TeamService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.team = this.getTeamFromID(this.teamSelected);
    this.addInfoSelectedTeam(this.teamSelected);
  }

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
    const successHandler = response => {
      this.team.activeCompetitions = response;
    };
    const errorHandler = error => {
      console.log('errore', error);
    };
    this.teamService
      .getActiveCompetition(id)
      .subscribe(successHandler, errorHandler);
  }

  setPlayerTeamSelected(id: number) {
    const successHandler = response => {
      this.team.squad = response;
    };
    const errorHandler = error => {
      console.log('errore', error);
    };
    this.teamService.getSquad(id).subscribe(successHandler, errorHandler);
  }
}
