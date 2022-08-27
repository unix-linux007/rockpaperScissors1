function playRound()
{   
    function getComputerChoice (n)
    {
        const randomNum = Math.floor(Math.random()*n);
    
        if (randomNum === 0)
            return "Rock";
        else if (randomNum === 1)
            return "Paper";
        else
            return "Scissors";
    }

    const computerSelection = getComputerChoice(3);
    //console.log("computer seletected " + computerSelection);

    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";

    let valid = false;

    let playerSelect = prompt("enter your choise among rock papaer scissos");
        
    while (!valid)
    {
        if (playerSelect.toLocaleLowerCase() === computerSelection.toLocaleLowerCase())
        playerSelect = prompt("this is a tie, enter your choice again among rock papaer scissors");
    
        else if ((playerSelect.toLocaleLowerCase() !== "rock") && (playerSelect.toLocaleLowerCase() !== "paper") && (playerSelect.toLocaleLowerCase() !== "scissors"))
        playerSelect = prompt("enter your correct choise among rock papaer scissors");
        
        else
        valid = true;
    }
        const playerSelection = playerSelect;
    

        //console.log("you seletected " + playerSelection);

    function roundResult (playerSelection, computerSelection) 
    {
        if (playerSelection.toLowerCase()=== "rock" && computerSelection.toLowerCase() === "paper")
            return "You loose, paper beats rock";
        else if (playerSelection.toLowerCase()=== "paper" && computerSelection.toLowerCase() === "rock")
            return "You won, paper beats rock";
        else if (playerSelection.toLowerCase()=== "scissors" && computerSelection.toLowerCase() === "paper")
            return "You won, scissors beat paper";
        else if (playerSelection.toLowerCase()=== "paper" && computerSelection.toLowerCase() === "scissors")
            return "You loose, scissors beat paper";
        else if (playerSelection.toLowerCase()=== "scissors" && computerSelection.toLowerCase() === "rock")
            return "You loose, rock beats scissors";
        else if (playerSelection.toLowerCase()=== "rock" && computerSelection.toLowerCase() === "scissors")
            return "You won, rock beats scissors";
        else return "something is wrong, please check players input";

    }

  let res = roundResult(playerSelection, computerSelection);

    console.log("round Result " + res);

    return res;
}

function game()
{
    for (let i=0, j=0; i<5; i++)
    {
        let result = "";

            result = playRound();

        if (result.includes("won"))
            j++;

        if (i === 4)
        {
            if (j >= 3)
                console.log("player won with " + j + " score");
            else
                console.log("player loose with " + j + " score");
        }
    }
}

game();

