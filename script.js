function respondYes() {
    document.getElementById('yesButton').style.display = 'none';
    document.getElementById('noButton').style.display = 'none';
    document.getElementById('gif').src = 'assets/answer.gif'; // Change to the path of your alternate GIF
    document.querySelector('h1').textContent = 'Yay! Glad you didn\'t say no. ;)';
}

function moveNoButton() {
    var button = document.getElementById('noButton');
    var newX = Math.random() * (window.innerWidth - button.clientWidth);
    var newY = Math.random() * (window.innerHeight - button.clientHeight);
    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}