import { Component, OnInit } from '@angular/core';

import { CoinService } from "../../service/coin/coin.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-coin',
  templateUrl: './coin.component.html',
  styleUrls: ['./coin.component.css']
})
export class CoinComponent implements OnInit {

  coinId = 'bitcoin';
  id: string;
  symbol: string;
  name: string;
  image: string;
  coingecko_score: number;
  current_price_jpy: number;
  market_cap_jpy: number;
  total_volume_jpy: number;
  high_24h: any;
  low_24h: any;
  price_change_24h: string;
  price_change_percentage_24h: string;
  price_change_percentage_7d: string;
  price_change_percentage_14d: string;
  price_change_percentage_30d: string;
  price_change_percentage_60d: string;
  price_change_percentage_200d: string;
  price_change_percentage_1y: string;
  market_cap_change_24h: string;
  market_cap_change_percentage_24h: string;
  facebook_likes: number;
  twitter_followers: number;
  reddit_average_posts_48h: number;
  reddit_average_comments_48h: number;
  reddit_subscribers: number;
  reddit_accounts_active_48h: number;
  forks: number;
  stars: number;
  subscribers: number;
  total_issues: number;
  closed_issues: number;
  pull_requests_merged: number;
  pull_request_contributors: number;
  commit_count_4_weeks: number;
  last_updated: string;
  datetime: Date;

  constructor(
    private route: ActivatedRoute,
    private coinService: CoinService
  ) {}

  ngOnInit() {
    if (this.route.snapshot.paramMap.get('id') != null) {
      this.coinId = this.route.snapshot.paramMap.get('id');
    }
    this.onclick();
  }

  onclick() {
    this.coinService.requestCoinInfo(this.coinId)
      .subscribe(response => {
          this.id = response.id;
          this.symbol = response.symbol;
          this.name = response.name;
          this.image = response.image.small;
          this.coingecko_score = response.coingecko_score;
          this.current_price_jpy = response.market_data.current_price.jpy;
          this.market_cap_jpy = response.market_data.market_cap.jpy;
          this.total_volume_jpy = response.market_data.total_volume.jpy;
          this.high_24h = response.market_data.high_24h;
          this.low_24h = response.market_data.low_24h;
          this.price_change_24h = response.market_data.price_change_24h;
          this.price_change_percentage_24h = response.market_data.price_change_percentage_24h;
          this.price_change_percentage_7d = response.market_data.price_change_percentage_7d;
          this.price_change_percentage_14d = response.market_data.price_change_percentage_14d;
          this.price_change_percentage_30d = response.market_data.price_change_percentage_30d;
          this.price_change_percentage_60d = response.market_data.price_change_percentage_60d;
          this.price_change_percentage_200d = response.market_data.price_change_percentage_200d;
          this.price_change_percentage_1y = response.market_data.price_change_percentage_1y;
          this.market_cap_change_24h = response.market_data.market_cap_change_24h;
          this.market_cap_change_percentage_24h = response.market_data.market_cap_change_percentage_24h;
          this.facebook_likes = response.community_data.facebook_likes;
          this.twitter_followers = response.community_data.twitter_followers;
          this.reddit_average_posts_48h = response.community_data.reddit_average_posts_48h;
          this.reddit_average_comments_48h = response.community_data.reddit_average_comments_48h;
          this.reddit_subscribers = response.community_data.reddit_subscribers;
          this.reddit_accounts_active_48h = response.community_data.reddit_accounts_active_48h;
          this.forks = response.developer_data.forks;
          this.stars = response.developer_data.stars;
          this.subscribers = response.developer_data.subscribers;
          this.total_issues = response.developer_data.total_issues;
          this.closed_issues = response.developer_data.closed_issues;
          this.pull_requests_merged = response.developer_data.pull_requests_merged;
          this.pull_request_contributors = response.developer_data.pull_request_contributors;
          this.commit_count_4_weeks = response.developer_data.commit_count_4_weeks;
          this.datetime = new Date( response.last_updated );
        },
        error => {
          console.log('CoinGeckoへのアクセスに失敗しました。');
        }
      );
  }

}
