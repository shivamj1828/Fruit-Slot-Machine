const value1 = document.getElementById("value1")
const value2 = document.getElementById("value2")
const value3 = document.getElementById("value3")

const startButton = document.getElementById("startButton")

const result = document.getElementById("result")

const values = ["🍓","🍒","🍌","🍉","🍇","🥝"]

let animationId;
function randomValues() {
    return values[Math.floor(Math.random()*values.length)]
}
console.log(randomValues())

function startsSlotMachine() {
    if(animationId) clearInterval(animationId)
    animationId = setInterval(()=> {
        value1.innerText = randomValues()
        value2.innerText =randomValues()
        value3.innerText = randomValues()
    },100)
    setTimeout(() => {
        clearInterval(animationId)
        checkResult()
      // console.log(value1,value2,value3)
    },1000)

}

function checkResult() {
    const val1 = value1.innerText
    const val2 = value2.innerText
    const val3 = value3.innerText

    if(val1==val2 && val2==val3) {
        result.textContent = "YOU WON"
        alert("you Won")
        result.style.color = "gold"
    }
    else {
        result.textContent = "Try Again"
        result.style.color = "White"
    }
    
}


startButton.addEventListener("click", startsSlotMachine);