# Project-02 : BMI Calculator

## Find the code and references below:

### HTML Code:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1 class="heading">BMI Calculator:</h1>

        <form class="form">
            <p>
                <label for="height">Height in cm:</label>
                <input type="text" placeholder="Enter height in cm:" id="height">
            </p>
            <p>
                <label for="weight">Weight in kg:</label>
                <input type="text" placeholder="Enter weight in kg:" id="weight">
            </p>
            <button>Calculate</button>
            <div id="results"></div>
            <div id="weight-guide"></div>
        </form>

        <h2>BMI Weight Guide:</h2>
        <p>Under Weight = Less than 18.6</p>
        <p>Normal Range  = 18.6 and 24.9</p>
        <p>Overweight = Greater than 24.9</p>
    </div>

    <script src="project_02.js"></script>

</body>
</html>
```

## CSS Code:

```
body{
    background-color: lightcyan;
}
```

## Java Script code:
```
const form  = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if (height === "" || height<0 || isNaN(height)) {
        results.innerHTML = "Please give a valid height"
    } else if(weight === "" || weight<0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid weight"
    } else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);
        // SHOW THE RESULT:
        results.innerHTML = `The Body Mass Index is: <span>${bmi}</span>`
    }
});
```

