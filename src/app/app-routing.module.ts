import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CryptoConvertorComponent } from './crypto-convertor/crypto-convertor.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'crypto-convertor', component: CryptoConvertorComponent },
  { path: 'home', component: HomeComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
