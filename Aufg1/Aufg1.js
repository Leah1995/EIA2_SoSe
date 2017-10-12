var L4_Skipiste;
(function(L4_Skipiste) {
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
		crc2.beginPath();
		crc2.moveTo(0, 600);
		crc2.lineTo(0, 0);
		crc2.lineTo(800, 0);
		crc2.lineTo(800, 600);
		crc2.fillStyle = "#ccf5ff";
		crc2.fill();		
		drawLandschaft(0, 800, "white")
		drawBerg3(450, 270, "#c2d6d6", "#f2f2f2");
		drawBerg(250, 300, "#c2d6d6", "#e6e6e6");
		drawBerg2(680, 300, "#c2d6d6", "#d9d9d9");
		drawTree1(40, 300);
		drawTree2(60, 500);

		// Sun
		crc2.beginPath();
		crc2.arc(670, 70, 45, 0, 2 * Math.PI); // x, y, size
		crc2.fillStyle = "#ffffb3";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(670, 70, 30, 0, 2 * Math.PI);
		crc2.fillStyle = "#ffff66";
		crc2.fill();
		
		// Put trees at random
		var colors = [];
		for (var i = 0; i < 15; i++) {
			var randomX = (Math.random() * (800 - 1)) + 1; //bestimmen, wo auf der x-Länge Bäume sind
			var randomY = (Math.random() * (550 - 400)) + 400; //bestimmen, wo auf der y-Länge Bäume sind
			console.log("X is " + randomX, "Y is " + randomY, randomTree1);
			var randomTree1 = Math.floor((Math.random() * 2)) + 1;
			if (randomTree1 == 1) {
				drawTree1(randomX, randomY,);
			} else {
				drawTree2(randomX, randomY);
			}
		}

		// Cloud1
		crc2.beginPath();
		crc2.arc(320, 130, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(350, 120, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(280, 120, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(330, 130, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(290, 120, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(280, 110, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(310, 110, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(280, 100, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(340, 105, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(240, 90, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(250, 100, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(340, 100, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(230, 100, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();

		// Cloud2
		crc2.beginPath();
		crc2.arc(520, 90, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(550, 80, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(480, 80, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(530, 90, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(490, 80, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(480, 70, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(510, 70, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(580, 60, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(540, 65, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(440, 50, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(450, 50, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();
		crc2.beginPath();
		crc2.arc(540, 50, 20, 0, 2 * Math.PI);
		crc2.fillStyle = "white";
		crc2.fill();

		// Schneelandschaft
		function drawLandschaft(){
		crc2.beginPath();
		crc2.moveTo(0, 340);
		crc2.lineTo(800, 340);
		crc2.lineTo(800, 370);
		crc2.lineTo(0, 370);
		crc2.closePath();
		crc2.fillStyle = "#f2f2f2";
		crc2.fill();

		crc2.beginPath();
		crc2.moveTo(0, 370);
		crc2.lineTo(800, 370);
		crc2.lineTo(800, 600);
		crc2.lineTo(0, 600);
		crc2.closePath();
		crc2.fillStyle = "white";
		crc2.fill();

	
		}
	
		// Berg3
		function drawBerg3(_x, _y, _strokeColor, _fillColor) {
			crc2.beginPath();
			crc2.fillStyle = _fillColor;
			crc2.strokeStyle = _strokeColor;
			crc2.moveTo(_x - 500, _y + 50);
			crc2.lineTo(_x, _y - 80);
			crc2.lineTo(_x + 30, _y - 30);
			crc2.lineTo(_x + 80, _y - 60);
			crc2.lineTo(_x + 150, _y + 40);
			crc2.lineTo(_x + 120, _y + 40);
			crc2.closePath();
			crc2.fill();
		}

		// Berg
		function drawBerg(_x, _y, _strokeColor, _fillColor) {
			crc2.beginPath();
			crc2.fillStyle = _fillColor;
			crc2.strokeStyle = _strokeColor;
			crc2.moveTo(_x - 500, _y + 50);
			crc2.lineTo(_x, _y - 80);
			crc2.lineTo(_x + 30, _y - 30);
			crc2.lineTo(_x + 80, _y - 60);
			crc2.lineTo(_x + 150, _y + 40);
			crc2.lineTo(_x + 220, _y + 40);
			crc2.closePath();
			crc2.fill();
		}

		// Berg2
		function drawBerg2(_x, _y, _strokeColor, _fillColor) {
			crc2.beginPath();
			crc2.fillStyle = _fillColor;
			crc2.strokeStyle = _strokeColor;
			crc2.moveTo(_x - 500, _y + 50);
			crc2.lineTo(_x, _y - 80);
			crc2.lineTo(_x + 30, _y - 30);
			crc2.lineTo(_x + 80, _y - 60);
			crc2.lineTo(_x + 150, _y + 40);
			crc2.lineTo(_x + 120, _y + 40);
			crc2.closePath();
			crc2.fill();
		}
		
		//Baum 1
	    function drawTree1(_x, _y) {
	        //Stamm
	        crc2.beginPath();
	        crc2.moveTo(_x, _y + 40);
	        crc2.lineTo(_x + 7, _y + 40)
	        crc2.lineTo(_x + 7, _y);
	        crc2.lineTo(_x, _y);
	        crc2.fillStyle = "#8e795e";
	        crc2.fill();
	        crc2.closePath();
	        //Krone
	    
	    }
	    
	    //Baum 2
	    function drawTree2(_x, _y) {
	        //Stamm
	        crc2.beginPath();
	        crc2.moveTo(_x, _y + 60);
	        crc2.lineTo(_x + 5, _y + 60)
	        crc2.lineTo(_x + 5, _y);
	        crc2.lineTo(_x, _y);
	        crc2.fillStyle = "#8e795e";
	        crc2.fill();
	        crc2.closePath();
	        //Krone
	    
	    }


		// Skilift
		crc2.beginPath();
		crc2.moveTo(0, 260);
		crc2.lineTo(800, 260);
		crc2.lineTo(800, 270);
		crc2.lineTo(0, 270);
		crc2.closePath();
		crc2.fillStyle = "black";
		crc2.fill();

		//Skiliftleine1
		crc2.beginPath();
		crc2.lineWidth = "5"
		crc2.strokeStyle = "black";
		crc2.moveTo(630, 330);
		crc2.lineTo(630, 270);
		crc2.stroke();
		
		//Skiliftstuhl1
		crc2.beginPath();
		crc2.lineWidth = "5"
		crc2.strokeStyle = "black";
		crc2.moveTo(650, 330);
		crc2.lineTo(650, 390);
		crc2.stroke();
		
		crc2.beginPath();
		crc2.lineWidth = "5"
		crc2.strokeStyle = "black";
		crc2.moveTo(560, 330);
		crc2.lineTo(560, 390);
		crc2.stroke();
		
		//Skiliftsitz1
		crc2.beginPath();
		crc2.lineWidth = "5"
		crc2.strokeStyle = "black";
		crc2.moveTo(650, 390);
		crc2.lineTo(600, 435);
		crc2.stroke();
		
		crc2.beginPath();
		crc2.lineWidth = "5"
		crc2.strokeStyle = "black";
		crc2.moveTo(560, 390);
		crc2.lineTo(510, 435);
		crc2.stroke();

		crc2.beginPath();
		crc2.lineWidth = "5"
		crc2.strokeStyle = "black";
		crc2.moveTo(600, 390);
		crc2.lineTo(620, 300);
		crc2.stroke();
		
		//Skiliftpolster1
		crc2.beginPath();
		crc2.moveTo(560, 340);
		crc2.lineTo(650, 340);
		crc2.lineTo(650, 380);
		crc2.lineTo(560, 380);
		crc2.closePath();
		crc2.fillStyle = "gray";
		crc2.fill();
		
		
		//Skiliftleine2
		crc2.beginPath();
		crc2.lineWidth = "5"
		crc2.strokeStyle = "black";
		crc2.moveTo(270, 330);
		crc2.lineTo(270, 270);
		crc2.stroke();
		
		//Skiliftstuhl2
		crc2.beginPath();
		crc2.lineWidth = "5"
		crc2.strokeStyle = "black";
		crc2.moveTo(290, 330);
		crc2.lineTo(290, 390);
		crc2.stroke();
		
		crc2.beginPath();
		crc2.lineWidth = "5"
		crc2.strokeStyle = "black";
		crc2.moveTo(200, 330);
		crc2.lineTo(200, 390);
		crc2.stroke();
		
		//Skiliftsitz2
		crc2.beginPath();
		crc2.lineWidth = "5"
		crc2.strokeStyle = "black";
		crc2.moveTo(250, 390);
		crc2.lineTo(200, 435);
		crc2.stroke();
		
		crc2.beginPath();
		crc2.lineWidth = "5"
		crc2.strokeStyle = "black";
		crc2.moveTo(260, 390);
		crc2.lineTo(210, 435);
		crc2.stroke();

		crc2.beginPath();
		crc2.lineWidth = "5"
		crc2.strokeStyle = "black";
		crc2.moveTo(200, 390);
		crc2.lineTo(220, 300);
		crc2.stroke();

	}

})(L4_Skipiste || (L4_Skipiste = {}));
// # sourceMappingURL=04.js.map

// # sourceMappingURL=Aufgabe4.js.map
