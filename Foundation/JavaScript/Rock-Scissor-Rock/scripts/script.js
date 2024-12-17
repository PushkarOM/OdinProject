
function getHumanChoice(){
    let human = document.getElementById("playerInput").value
    console.log(human);
    return human;
};

function getComputerChoice(){
    let computer = Math.floor(Math.random() * 3);
    let choice = ["Rock","Paper","Scissors"];
    console.log(choice[computer]);
    return choice[computer];
}

function playRound(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    let outputString = document.getElementById("Output");
    if(!(computerChoice.toLowerCase() === humanChoice.toLowerCase())){
        if (humanChoice.toLowerCase() === "rock" && computerChoice.toLowerCase() === "scissor"){
            outputString.textContent = "Human Wins";
        }
        if (humanChoice.toLowerCase() === "paper" && computerChoice.toLowerCase() === "rock"){
            outputString.textContent = "Human Wins";
        }
        if (humanChoice.toLowerCase() === "scissor" && computerChoice.toLowerCase() === "paper"){
            outputString.textContent = "Human Wins";
        }        
        else{
            outputString.textContent = "Computer Wins";
        }
    }
    else{
        outputString.textContent = "Draw";
    }
    console.log(outputString);
};


