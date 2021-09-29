let answers 
 let button = document.querySelector("button");
let answer = document.querySelector("#answer");


document.addEventListener("DOMContentLoaded", () => {
  fetch('http://localhost:3000/answers')
  .then(response => response.json())
  .then(answers => {
     button.addEventListener("click", () => {
      const index = Math.floor(Math.random() * answers.length) 
      console.log(answers[index])
      answer.innerHTML = answers[index]
      
       
     
      })
  })

})



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
signUpDiv.addEventListener("click", createSignUpForm)





