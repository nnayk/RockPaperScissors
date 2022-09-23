function getComputerChoice()
{
    const val = getMoveNum();

    if (val==0) return "rock";
    else if (val==1) return "aper";
    else return "Scissors";
}

function getMoveNum() {
    const NUM_MOVES = 3;
    return Math.floor(Math.random() * NUM_MOVES);
}

function playRound(playerSelection,computerSelection)
{
    if (playerSelection==computerSelection) return "TIE!"
    else if (playerSelection=="rock" && computerSelection=="paper" || 
    playerSelection=="scissors" && computerSelection=="rock" || 
    playerSelection=="paper" && computerSelection=="scissors") return "COMPUTER WINS!"
    else return "you win."
}


function game()
{
    let playerMove="",computerMove="";
    for(let i=0;i<5;i++)
    {
        playerMove=window.prompt("MOVE!!!").toLowerCase();
        computerMove=getComputerChoice();
        playRound(playerSelection,computerSelection);
    }
}
