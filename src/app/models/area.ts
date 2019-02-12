enum AreaAttributes {
  id = 'id',
  name = 'name',
}

export class Area {
  id: number;
  name: string;

  static fromJson(json: any): Area {
    const area = new Area();

    area.id = json[AreaAttributes.id];
    area.name = json[AreaAttributes.name];

    return area;
  }
}
