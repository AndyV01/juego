

export class Quiz {
    questionIndex = 0;
    score = 0;
    constructor(questions) {
        this.questions = questions;
     }

    getQuestionIndex() {
        return this.questions[this.questionIndex];
    }
    isEnded() {
        return this.questions.length === this.questionIndex

    }
    isover(callback) {
        const over =`
        <h1>GAME OVER ! 
        Puntaje:${this.score}</h1>`
        const button = document.createElement('button');
        button.innerText = 'Volver a jugar';
        button.className = "button";
        button.addEventListener('click', () => { callback(restart()) });
        const element = document.getElementById('quiz');
        element.innerHTML = over, element.append(button);
        function restart () {
            window.location.reload();
        }
    
    }     
    guess(answer) {
        if (this.getQuestionIndex().correctAnswer(answer)) {
            this.questionIndex++;
            this.score++;

        } else {
        this.isover();
         }
    
    }

}