import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  'Content-Type': 'application/json',
  //'X-Auth-Token': //Enter your auth token 
}

@Injectable()
export class UserService {

  userUrl = 'https://api.football-data.org/v1/competitions/445/leagueTable';

  constructor(private http: HttpClient) { }

  getUserResponse(): Observable<Response> {
    return this.http.get<Response>(this.userUrl)
  }

}
