import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { CoinComponent } from "./component/coin/coin.component";
import { CoinsComponent } from "./component/coins/coins.component";
import {CoinService} from "./service/coin/coin.service";
import { ChatDatePipe } from './pipe/chat-date.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    CoinComponent,
    CoinsComponent,
    ChatDatePipe
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    CoinService
  ]
})
export class AppModule { }
