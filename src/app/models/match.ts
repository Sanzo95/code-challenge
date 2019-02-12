import { Team } from './team';

enum MatchAttributes {
  id = 'id',
  name = 'name',
  matchday = 'matchday',
  homeTeam = 'homeTeam',
  awayTeam = 'awayTeam'
}

export class Match {
  id: number;
  name: string;
  matchday: number;
  homeTeam: Team;
  awayTeam: Team;

  static fromJson(json: any): Match {
    const match = new Match();

    match.id = json[MatchAttributes.id];
    match.name = json[MatchAttributes.name];
    match.matchday = json[MatchAttributes.matchday];
    match.homeTeam = Team.fromJson(json[MatchAttributes.homeTeam]);
    match.awayTeam = Team.fromJson(json[MatchAttributes.awayTeam]);

    return match;
  }
}
