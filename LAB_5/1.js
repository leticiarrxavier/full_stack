
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
//quadrado vermelho
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.fillRect(250,0,50,50);
ctx.closePath();

// quadrado azul
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.fillRect(0,0,50,50);
ctx.closePath();

// texto
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.font = "20px Arial"
ctx.textAlign = "center";
ctx.fillText("Canvas",150,45);
ctx.closePath();

//borda preta
ctx.strokeStyle = 'black';
ctx.strokeRect(0,0,300,300);

//figura amarela
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'yellow';
ctx.fillRect(1,235,70,64);
ctx.closePath();

//quadrado branco no amarelo
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.fillRect(37,235,34,34);
ctx.closePath();

//figura preta
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'black';
ctx.fillRect(229,235,70,64);
ctx.closePath();

//quadrado branco no preto
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'white';
ctx.fillRect(229,235,34,34);
ctx.closePath();

//borda verde1
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.strokeRect(0,150,150,150);

//borda verde2
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.strokeRect(150,150,150,150);

//quadradinho vermelho
ctx.lineWidth = 2;
ctx.fillStyle = 'red';
ctx.fillRect(110,150,40,40);
ctx.closePath();

//quadradinho verde agua d baixo
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.fillRect(1,151,34,34);
ctx.closePath();

//quadradinho verde agua d cima
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.fillRect(1,115,34,34);
ctx.closePath();

//retangulo verde agua d cima
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.fillRect(265,132,34,17);
ctx.closePath();

//retangulo verde agua d baixo
ctx.lineWidth = 2;
ctx.fillStyle = 'aqua';
ctx.fillRect(265,151,34,17);
ctx.closePath();

// circulo verde agua
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'aqua';
ctx.strokeStyle = 'blue';
ctx.arc(150,110,15,1.10*Math.PI,3.2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.arc(150,150,65,1*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();

// arquinho verde esquerda
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.arc(125,150,65,1*Math.PI,1.34*Math.PI);
ctx.stroke();
ctx.closePath();

// arquinho verde direita
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.arc(175,150,65,1.66*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();

// linha azul
ctx.beginPath();
ctx.lineWidth = 1.5;
ctx.strokeStyle = 'blue';
ctx.moveTo(150,150);
ctx.lineTo(40,40);
ctx.stroke();
ctx.closePath();

// linha vermelha
ctx.beginPath();
ctx.lineWidth = 1.5;
ctx.strokeStyle = 'red';
ctx.moveTo(280,20);
ctx.lineTo(150,150);
ctx.stroke();
ctx.closePath();

// circulo verde agua
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(80,215,15,1.10*Math.PI,3.2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// circulo verde agua
ctx.beginPath();
ctx.lineWidth = 1;
ctx.fillStyle = 'yellow';
ctx.strokeStyle = 'green';
ctx.arc(215,215,15,1.10*Math.PI,3.2*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.fillStyle = "aqua";
ctx.arc(150,299,45,1*Math.PI,0*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arquinho verde direita em baixo
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.arc(150,299,65,1.5*Math.PI,0*Math.PI);
ctx.stroke();
ctx.closePath();

// arquinho verde esquerda
ctx.beginPath();
ctx.lineWidth = 1;
ctx.strokeStyle = 'green';
ctx.arc(167,299,90,1*Math.PI,1.44*Math.PI);
ctx.stroke();
ctx.closePath();
