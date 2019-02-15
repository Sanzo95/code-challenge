import { FullTime } from './fullTime';

enum ScoreAttributes {
  winner = 'winner',
  fullTime = 'fullTime',
}

export class Score {
  winner: string;
  fullTime: FullTime;

  static fromJson(json: any): Score {
    const score = new Score();

    score.winner = json[ScoreAttributes.winner];
    score.fullTime = json[ScoreAttributes.fullTime];

    return score;
  }
}
