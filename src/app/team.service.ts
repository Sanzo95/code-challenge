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

  private headers: HttpHeaders[] = [];

  constructor(private http: HttpClient) {
    this.headers[0] = new HttpHeaders({
      'X-Auth-Token': 'aa89ef54a73b4df6a2e389906426b90b'
    });
    this.headers[1] = new HttpHeaders({
      'X-Auth-Token': '039441a2aed54418a0a05234a1648399'
    });
    this.headers[2] = new HttpHeaders({
      'X-Auth-Token': 'eadbe242b10d49b08de6a036d9d969f3'
    });
    this.headers[3] = new HttpHeaders({
      'X-Auth-Token': '551c8548b0fe456784ba41fe2ba552e3'
    });
  }

  getTeams(): Observable<Team[]> {
    const url = this.BASE_URL + 'competitions/SA/teams';
    const array = 'teams';
    const index = Math.floor(Math.random() * this.headers.length);
    return this.http
      .get(url, { headers: this.headers[index] })
      .pipe(
        map((response: any[]) => {
          return response[array].map(teamJson => Team.fromJson(teamJson));
        })
      );
  }

  getActiveCompetition(id: number): Observable<Competition[]> {
    const url = this.BASE_URL + 'teams/' + id;
    const index = Math.floor(Math.random() * this.headers.length);
    return this.http.get(url, { headers: this.headers[index] }).pipe(
      map((response: any) => {
        return response['activeCompetitions'].map(teamJson =>
          Competition.fromJson(teamJson)
        );
      })
    );
  }

  getSquad(id: number): Observable<SquadMember[]> {
    const url = this.BASE_URL + 'teams/' + id;
    const index = Math.floor(Math.random() * this.headers.length);
    return this.http.get(url, { headers: this.headers[index] }).pipe(
      map((response: any) => {
        return response['squad'].map(teamJson =>
          SquadMember.fromJson(teamJson)
        );
      })
    );
  }

}
