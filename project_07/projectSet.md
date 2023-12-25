# projects relaated to dom


## solution code

### project 1
```javascript

console.log("preeti");

const button = document.querySelectorAll('.button');
const body = document.querySelector('body');

button.forEach((btn) => {
  console.log(btn);

  btn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    // if (e.target.id === 'grey') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'white') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'blue') {
    //   body.style.backgroundColor = e.target.id;
    // }
    // if (e.target.id === 'yellow') {
    //   body.style.backgroundColor = e.target.id;
    // }

    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;

      case 'white':
        body.style.backgroundColor = e.target.id;
        break;

      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;

      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;

      case 'purple':
        body.style.backgroundColor = e.target.id;
        break;

      case 'green':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});

```

### project 2
```javascript

const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const msg = document.querySelector('.msg');

  if (height == '' || height < 0 || isNaN(height)) {
    results.innerHTML = `enter a valid height${height}`;
  } else if (weight == '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `enter a valid weight ${weight}`;
  } else {
    const BMI = (weight / ((height * height) / 1000)).toFixed(2);
    results.innerHTML = `${BMI}`;
    if (BMI <= 18.6) {
      msg.innerHTML = `you are under weight`;
    } else if (BMI >= 18.6 && BMI <= 24.9) {
      msg.innerHTML = `you have a normal weight`;
    } else if (BMI > 24.9) {
      msg.innerHTML = `you are over weight`;
    } else {
      msg.innerHTML = `fill required feilds`;
    }
  }
});

```

```javascript

const guesses = document.querySelector('#guessField');
const submit = document.querySelector('#subt');
const prevGuess = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('resultParas');

let number = parseInt(Math.random() * 100 + 1);

const p = document.createElement('p');
const guessArray = [];
const playGame = true;
let numOfGuess = 1;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    let guess = parseInt(guesses.value);
    validate(guess);
  });
}

function validate(guess) {
  if (isNaN(guess)) {
    alert(`enter a valid number`);
  } else if (guess < 1) {
    alert(`enter a number greater than 1`);
  } else if (guess > 100) {
    alert(`enter a number smaller than 100`);
  } else {
    guessArray.push(guess);
    if (numOfGuess === 11) {
      displayGuess(guess);
      displayMsg(`game over. the random number is ${number}`);

      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === number) {
    displayMsg(`you got the number`);
    endGame();
  } else if (guess < number) {
    displayMsg(`number is tooo low`);
  } else if (guess > number) {
    displayMsg(`number is tooo high`);
  }
}

function displayGuess(guess) {
  guesses.value = '';
  prevGuess.innerHTML += `${guess},`;
  numOfGuess++;
  remaining.innerHTML = `${11 - numOfGuess}`;
}

function displayMsg(msg) {
  lowOrHi.innerHTML = <h2>${msg}</h2>;
}

function endGame() {
  guesses.value = '';
  guesses.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id='newbtn'>new game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newbtnButton = document.querySelector("#newbtn")
  newbtnButton.addEventListener('click',function(){
     number = parseInt(Math.random() * 100 + 1);
    guessArray = [];
    numOfGuess = 1;
    prevGuess.innerHTML = ``;
    remaining.innerHTML = `${11 - numOfGuess}`;
    guesses.removeAttribute('disabled');
    startOver.removeChild(p);
     playGame = true;
  })
 
}

```