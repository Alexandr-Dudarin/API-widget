window.onload = function () {
  const canvas = document.getElementById('myCanvas');
  const context = canvas.getContext('2d');

  context.strokeRect(50, 50, 100, 100);

  context.lineWidth = 7;
  context.strokeStyle = 'red';
  context.strokeRect(200, 50, 100, 100);

  context.lineWidth = 12;
  var lg = context.createLinearGradient(350, 50, 450, 150);
  lg.addColorStop(0, 'yellow');
  lg.addColorStop(1, 'red');
  context.strokeStyle = lg;
  context.strokeRect(350, 50, 100, 100);
};


function askFriendName() {
    const friendName = prompt("Здравствуйте, как вас зовут?:");
    const outputDiv = document.getElementById('output'); 

    if (friendName !== null && friendName.trim() !== "") {
        outputDiv.textContent = "Приятно познакомиться, " + friendName + "!";
    } else {
        outputDiv.textContent = "Вы не ввели имя.";
    }
}

setTimeout(askFriendName, 10000);
