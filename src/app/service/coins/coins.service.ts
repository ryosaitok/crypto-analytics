import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CoinsService {

  API_URL = 'https://api.coingecko.com/api/v3/coins';
  constructor(private http: HttpClient) {}

  requestCoinsInfo(perPage: string, pageNum: string): Observable<any> {
    return this.http.get(this.API_URL + '?per_page=' + perPage + '&page=' + pageNum);
  }
}
