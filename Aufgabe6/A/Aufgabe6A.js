var L4_Canvas;
(function (L4_Canvas) {
    window.addEventListener("load", init);
    let crc2;
    let bees = [];
    let beeNumber = 10;
    let beeColors = ["#ffb135", "#f7bd2b", "#ffe100"];
    
    let randomBeeColor = beeColors[Math.floor(Math.random() * beeColors.length)];
    let imgData;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        crc2 = canvas.getContext("2d");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
        
        drawSky();
        drawMountain(250, 170, "#c2d6d6", "#999966");
        drawGrass();
        drawSun();
        drawHive(80, 170);
        drawRandomSunflowers();
        drawCloud(160, 90, "white");
        
        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        
        for (let i = 0; i < beeNumber; i++) {
            let b = { x: 80, y: 170, color: "#ffc042" };
            bees[i] = b;
        }
        console.log(bees);
        window.setTimeout(animate, 10);
        canvas.addEventListener("click", addBee);
    }
    function animate() {
        console.log("Animate called");
        crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < bees.length; i++) {
            let b = bees[i];
            b.x += Math.random() * 4 - 2;
            b.y += Math.random() * 4 - 2;
            b.color = randomBeeColor;
            if (b.x > crc2.canvas.width) {
                b.x = 0;
            }
            if (b.y > crc2.canvas.height) {
                b.y = 0;
            }
            if (b.y < 0) {
                b.y = crc2.canvas.height;
            }
            drawBee(b);
        }
        window.setTimeout(animate, 20);
    }
    function drawBee(_b) {
        // Flügel
        crc2.beginPath();
        crc2.arc(_b.x + 2, _b.y - 1, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.strokeStyle = "#b3ffff";
        crc2.stroke();       
        // Kopf
        crc2.beginPath();
        crc2.arc(_b.x + 3, _b.y, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = randomBeeColor;
        crc2.fill();
        // Body
        crc2.beginPath();
        crc2.moveTo(_b.x - 2, _b.y - 3); 
        crc2.lineTo(_b.x + 3, _b.y - 3);
        crc2.lineTo(_b.x + 2, _b.y + 3); 
        crc2.lineTo(_b.x - 1, _b.y + 2); 
        crc2.closePath();
        crc2.fillStyle = "#000000";
        crc2.fill();
    }
    // Klick -> neue Biene
    function addBee() {}
    
    // Sky 
    function drawSky() {
        crc2.beginPath();
        crc2.moveTo(0, 250);
        crc2.lineTo(0, 0);
        crc2.lineTo(400, 0);
        crc2.lineTo(400, 250);
        crc2.fillStyle = "#ccf5ff";
        crc2.fill();
    }
    
    //Sun 
    function drawSun() {
        crc2.beginPath();
        crc2.arc(290, 70, 45, 0, 2 * Math.PI); // x, y, size
        crc2.fillStyle = "#ffdb4d";
        crc2.fill();
        crc2.beginPath();
		crc2.arc(290, 70, 30, 0, 2 * Math.PI);
		crc2.fillStyle = "yellow";
		crc2.fill();
    }
    
 // Cloud
    function drawCloud(_x, _y, _fillColor) {
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
        crc2.closePath();
    }
    
    // Grass
    function drawGrass() {
        crc2.beginPath();
        crc2.moveTo(0, 190);
		crc2.lineTo(400, 190);
		crc2.lineTo(400, 250);
		crc2.lineTo(0, 250);
		crc2.closePath();
		crc2.fillStyle = "#226600";
		crc2.fill();
		crc2.beginPath();
		crc2.moveTo(0, 200);
		crc2.lineTo(400, 200);
		crc2.lineTo(400, 250);
		crc2.lineTo(0, 250);
		crc2.closePath();
		crc2.fillStyle = "#aaff80";
		crc2.fill();
    }
    
    // Put Flowers at random
    function drawRandomSunflowers() {
    	 let flowers = [
             drawSunflower(randomX, randomY, "#44d580", "#332900", "#ffd11a"),
             drawDaisy(randomX, randomY, "#40ff00", "yellow", "white")
         ];
    	 var colors = [];
 		for (var i = 0; i < 70; i++) {
 			var randomX = (Math.random() * (400 - 1)) + 1;
 			var randomY = (Math.random() * (250 - 200)) + 200;
 			console.log("X is " + randomX, "Y is " + randomY, randomSunflower);
 			var randomSunflower = Math.floor((Math.random() * 2)) + 1;
 			if (randomSunflower == 1) {
 				drawSunflower(randomX, randomY, "#44d580", "#332900", "#ffd11a");
 			} else {
 				drawDaisy(randomX, randomY, "#40ff00", "yellow", "white");
            }
        }
    }
 
    // Berg
    function drawMountain(_x, _y, _strokeColor, _fillColor) {
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
    // Blumen
    function drawSunflower(_x, _y, _stalkColor, _petalColor, _stamenColor) {
    	 crc2.beginPath();
         crc2.strokeStyle = _stalkColor;
         crc2.moveTo(_x, _y);
         crc2.lineTo(_x, _y - 20);
         crc2.stroke();
         crc2.closePath();
        crc2.closePath();
        //leafs
        crc2.beginPath();
        crc2.strokeStyle = _stalkColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 7);
        crc2.lineTo(_x + 5, _y - 7);
        crc2.lineTo(_x, _y);
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = _stalkColor;
        crc2.fill();
        //petals
        crc2.fillStyle = _stamenColor;
        crc2.beginPath();
        crc2.arc(_x, _y - 25, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x - 5, _y - 20, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 5, _y - 20, 5, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x, _y - 15, 5, 0, 2 * Math.PI);
        crc2.fill();
     // stamen
        crc2.beginPath();
        crc2.arc(_x, _y - 20, 5, 0, 2 * Math.PI);
        crc2.fillStyle = _petalColor;
        crc2.fill();
    }
    
    function drawDaisy(_x, _y, _stalkColor, _stamenColor, _petalColor) {
        crc2.beginPath();
        crc2.strokeStyle = _stalkColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 20);
        crc2.stroke();
        crc2.closePath();
        //leafs
        crc2.beginPath();
        crc2.strokeStyle = _stalkColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 7);
        crc2.lineTo(_x - 5, _y - 7);
        crc2.lineTo(_x, _y - 5);
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = _stalkColor;
        crc2.fill();
        crc2.beginPath();
        crc2.strokeStyle = _stalkColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 12);
        crc2.lineTo(_x + 5, _y - 18);
        crc2.lineTo(_x, _y - 5);
        crc2.stroke();
        crc2.closePath();
        crc2.fillStyle = _stalkColor;
        crc2.fill();
        // petals
        crc2.fillStyle = _petalColor;
		crc2.beginPath();
		crc2.arc(_x, _y - 25, 5, 0, 2 * Math.PI);
		crc2.fill();
		crc2.beginPath();
		crc2.arc(_x - 5, _y - 20, 5, 0, 2 * Math.PI);
		crc2.fill();
		crc2.beginPath();
		crc2.arc(_x + 5, _y - 20, 5, 0, 2 * Math.PI);
		crc2.fill();
		crc2.beginPath();
		crc2.arc(_x, _y - 15, 5, 0, 2 * Math.PI);
		crc2.fill();
        //stamen
        crc2.beginPath();
        crc2.arc(_x, _y - 20, 5, 0, Math.PI);
        crc2.fillStyle = _stamenColor;
    }
    
    function drawHive(_x, _y) {
        crc2.beginPath();
        crc2.strokeStyle = "#CF882B";
        crc2.fillStyle = "#CF882B";
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 15, _y);
        crc2.lineTo(_x + 20, _y + 20);
        crc2.lineTo(_x - 5, _y + 20);
        crc2.closePath();
        crc2.moveTo(_x - 5, _y + 20);
        crc2.lineTo(_x, _y + 25);
        crc2.lineTo(_x + 15, _y + 25);
        crc2.lineTo(_x + 20, _y + 20);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.strokeStyle = "#CF882B";
        crc2.moveTo(_x + 5, _y);
        crc2.lineTo(_x + 5, _y - 5);
        crc2.lineTo(_x + 10, _y - 5);
        crc2.lineTo(_x + 10, _y);
        crc2.stroke();
        crc2.closePath();
        crc2.beginPath();
        crc2.moveTo(_x + 5, _y + 15);
        crc2.lineTo(_x + 10, _y + 15);
        crc2.lineTo(_x + 12, _y + 20);
        crc2.lineTo(_x + 3, _y + 20);
        crc2.lineTo(_x + 5, _y + 15);
        crc2.strokeStyle = "#A66F27";
        crc2.fillStyle = "#A66F27";
        crc2.stroke();
        crc2.fill();
    }
})(L4_Canvas || (L4_Canvas = {})); //namespace
//# sourceMappingURL=Aufgabe6A.js.map