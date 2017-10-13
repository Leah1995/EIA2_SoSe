var L4_Schneelandschaft;
(function(L4_Schneelandschaft) {
	window.addEventListener("load", init);
	let crc2;
	function init(_event) {
		var canvas;
		canvas = document.getElementsByTagName("canvas")[0];
		console.log(canvas);
		crc2 = canvas.getContext("2d");
		console.log(crc2);
		crc2.fillRect(0, 0, canvas.width, canvas.height);

		// Sky
		crc2.fillStyle = "#ccf5ff";
		crc2.fillRect(0, 0, 800, 600)
		crc2.fillStyle = "black";
		crc2.fillRect(0, 230, 800, 15)

		// Funktionen
		drawBerg(450, 370, "#c2d6d6", "#ffffff");
		drawBerg(300, 380, "#c2d6d6", "#f2f2f2");
		drawBerg(700, 350, "#c2d6d6", "#e6e6e6");
		drawBerg(200, 360, "#c2d6d6", "#d9d9d9");
		drawBaum1(800, 200, "#80ffaa");
		drawBaum2(800, 480, "#1a6600");
		drawKrone(400, 400);
		drawSkilift;

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
		crc2.fillRect(0, 400, 800, 200)
		crc2.fillStyle = "#f2f2f2"
		crc2.fillRect(0, 380, 800, 20)

		// Bäume zufällig hinstellen
		var colors = [];
		for (var i = 0; i < 25; i++) {
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
		function drawBaum1(_x, _y) {
			// Stamm
			crc2.beginPath();
			crc2.strokeStyle = "#cc9966";
			crc2.lineWidth = 10;
			crc2.moveTo(_x + 220, _y + 35);
			crc2.lineTo(_x + 220, _y - 35);
			crc2.stroke();
			// Baumkrone

		}

		// Baum 2
		function drawBaum2(_x, _y, _fillColor, _strokeColor) {
			// Stamm
			crc2.beginPath();
			crc2.strokeStyle = "#994d00";
			crc2.lineWidth = 7;
			crc2.moveTo(_x + 400, _y + 25);
			crc2.lineTo(_x + 400, _y - 25);
			crc2.stroke();
		}

		// Baumkrone
		function drawKrone(_x, _y) {
			crc2.beginPath();
			crc2.moveTo(_x + 75, _y + 50);
			crc2.lineTo(_x + 200, _y + 75);
			crc2.lineTo(_x + 100, _y + 25);
			crc2.fill();
		}

		// Skilift
		function drawSkilift(_x, _y) {
			crc2.beginPath();
			crc2.strokeStyle = "black";
			crc2.lineWidth = 7;
			crc2.moveTo(_x - 60, _y + 400);
			crc2.lineTo(_x + 50, _y - 400);
			crc2.stroke();
			// Skisitz
			crc2.beginPath();
			crc2.strokeStyle = "black";
			crc2.lineWidth = 7;
			crc2.moveTo(_x - 170, _y + 400);
			crc2.lineTo(_x + 50, _y - 400);
			crc2.stroke();
			
		}

	}

})(L4_Schneelandschaft || (L4_Schneelandschaft = {}));

// # sourceMappingURL=Aufg1.js.map
