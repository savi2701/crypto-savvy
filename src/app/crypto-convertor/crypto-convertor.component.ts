import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CryptoDataService } from '../crypto-data.service';

@Component({
  selector: 'app-crypto-convertor',
  templateUrl: './crypto-convertor.component.html',
  styleUrls: ['./crypto-convertor.component.scss']
})
export class CryptoConvertorComponent implements OnInit {
  cryptoDataService: any = [];
  coinDataArr: any=[];
  coinDataArray: any=[];
  inputCurrency:any;
  outputCurrency:any;
  finalOutputAmount: any;
  inputAmount:any;
  constructor(private _cryptoService : CryptoDataService) { }

  ngOnInit(): void {
    this._cryptoService.getData().subscribe((result: any)=>{
      this.coinDataArr = result;
      this.coinDataArray = this.coinDataArr.data;
    });
  }

  getValue(val:string){
    console.log(val);
  }

  exchangeCrypto(form: NgForm){
    const inputCurrency = form.value.inputCurrency;
    const outputCurrency = form.value.outputCurrency;
    let exchangeConstant = inputCurrency/outputCurrency;
    let outputAmount = Number(exchangeConstant) * Number(this.inputAmount);
    this.finalOutputAmount = Math.round( outputAmount * 100 + Number.EPSILON ) / 100;
  }

}
