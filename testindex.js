let output = document.getElementById('output');
let ajaxhttp = new XMLHttpRequest();
console.log(ajaxhttp);







output.innerHTML = "nothing";

let answers = {}
    let randomNumber = generate_random(15);
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
;
