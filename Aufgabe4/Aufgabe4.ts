var L4_Canvas;
(function(L4_Canvas) {
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
        crc2.beginPath();
        crc2.moveTo(0, 250);
        crc2.lineTo(0, 0);
        crc2.lineTo(400, 0);
        crc2.lineTo(400, 250);
        crc2.fillStyle = "#ccf5ff";
        crc2.fill();
        drawBerg(250, 170, "#c2d6d6", "#999966");
        ctx.createRadialGradient(70, 0, 5, 90, 60, 70);
        grd.addColorStop(0, "yellow");
        grd.addColorStop(1, "#66ffff");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 400, 50);

        // Sun
        crc2.beginPath();
        crc2.arc(300, 70, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "yellow";
        crc2.fill();

        // Put flowers at random
        var colors = [];
        for (var i = 0; i < 25; i++) {
            var randomX = (Math.random() * (400 - 1)) + 1;
            var randomY = (Math.random() * (220 - 200)) + 200;
            console.log("X is " + randomX, "Y is " + randomY, randomSunflower);
            var randomSunflower = Math.floor((Math.random() * 2)) + 1;
            if (randomSunflower == 1) {
                drawSunflower(randomX, randomY, "#44d580", "#332900", "#ffd11a");
            } else {
                drawDaisy(randomX, randomY, "#40ff00", "yellow", "white");
            }
        }

        // Berg
        function drawBerg(_x, _y, _strokeColor, _fillColor) {
            crc2.beginPath();
            crc2.fillStyle = _fillColor;
            crc2.strokeStyle = _strokeColor;
            crc2.moveTo(_x - 400, _y + 50);
            crc2.lineTo(_x, _y - 80);
            crc2.lineTo(_x + 20, _y - 50);
            crc2.lineTo(_x + 40, _y - 60);
            crc2.lineTo(_x + 150, _y + 40);
            crc2.closePath();
            crc2.fill();
            // Bergspitze
            crc2.beginPath();
            crc2.fillStyle = "d9d9d9";
            crc2.lineTo(_x + 30, _y - 45);
            crc2.lineTo(_x + 50, _y - 20);
            crc2.lineTo(_x + 40, _y - 60);
            crc2.lineTo(_x + 10, _y - 50);
            crc2.lineTo(_x, _y - 80);
            crc2.lineTo(_x - 15, _y - 40);
            crc2.closePath();
            crc2.fill();
        }

        //Blumen
        //Sonneblume
        function drawSunflower(_x, _y, _stalkColor, _stamenColor, _petalColor) {
            crc2.beginPath();
            crc2.strokeStyle = _stalkColor;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 20);
            crc2.stroke();
            crc2.closePath();
             // blossom
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
            // leafs
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
            // stamen
            crc2.beginPath();
            crc2.arc(_x, _y - 20, 5, 0, 2 * Math.PI);
            crc2.fillStyle = _stamenColor;
            crc2.fill();
        }
        //Gänseblümchen
        function drawDaisy(_x, _y, _stalkColor, _stamenColor, _petalColor) {
            crc2.beginPath();
            crc2.strokeStyle = _stalkColor;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 20);
            crc2.stroke();
            crc2.closePath();
             // blossom
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
            // leafs
            crc2.beginPath();
            crc2.strokeStyle = _stalkColor;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 7);
            crc2.lineTo(_x - 5, _y - 7);
            crc2.lineTo(_x, _y);
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
            // stamen
            crc2.beginPath();
            crc2.arc(_x, _y - 20, 5, 0, 2 * Math.PI);
            crc2.fillStyle = _stamenColor;
            crc2.fill();

            // Grass
            crc2.beginPath();
            crc2.moveTo(0, 200);
            crc2.lineTo(400, 200);
            crc2.lineTo(400, 250);
            crc2.lineTo(0, 250);
            crc2.closePath();
            crc2.fillStyle = "#aaff80";
            crc2.fill();
        }
    }
})(L4_Canvas || (L4_Canvas = {}));
// # sourceMappingURL=04.js.map

// # sourceMappingURL=Aufgabe4.js.map
