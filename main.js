let getStartBtn = document.getElementById("yourTurn");
let chooseHandPopup = document.getElementById("chooseHandPopup");

getStartBtn.addEventListener('click', ()=> {
    chooseHandPopup.style.display = 'flex';
});

let paperOption = document.getElementById("paperOption");
let rockOption = document.getElementById("rockOption");
let scissorsOption = document.getElementById("scissorsOption");
let userPickedImg = document.getElementById("userPickedImg");

paperOption.addEventListener('click', ()=> {
    chooseHandPopup.style.display = 'none';
    userPickedImg.src = "images/icon-paper.svg";  
    document.querySelector('.user-choice-container').style ='background-color:  hsl(230, 89%, 62%)';
});
rockOption.addEventListener('click', ()=> {
    chooseHandPopup.style.display = 'none';
    userPickedImg.src = "images/icon-rock.svg";  
    document.querySelector('.user-choice-container').style ='background-color:  hsl(349, 71%, 52%);';
});
scissorsOption.addEventListener('click', ()=> {
    chooseHandPopup.style.display = 'none';
    userPickedImg.src = "images/icon-scissors.svg";
    document.querySelector('.user-choice-container').style ='background-color:   hsl(39, 89%, 49%) ';
});

let playBtn = document.getElementById("playBtn");
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
playBtn.addEventListener('click', () => {
    let randomIndex = Math.floor(Math.random() * hands.length);
    let houseChoice = hands[randomIndex];
    document.getElementById('housePickedImg').src = hands[randomIndex].imageUrl;
    hands[randomIndex].hand === 'scissors'
    ? document.getElementById('houseDiv').style = 'background-color:   hsl(39, 89%, 49%) '
    : hands[randomIndex].hand === 'paper' 
    ? document.getElementById('houseDiv').style = 'background-color:   hsl(230, 89%, 62%)  '
    : document.getElementById('houseDiv').style = 'background-color:  hsl(349, 71%, 52%);';
    console.log(houseChoice);
});