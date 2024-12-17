

function getHumanChoice(){
    let ans = prompt("Human Choice: ");
    console.log(ans);
    return ans;
};

function getComputerChoice(){
    let computer = Math.floor(Math.random() * 3);
    let choice = ["Rock","Paper","Scissor"];
    console.log(choice[computer]);
    return choice[computer];
}

function playRound(){
    let humanScore = 0;
    let turns = 5;
    let outputString = document.getElementById("Output");
    while(turns){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        if(!(computerChoice.toLowerCase() === humanChoice.toLowerCase())){
            if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissor"){
                outputString.textContent = "Human Wins";
                humanScore += 1;
            }
            else if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock"){
                outputString.textContent = "Human Wins";
                humanScore += 1;
            }
            else if (humanChoice.toLowerCase() === "scissor" && computerChoice.toLowerCase() === "paper"){
                outputString.textContent = "Human Wins";
                humanScore += 1;
            }        
            else{
                outputString.textContent = "Computer Wins";
            }
        }
        else{
            outputString.textContent = "Draw";
        }
        alert(`Your Score:${humanScore}`);
        turns -= 1;
    }
    
    if (humanScore > 2){
        outputString.textContent = "Human Wins!!!!!";
    }
    else{
        outputString.textContent = "Computer Prevail!!!!!";
    }

    
};


