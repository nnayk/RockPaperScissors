function getComputerChoice()
{
    const val = getMoveNum();

    if (val==0) return "Rock";
    else if (val==1) return "Paper";
    else return "Scissors";
}

function getMoveNum() {
    const NUM_MOVES = 3;
    return Math.floor(Math.random() * NUM_MOVES);
}


