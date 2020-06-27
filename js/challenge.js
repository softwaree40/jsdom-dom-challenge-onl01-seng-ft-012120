// define UI variable

let plusBtn = document.getElementById("plus")
let minusBtn = document.getElementById("minus")
let heartBtn = document.getElementById("heart")
let pauseBtn = document.getElementById("pause")
let counterH = document.getElementById("counter")

let like = document.querySelector(".likes")
let li = document.createElement("li")
let formThatHasBtn = document.querySelector("#comment-form")
let input = document.getElementById("comment-input")
console.log(input)
// let holdLike = {}
counter = 0;
let intervalID;
plusBtn.addEventListener("click", plusFunc);
pauseBtn.addEventListener("click", pauseFunc);
heartBtn.addEventListener("click", heartFunc);
formThatHasBtn.addEventListener("submit", submitFunc);

loadCounterWhenPageLoad();
function loadCounterWhenPageLoad() {
    intervalID = setInterval(function () {
        console.log(intervalID)
        counterH.textContent = counter

        counter++

    }, 1000)

}


function plusFunc() {

    intervalID = setInterval(function () {
        console.log(intervalID)
        counterH.textContent = counter

        counter++

    }, 1000)
}

minusBtn.addEventListener("click", minuFunc);

function minuFunc() {

    intervalID = setInterval(function () {
        counterH.textContent = counter

        counter--

    }, 1000)
}


function pauseFunc() {

    clearInterval(intervalID)
    heartBtn.disabled = !heartBtn.disabled
    plusBtn.disabled = !plusBtn.disabled
    minusBtn.disabled = !minusBtn.disabled

    if (pauseBtn.innerText === "Resume") {

        pauseBtn.innerText = "Pause"
        loadCounterWhenPageLoad();

    } else {

        pauseBtn.innerText = "Resume"

        clearInterval();
    }


}
function heartFunc() {

    let currentKey = parseInt(counterH.innerText)
    // console.log("My current",currentKey)
    // if(holdLike[currentKey]){
    // holdLike[currentKey]++
    // }else{
    // holdLike[currentKey] = 1
    // }
    li.innerHTML = `${currentKey}: ${intervalID}` + " likes"
    like.appendChild(li)
}

function submitFunc(event) {
    let commentDiv = document.querySelector("#list")
    commentDiv.innerHTML += `${input.value}`
    input.value = ""
    
    
 event.preventDefault();
}


//