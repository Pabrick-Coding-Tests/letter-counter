
export class LowerCaseCounter {
    string: string;
    result: {};
    keys: Array<string>;

    constructor(str: string) {
        this.string = str;
        this.result = this.findLowerCaseRepeated(this.string);
        this.keys = this.findKeys(this.result);
    }

    /**
     * @description returns an object wich properties are the letters and their value are all that letters together
     */
    private findLowerCaseRepeated(string: string) {
        const array = string.match(/[a-z]/g);
        const result = array.reduce((counter, letter) => {
            counter[letter] = (counter[letter] || '' ) + letter;
            return counter;
        }, {});
        return result;
    }

    /**
     * @description extract the keys of an object and return them as an array
     */
    private findKeys(object): Array<string> {
        const array = [];
        Object.keys(object).map(function(index) {
            array.push(object[index].charAt(0));
        });
        return array;
    }
}
