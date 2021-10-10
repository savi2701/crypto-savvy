import { Component, OnInit } from '@angular/core';
import { CryptoDataService } from '../crypto-data.service';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  coinDataArray:any =[];
  coinDataArr: any =[];
  coinId: any;
  constructor(private cryptoDataService : CryptoDataService, private _http:HttpClient) { }

  ngOnInit(): void {
    this.cryptoDataService.getData().subscribe((result)=>{
      this.coinDataArr = result;
      this.coinDataArray = this.coinDataArr.data;
    })
  }

  // getIcon(id:any){
  //   this._http.get('https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?CMC_PRO_API_KEY=fa820f93-2707-41f6-9498-33602b24a843&id=' + id).subscribe(data=>{
  //     console.log(data);
  //   })
  // }


}
