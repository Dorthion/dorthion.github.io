//Wczytanie stylu kółek
		let licznik3=0;
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
				let Jppg = 'n'+reszta;
				gra.innerHTML += '<img src="MusicIcons/'+(reszta+1)+'.png" />';
				licznik3=licznik3+3;
			}
}, 1);