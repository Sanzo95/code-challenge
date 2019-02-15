enum SquadMemberAttributes {
  id = 'id',
  name = 'name',
  position = 'position',
  dateOfBirth = 'dateOfBirth',
  countryOfBirth = 'countryOfBirth',
  nationality = 'nationality',
  shirtNumber = 'shirtNumber',
  role = 'role',
}

export class SquadMember {
  id: number;
  name: string;
  position: string;
  dateOfBirth: string;
  countryOfBirth: string;
  nationality: string;
  shirtNumber: number;
  role: string;

  static fromJson(json: any): SquadMember {
    const squadMember = new SquadMember();
    squadMember.id = json[SquadMemberAttributes.id];
    squadMember.name = json[SquadMemberAttributes.name];
    squadMember.position = json[SquadMemberAttributes.position];
    squadMember.dateOfBirth = json[SquadMemberAttributes.dateOfBirth];
    squadMember.countryOfBirth = json[SquadMemberAttributes.countryOfBirth];
    squadMember.nationality = json[SquadMemberAttributes.nationality];
    squadMember.shirtNumber = json[SquadMemberAttributes.shirtNumber];
    squadMember.role = json[SquadMemberAttributes.role];
    return squadMember;
  }
}
