// Risultati
enum FullTimeAttributes {
  homeTeam = 'homeTeam',
  awayTeam = 'awayTeam',
}

export class FullTime {
  homeTeam: string;
  awayTeam: string;

  static fromJson(json: any): FullTime {
    const fullTime = new FullTime();

    fullTime.homeTeam = json[FullTimeAttributes.homeTeam];
    fullTime.awayTeam = json[FullTimeAttributes.awayTeam];

    return fullTime;
  }
}
