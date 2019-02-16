import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Team } from './models/team';
import { Competition } from './models/competition';
import { SquadMember } from './models/squadMember';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  BASE_URL = 'http://api.football-data.org/v2/';

  constructor(private http: HttpClient) {
  }

  getTeams(
    header: HttpHeaders = new HttpHeaders({
      'X-Auth-Token': 'aa89ef54a73b4df6a2e389906426b90b'
    })
  ): Observable<Team[]> {
    const url = this.BASE_URL + 'competitions/SA/teams';
    const array = 'teams';
    return this.http.get(url, { headers: header }).pipe(
      map((response: any[]) => {
        return response[array].map(teamJson => Team.fromJson(teamJson));
      })
    );
  }

  getActiveCompetition(
    id: number,
    header: HttpHeaders ): Observable<Competition[]> {
    const url = this.BASE_URL + 'teams/' + id;
    const array = 'activeCompetitions';
    return this.http.get(url, { headers: header }).pipe(
      map((response: any) => {
        return response[array].map(teamJson => Competition.fromJson(teamJson));
      })
    );
  }

  getSquad(
    id: number,
    header: HttpHeaders): Observable<SquadMember[]> {
    const url = this.BASE_URL + 'teams/' + id;
    const array = 'squad';
    return this.http.get(url, { headers: header }).pipe(
      map((response: any) => {
        return response[array].map(teamJson => SquadMember.fromJson(teamJson));
      })
    );
  }
}
