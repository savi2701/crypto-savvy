import { Component, OnInit } from '@angular/core';
import { CryptoDataService } from '../crypto-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  coinDataArray:any =[];
  coinDataArr: any =[];
  constructor(private cryptoDataService : CryptoDataService) { }

  ngOnInit(): void {
    this.cryptoDataService.getData().subscribe((result)=>{
      this.coinDataArr = result;
      this.coinDataArray = this.coinDataArr.data;
    })
  }


}
