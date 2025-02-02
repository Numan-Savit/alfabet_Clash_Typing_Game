// function play(){
//     // step-1 hide the home screen

//     const homeSection = document.getElementById("home-screen");
//     homeSection.classList.add("hidden");

//     // step-2 show the play ground

//     const playgroundSection = document.getElementById("play-ground");
//     playgroundSection.classList.remove("hidden");
// }


function handleKeyBoardButton(event){

    const playerPressed = event.key;

    //   get the expected word

    const currentAlfElement = document.getElementById("current-alfabet");
    const currentAlfabet = currentAlfElement.innerText;
    const currentAlfabetLowerCase = currentAlfabet.toLowerCase();
    

    // check match or not

    if(playerPressed === currentAlfabetLowerCase){

        // update score

        const scoreElement = document.getElementById("score");
        const currentScore = scoreElement.innerText;
        const newScore = parseInt(currentScore) + 1;
        scoreElement.innerText = newScore;

        // star a new word and color change
        
        changeBackgroundColor(currentAlfabetLowerCase);
        continueGame();
    }
    else{
        
        const currentLifeElement = document.getElementById("life");
        const currentLife = currentLifeElement.innerText;
        const newLife = parseInt(currentLife) - 1;
        currentLifeElement.innerText = newLife;

        if(newLife === 0){
            homSectionRemove("play-ground");
            playGroundSectionAdd("final-score");

            // update last score

            const lastScoreElement = document.getElementById("score");
            const lastScore = lastScoreElement.innerText;
            const lastScoreElement2 = document.getElementById("last-score");
            lastScoreElement2.innerText = lastScore;

            // clear the last selected alfabet

            changeBackgroundColor(currentAlfabetLowerCase);

            
        }
    }
}

document.addEventListener("keyup", handleKeyBoardButton);


function continueGame(){

    // step-1 generate random word

    const randomWord = getArendomAlfabet();

    // step-2 show the random word screen

    const cureentAlfElement = document.getElementById("current-alfabet");
    cureentAlfElement.innerText = randomWord;

    // step-3 show background color

    addBackgroundColor(randomWord);

}



function play(){

    // all element hidden call function

    homSectionRemove("home-screen");
    homSectionRemove("final-score");
    playGroundSectionAdd("play-ground");

    // score and life reset

    const lifeElement = document.getElementById("life");
    lifeElement.innerText = 5;

    const scoreElement = document.getElementById("score");
    scoreElement.innerText = 0;

    continueGame();
}