import { Team } from './team';
import { Score } from './score';

enum MatchAttributes {
  id = 'id',
  name = 'name',
  matchday = 'matchday',
  homeTeam = 'homeTeam',
  awayTeam = 'awayTeam',
  status = 'status',
  score = 'score',
  utcDate = 'utcDate'
}

export class Match {
  id: number;
  name: string;
  matchday: number;
  homeTeam: Team;
  awayTeam: Team;
  status: string;
  score: Score;
  utcDate: string;

  static fromJson(json: any): Match {
    const match = new Match();

    match.id = json[MatchAttributes.id];
    match.name = json[MatchAttributes.name];
    match.matchday = json[MatchAttributes.matchday];
    match.homeTeam = Team.matchTeamfromJson(json[MatchAttributes.homeTeam]);
    match.awayTeam = Team.matchTeamfromJson(json[MatchAttributes.awayTeam]);
    match.status = json[MatchAttributes.status];
    match.score = Score.fromJson(json[MatchAttributes.score]);
    match.utcDate = json[MatchAttributes.utcDate];

    return match;
  }
}
