/* Custom js file made by JeanDoe */

//Get Dom elelments and initialize the game
const input = document.querySelector('.game input'),
guess = document.querySelector('.guess'),
checkButton = document.querySelector('.game button'),
restartButton = document.querySelector('.game .btn'),
remainChances = document.querySelector('.chances');

//Set focus on input field
input.focus();

let randomNum = Math.floor(Math.random() * 100);
chance = 10;

//Listen for the click event on the check button
checkButton.addEventListener('click', () => {
    //Decrement the click event on the check button
    chance--;
    //Get value from the input field
    let inputValue = input.value;
    //Check if input value is equal to the random number
    if(inputValue == randomNum){
        //Update guessed number, disable input, check button text and color.
        [guess.textContent, input.disabled] = ['Congratulations', true];
        [checkButton.textContent, guess.style.color] = ['Replay', '#333'];
        checkButton.classList.add('active');
        restartButton.classList.remove('active');
        //Check if value is > random and within 1-99 range.
    }else if(inputValue > randomNum && inputValue < 100){
        //Update the guess text and remaining chances
        [guess.textContent, remainChances.textContent] = ['Your guess is high', chance];
        guess.style.color = '#333';
        //Check if input is < random number and within 1-99 range.
    }else if(inputValue < randomNum && inputValue > 0){
        //Update the guessed number text, and remaining chances
        [guess.textContent, remainChances.textContent] = ['Your guess is low', chance];
        guess.style.color = '#333';
    }else{
        //Update the guessed number text, color and remaining chances
        [guess.textContent, remainChances.textContent] = ['Your number is invalid', chance];
        guess.style.color = '#de0611';
    }
    //Check if the chance is zero
    if(chance == 0 && inputValue !== randomNum){
        //Update check button, disable input, and clear input value.
        //Update guessed number text and indicate user loss.
        [checkButton.textContent, input.disabled, inputValue] = ['Replay', true, ''];
        [guess.textContent, guess.style.color] = ['You lost the game', '#de0611'];
    }
    if(chance < 0){
        window.location.reload();
    }
});


//Double click to reload the page

