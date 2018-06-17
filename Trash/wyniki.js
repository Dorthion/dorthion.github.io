gra.style.display="none";
document.getElementById("backk").style.opacity="1.0";
document.getElementById("backk").style.background = "url('Cookiezi/ranking-panel.png')";
document.getElementById("llicznikcombo").style.left="50px";
document.getElementById("llicznikcombo").style.bottom="40px";
document.getElementById("llicznikacc").style.top="430px";
document.getElementById("llicznikacc").style.right="700px";
document.getElementById("llicznikpkt").style.right="950px";
document.getElementById("llicznikpkt").style.top="20px";

let locena = new Image(400,500);    //Ocena
locena.setAttribute("id","locena");
locena.src = 'Cookiezi/ranking-X.png';
document.getElementById('MainMenu').appendChild(locena);

/*let l300 = new Image(400,500);    //Ocena
l300.setAttribute("id","l300");
l300.src = 'Cookiezi/ranking-X.png';
document.getElementById('MainMenu').appendChild(l300);*/