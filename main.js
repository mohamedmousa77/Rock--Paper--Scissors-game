let getStartBtn = document.getElementById("yourTurn"); // user hand - to choose hand
let chooseHandPopup = document.getElementById("chooseHandPopup");
let gameContainer = document.getElementById("gameContainer");

// getStartBtn.addEventListener('click', ()=> {
//     chooseHandPopup.style.display = 'flex';
// });

let paperOption = document.getElementById("paperOption");
let rockOption = document.getElementById("rockOption");
let scissorsOption = document.getElementById("scissorsOption");
let userPickedImg = document.getElementById("userPickedImg");

let userChoice;
let hands = [
    {
        'hand':'rock',
        'imageUrl':'images/icon-rock.svg'
    },
    {
        'hand':'paper',
        'imageUrl':'images/icon-paper.svg'
    },
    {
        'hand':'scissors',
        'imageUrl':'images/icon-scissors.svg'
    }
];

paperOption.addEventListener('click', ()=> {
    userChoice = hands[1];
    chooseHandPopup.style.display = 'none';
    gameContainer.style.display = 'flex';
    housePick();
    userPickedImg.src = "images/icon-paper.svg";
    document.querySelector('.user-choice-container').style ='background-color:  hsl(230, 89%, 62%)';
});
rockOption.addEventListener('click', ()=> {
    userChoice = hands[0];
    chooseHandPopup.style.display = 'none';
    gameContainer.style.display = 'flex';
    housePick();
    userPickedImg.src = "images/icon-rock.svg";  
    document.querySelector('.user-choice-container').style ='background-color:  hsl(349, 71%, 52%);';
});
scissorsOption.addEventListener('click', ()=> {
    userChoice = hands[2];
    chooseHandPopup.style.display = 'none';
    gameContainer.style.display = 'flex';
    housePick();
    userPickedImg.src = "images/icon-scissors.svg";
    document.querySelector('.user-choice-container').style ='background-color:   hsl(39, 89%, 49%) ';
});

let houseChoice;

function housePick () {
    console.log("housePick game called!");
    let randomIndex = Math.floor(Math.random() * hands.length);
    houseChoice = hands[randomIndex];
    // To update the layout:
    document.getElementById('housePickedImg').src = hands[randomIndex].imageUrl;
    hands[randomIndex].hand === 'scissors'
    ? document.getElementById('houseDiv').style = 'background-color:   hsl(39, 89%, 49%) '
    : hands[randomIndex].hand === 'paper' 
    ? document.getElementById('houseDiv').style = 'background-color:   hsl(230, 89%, 62%)  '
    : document.getElementById('houseDiv').style = 'background-color:  hsl(349, 71%, 52%);';
    console.log(`houseChoice: ${houseChoice.hand}`);

    calculateTheGameWinner();
}

let playBtn = document.getElementById("playBtn");
let gameScoreTxt = document.getElementById("gameScore");
let userScore = document.getElementById("userScore");

let houseWinCircleGlow = document.getElementById("houseWinCircleGlow");
let userWinCircleGlow = document.getElementById("userWinCircleGlow");

playBtn.addEventListener('click', ()=>{
    chooseHandPopup.style.display = 'flex';
    gameContainer.style.display = 'none';
});
// ! Rock--Paper--Scissors logic
function calculateTheGameWinner() {
    console.log("Calculate game called!");
    let currentScore = Number.parseInt(userScore.textContent);
    if(userChoice.hand === houseChoice.hand){
        gameScoreTxt.textContent = 'You Draw';
        userWinCircleGlow.style.display = 'none';
        houseWinCircleGlow.style.display = 'none';
    }
    else if (userChoice.hand === 'rock' && houseChoice.hand === 'paper'){
        gameScoreTxt.textContent = 'You Lose';
        userWinCircleGlow.style.display = 'none';
        houseWinCircleGlow.style.display = 'flex';
    }
    else if (userChoice.hand === 'rock' && houseChoice.hand === 'scissors'){
        gameScoreTxt.textContent = 'You Win';
        userWinCircleGlow.style.display = 'flex';
        houseWinCircleGlow.style.display = 'none';
        currentScore ++;
        userScore.textContent = currentScore;
        console.log(`User Win! current score=  ${currentScore}`);
    }

    else if (userChoice.hand === 'paper' && houseChoice.hand === 'rock'){
        gameScoreTxt.textContent = 'You Win';
        userWinCircleGlow.style.display = 'flex';
        houseWinCircleGlow.style.display = 'none';
        currentScore ++;
        userScore.textContent = currentScore;
        console.log(`User Win! current score=  ${currentScore}`);
    }
    else if (userChoice.hand === 'paper' && houseChoice.hand === 'scissors'){
        gameScoreTxt.textContent = 'You Lose';
        userWinCircleGlow.style.display = 'none';
        houseWinCircleGlow.style.display = 'flex';
    }
    
    else if (userChoice.hand === 'scissors' && houseChoice.hand === 'rock'){
        gameScoreTxt.textContent = 'You lose';
        userWinCircleGlow.style.display = 'none';
        houseWinCircleGlow.style.display = 'flex';
    }
    else if (userChoice.hand === 'scissors' && houseChoice.hand === 'paper'){
        gameScoreTxt.textContent = 'You Win';
        userWinCircleGlow.style.display = 'flex';
        houseWinCircleGlow.style.display = 'none';
        currentScore ++;
        userScore.textContent = currentScore;
        console.log(`User Win! current score=  ${currentScore}`);
    }
    
}