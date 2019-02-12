import { Competition } from './competition';

enum TeamAttributes {
  id = 'id',
  name = 'name',
  activeCompetitions = 'activeCompetitions'
}

export class Team {
  id: number;
  name: string;
  activeCompetitions: Competition[];
  // squad: Player[];

  static fromJson(json: any): Team {
    const team = new Team();

    team.id = json[TeamAttributes.id];
    team.name = json[TeamAttributes.name];
    // team.activeCompetitions = Competition.fromJson(TeamAttributes.activeCompetitions);

    return team;
  }
}
