import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { CoinsService } from "../../service/coins/coins.service";

@Component({
  selector: 'app-coin',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {

  perPage = '100';
  pageNum = '1';
  currentPage: string;
  pages: string[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20'];

  coins: any[];

  constructor(
    private router: Router,
    private coinsService: CoinsService
  ) {}

  ngOnInit() {
    this.onclick(this.pageNum);
  }

  onclick(pageNum: string) {
    this.coinsService.requestCoinsInfo(this.perPage, pageNum)
      .subscribe(response => {
          this.coins = response;
          this.currentPage = pageNum;
        },
        error => {
          console.log('CoinGeckoへのアクセスに失敗しました。');
        }
      );
  }

  routeCoin(id: string) {
    this.router.navigate(["/coin/" + id]);
  }

}
