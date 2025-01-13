const randomColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
        color+= hex[Math.floor(Math.random() *16)]
    }
    return color;
};

let intervalId;
// start changing the bgcolor
const startChangingColor = function(){
    const changeBgColor = function(){
        document.body.style.backgroundColor = randomColor();
    }
    intervalId = setInterval(changeBgColor, 1000);
}

// stop changing the bgcolor
const stopChangingColor = function(){
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);


