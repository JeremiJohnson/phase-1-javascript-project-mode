type = "text/Javascript";
function generate_random(max_number) {
    return Math.round(Math.random()*max_number);
}


let button = document.querySelector("button");
let answer = document.querySelector("#answer");

button.addEventListener("click", function() {

    let randomNumber = generate_random(16);
    let answerText = "";

    if (randomNumber == 0) {
        
    answerText = "You can count on it!";
    }
    else if (randomNumber == 1) {

    answerText = "Dont hold your breath";
    }
    else if (randomNumber == 2) {

    answerText = "You dont want to know";
    }

    else if (randomNumber == 3) {

    answerText = "Absolutely!";
    }

    else if (randomNumber == 4) {

    answerText = "Its not looking good";
    }

else if (randomNumber == 5) {

answerText = "Actually...this one i'm unsure about...";
}

else if (randomNumber == 6) {

answerText = "Do you really want the answer to that...";
}

else if (randomNumber == 7) {

answerText = "100% yes!";
}

else if (randomNumber == 8) {

answerText = "Not a chance!";
}

else if (randomNumber == 9) {

answerText = "You got this!";
}

else if (randomNumber ==10) {

answerText = "I wouldn't get my hopes up...";
}

else if (randomNumber == 11) {

answerText = "I can't with you right now...come back later";
}

else if (randomNumber == 12) {

answerText = "Most definitely!";
}

else if (randomNumber == 13) {

answerText = "I hate to be the bearer of bad news buuuut.....";}


else if (randomNumber == 14) {

answerText = "Most likely";
}

else if (randomNumber == 15) {

answerText = "Not a chance in hell";
}

else if (randomNumber == 16) {

answerText = "Come on...Really?? Youre gonna ask me...The Void...gaterkeeper of infinite knowlede and wisdom...a question like that!";
}

answer.innerHTML = answerText;
});

    let a1 = document.getElementById("flora"); 
    let a2 = document.getElementById("vacuum"); 
    let a3 = document.getElementById("time");
    let x; 

    const audioSources = ["file:///C:/Users/10thl/OneDrive/Documents/The%20Danger%20Room/ASK%20THE%20VOID_files/voyagetotheflorarealm%20[2020-11-06%20034320].wav", "file:///C:/Users/10thl/OneDrive/Documents/The%20Danger%20Room/ASK%20THE%20VOID_files/Inside%20the%20Vacuum.wav", "file:///C:/Users/10thl/OneDrive/Documents/The%20Danger%20Room/ASK%20THE%20VOID_files/theshapeoftime%20[2020-11-06%20035910].wav"];
const player = document.getElementById("player");
function playAudio() {
    let audioSource = audioSources[Math.floor(Math.random() * audioSources.length)];
    player.src = audioSource;
};
player.addEventListener('ended', playAudio);
playAudio(); // start audio playing immediately


const signUpDiv = document.querySelector("#signup")
const createSignUpForm = () => {
  const signUpForm = document.createElement("form")
  const emailField = document.createElement("input")
  emailField.type = "text"
  emailField.placeholder = "Input email"
  const submitBtn = document.createElement("button")
  submitBtn.type = "submit"
  submitBtn.innerText = "Sign Up"
  signUpForm.append(emailField, submitBtn)
  signUpDiv.append(signUpForm)
}
signUpDiv.addEventListener("click", createSignUpForm )



