import { Area } from './area';

export enum CompetitionAttributes {
  id = 'id',
  area = 'area',
  name = 'name',
  code = 'code',
  plan = 'plan',
}

export class Competition {
  id: number;
  area: Area;
  name: string;
  code: string;
  plan: string;

  static fromJson(json: any): Competition {
    const competition = new Competition();

    competition.id = json[CompetitionAttributes.id];
    competition.area = Area.fromJson(json[CompetitionAttributes.area]);
    competition.name = json[CompetitionAttributes.name];
    competition.code = json[CompetitionAttributes.code];
    competition.plan = json[CompetitionAttributes.plan];

    return competition;
  }
}
