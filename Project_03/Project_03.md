# Project_03 : Digital Clock

## Find out the codes and the references:

### HTML, CSSS and Java Script Code:

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <!-- <link rel="stylesheet" href="style.css"> -->

    <style>
        *{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        .center{
            padding: 100px;
            border: 2px solid black;
            width: 100vw;
            height: 100vh;
            gap: 20px;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .banner{
            font-size: 50px;
        }
        #clock{
            text-align: center;
            width: 500px;
            border: 2px solid black;
            display: block;
            font-size: 100px;
            font-weight: bolder;
            border-radius: 50px;
            background-color: lightgreen;
            color: darkblue;
        }
    </style>
</head>
<body>
    <div class="center">
        <div class="banner"><span>Your local time:</span></div>
        <div id="clock"></div>
    </div>

    <script>
        const clock = document.getElementById('clock');
        // setInterval method/function is used to set the interval for how long/short interval you want to run this clock:

        setInterval(() => {
            let date  = new Date();
            // console.log(date.toLocaleTimeString());
            clock.innerHTML = date.toLocaleTimeString();
        },1000);
    </script>
</body>
</html>
```
