//Załaduj javascript
function load (file){
	var src = document.createElement("script");
	src.setAttribute("type", "text/javascript");
	src.setAttribute("src", file);
	document.getElementsByTagName("head")[0].appendChild(src);
}
//Załaduj style
function load2 (file){
	var src = document.createElement("link");
	src.setAttribute("type", "text/css");
	src.setAttribute("rel", "stylesheet");
	src.setAttribute("href", file);
	document.getElementsByTagName("head")[0].appendChild(src);
}