import { Injectable } from '@angular/core';
import { LowerCaseCounter } from './LowerCaseCounter.class';

@Injectable({
  providedIn: 'root',
})

export class MixService {

  constructor() { }

  /**
   * @description produce a string in which each lowercase letters of s1 or s2 appears as many times as its maximum
   *              if this maximum is strictly greater than 1;
   *              these letters will be prefixed by the number of the string where they appear with their maximum value and :.
   *              If the maximum is in s1 as well as in s2 the prefix is =:.
   */
  public mix(string1: string, string2: string): string {
    let counter1, counter2;

    if (string1) {
      counter1 = new LowerCaseCounter(string1);
      console.log(counter1);
    }
    if (string2) {
      counter2 = new LowerCaseCounter(string2);
      console.log(counter2);
    }

    const keys = this.mergeArrays(counter1.keys, counter2.keys);
    const result = [];

    for (let i = 0; i < keys.length; i++) {
      const currentKey = keys[i];
      if ((counter1.result[currentKey] && counter1.result[currentKey].length > 1)
       || (counter2.result[currentKey] && counter2.result[currentKey].length > 1)) {
        result.push(this.getResultByLetter(counter1.result[currentKey], counter2.result[currentKey]));
      }
    }

    return this.sortByLength(result).join('/');
  }

  /**
   * @description returns a string with the longer chainletter preceded by the number of the object
   */
  private getResultByLetter(string1: string, string2: string): string {
    const str1 = string1 || '';
    const str2 = string2 || '';

    let result = '';
    if (str1.length > str2.length) {
      result = '1:' + str1;
    } else if (str1.length < str2.length) {
      result = '2:' + str2;
    } else if (str1.length === str2.length) {
      result = '=:' + str1;
    }
    return result;
  }

  /**
   * @description merge tow arrays without repeating values
   */
  private mergeArrays(array1: Array<string>, array2: Array<string>): Array<string> {
    const array = [...array1, ...array2];
    const unique = {};
    array.forEach(function(i) {
      if (!unique[i]) {
        unique[i] = true;
      }
    });
    return Object.keys(unique);
  }

  private sortByLength(array: Array<string>): Array<string> {
    return array.sort(this.compareMaxLength);
  }

  /**
   * @description compare two strings by its length,
   *              if they are same length, it returns in alphabetical orden
   */
  private compareMaxLength(a: string, b: string): number {
    let comparison = 0;
    if (a.length > b.length) {
      comparison = -1;
    } else if (a.length < b.length) {
      comparison = 1;
    } else if (a.length === b.length) {
      if (a > b) {
        comparison = 1;
      } else if (a < b) {
        comparison = -1;
      }
    }
    return comparison;
  }

}
