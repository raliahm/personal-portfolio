const choices = ['rock', 'paper', 'scissors'];
let wins = 0;
let losses = 0;
let ties = 0;
  const userSections = {
    rock: document.getElementById('userRock'),
    paper: document.getElementById('UserPaper'),
    scissors: document.getElementById('userScissors')
  };

  const botImg = document.querySelector('#bot img');
  botImg.style.width = "100px"; // optional styling

  function getBotChoice() {
    return choices[Math.floor(Math.random() * 3)];
  }

function updateScoreboard() {
  document.getElementById('wins').textContent = wins;
  document.getElementById('losses').textContent = losses;
  document.getElementById('ties').textContent = ties;
}
  function playGame(userChoice) {
    const botChoice = getBotChoice();
    botImg.src = `images/${botChoice}.png`;
    botImg.alt = botChoice;
    const messageDiv = document.getElementById("game-message");


    if (userChoice === botChoice) {
      ties = ties + 1;
      messageDiv.textContent = `You both chose:  ${userChoice}`;
      messageDiv.style.color = "blue"; 
       

    } else if (
      (userChoice === 'rock' && botChoice === 'scissors') ||
      (userChoice === 'paper' && botChoice === 'rock') ||
      (userChoice === 'scissors' && botChoice === 'paper')
    ) {
      wins = wins + 1;
      messageDiv.textContent = `You win:  ${userChoice} beats ${botChoice}`;
      messageDiv.style.color = "green"; 
    } else {
      losses = losses + 1;
      messageDiv.textContent = `You lost: ${botChoice} beats ${userChoice}`;
      messageDiv.style.color = "red"; 
    }
    updateScoreboard();
  }

  // Add event listeners to user options
  Object.entries(userSections).forEach(([choice, element]) => {
    element.addEventListener('click', () => playGame(choice));
  });

document.getElementById('resetBtn').addEventListener('click', () => {
  wins = 0;
  losses = 0;
  ties = 0;
  updateScoreboard();
   document.getElementById('game-message').textContent = '';
  botImg.src = 'images/questionmark.png';
  botImg.alt = 'Waiting...';

    Object.values(userSections).forEach(section => section.classList.remove('selected'));

});
