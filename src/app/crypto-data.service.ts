import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CryptoDataService {

  apiKey = "fa820f93-2707-41f6-9498-33602b24a843";
  cryptoId :any;

  url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY="+this.apiKey;
  constructor(private _http: HttpClient) { }

  getData(){
    return this._http.get(this.url);
  }


}
