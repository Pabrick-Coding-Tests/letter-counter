
export class LowerCaseCounter {
    string: string;
    result: {};
    keys: Set<string>;

    constructor(str: string) {
        this.string = str || '';
        this.result = {};
        this.keys = new Set();
        if (str) {
            const array = this.string.match(/[a-z]/g);
            this.result = array.reduce((counter, letter) => {
                this.keys.add(letter);
                counter[letter] = (counter[letter] || '' ) + letter;
                return counter;
            }, {});
        }
    }
}
