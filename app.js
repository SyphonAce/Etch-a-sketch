const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');

const shakebutton = document.querySelector('.shake')

const MOVE_AMOUNT = 10;

const { width, height} = canvas;


let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;

let hue =0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();//starts the drawing
ctx.moveTo(x,y);
ctx.lineTo(x,y);
ctx.stroke();


function draw( { key }) {

    hue +=10;
    ctx.strokeStyle = `hsl(${Math.random() * 360}, 100%, 50%)`;

    console.log(key);
    ctx.beginPath();
    ctx.moveTo(x, y);

    switch (key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT;
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT;
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT;
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT;
            break;
        default:
            break;


    }


    

    //x -= MOVE_AMOUNT;
    //y -= MOVE_AMOUNT;
    ctx.lineTo(x, y);
    ctx.stroke();
}

function handleKey(evt) {
    evt.preventDefault();
    draw({ key: evt.key });
    if (evt.key.includes('Arrow')) {
        evt.preventDefault();
    
    
    
    console.log(evt.key);
    console.log('HANDLING KEY');
    }
}

function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', function() {
        canvas.classList.remove('shake');
    },
    {once: true }
);
}





window.addEventListener('keydown', handleKey);
shakebutton.addEventListener('click', clearCanvas);
