let button = document.getElementById('timeout');
let button2 = document.getElementById('interval-start');
let buttonStop = document.getElementById('interval-stop');
let intervalDiv = document.getElementById('interval-div');
let time = 0;

button.addEventListener('click', () =>{
    setTimeout( () => {
    let div = document.createElement('div');
    let timeOut = document.getElementById('timeout-div');
    div.style.backgroundColor = 'red';
    div.innerHTML = "Mon timout vient de créer ce div 2 secondes après le click sur le bouton !";
        timeOut.appendChild(div);
    }, 2000);
});

//2

button2.addEventListener('click', () => {
    let interval = setInterval( () => {
        intervalDiv.innerHTML = time;
        time += 60;
    }, 60000);

    buttonStop.addEventListener('click', () => {
        clearInterval(interval);
    });
});