'use strict'

let randNum = Math.floor(Math.random() * 100) + 1;
let attempts;

const theGame = (attempts, num) => {
	let number;
    let playAgain;
	console.log(num);

    number = prompt('Угадай число от 1 до 100');
    if(number === null) return;
    while (isNaN(parseInt(number))) {
        number = prompt('Введите число');
        if(number === null) return;
    }
    
	if (Number(number) > num) {
		attempts -= 1;
		alert('Загаданное число меньше, осталось попыток: ' + attempts);
	}

	if (Number(number) < num) {
		attempts -= 1;
		alert('Загаданное число больше, осталось попыток: ' + attempts);
	}

	if (attempts === 0) {
        playAgain = confirm('Попытки закончились, хотите сыграть еще?');
    }

    function checkNumber() {
	    if (Number(number) !== num) {
			return theGame(attempts, num);
		} else {
			alert('Поздравляю, вы угадали');
		}
    }

    switch(playAgain) {
        case true:
            randNum = Math.floor(Math.random() * 100) + 1;
            theGame (10, randNum);
        break;
        case false:
            alert('Удачи!');
            return;
        break;
        case undefined:
            return checkNumber();
        break;
    }
      
}


theGame(10, randNum);
