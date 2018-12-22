/**
 * @description this class contains a lowercase letter,
 *              how many times a letter has been found in a string,
 *              and a chain with its concatenation
 */
export class LetterRepeated {
    letter: string;
    chain: string;
    repetitions: number;

    constructor(letter: string, repetitions: number) {
        this.letter = letter || '';
        this.chain = letter || '';
        this.repetitions = repetitions || 0;
    }
}
