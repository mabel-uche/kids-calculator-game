// document.getElementById("count-el").innerText = 5  
// let name = " Mabel"

// let greeting = "Hi my name is "

// let myGreeting = greeting + name

// console.log(myGreeting)



let saveEL = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
// console.log(countEl)
// console.log(saveEl)
let count = 0

function increment() {
    count+= 1
    countEl.innerText = count
    // console.log(count)
    
}
// increment()

function save() {
    let result = " " + count + " -"
    saveEL.innerText += result
    

    // if (count > 0) {
    //     saveEL.innerText += result
    // } else {
    //     saveEL.innerText += count
    // }
   // console.log(result)
}
// save()

function reset() {
    count = 0
    countEl.innerText = count
}
// reset()

// let message = ""
// function restart() {
//     count = 0
//     let x = saveEL.innerText
//     // let y = "recount"
//     saveEL.innerText = ""
//     countEl.innerText = count
//     // message = ""
//     // result = " " + count + " -"
//     // saveEL.innerText = false
    
//     // if (count === 0) {
//     //     message = "Click Increment button"
//     // } else if (count > 0){ 
//     // save(); 
//     // }
//     // saveEL.innerText = message
// }

function refresh() {
    count = 0
    countEl.innerText = count
    saveEL.innerText = "ENTRIES:"

}

// if (result >= 0) {
//     saveEL.innerText += count
// }else {
//     saveEL.innerText = "" 
// }
// let errorEl = document.getElementById("error")

// function error() {
// errorEl.innerText = "som....."
// console.log(errorEl.innerText)
// }
