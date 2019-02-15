import {
  Component,
  Input,
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
    return this.squadre.find(t => t.id === id);
  }

  addInfoSelectedTeam(id: number) {
    this.team.activeCompetitions == null ?
      this.setActiveCompetitionSelected(id) : false ;
    this.team.squad == null ?
     this.setPlayerTeamSelected(id) : false;
  }

  setActiveCompetitionSelected(id: number) {
    console.log('setActiveCompetitionSelected');
    const errorHandler = error => {
      console.log('getActiveCompetition error', error);
    };
    this.teamService
      .getActiveCompetition(id)
      .subscribe(response => this.team.activeCompetitions = response, errorHandler);
  }

  setPlayerTeamSelected(id: number) {
    console.log('setPlayerTeamSelected');
    const errorHandler = error => {
      console.log('getSquad error', error);
    };
    this.teamService.getSquad(id).subscribe(response => this.team.squad = response, errorHandler);
  }
}
