//Wczytanie stylu kółek
let licznik3=0;
		var n1 = new Image ('MusicIcons/1.jpg');
		var n2 = new Image ('MusicIcons/2.jpg');
		var n3 = new Image ('MusicIcons/3.jpg');
		var n4 = new Image ('MusicIcons/4.jpg');
		console.log(song[2+licznik3]);
		var startTime3 = Date.now();
		var interval3 = setInterval(function() {
			var elapsedTime3 = Date.now() - startTime3;
			if(parseInt(song[2+licznik3])<elapsedTime3)
			{
				console.log(parseInt(song[2+licznik3]));
				console.log(elapsedTime3);
				console.log("woot");
				licznik3=licznik3+3;
			}
}, 1);