import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Team } from './models/team';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  BASE_URL = 'http://api.football-data.org/v2/competitions/SA/teams';

  private headers = new HttpHeaders({
    'X-Auth-Token': '039441a2aed54418a0a05234a1648399'
  });

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Team[]> {
    const url = this.BASE_URL;
    return this.http.get(url, { headers: this.headers }).pipe(
      map((response: any[]) => {
        return response['teams'].map(teamJson => Team.fromJson(teamJson));
      })
    );
  }
}
