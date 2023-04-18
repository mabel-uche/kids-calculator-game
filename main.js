
let resultEl = document.getElementById("result-el")
let messageEl = document.getElementById("message-el")
let scoreEl = document.getElementById("score-el")

let val = ""
function display(val){
 resultEl.value += val
console.log(resultEl.value)
}
display(val)

function solve(){
    let cal = resultEl.value
    let sum= eval(cal);
    let message = ""
    let win = "Congrats!!!!" 
    let loose = "You are out"
    let replay= "Try Again"
    let exscore = 0
    resultEl.value = sum
    
    if (sum < 12){
        message = replay 
        exscore = 0
        message = "<span style='color:yellow'>" + message +"</span>";
        } else if (sum  === 12){
        message = win
        exscore+= 1
        message = "<span style='color:green'>" + message +"</span>";
    }else{
        message = loose
        exscore = 0
        message = "<span style='color:red'>" + message +"</span>";
    }
    messageEl.innerHTML = message
    scoreEl.innerHTML = exscore
    // console.log(message)
}

// function score(){
//     let score = 0
//     message = again
//     scoreEl.value+= score
// }

// let message = ""
// function game(){
//     let message = ""
//     if (resultEl.value <= 12){
//         message = "Do you want to draw a new card?"
//     } else if (resultEl.value  === 12){
//         message = "you win"
//     }else{
//         message = "you are out of the game"
//     }
//     messageEl.value = message
//     // console.log(message)
// }
// game()


// let str = '';
// function clear(){
//     resultEl.value = str;

//     console.log(resultEl.value)
// }

// clear();


   