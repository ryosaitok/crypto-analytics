import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { CoinComponent } from "./component/coin/coin.component";
import { CoinsComponent } from "./component/coins/coins.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashborad', pathMatch: 'full' },
  { path: 'dashborad', component: DashboardComponent },
  { path: 'coin', component: CoinComponent },
  { path: 'coins', component: CoinsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
