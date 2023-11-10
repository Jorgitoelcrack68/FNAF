var afton;
var chicax=350;
var freddyx=500;
var foxyx=900;
var bonniex=1000;
var elizabethx=650;
var evanx=800;
var chicay=100;
var freddyy=50;
var foxyy=470;
var bonniey=200;
var elizabethy=200;
var evany=50;
var aftony;
var puntos=0;
console.log(puntos)
function setup() {
    canvas=createCanvas(1280,700)
    afton=loadImage("afton.webp")
    chica=loadImage("chica.jpg")
    freddy=loadImage("freddy.png")
    foxy=loadImage("foxy.png")
    bonnie=loadImage("bonnie.jpg")
    elizabeth=loadImage("elizabeth.jpg")
    evan=loadImage("evan.gif")
}
function draw() {
    background(255,255,255)
    image(afton,100,mouseY,200,200)
    image(chica,chicax,chicay,200,200)
    image(freddy,freddyx,freddyy,200,200)
    image(foxy,foxyx,foxyy,200,200)
    image(bonnie,bonniex,bonniey,200,200)
    image(evan,evanx,evany,200,200)
    image(elizabeth,elizabethx,elizabethy,200,200)
    chicax=chicax-5
    freddyx=freddyx-5
    bonniex=bonniex-5
    foxyx=foxyx-5
    evanx=evanx-5
    elizabethx=elizabethx-5
    if(chicax<10){
        chicax=1500
        chicay=random(0,500)
    }
    if(freddyx<10){
        freddyx=3000
    }
    if(foxyx<10){
        foxyx=1800
        foxyy=random(0,500)
    }
    if(bonniex<10){
        bonniex=2000
        bonniey=random(0,500)
    }
    if(evanx<10){
        evanx=1500
        evany=random(0,500)
    }
    if(elizabethx<10){
        elizabethx=1800
        elizabethy=random(0,500)
    }
    if (elizabethx<=300 && elizabethy>mouseY && elizabethy<mouseY+200) {
        puntos=puntos+1
        console.log(puntos)
        elizabethx=1600
        elizabethy=random(0,500)
    }
    if (evanx<=300 && evany>mouseY && evany<mouseY+200) {
        puntos=puntos+1
        console.log(puntos)
        evanx=1600
        evany=random(0,500)
    }
    if (freddyx<=300 && freddyy>mouseY && freddyy<mouseY+200) {
        puntos=puntos-1
        console.log(puntos)
        freddyy=1600
        freddyy=random(0,500)
    }
    if (foxyx<=300 && foxyy>mouseY && foxyy<mouseY+200) {
        puntos=puntos-1
        console.log(puntos)
        foxyx=1600
        foxyy=random(0,500)
    }
    if (chicax<=300 && chicay>mouseY && chicay<mouseY+200) {
        puntos=puntos-1
        console.log(puntos)
        chicay=1600
        chicay=random(0,500)
    }
    if (bonniex<=300 && bonniey>mouseY && bonniey<mouseY+200) {
        puntos=puntos-1
        console.log(puntos)
        bonniex=1600
        bonniey=random(0,500)
    }
    fill ("red")
    textSize(55)
    text("puntos: "+puntos,-5,50)
    textAlign(LEFT)
}