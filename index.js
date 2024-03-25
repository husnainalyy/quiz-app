let count = 2;
let arrAnsCount = 0;
let score = 0;
var isButtonClicked = false;
function questionNumber(event) {
    event.preventDefault();
    // button colours are reset
    let buttons = document.getElementsByClassName("answers");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.backgroundColor = "transparent";
    }
    var answers = document.getElementsByClassName("answers");
    for (var i = 0; i < answers.length; i++) {
        answers[i].disabled = false; 
    }
    isButtonClicked = false;
    // html is changed 
    document.querySelector("#qnumber").innerHTML = `${count} of 10 Question`;
    if (count == 1) {
        document.querySelector("#ques").innerHTML = `What is the capital city of Pakistan?`;
        document.querySelector("#ans1").value = "Okara";
        document.querySelector("#ans2").value = "Islamabad";
        document.querySelector("#ans3").value = "Lahore";
        document.querySelector("#ans4").value = "Karachi";
    }
    else if (count == 2) {
        document.querySelector("#ques").innerHTML = `On what date did Pakistan gain independence?`;
        document.querySelector("#ans1").value = "August 14";
        document.querySelector("#ans2").value = "September 6";
        document.querySelector("#ans3").value = "March 23";
        document.querySelector("#ans4").value = "July 1";
    }
    else if (count == 3) {
        document.querySelector("#ques").innerHTML = `What is the official language of Pakistan?`;
        document.querySelector("#ans1").value = "Urdu";
        document.querySelector("#ans2").value = "Punjabi";
        document.querySelector("#ans3").value = "Sindhi";
        document.querySelector("#ans4").value = "Pashto";
    }
    else if (count == 4) {
        document.querySelector("#ques").innerHTML = `Who is known as the founder of Pakistan?`;
        document.querySelector("#ans1").value = "Allama Iqbal";
        document.querySelector("#ans2").value = "Liaquat Ali Khan";
        document.querySelector("#ans3").value = "Quaid-e-Azam Muhammad Ali Jinnah";
        document.querySelector("#ans4").value = "Benazir Bhutto";
    }
    else if (count == 5) {
        document.querySelector("#ques").innerHTML = `What is the currency of Pakistan?`;
        document.querySelector("#ans1").value = "Rupee";
        document.querySelector("#ans2").value = "Rial";
        document.querySelector("#ans3").value = "Dinar";
        document.querySelector("#ans4").value = "Taka";


    }
    else if (count == 6) {
        document.querySelector("#ques").innerHTML = `Which city is the largest in terms of population in Pakistan?`;
        document.querySelector("#ans1").value = "Islamabad";
        document.querySelector("#ans2").value = "Lahore";
        document.querySelector("#ans3").value = "Karachi";
        document.querySelector("#ans4").value = "Quetta";
    }
    else if (count == 7) {
        document.querySelector("#ques").innerHTML = `How many stars are there on the national flag of Pakistan?`;
        document.querySelector("#ans1").value = "1";
        document.querySelector("#ans2").value = "2";
        document.querySelector("#ans3").value = "3";
        document.querySelector("#ans4").value = "4";
    }
    else if (count == 8) {
        document.querySelector("#ques").innerHTML = `What is the name of the mountain range that separates Pakistan from Afghanistan?`;
        document.querySelector("#ans1").value = "Himalayas";
        document.querySelector("#ans2").value = "Karakoram Range";
        document.querySelector("#ans3").value = "Hindu Kush";
        document.querySelector("#ans4").value = "Pamir Mountains";
    }
    else if (count == 9) {
        document.querySelector("#ques").innerHTML = `Who is the national poet of Pakistan?`;
        document.querySelector("#ans1").value = "Faiz Ahmed Faiz";
        document.querySelector("#ans2").value = "Allama Iqbal";
        document.querySelector("#ans3").value = "Habib Jalib";
        document.querySelector("#ans4").value = "Parveen Shakir";
    }
    else if (count == 10) {

        document.querySelector("#ques").innerHTML = `Which sport is particularly popular in Pakistan?`;
        document.querySelector("#ans1").value = "Soccer";
        document.querySelector("#ans2").value = "Hockey";
        document.querySelector("#ans3").value = "Cricket";
        document.querySelector("#ans4").value = "Tennis";
    }
    else if (count == 11) {
        document.getElementById("box").style.display = "none";
        result();
    }
    else {
        console.log("Error")
    }
    count++;
}
document.querySelector("#next").onclick = function (event) {
    event.preventDefault();
    questionNumber(event);
    arrAnsCount++;
}



// give colour to selected button
// function btnclick(event) {
//     event.preventDefault();
//     var answers = document.getElementsByClassName("answers");
//     for (var i = 0; i < answers.length; i++) {
//         answers[i].style.backgroundColor = "transparent";
//     }
//     event.target.style.backgroundColor = "#ffee32";
//     document.getElementById("next").style.backgroundColor = "rgb(28, 174, 227)";
//     ansChecked(event.target);
// }
function btnclick(event) {
    event.preventDefault();
    var answers = document.getElementsByClassName("answers");
    for (var i = 0; i < answers.length; i++) {
        answers[i].style.backgroundColor = "transparent";
        answers[i].disabled = true; // disable all buttons
    }
    event.target.style.backgroundColor = "#ffee32";
    event.target.disabled = false; // enable the clicked button
    document.getElementById("next").style.backgroundColor = "rgb(28, 174, 227)";
    if (!isButtonClicked) { // only check the answer if a button hasn't been clicked yet
        ansChecked(event.target);
        isButtonClicked = true; // a button has been clicked
    }
}
const questions = ["Islamabad", "August 14", "Urdu", "Quaid-e-Azam Muhammad Ali Jinnah", "Rupee", "Karachi", "1", "Karakoram Range", "Allama Iqbal", "Cricket"]

// function ansChecked(selectedButton) {
//     var selectedValue = selectedButton.value;
//     if (selectedValue == questions[arrAnsCount]) {
//         score++;
//     }
//     selectedButton.disabled = true;
//     console.log(`count = ${count}`)
//     console.log(`score = ${score}, count= ${count - 1} `)
// }
function ansChecked(selectedButton) {
    var selectedValue = selectedButton.value;
    if (selectedValue == questions[arrAnsCount]) {
        score++;
    }
}

function result() {
    document.querySelector("#box").remove()
    document.getElementById("resultDiv").style.display = "block";
    document.querySelector("#correct").insertAdjacentHTML("afterbegin", score)
    let wrong = 10 - score;
    document.querySelector("#wrong").insertAdjacentHTML("afterbegin", wrong)
    if (score >= 7) {
        document.querySelector("#status").insertAdjacentHTML("afterbegin", "Excellent!! You nailed it")
    }
    else if (score >= 5 && score < 7) {
        document.querySelector("#status").insertAdjacentHTML("afterbegin", "Good result Champ!!")
    }
    else {
        document.querySelector("#status").insertAdjacentHTML("afterbegin", "Bad result")
    }


}

