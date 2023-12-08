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