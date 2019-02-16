import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Match } from './models/match';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  BASE_URL = 'http://api.football-data.org/v2/competitions/2019/matches';

  constructor(private http: HttpClient) {}

  getMatches(header: HttpHeaders = new HttpHeaders({
      'X-Auth-Token': 'aa89ef54a73b4df6a2e389906426b90b'
    })
  ): Observable<Match[]> {
    const url = this.BASE_URL;
    const array = 'matches';
    return this.http.get(url, { headers: header }).pipe(
      map((response: any[]) => {
        return response[array].map(matchJson => Match.fromJson(matchJson));
      })
    );
  }

  // non utilizzato
  getMatchesByDay(id: number, header: HttpHeaders): Observable<Match[]> {
    const url = this.BASE_URL + '?matchday=' + id;
    const array = 'matches';
    return this.http.get(url, { headers: header }).pipe(
      map((response: any[]) => {
        return response[array].map(matchJson => Match.fromJson(matchJson));
      })
    );
  }
}
