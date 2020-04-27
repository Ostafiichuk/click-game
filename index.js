let $start = document.querySelector('#start');
let $game = document.querySelector('#game');
let score;
let $time = document.querySelector('#time');
let isGameStarted = false;
let $result = document.querySelector('#result-header');
let $input = document.querySelector('#game-time');


$start.addEventListener('click', startGame);
$game.addEventListener('click', handleBoxClick);

function startGame() {
    isGameStarted = true;
    score = 0;
    $result.innerHTML = 'Ваш результат:';
    $result.classList.add('hide');
    $time.textContent = $input.value;
    $start.classList.add('hide');
    $game.style.backgroundColor = '#fff';

    let interval = setInterval(function () {
        let time = parseFloat($time.textContent);

        if (time <= 0) {
            clearInterval(interval);
            endGame();
        } else {
            $time.textContent = (time - 0.1).toFixed(1);
        }
    }, 100);

    renderBox();
};

function endGame() {
    isGameStarted = false;
    $result.classList.remove('hide');
    $result.innerHTML += score;
    $game.innerHTML = '';
    $start.classList.remove('hide');
    $game.style.backgroundColor = 'red  ';
};

function handleBoxClick(e) {
    if (isGameStarted == true) {
        if (e.target.dataset.box) {
            score++;

            renderBox();
        }
    }

};

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function renderBox() {
    $game.innerHTML = '';
    let box = document.createElement('div');

    box.style.height = box.style.width = '50px';
    box.style.position = 'absolute';
    box.style.backgroundColor = 'rgb(' + getRandomInt(256) + ',' + getRandomInt(256) + ',' + getRandomInt(256) + ')';
    box.style.top = getRandomInt(250) + 'px';
    box.style.left = getRandomInt(250) + 'px';
    box.style.cursor = 'pointer';
    box.setAttribute('data-box', true);

    $game.insertAdjacentElement('afterbegin', box);
};
