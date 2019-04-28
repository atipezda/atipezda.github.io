/*jshint esversion: 6 */
const HEIGHT = window.innerHeight;
const WIDTH = window.innerWidth;
var textAni = true;


let canvas = document.getElementById('canvas');
canvas.height = HEIGHT;
canvas.width = WIDTH;
let ctx = canvas.getContext('2d');

let amount = Math.floor(window.innerWidth /40);
var squares = [[],[],[]];
var MouseDrops = [];
var fillstyles = ['#808A8E','#698175','#555B5E'];
var layersAmount = [amount+5,amount,amount+5];

var raindrop ={
    height: 15,
    width: 15
};

function randomColor(){
    let r = getRandomInt(0,255);
    let g = getRandomInt(0,255);
    let b = getRandomInt(0,255);
    return `rgb(${r},${g},${b})`;
}


function spanColor(){
    for(let t =0; t<document.getElementsByTagName('span').length;t+=1){
        document.getElementsByTagName('span')[t].style.color = randomColor();
    }
}
spanColor();



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


class square {
    constructor() {
        this.x = getRandomInt(0 + 1, canvas.width - 1);
        // this.x = WIDTH/2;
        this.y = getRandomInt(0 + 1, canvas.height - 1) ;
        this.color = randomColor();
    }
}

// 1 layer - #42c5f4
// 2 layer - #3fbdea
// 3 layer - #37b7e5

function animateSquare(layer){
    for(let l=0; l<squares[layer].length; l+=1){
        var sqareAnimation = squares[layer][l];
        ctx.clearRect(sqareAnimation.x, sqareAnimation.y, raindrop.width,raindrop.height);
        if(sqareAnimation.x>window.innerWidth/2){
            squares[layer][l].x += 2;
        }
        else{
            squares[layer][l].x -= 2;
        }
        squares[layer][l].y += 2;

        if(squares[layer][l].y > canvas.height || squares[layer][l].x <0 || squares[layer][l].x > WIDTH) {
            squares[layer][l] = new square();
        }

        ctx.fillStyle = sqareAnimation.color;
        ctx.fillRect(squares[layer][l].x, squares[layer][l].y,raindrop.width,raindrop.height);
        ctx.restore();
    }
}

function createSquares(layer){
    for(var g=0; g<layersAmount[layer]; g+=1){
        var newRect = new square();
        ctx.fillStyle = newRect.color;
        squares[layer][g] = newRect;
        ctx.fillRect(newRect.x, newRect.y,raindrop.width,raindrop.height);
        ctx.restore();
    }
}
function animateAll(time){

    layer0 = setInterval(function(){
        animateSquare(0);
    },time);
    layer1 = setInterval(function(){
        animateSquare(1);
    },time+10);
    layer2 = setInterval(function(){
        animateSquare(2);
    },time+20);
}

function createCanvas(){
    createSquares(0);
    createSquares(1);
    createSquares(2);
    animateAll(10);
    ctx.stroke();
}


function animatedText(){
    if(textAni == true){
        document.getElementById('aboutme').className = 'animatee';
    }
    else{
        document.getElementById('aboutme').className = 'paused';
    }
}


createCanvas();




setTimeout(()=>{
    window.scrollTo(0,0);
},1000);