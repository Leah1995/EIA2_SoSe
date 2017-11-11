var L04_InterfaceArray;
(function (L04_InterfaceArray) {
    window.addEventListener("load", init);
    let crc2;
    let ski = [];
    function init() {
        let canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        console.log("setTimeout");
        animate();
        let skiNumber = 7;
        for (let i = 0; i < skiNumber; i++) {
            ski[i] = {
                skiX: 100,
                skiY: 200,
                skidX: Math.random() * 5,
                skidY: Math.random() * 2,
                color: "hsl(" + Math.random() * -100 + ", 70%, 50%)"
            };
        }
    }
    function animate() {
        for (let i = 0; i < ski.length; i++) {
            drawSki(ski[i]);
        }
        window.setTimeout(animate, 10);
    }
    function drawSki(_ski) {
        _ski.skiX += _ski.skidX;
        _ski.skiY += _ski.skidY;
        crc2.fillStyle = _ski.color;
        // K�rper
        crc2.beginPath();
        crc2.arc(_ski.skiX + _ski.skiY + 92, 445, 5, 3, 2 * Math.PI);
        crc2.fill();
        crc2.fillRect(_ski.skiX + _ski.skiY + 87, 445, 10, 31);
        crc2.beginPath();
        crc2.moveTo(_ski.skiX + _ski.skiY + 90, 450);
        crc2.lineTo(_ski.skiX + _ski.skiY + 107, 455);
        crc2.lineWidth = 5;
        crc2.stroke();
        crc2.closePath();
        // Kopf
        crc2.beginPath();
        crc2.arc(_ski.skiX + _ski.skiY + 92, 435, 6, 0, 2 * Math.PI);
        crc2.fillStyle = "#fff7b5";
        crc2.fill();
        // Helm
        crc2.beginPath();
        crc2.arc(_ski.skiX + _ski.skiY + 90, 433, 7, 2, 2 * Math.PI);
        crc2.fillStyle = "#FF99FF";
        crc2.fill();
        // Skier
        crc2.fillStyle = "#121219";
        crc2.fillRect(_ski.skiX + _ski.skiY + 85, 476, 40, 4);
        crc2.moveTo(_ski.skiX + _ski.skiY + 115, 445);
        crc2.lineTo(_ski.skiX + _ski.skiY + 90, 485);
        crc2.strokeStyle = "#121219";
        crc2.lineWidth = 2;
        crc2.stroke();
        crc2.closePath();
    }
    var L4_Schneelandschaft;
    (function (L4_Schneelandschaft) {
        window.addEventListener("load", init);
        let crc2;
        let x = [];
        let dx = [];
        let y = [];
        let dy = [];
        let skiX = [];
        let skidX = [];
        let skiY = [];
        let skidY = [];
        let flockeX = [];
        let flockeY = [];
        let flockeNumber = 80;
        let imgData;
        function init(_event) {
            let canvas;
            canvas = document.getElementsByTagName("canvas")[0];
            console.log(canvas);
            crc2 = canvas.getContext("2d");
            console.log(crc2);
            crc2.fillRect(0, 0, canvas.width, canvas.height);
            function animate() {
                console.log("Animate called");
                crc2.putImageData(imgData, 0, 0);
                for (let i = 0; i < flockeNumber; i++) {
                    x[i] = 0 + Math.random() * 800;
                    y[i] = 0 + Math.random() * 600;
                    if (x[i] > crc2.canvas.width) {
                        x[i] = 0;
                    }
                    if (y[i] > crc2.canvas.height) {
                        y[i] = 0;
                    }
                    if (y[i] < 0) {
                        y[i] = crc2.canvas.height;
                    }
                    drawFlocke(x[i], y[i]);
                }
                window.setTimeout(animate, 30); // Geschwindigkeit
            }
            // Sky
            crc2.fillStyle = "#ccf5ff";
            crc2.fillRect(0, 0, 800, 370);
            // Funktionen
            drawBerg(450, 370, "#c2d6d6", "#ffffff");
            drawBerg(300, 380, "#c2d6d6", "#f2f2f2");
            drawBerg(700, 350, "#c2d6d6", "#e6e6e6");
            drawBerg(200, 360, "#c2d6d6", "#d9d9d9");
            drawBaum1(800, 800, "#cc9966", "#44d271");
            drawBaum2(800, 800, "#4c2e0a", "#00514c");
            drawFlocke(150, 100);
            //Skilift
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.fillRect(0, 170, 800, 15); // Anfang, H�he, L�nge, Dicke
            // Skisitz 1
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.fillRect(570, 170, 10, 45);
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.fillRect(650, 170, 10, 45);
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.fillRect(540, 200, 150, 120);
            crc2.beginPath();
            crc2.fillStyle = "#F8FCFE";
            crc2.fillRect(570, 230, 100, 70);
            // Skisitz
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.fillRect(170, 170, 10, 45);
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.fillRect(250, 170, 10, 45);
            crc2.beginPath();
            crc2.fillStyle = "black";
            crc2.fillRect(140, 200, 150, 120);
            crc2.beginPath();
            crc2.fillStyle = "#F8FCFE";
            crc2.fillRect(170, 230, 100, 70);
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
            // B�ume zuf�llig hinstellen
            for (let i = 0; i < 20; i++) {
                let randomX = (Math.random() * (800 - 1)) + 1;
                let randomY = (Math.random() * (500 - 400)) + 400;
                let randomBaum1 = Math.floor((Math.random() * 2)) + 1;
                console.log("X is " + randomX, "Y is " + randomY, randomBaum1);
                if (randomBaum1 == 1) {
                    drawBaum1(randomX, randomY, "#cc9966", "#44d271");
                }
                else {
                    drawBaum2(randomX, randomY, "#4c2e0a", "#00514c");
                }
            }
            // Berg
            function drawBerg(_x, _y, _strokeColor, _fillColor) {
                crc2.beginPath();
                crc2.fillStyle = _fillColor;
                crc2.strokeStyle = _strokeColor;
                crc2.moveTo(_x - 400, _y + 50);
                crc2.lineTo(_x, _y - 80);
                crc2.lineTo(_x + 30, _y - 70);
                crc2.lineTo(_x + 80, _y - 60);
                crc2.lineTo(_x + 150, _y + 40);
                crc2.lineTo(_x + 120, _y + 40);
                crc2.closePath();
                crc2.fill();
            }
            imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
            animate();
            // Baum 1
            function drawBaum1(_x, _y, _trunkColor, _topColor) {
                // Stamm
                crc2.beginPath();
                crc2.moveTo(_x, _y);
                crc2.lineTo(_x + 25, _y + 565);
                crc2.lineTo(_x - 25, _y + 565);
                crc2.closePath();
                crc2.fillStyle = _trunkColor;
                crc2.fillRect(_x - 5, _y + 40, 12, 23);
                // Baumkrone
                crc2.beginPath();
                crc2.moveTo(_x + 25, _y + 40);
                crc2.lineTo(_x - 25, _y + 40);
                crc2.lineTo(_x, _y);
                crc2.closePath();
                crc2.fillStyle = _topColor;
                crc2.fill();
            }
            // Baum 2
            function drawBaum2(_x, _y, _trunkColor, _topColor) {
                // Stamm
                crc2.beginPath();
                crc2.moveTo(_x, _y);
                crc2.lineTo(_x + 30, _y - 135);
                crc2.lineTo(_x - 30, _y - 135);
                crc2.fillStyle = _trunkColor;
                crc2.fillRect(_x - 7, _y + 70, 12, 23);
                crc2.closePath();
                // Baumkrone
                crc2.beginPath();
                crc2.moveTo(_x, _y);
                crc2.lineTo(_x + 20, _y + 70);
                crc2.lineTo(_x - 20, _y + 70);
                crc2.closePath();
                crc2.fillStyle = _topColor;
                crc2.fill();
            }
            // Schneeflocken
            function drawFlocke(_x, _y) {
                // gerade Linie
                crc2.beginPath();
                crc2.moveTo(_x, _y - 15);
                crc2.lineTo(_x, _y + 10);
                crc2.strokeStyle = "white";
                crc2.lineWidth = 5;
                crc2.stroke();
                // schiefe Linien
                crc2.beginPath();
                crc2.moveTo(_x - 12, _y + 5);
                crc2.lineTo(_x + 12, _y - 10);
                crc2.strokeStyle = "white";
                crc2.lineWidth = 5;
                crc2.stroke();
                crc2.beginPath();
                crc2.moveTo(_x + 12, _y + 5);
                crc2.lineTo(_x - 12, _y - 10);
                crc2.strokeStyle = "white";
                crc2.lineWidth = 5;
                crc2.stroke();
            }
        }
    })(L4_Schneelandschaft || (L4_Schneelandschaft = {}));
})(L04_InterfaceArray || (L04_InterfaceArray = {}));
//# sourceMappingURL=Aufg4.js.map