

function homSectionRemove (elemenId){
    const screnHome = document.getElementById(elemenId);
    screnHome.classList.add("hidden");
}

function playGroundSectionAdd (elemenId){
    const screnPlayGround = document.getElementById(elemenId);
    screnPlayGround.classList.remove("hidden");
}

function addBackgroundColor (elemenId){
    const element = document.getElementById(elemenId);
    element.classList.add("bg-orange-500");
}
function changeBackgroundColor (elemenId){
   const element = document.getElementById(elemenId);
   element.classList.remove("bg-orange-500");
}


function getArendomAlfabet(){

    // get or generate random alphabet

    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArray = alphabetString.split("");

    // get random index between 0 and 25

    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);

    const alfabet = alphabetArray[index];
    return alfabet;
}