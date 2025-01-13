# Background Color Changer:

## Find the code of the project_01

### HTML Code:
``` 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BackGround Changer</title>

    <link rel="stylesheet" href="style.css">
    <style>
    </style>
</head>
<body>
    <div class="colors">
        <h1 class="heading">Color Scheme Switcher:</h1>
        <br><br><br>
        <span class="button" id="grey" style="background-color: grey;">GREY</span>
        <span class="button" id="white" style="background-color: white;">WHITE</span>
        <span class="button" id="yellow" style="background-color: yellow;">YELLOW</span>
        <span class="button" id="green" style="background-color: green;">GREEN</span>
        <span class="button" id="red" style="background-color: red;">RED</span>
        <br><br><br>
        <h3>Try clicking on the above named color to change the whole background color;</h3>
    </div>

    <script src="project_01.js"></script>
</body>
</html>

```

### CSS Code:

```
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    max-width: 100vw;
    max-height: 100%;
    display: flex;
    flex-wrap: wrap;
    border: 5px solid black;
}
.heading{
    font-size: 2rem;
}
.colors{
    margin: 0.5rem;
    padding: 00.1rem;
    gap: 2rem;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
}

.button{
    width: 200px;
    text-align: center;
    border: 2px solid black;
    border-radius: 20px;
    gap: 2rem;
    padding: 10px 30px;
}
```

### JavaScript code:

```
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( function(button) {
    // button.addEventListener('click', function(e){
    button.addEventListener('mouseover', function(e){
        console.log(e)
        console.log(e.target);
        if (e.target.id === 'grey') {
            body.style.backgroundColor = e.target.id
            body.style.color = e.target.id;
            // body.style.animation.buttons.addEventListener('mouseover', function());
        };
        if (e.target.id === 'white') {
            body.style.backgroundColor = e.target.id
            // body.style.color = e.target.id;
        };
        if (e.target.id === 'yellow') {
            body.style.backgroundColor = e.target.id
            // body.style.color = e.target.id;
        };
        if (e.target.id === 'green') {
            body.style.backgroundColor = e.target.id
            // body.style.color = e.target.id;
        };
        if (e.target.id === 'red') {
            body.style.backgroundColor = e.target.id
            // body.style.color = e.target.id;
        };
    })
})
```
