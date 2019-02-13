import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Match } from './models/match';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatchService {


  BASE_URL = 'http://api.football-data.org/v2/competitions/2019/matches?matchday=';

  private headers = new HttpHeaders({'X-Auth-Token': '039441a2aed54418a0a05234a1648399'});

  constructor(private http: HttpClient) { }


  getMatchesByDay(id: number): Observable<Match[]> {
    const url = this.BASE_URL + id;
    return this.http.get(url, {headers: this.headers})
    .pipe(
      map((response: any[]) => {
        return response['matches'].map(matchJason => Match.fromJson(matchJason));
      })
    );
}
}
