enum TeamAttributes {
  id = 'id',
  name = 'name',
}

export class Team {
  id: number;
  name: string;

  static fromJson(json: any): Team {
    const team = new Team();

    team.id = json[TeamAttributes.id];
    team.name = json[TeamAttributes.name];

    return team;
  }
}
