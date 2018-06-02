import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSlideToggleModule,
  MatSliderModule,
  MatTabsModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { CoinComponent } from "./component/coin/coin.component";
import { CoinsComponent } from "./component/coins/coins.component";
import { ChatDatePipe } from './pipe/chat-date.pipe';
import { CoinService } from "./service/coin/coin.service";
import { CoinsService } from "./service/coins/coins.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatTabsModule
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
    CoinService,
    CoinsService
  ]
})
export class AppModule { }
