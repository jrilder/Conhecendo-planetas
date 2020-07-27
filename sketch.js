  

var x=150;
var y=100;
var opção=1;
var tela=0;
var img;
var imag;
var w=550;
var z=200;
var a=100;
var b=10;
var ses;
var saturno;
var guivi;
var solarsis;
var nave;
var jupiter;
var terra;
var r=1,n=50;
var venus;
var f=1,d=1;
var p=0,o=100;
var mercurio;
var a1=0,b2=60
var a2=0,b3=120
var a3=0,b4=100
var raio=7
var pontos=0
var vidas=5
var nivel=1
var texto= 'Use a nave para colidir com Mercurio'

function setup() {
  createCanvas(600, 400);
  img = loadImage('eu.jpg')
  ses = loadImage('ses.png')
  sixtemasolar=loadImage('sixtemasolar.png')
  guivi=loadImage('guivi.jpeg')
  solarsis=loadImage('solarsis.jpg')
  nave=loadImage('cheetos.png')
  jupiter=loadImage('jupiter.png')
  terra=loadImage('terra.png')
  venus=loadImage('venus.png')
  saturno=loadImage('saturno.png')
  mercurio=loadImage('mercurio.png')
  urano= loadImage('urano.png')
  netuno=loadImage('netuno.png')
  marte=loadImage('marte.png')
  sistemaso=loadImage('sistema solar descrição.png')
  gameover=loadImage('gameover.png')
  solari=loadImage('solari.png')
  youwin=loadImage('youwin.png')
  earth=loadImage('earth.png')
  somcolisao=loadSound("Explosion1.mp3")
  somcolisao.setVolume(0.2)
  sommenu=loadSound('sicko.mp3')
  sommenu.setVolume(0.2)
somerrado=loadSound("Prato.mp3")
  somerrado.setVolume(0.2)
}


function draw() {
  background(1,1,1);
  if(tela==0)
  menu();
  if(tela==1)
    game();
  if(tela==2)
    instruções();
  if(tela==3)
  creditos();
  if(tela==10)
    gamiover();
  if(tela==11)
    vitoria();
}

function instruções(){
  image(sistemaso,110,180,380,150)
  textSize(20);
  text('Público alvo: Alunos do ensino fundamental I', 40,50)
  textSize(20);
  text('aperte " Backspace " para sair',170,380)
  textSize(15)
  text('- Este jogo tem o intuito de auxiliar estudantes do ensino fundamental I ',40,100)
 text('a conhecer os planetas do nosso sistema solar',40,120)
  text('- Como jogar: use as setas do teclado para colidir com o planeta desejado',40,160)
  
}




