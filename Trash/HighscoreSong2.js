//Wczytanie stylu kółek
		let licznik3=0;
		let combo=0;
		let points=0;
		let p300=0;
		let p100=0;
		let p50=0;
		let miss=0;
		let mnoznik=1;
		let celnosc=100.00;
		let hp=100;
		var gra = document.createElement('div');
		gra.setAttribute("id","gra");
		document.getElementById('MainMenu').appendChild(gra);
		var startTime3 = Date.now();
		var interval3 = setInterval(function() {
			var elapsedTime3 = Date.now() - startTime3;
			if(parseInt(song[2+licznik3])<elapsedTime3)
			{
				console.log(song[2+licznik3]);
				console.log(elapsedTime3);
				console.log("woot");
				let reszta=licznik3%4;
				gra.innerHTML += '<img id="n'+reszta+'" src="MusicIcons/'+(4-reszta)+'.png" />';
				function cirlees(x_pos, y_pos) {
					var clickcircles = document.getElementById('n'+reszta);
					clickcircles.style.left = x_pos+'px';
					clickcircles.style.top = y_pos+'px';
					if(licznik3>8)
						{
							switch(reszta){
								case 0: {//1
									var image1 = document.getElementById('n'+3);
									gra.removeChild(image1);
									break;
								}
								case 1: {//2
									var image2 = document.getElementById('n0');
									gra.removeChild(image2);
									break;
								}
								case 2: {//3
									var image3 = document.getElementById('n'+1);
									gra.removeChild(image3);
									break;
								}
								case 3: {//4
									var image4 = document.getElementById('n'+2);
									gra.removeChild(image4);
									break;
								}
							}
						}
				}
				cirlees(song[0+licznik3],song[1+licznik3]);
				licznik3=licznik3+3;
			}
}, 1);