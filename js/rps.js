function playRound()
{   
    function getComputerChoice(n)
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

    function playerSelect(){
        let btns = document.querySelectorAll('button');

        btns.forEach(function (i) {
            i.addEventListener('click', function() {
             // return i;
              console.log(i);
                });
            });
       
    }

      
      let playerSelection = ""; 
   //  playerSelection = playerSelect();
     
    let valid = false;
    while (!valid)
    {
        if (playerSelection === computerSelection)
            {
                const container = document.querySelector('#board');
                const content5 = document.createElement('p');
                content5.classList.add('content6');
                content5.textContent = "this is a tie, select your choice again among rock papaer scissors";
                container.appendChild(content5);

                playerSelection = playerSelect();

            }
    
        else if ((playerSelection !== "Rock") && (playerSelection !== "Paper") && (playerSelection !== "Scissors"))
           {
            const container = document.querySelector('#board');
            const content6 = document.createElement('p');
                content6.classList.add('content6');
                content6.textContent = "select your correct choise among rock papaer scissors";
                container.appendChild(content6);

                playerSelection = playerSelect();
           }
        
        else
            valid = true;
    }

    

        //console.log("you seletected " + playerSelection);
       const container = document.querySelector('#board');

        const content2 = document.createElement('p');
        content2.classList.add('content2');
        content2.textContent = "you seletected " + playerSelection;
        container.appendChild(content2);
        

    function roundResult(playerSelection, computerSelection) 
    {
        if (playerSelection === "Rock" && computerSelection === "Paper")
            return "You loose, paper beats rock";
        else if (playerSelection === "Paper" && computerSelection === "Rock")
            return "You won, paper beats rock";
        else if (playerSelection === "Scissors" && computerSelection === "Paper")
            return "You won, scissors beat paper";
        else if (playerSelection === "Paper" && computerSelection === "Scissors")
            return "You loose, scissors beat paper";
        else if (playerSelection === "Scissors" && computerSelection === "Rock")
            return "You loose, rock beats scissors";
        else if (playerSelection === "Rock" && computerSelection === "Scissors")
            return "You won, rock beats scissors";
        else 
            return "something is wrong, please check players input";

    }

  let res = roundResult(playerSelection, computerSelection);

    //console.log("round Result " + res);
   // const container = document.querySelector('#board');

    const content1 = document.createElement('p');
    content1.classList.add('content1');
    content1.textContent = "round Result " + res;
    container.appendChild(content1);

    return res;
}

function game()
{

    const container = document.querySelector('#display');

    const content = document.createElement('p');
    content.classList.add('content');
    content.textContent = 'Please enter your choise among rock papaer & scissors';

    container.appendChild(content);

    for (let i=0, j=0; i<5; i++)
    {
        let result = "";

            result = playRound();

        if (result.includes("won"))
            j++;

        if (i === 4)
        {
            if (j >= 3){
             //   console.log("player won with " + j + " score");
                const container = document.querySelector('#board');

                const content = document.createElement('p');
                content.classList.add('content');
                content.textContent = "player won with " + j + " score";
                container.appendChild(content);
            }
            else{
               // console.log("player loose with " + j + " score");
                const container = document.querySelector('#board');

                const content = document.createElement('p');
                content.classList.add('content');
                content.textContent = "player loose with " + j + " score";
                container.appendChild(content);

            }
        }
    }
}

game();