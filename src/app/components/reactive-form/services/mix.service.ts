import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class MixService {

  constructor() { }

  public mix(string1: string, string2: string): any {
    let array1 = [];
    let array2 = [];
    const result = '';

    if (string1) {
      const result1 = this.getLowerCaseRepeated(string1);
      array1 = this.getSortedArray(result1);
    }
    if (string2) {
      const result2 = this.getLowerCaseRepeated(string2);
      array2 = this.getSortedArray(result2);
    }

    console.log(array1);
    console.log(array2);
    return result;
  }

  private getLowerCaseRepeated(string: string): Object {
    const array = string.match(/[a-z]/g);
    const result = array.reduce((counter, letter) => {
      counter[letter] = (counter[letter] || '' ) + letter;
      return counter;
    }, {});
    return result;
  }

  private getSortedArray(object): Array<any> {
    const array = Object.keys(object).map(function(index) {
      const letter = object[index];
      return letter;
    });
    return array.sort(this.compareMaxLength);
  }

  private compareMaxLength(a: string, b: string): number {
    let comparison = 0;
    if (a.length > b.length) {
      comparison = -1;
    } else if (a.length < b.length) {
      comparison = 1;
    }
    return comparison;
  }

}
