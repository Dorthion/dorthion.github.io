//Trail
//Dane
var dots = [],
    mouse = {
      x: 0,
      y: 0
    };
//Dodawanie do wartości "this"
var Dot = function() {
  this.x = 0;
  this.y = 0;
  this.node = (function(){
    var n = document.createElement("div");
    n.className = "trail";
    document.getElementById("backk").appendChild(n);
    return n;
  }());
};
//Zmiana pozycji
Dot.prototype.draw = function() {
  this.node.style.left = this.x + "px";
  this.node.style.top = this.y + "px";
};
//Dodawanie do ekranu
for (var i = 0; i < 12; i++) {
  var d = new Dot();
  dots.push(d);
}
//Tworzenie gdzie maja byc kolka
function draw() {
  var x = mouse.x,
      y = mouse.y;
  dots.forEach(function(dot, index, dots) {
    var nextDot = dots[index + 1] || dots[0];
    
    dot.x = x;
    dot.y = y;
    dot.draw();
    x += (nextDot.x - dot.x) * .6;
    y += (nextDot.y - dot.y) * .6;

  });
}
//Odczyt ruchu myszy
addEventListener("mousemove", function(event) {
  mouse.x = event.pageX;
  mouse.y = event.pageY;
});
//Włączanie animacji
function animate() {
  draw();
  requestAnimationFrame(animate);
}
animate();