canvas=document.getElementById("canvoos");
ctx=canvas.getContext("2d");

cImage1="bluecar.png";
cImage2="car1.png";
rImage="racing.jpg";

cX1=10;
cY1=10;
cWidth1=100;
cHeight1=90;

cX2=10;
cY2=10;
cWidth2=100;
cHeight2=90;

function lMndR(){
    r_imgTag=new Image(); //defining a variable as new image
    r_imgTag.onload=uploadBackground;
    r_imgTag.src=rImage;

    c1_imgTag=new Image(); //defining a variable as new image
    c1_imgTag.onload=car1;
    c1_imgTag.src=cImage1;

    c2_imgTag=new Image(); //defining a variable as new image
    c2_imgTag.onload=car2;
    c2_imgTag.src=cImage2;
}

function uploadBackground(){
    ctx.drawImage(b_imgTag,0,0,canvas.width,canvas.height);
}

function car1(){
    ctx.drawImage(c1_imgTag,cX1,cY1,cWidth1,cHeight1);
}

function car2(){
    ctx.drawImage(c2_imgTag,cX2,cY2,cWidth2,cHeight2);
}