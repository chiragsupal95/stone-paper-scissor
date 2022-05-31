
function findWinner(sysChose,userChoice){
    if(userChoice === "Stone" && sysChose === "scissors"){
        console.log("You Won. system chose "+sysChose);
        document.getElementById('result').innerHTML = "You won"+"</br> User Choice: "+userChoice+ "</br> System Choice: "+sysChose;
        document.getElementById('result').style.color="green";
        
    }
    else if(userChoice === "Scissors" && sysChose === "paper"){
        console.log("You Won. system chose "+sysChose);
        document.getElementById('result').innerHTML = "You won"+"</br> User Choice: "+userChoice+ "</br> System Choice: "+sysChose;
        document.getElementById('result').style.color="green";
    }
    else if(userChoice === "Paper" && sysChose === "stone"){
        console.log("You Won. system chose "+sysChose);
        document.getElementById('result').innerHTML = "You won"+"</br> User Choice: "+userChoice+ "</br> System Choice: "+sysChose;
        document.getElementById('result').style.color="green";
    }
    else if( userChoice === "Paper" && sysChose ==="paper" || 
            userChoice === "Stone" && sysChose ==="stone" || 
            userChoice === "Scissors" && sysChose ==="scissors" ) {
                console.log("Tied. you both chose "+userChoice);
                document.getElementById('result').innerHTML = "Tied. You both chose "+userChoice;
                document.getElementById('result').style.color="green";
            }
    else{
        console.log("System Won. System chose "+sysChose);
        document.getElementById('result').innerHTML = "System won. System Chose "+sysChose+"</br> User Choice: "+userChoice+ "</br> System Choice: "+sysChose;
        document.getElementById('result').style.color="red";
    }
}

function createArray(userChose){
    let ary = ["stone","paper","scissors"];
    let userChoice = userChose;
    let systemChose = ary[Math.floor(Math.random()* ary.length)];
    console.log("System choice: "+systemChose);
    console.log("User choice: "+userChoice);
    findWinner(systemChose,userChoice);
}