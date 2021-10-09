import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minus'
})
export class MinusPipe implements PipeTransform {

  transform(value:any): number { 
    return Math.abs(value);
  }

}
