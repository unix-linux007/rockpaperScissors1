function game()
{
  let i=0, j=0, k=1;
//create functions for each buttons by eventlistener
const rock = document.getElementById("rockBtn");
const paper = document.getElementById("paperBtn");
const scissors = document.getElementById("scissorsBtn");

if(rock){rock.addEventListener('click', functRock);}
paper.addEventListener('click', functPaper);
scissors.addEventListener('click', functScissors);

function functRock(){
  playRound("rock");
}

function functPaper(){
  playRound("paper");
}

function functScissors(){
  playRound("scissors");
}

// playRound function

function playRound(playerSelection)
{   
 
    // console.log("you seletected " + playerSelection);

    // create DOM way to add display round no.
    const container1 = document.querySelector('#display');
    const content1 = document.createElement('h4');
    content1.classList.add('displayPlayerSelection');
    content1.textContent = 'Game Round' + ": " + k;
    container1.appendChild(content1);

    k++;

    // create DOM way to add display player selection
    //const container2 = document.querySelector('#display');
   // const content2 = document.createElement('div');
    // content2.classList.add('displayPlayerSelection');
    //content2.textContent = 'you selected' + ": " + playerSelection;
    //container1.appendChild(content2);
    
    //get computer selection automatic

    function getComputerChoice (n)
    {
        const randomNum = Math.floor(Math.random()*n);
    
        if (randomNum === 0)
            return "rock";
        else if (randomNum === 1)
            return "paper";
        else
            return "scissors";
    }

    const computerSelection = getComputerChoice(3);
   // console.log("computer seletected " + computerSelection);

     // create DOM way to add display computer selection
    //const container2 = document.querySelector('#display');
   // const content3 = document.createElement('div');
    //content3.classList.add('displayComputerSelection');
    //content3.textContent = 'computer selected' + ": " + computerSelection;
    //container1.appendChild(content3);


    function roundResult (playerSelection, computerSelection) 
    {
        if (playerSelection === "rock" && computerSelection === "paper")
            return "You loose, paper beats rock";
        else if (playerSelection === "paper" && computerSelection === "rock")
            return "You won, paper beats rock";
        else if (playerSelection === "scissors" && computerSelection === "paper")
            return "You won, scissors beat paper";
        else if (playerSelection === "paper" && computerSelection === "scissors")
            return "You loose, scissors beat paper";
        else if (playerSelection === "scissors" && computerSelection === "rock")
            return "You loose, rock beats scissors";
        else if (playerSelection === "rock" && computerSelection === "scissors")
            return "You won, rock beats scissors";
        else return "this is a tie, click again to select among rock papaer scissors";

    }

  let res = roundResult(playerSelection, computerSelection);

  //  console.log("round Result " + res);

    // create DOM way to add display round result
    //const container2 = document.querySelector('#display');
    const content4 = document.createElement('h5');
    content4.classList.add('displayRoundResult');
    content4.textContent = 'Result' + ": " + res;
    container1.appendChild(content4);

if (res.includes("won"))
  i=i+1;

else if (res.includes("loose"))
   j=j+1;

   const content8 = document.createElement('div');
   content8.classList.add('displayGameResult');
   content8.textContent = 'Player score: ' + i + " & " + " Computer score : " + j;
   container1.appendChild(content8);

if (i >= 5){
   // console.log("player won");
    //const container2 = document.querySelector('#display');
    const content6 = document.createElement('h3');
    content6.classList.add('displayGameResult');
    content6.textContent = 'Player won';
    container1.appendChild(content6);

  }
else if (j >= 5) {
  const content7 = document.createElement('h3');
    content7.classList.add('displayGameResult');
    content7.textContent = 'Computer won';
    container1.appendChild(content7);

}
//    console.log("player loose");

}

}

//game main

game();