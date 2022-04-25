
export class Question {

    /**
     * 
     * 
     * @param {string} text  - text of the question
     * @param {string[]} choices  - array of choices
     * @param {string} answer  - answer to the question
     */

    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }
/**
 * 
 * @param {string} choices  - array of choices
 * @returns {boolean}  - true if the answer is correct
 */

    correctAnswer(choices) {
        return choices === this.answer;
    }
    
}
