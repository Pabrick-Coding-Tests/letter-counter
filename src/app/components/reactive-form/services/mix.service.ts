import { Injectable } from '@angular/core';

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
    let keysArray, keys1, keys2 = [];
    let result1, result2 = {};
    const result = [];

    if (string1) {
      result1 = this.getLowerCaseRepeated(string1);
      keys1 = this.getKeysFromObject(result1);
    }
    if (string2) {
      result2 = this.getLowerCaseRepeated(string2);
      keys2 = this.getKeysFromObject(result2);
    }

    keysArray = this.mergeArrays(keys1, keys2);
    console.log('Keys', keysArray);

    for (let i = 0; i < keysArray.length; i++) {
      if ((result1[keysArray[i]] && result1[keysArray[i]].length > 1)
       || (result2[keysArray[i]] && result2[keysArray[i]].length > 1)) {
        result.push(this.getResultByLetter(result1[keysArray[i]], result2[keysArray[i]]));
      }
    }

    return this.sortByLength(result).join('/');
  }

  /**
   * @description returns an object wich properties are LetterRepeated
   * @see LetterRepeated
   */
  private getLowerCaseRepeated(string: string) {
    const array = string.match(/[a-z]/g);
    const result = array.reduce((counter, letter) => {
      counter[letter] = (counter[letter] || '' ) + letter;
      return counter;
    }, {});
    console.log(result);
    return result;
  }

  /**
   * @description extract the keys of an object and return them as an array
   */
  private getKeysFromObject(object): Array<string> {
    const array = [];
    Object.keys(object).map(function(index) {
      array.push(object[index].charAt(0));
    });
    return array;
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
