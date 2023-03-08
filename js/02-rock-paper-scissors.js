
let userHand = prompt('Please Select rock, paper and scissors');
if(!(userHand==="rock" || userHand==="paper" || userHand==="scissors")){
    alert("Please Enter a Valid Answer.")
}

let cpuHand;

generateHand();
check();

function generateHand(){
    let random = Math.floor(Math.random());

    if(random === 1 )
        cpuHand = 'rock';
    else if(random === 2 )
        cpuHand = 'paper';
    else if(random === 3 )
        cpuHand = 'scissors';

    console.log(cpuHand);    
    
        
}

function check(){
    if (cpuHand === userHand)
        alert ('The game equalised');
    else{
        
        let isWin = false;

        if(cpuHand === 'rock' && userHand === 'paper' )
            isWin = true;
        else if(cpuHand === 'paper' && userHand === 'scissors')
            isWin = true;
        else if(cpuHand === 'scissors' && userHand === 'rock')
            isWin = true;

        if(isWin === true)
            alert('You Won!');
        else
            alert('You Lost!');
        
    }
}
