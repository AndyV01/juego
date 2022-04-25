export class Ui {
    constructor (){}

    showQuestion(text) {
        const question = document.getElementById('question');
        question.innerText  = text;
    }
    /**
     * 
     * @param {string[]} choices 
     */
    showChoices(choices, callback) {
      const choicesCont = document.getElementById('choices');
        choicesCont.innerHTML = '';
       
      for (let i = 0; i < choices.length; i++){
          const button = document.createElement('button');
            button.innerText = choices[i];
             button.className = "button";
            button.addEventListener('click', () => callback(choices[i]));
            choicesCont.append(button);
      }
    }

    showScore(score, callback) {
        const quizHtml = `
        <h1>HAS GANADO ! !
        Puntaje maximo: ${score}</h1>
        `
         
        const button = document.createElement('button');
        button.innerText = 'Volver a jugar';
        button.className = "button";
        button.addEventListener('click', () => { callback(restart()) });
        
        const element = document.getElementById('quiz');
        element.innerHTML = quizHtml, element.append(button);
        
        function restart () {
            window.location.reload();
        }

    }

    showProgress(currentQuestion, total) {
     const element = document.getElementById('progress');
     element.innerText = `Pregunta  ${currentQuestion} de ${total}`;
    }
}