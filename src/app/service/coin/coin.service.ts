import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CoinService {

  COIN_API_URL = 'https://api.coingecko.com/api/v3/coins/';
  constructor(private http: HttpClient) {}

  requestCoinInfo(coinId: string): Observable<any> {
    return this.http.get(this.COIN_API_URL + coinId);
  }
}
