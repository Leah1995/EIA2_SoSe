var L4_Schneelandschaft;
(function(L4_Schneelandschaft) {
	window.addEventListener("load", init);
	let crc2;
	function init(_event) {
		let canvas;
		canvas = document.getElementsByTagName("canvas")[0];
		console.log(canvas);
		crc2 = canvas.getContext("2d");
		console.log(crc2);
		crc2.fillRect(0, 0, canvas.width, canvas.height);
		// Sky
		crc2.fillStyle = "#ccf5ff";
		crc2.fillRect(0, 0, 800, 600);
		// Funktionen
		drawBerg(450, 370, "#c2d6d6", "#ffffff");
		drawBerg(300, 380, "#c2d6d6", "#f2f2f2");
		drawBerg(700, 350, "#c2d6d6", "#e6e6e6");
		drawBerg(200, 360, "#c2d6d6", "#d9d9d9");
		drawBaum1(800, 200, "#cc9966", "#00514c");
		drawBaum2(800, 200, "#4c2e0a", "#44d271");
		drawFlocke(200, 400);
		// Sonne
		crc2.beginPath();
		crc2.arc(690, 70, 45, 0, 2 * Math.PI); // x, y, size
		crc2.fillStyle = "#ffff99";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(690, 70, 30, 0, 2 * Math.PI);
		crc2.fillStyle = "#ffffb3";
		crc2.fill();
		// Wolke 1
		crc2.beginPath();
		crc2.arc(120, 70, 30, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(150, 80, 30, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(80, 60, 30, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(130, 50, 30, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(80, 75, 30, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(110, 40, 30, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		// Wolke 2
		crc2.beginPath();
		crc2.arc(520, 130, 40, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(550, 120, 40, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(580, 120, 40, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(530, 130, 40, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(590, 120, 40, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(580, 110, 40, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(510, 110, 40, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(480, 100, 40, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(540, 105, 40, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(440, 90, 40, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(450, 100, 40, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(540, 100, 40, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(430, 100, 40, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		// Schnee
		crc2.fillStyle = "#white";
		crc2.fillRect(0, 400, 800, 200);
		crc2.fillStyle = "#f2f2f2";
		crc2.fillRect(0, 380, 800, 20);
		
		// Bäume zufällig hinstellen
		var colors = [];
		for (var i = 0; i < 20; i++) {
			var randomX = (Math.random() * (800 - 1)) + 1;
			var randomY = (Math.random() * (550 - 400)) + 400;
			console.log("X is " + randomX, "Y is " + randomY, randomBaum1);
			var randomBaum1 = Math.floor((Math.random() * 2)) + 1;
			if (randomBaum1 == 1) {
				drawBaum1(randomX, randomY);
			} else {
				drawBaum2(randomX, randomY);
			}
		}
		
		 // Schneeflocken zufällig platzieren
		var colors = [];
		for (var i = 0; i < 20; i++) {
			var randomX = (Math.random() * (800 - 1)) + 1;
			var randomY = (Math.random() * (200 - 250)) + 250;
			console.log("X is " + randomX, "Y is " + randomY, randomFlocke);
			var randomFlocke = Math.floor((Math.random() * 2)) + 1;
			if (randomFlocke == 1) {
				drawFlocke(randomX, randomY);
			} else {
				drawFlocke(randomX, randomY);
			}
  }
		
		// Berg
		function drawBerg(_x, _y, _strokeColor, _fillColor) {
			crc2.beginPath();
			crc2.fillStyle = _fillColor;
			crc2.strokeStyle = _strokeColor;
			crc2.moveTo(_x - 400, _y + 50);
			crc2.lineTo(_x, _y - 80);
			crc2.lineTo(_x + 70, _y - 50);
			crc2.lineTo(_x + 80, _y - 60);
			crc2.lineTo(_x + 150, _y + 40);
			crc2.lineTo(_x + 120, _y + 40);
			crc2.closePath();
			crc2.fill();
		}

		// Baum 1
		function drawBaum1(_x, _y_, _trunkColor, _topColor) {
			// Stamm
			crc2.beginPath();
			crc2.moveTo(50, 515);
			crc2.lineTo(75, 565);
			crc2.lineTo(25, 565);
			crc2.closePath();
			crc2.fillStyle = _trunkColor;
			crc2.fillRect(124, 467, 12, 23);
			// Baumkrone
			crc2.beginPath();
			crc2.moveTo(130, 415);
			crc2.lineTo(155, 455);
			crc2.lineTo(105, 455);
			crc2.closePath();
			crc2.fillStyle = _topColor;
			crc2.fill();
			crc2.beginPath();
			crc2.moveTo(130, 425);
			crc2.lineTo(155, 475);
			crc2.lineTo(105, 475);
			crc2.closePath();
			crc2.fillStyle = _topColor;
			crc2.fill();
		}

		// Baum 2
		function drawBaum2(_x, _y, _trunkColor, _topColor) {
			// Stamm
			crc2.beginPath();
			crc2.moveTo(60, 85);
			crc2.lineTo(85, 135);
			crc2.lineTo(35, 135);
			crc2.closePath();
			crc2.fillStyle = _trunkColor;
			crc2.fillRect(44, 557, 12, 23);
			// Baumkrone
			crc2.beginPath();
			crc2.moveTo(50, 515);
			crc2.lineTo(75, 565);
			crc2.lineTo(25, 565);
			crc2.closePath();
			crc2.fillStyle = _topColor;
			crc2.fill();
		}

		// Schneeflocke
		function drawFlocke(_x, _y) {
			crc2.beginPath();
			crc2.moveTo(350, 40);
			crc2.lineTo(350, 10);
			crc2.lineWidth = 7;
			crc2.strokeStyle = "white";
			crc2.stroke();

			crc2.beginPath();
			crc2.moveTo(370, 30);
			crc2.lineTo(335, 17);
			crc2.strokeStyle = "white";
			crc2.stroke();

			crc2.beginPath();
			crc2.moveTo(365, 15);
			crc2.lineTo(330, 35);
			crc2.strokeStyle = "white";
			crc2.stroke();
			
//			crc2.beginPath();
//			crc2.moveTo(365, 10);
//			crc2.lineTo(355, 7);
//			crc2.strokeStyle = "white";
//			crc2.stroke();

//			crc2.beginPath();
//			crc2.moveTo(310, 65);
//			crc2.lineTo(310, 35);
//			crc2.strokeStyle = "white";
//			crc2.stroke();

//			crc2.beginPath();
//			crc2.moveTo(375, 75);
//			crc2.lineTo(310, 90);
//			crc2.strokeStyle = "white";
//			crc2.stroke();

//			crc2.beginPath();
//			crc2.moveTo(385, 85);
//			crc2.lineTo(310, 120);
//			crc2.strokeStyle = "white";
//			crc2.stroke();

		}

		// Skilift
		crc2.beginPath();
		crc2.fillStyle = "black";
		crc2.fillRect(0, 240, 800, 15); // Anfang, Höhe, Länge, Dicke

		// Skisitz 1
		crc2.beginPath();
		crc2.fillStyle = "black";
		crc2.fillRect(570, 240, 10, 45);
		crc2.beginPath();
		crc2.fillStyle = "black";
		crc2.fillRect(650, 240, 10, 45);
		crc2.beginPath();
		crc2.fillStyle = "black";
		crc2.fillRect(540, 270, 150, 120);
		crc2.beginPath();
		crc2.fillStyle = "#F8FCFE";
		crc2.fillRect(570, 290, 100, 70);

		// Skisitz 2
		crc2.beginPath();
		crc2.fillStyle = "black";
		crc2.fillRect(170, 240, 10, 45);
		crc2.beginPath();
		crc2.fillStyle = "black";
		crc2.fillRect(250, 240, 10, 45);
		crc2.beginPath();
		crc2.fillStyle = "black";
		crc2.fillRect(140, 270, 150, 120);
		crc2.beginPath();
		crc2.fillStyle = "#F8FCFE";
		crc2.fillRect(170, 290, 100, 70);
	}
})(L4_Schneelandschaft || (L4_Schneelandschaft = {}));
// # sourceMappingURL=Aufg2.js.map