function menu(){

   image(sixtemasolar,250,130,350,250);
  fill(0,255,100)
 rect(x,y,200,40);
  
  
  
 
  textSize(40);
    text('Conhecendo Planetas',90,60)
  fill(255)
  textSize(30)
  text('Jogar',160,130);
  textSize(20)
  text('Instruções',160,200);
  text('Créditos',160,270)

  
  
}
function game(){
  textSize(20)
  text('vidas:',10,25)
  text('/5',85,25)
  text(nivel,60,65)
  text('nível:',10,65)
   text('pontos:',490,25)
  text(vidas,70,10,20,20)
  text(pontos,560,10,20,20)
  textSize(20)
  text(texto,120,20)
  textSize(15);
   text('aperte " Backspace " para sair',300,390)
  image(nave,w,z,30,30)
  
  if(keyIsDown(UP_ARROW)){
     z=z-3
    if(z<0)
      z=400
     }
  if(keyIsDown(DOWN_ARROW)){
     z=z+3
    if(z>400)
      z=0
     }
  nivel=1
  //derrota
  if(vidas<=0){
    tela=10
      
  }
    
  //NIVEL 1
  if(nivel==1){
      //mercurio

  image(mercurio,p,o,30,30)
  p=p+3
  o=o+1/2
  if(p>600)
    p=0
  if(o>400)
    o=0
  
      //colisao mercurio com a nave 
  if(nivel==1){
  if(dist(w, z ,p, o )<raio*2){
    somcolisao.play()
    w=550
    z=200
    p=0
    o=random(10,380)
    pontos=pontos+50
  } 
  }
    
      
  
      //jupter
  image(jupiter,a,b,30,30)
  a=a+2;
  b=b+1;
  if(a>600)
    a=0
  if(b>400)
    b=0
  
  //colisao jupiter com a nave
  if(dist(w, z ,a, b )<raio*2){
    somerrado.play();
    w=550
    z=200
    a=0
    b=random(0,380)
    vidas=vidas-1
  
  }
  
  
  
  // TERRA
  
  image(terra,r,n,30,30)
  r=r+2
  n=n+1
  if(r>600)
    r=0
  if(n>400)
    n=50
  
  //colisão
  if(dist(w, z ,r, n )<raio*2){
   somerrado.play();    
    w=550
    z=200
    r=0
    n=random(0,370)
    
    vidas=vidas-1
  
  }
    //passar de nivel
  
  if(pontos>=300){
      
      nivel=2
    
    }
  }
  if(nivel>=2){
  
  //NIVEL 2
    
 
    //colisao jupter com a nave
  if(dist(w, z ,a, b )<raio*2){
      
    w=550
    z=200
    a=0
    b=random(0,390)
    vidas=vidas-1
  
  }
  
  texto='Colida com venus ou mercurio'
  image(venus,f,d,30,30)
  f=f+3
  d=d+1/2
  if(f>600)
    f=0
  
  if(d>400)
    d=random(0,390)
    
    //colisao venus com a nave
    
    if(dist(w, z ,f, d )<raio*2){
      pontos=pontos+50
    w=550
    z=200
      f=0
      d=random(0,390)
  somcolisao.play()
  }
    //colisão terra
  if(dist(w, z ,r, n )<raio*2){
      
    w=550
    z=200
    r=random(0,0)
    n=random(10,350)
    
    vidas=vidas-1
  
  }
 
  image(saturno,a1,b2,30,30)
  a1=a1+2
  b2=b2+1/2
  if(a1>600)
    a1=0
  if(b2>400)
    b2=random(0,290)
  
    //colisão saturno com a nave
 
    if(dist(w, z ,a1, b2 )<raio*2){
     somerrado.play();  
    w=550
    z=200
      a1=0
      b2=random(0,380)
    
    vidas=vidas-1
  
  }
      //passar de nivel
    if(pontos>=600){
    
      nivel=3
    }
  
  
  
  
  }
  
  
  
  //NIVEL 3
  
  if(nivel>=3){
    texto=('Colida com Vênus,Mercurio ou Urano')
    if(pontos>=900){
      tela=11
     }
  
  
    //netuno
    image(netuno,a2,b3,30,30)
  a2=a2+2
  b3=b3+1
  if(a2>600)
    a2=0
  if(b3>400)
    b3=random(0,390)
  
  //colisao netuno com a nave
  
  if(dist(w, z ,a2, b3 )<raio*2){
      pontos=pontos+50
    w=550
    z=200
    a2=0
    b3=random(0,390)
  somcolisao.play()
  }
  image(urano,a3,b4,30,30)
  a3=a3+2
  b4=b4+1/2
  if(a3>600)
    a3=0
  if(b4>400)
    b4=random(0,390)
  //colisao urano com a nave
  
  if(dist(w, z ,a3, b4 )<raio*2){
       somerrado.play();
    w=550
    z=200
    a3=0
    b4=random(0,390)
    vidas=vidas-1
  
  }
    
  }
  
  
  
     
}



function creditos(){
  textSize(20);
  text('Programador: José Rilder',10,60)
  text('Educador: Guilherme Vieira',10,270)
   image(solarsis,380,0,270,500)
  image(img,260,0,120,170);
    image(guivi,260,240,120,170);
  
 

  textSize(15);
   text('aperte " Backspace " para sair',20,380)

}

function keyPressed(){
  if(key=="ArrowUp" && y>130){
     y=y-70
    opção=opção-1
    console.log(opção)
  }
    if(key=="ArrowDown" && y<200){
    y=y+70
      opção=opção+1
      console.log(opção)
    }
  if(key=="Enter"){
    tela=opção
}
  if(key=="Backspace"){
    tela= 0
}
}
function gamiover(){
  image(solari,120,26,356,356)
  image(gameover,150,-40,300,200)
  fill(255)
  textSize(20)
  text('Pressione "f5" para tentar novamente',125,385)
}
function vitoria(){
  image(earth,-50,0,400,400)
  image(youwin,320,50,200,200)
  fill(0,255,0)
  textSize(20)
  text('pressione "f5" para jogar novamente!',250,370)
}

