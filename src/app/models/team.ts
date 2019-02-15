import { Competition, CompetitionAttributes } from './competition';
import { Area } from './area';
import { SquadMember } from './squadMember';

enum TeamAttributes {
  id = 'id',
  name = 'name',
  activeCompetitions = 'activeCompetitions',
  area = 'area',
  shortName = 'shortName',
  tla = 'tla',
  crestUrl = 'crestUrl',
  address = 'address',
  phone = 'phone',
  website = 'website',
  email = 'email',
  founded = 'founded',
  clubColors = 'clubColors',
  venue = 'venue'
}

export class Team {
  id: number;
  area: Area;
  activeCompetitions: Competition[];
  name: string ; // "Parma Calcio 1913",
  shortName: string; // "Parma",
  tla: string; // "PAR",
  crestUrl: string; // url all'immagine
  address: string; // "Strada Carlo Pisacane, 4 Parma 43121",
  phone: string; // "+39 (521) 170591",
  website: string; // "http://www.parmacalcio1913.com",
  email: string; // "info@parmacalcio1913.com",
  founded: number; // 1913,
  clubColors: string; // "White / Black",
  venue: string; // "Stadio Ennio Tardini"
  squad: SquadMember[];

  static matchTeamfromJson(json: any): Team {
    const team = new Team();
    team.id = json[TeamAttributes.id];
    team.name = json[TeamAttributes.name];
    return team;
  }

  static fromJson(json: any): Team {
    const team = new Team();
    team.id = json[TeamAttributes.id];
    team.name = json[TeamAttributes.name];
    team.area = Area.fromJson(json[TeamAttributes.area]);
    team.shortName = json[TeamAttributes.shortName];
    team.tla = json[TeamAttributes.tla];
    team.crestUrl = json[TeamAttributes.crestUrl];
    team.address = json[TeamAttributes.address];
    team.phone = json[TeamAttributes.phone];
    team.website = json[TeamAttributes.website];
    team.email = json[TeamAttributes.email];
    team.founded = json[TeamAttributes.founded];
    team.clubColors = json[TeamAttributes.clubColors];
    team.venue = json[TeamAttributes.venue];
    return team;
  }

}
