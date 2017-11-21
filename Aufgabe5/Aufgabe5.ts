//namespace L4_Canvas {
//    window.addEventListener("load", init);
//    let crc2: CanvasRenderingContext2D;
//    let x: number[] = [];
//    let y: number[] = [];
//    let beeNumber: number = 10;
//    let imgData: ImageData;
//    function init(_event: Event): void {
//        let canvas: HTMLCanvasElement;
//        canvas = document.getElementsByTagName("canvas")[0];
//        crc2 = canvas.getContext("2d");
//        console.log(crc2, canvas);
//        crc2.fillRect(0, 0, canvas.width, canvas.height);
//
//        drawSky();
//        drawBerg(250, 170, "##c2d6d6", "#999966");
//        drawGrass();
//        drawSun();
//        drawRandomSunflowers();
//        drawCloud(160, 90, "white");
//
//        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
//        animate();
//
//        for (let i: number = 0; i < beeNumber; i++) {
//            //Start der Bienen
//            x[i] = 70;
//            y[i] = 170;
//        }
//        window.setTimeout(animate, 20, canvas.width, canvas.height);
//        canvas.addEventListener("click", addBee);
//    }
//
//
//    function animate(): void {
//        console.log("Animate called");
//        crc2.putImageData(imgData, 0, 0);
//        for (let i: number = 0; i < beeNumber; i++) {
//            x[i] += Math.random() * 4 - 2;
//            y[i] += Math.random() * 4 - 2;
//            if (x[i] > crc2.canvas.width) {
//                x[i] = 0;
//            }
//            if (y[i] > crc2.canvas.height) {
//                y[i] = 0;
//            }
//            if (y[i] < 0) {
//                y[i] = crc2.canvas.height;
//            }
//            drawBee(x[i], y[i]);
//        }
//        window.setTimeout(animate, 20);
//    }
//    function drawBee(_x: number, _y: number): void {
//
//        //Flügel
//        crc2.beginPath();
//        crc2.arc(_x + 2, _y - 1, 3, 0, 2 * Math.PI);
//        crc2.closePath();
//        crc2.strokeStyle = "#b3ffff";
//        crc2.stroke();
//        //Kopf
//        crc2.beginPath();
//        crc2.arc(_x + 3, _y, 3, 0, 2 * Math.PI);
//        crc2.closePath();
//        crc2.fillStyle = "#orange";
//        crc2.fill();
//        // Body
//        crc2.beginPath();
//        crc2.moveTo(_x - 2, _y - 3);
//        crc2.lineTo(_x + 3, _y - 3);
//        crc2.lineTo(_x + 2, _y + 3);
//        crc2.lineTo(_x - 1, _y + 2);
//        crc2.closePath();
//        crc2.fillStyle = "#000000";
//        crc2.fill();
//    }
//
//    // Klick -> neue Biene
//    function addBee(): void {
//        x.push(70);
//        y.push(180);
//        beeNumber++;
//    }
//
//    // Sky
//    function drawSky(): void {
//        crc2.beginPath();
//        crc2.moveTo(0, 250);
//        crc2.lineTo(0, 0);
//        crc2.lineTo(400, 0);
//        crc2.lineTo(400, 250);
//        crc2.fillStyle = "#ccf5ff";
//        crc2.fill();
//    }
//
//    // Cloud
//    function drawCloud(_x: number, _y: number, _fillColor: string): void {
//        crc2.fillStyle = "white";
//        crc2.fill();
//        crc2.beginPath();
//        crc2.arc(350, 120, 20, 0, 2 * Math.PI);
//        crc2.fillStyle = "white";
//        crc2.fill();
//        crc2.beginPath();
//        crc2.arc(280, 120, 20, 0, 2 * Math.PI);
//        crc2.fillStyle = "white";
//        crc2.fill();
//        crc2.beginPath();
//        crc2.arc(330, 130, 20, 0, 2 * Math.PI);
//        crc2.fillStyle = "white";
//        crc2.fill();
//        crc2.beginPath();
//        crc2.arc(290, 120, 20, 0, 2 * Math.PI);
//        crc2.fillStyle = "white";
//        crc2.fill();
//        crc2.beginPath();
//        crc2.arc(280, 110, 20, 0, 2 * Math.PI);
//        crc2.fillStyle = "white";
//        crc2.fill();
//        crc2.beginPath();
//        crc2.arc(310, 110, 20, 0, 2 * Math.PI);
//        crc2.fillStyle = "white";
//        crc2.fill();
//        crc2.beginPath();
//        crc2.arc(280, 100, 20, 0, 2 * Math.PI);
//        crc2.fillStyle = "white";
//        crc2.fill();
//        crc2.beginPath();
//        crc2.arc(340, 105, 20, 0, 2 * Math.PI);
//        crc2.fillStyle = "white";
//        crc2.fill();
//        crc2.beginPath();
//        crc2.arc(240, 90, 20, 0, 2 * Math.PI);
//        crc2.fillStyle = "white";
//        crc2.fill();
//        crc2.beginPath();
//        crc2.arc(250, 100, 20, 0, 2 * Math.PI);
//        crc2.fillStyle = "white";
//        crc2.fill();
//        crc2.beginPath();
//        crc2.arc(340, 100, 20, 0, 2 * Math.PI);
//        crc2.fillStyle = "white";
//        crc2.fill();
//        crc2.beginPath();
//        crc2.arc(230, 100, 20, 0, 2 * Math.PI);
//        crc2.fillStyle = "white";
//        crc2.fill();
//        crc2.closePath();
//    }
//
//    // Sun
//    function drawSun(): void {
//        crc2.beginPath();
//        crc2.arc(290, 70, 45, 0, 2 * Math.PI); // x, y, size
//        crc2.fillStyle = "#ffdb4d";
//        crc2.fill();
//        crc2.beginPath();
//        crc2.arc(290, 70, 30, 0, 2 * Math.PI);
//        crc2.fillStyle = "yellow";
//        crc2.fill();
//    }
//
//    // Grass
//    function drawGrass(): void {
//        crc2.beginPath();
//        crc2.moveTo(0, 190);
//        crc2.lineTo(400, 190);
//        crc2.lineTo(400, 250);
//        crc2.lineTo(0, 250);
//        crc2.closePath();
//        crc2.fillStyle = "#226600";
//        crc2.fill();
//        crc2.beginPath();
//        crc2.moveTo(0, 200);
//        crc2.lineTo(400, 200);
//        crc2.lineTo(400, 250);
//        crc2.lineTo(0, 250);
//        crc2.closePath();
//        crc2.fillStyle = "#aaff80";
//        crc2.fill();
//    }
//
//    // Put Flowers at random
//    function drawRandomSunflowers(): void {
//        var flowers: string[] = [
//            drawSunflower(randomX: number, randomY: number, "#44d580", "#332900", "#ffd11a");
//            drawDaisy(randomX, randomY, "#40ff00", "yellow", "white");
//        ];        
//        for (var i: number = 0; i < 25; i++) {
//            var randomX: number = (Math.random() * (400 - 1)) + 1;
//            var randomY: number = (Math.random() * (250 - 200)) + 200;
//            var randomColor: string[] = colors[Math.floor(Math.random() * colors.length)];
//            var randomSunflower: string = flowers[Math.floor(Math.random() * flowers.length)];
//            console.log("X is " + randomX, "Y is " + randomY, randomSunflower);
//            var randomSunflower: number = Math.floor((Math.random() * 2)) + 1;
//            if (randomSunflower == 1) {
//                drawSunflower(randomX, randomY, "#44d580", "#332900", "#ffd11a");
//            }
//            else {
//                drawDaisy(randomX, randomY, "#40ff00", "yellow", "white");
//            }
//        }
//    }
//}
//
//// Berg
//function drawBerg(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
//    crc2.beginPath();
//    crc2.fillStyle = _fillColor;
//    crc2.strokeStyle = _strokeColor;
//    crc2.moveTo(_x - 400, _y + 50);
//    crc2.lineTo(_x, _y - 80);
//    crc2.lineTo(_x + 70, _y - 50);
//    crc2.lineTo(_x + 80, _y - 60);
//    crc2.lineTo(_x + 150, _y + 40);
//    crc2.lineTo(_x + 120, _y + 40);
//    crc2.closePath();
//    crc2.fill();
//}
//
//// Blumen
//function drawSunflower(_x: number, _y: number, _stalkColor: string, _centerColor: string, _petalColor: string): void {
//    crc2.beginPath();
//    crc2.strokeStyle = _stalkColor;
//    crc2.moveTo(_x, _y);
//    crc2.lineTo(_x, _y - 20);
//    crc2.stroke();
//    crc2.closePath();
//    //leafs
//    crc2.beginPath();
//    crc2.strokeStyle = _stalkColor;
//    crc2.moveTo(_x, _y);
//    crc2.lineTo(_x, _y - 7);
//    crc2.lineTo(_x + 5, _y - 7);
//    crc2.lineTo(_x, _y);
//    crc2.stroke();
//    crc2.closePath();
//    crc2.fillStyle = _stalkColor;
//    crc2.fill();
//    //petals
//    crc2.fillStyle = _stamenColor;
//    crc2.beginPath();
//    crc2.arc(_x, _y - 25, 5, 0, 2 * Math.PI);
//    crc2.fill();
//    crc2.beginPath();
//    crc2.arc(_x - 5, _y - 20, 5, 0, 2 * Math.PI);
//    crc2.fill();
//    crc2.beginPath();
//    crc2.arc(_x + 5, _y - 20, 5, 0, 2 * Math.PI);
//    crc2.fill();
//    crc2.beginPath();
//    crc2.arc(_x, _y - 15, 5, 0, 2 * Math.PI);
//    crc2.fill();
//    // stamen
//    crc2.beginPath();
//    crc2.arc(_x, _y - 20, 5, 0, 2 * Math.PI);
//    crc2.fillStyle = _petalColor;
//    crc2.fill();
//}
//
//function drawDaisy(_x: number, _y: number, _stalkColor: string, _stamenColor: string, _petalColor: string): void {
//    crc2.beginPath();
//    crc2.strokeStyle = _stalkColor;
//    crc2.moveTo(_x, _y);
//    crc2.lineTo(_x, _y - 20);
//    crc2.stroke();
//    crc2.closePath();
//    //leafs
//    crc2.beginPath();
//    crc2.strokeStyle = _stalkColor;
//    crc2.moveTo(_x, _y);
//    crc2.lineTo(_x, _y - 7);
//    crc2.lineTo(_x - 5, _y - 7);
//    crc2.lineTo(_x, _y - 5);
//    crc2.stroke();
//    crc2.closePath();
//    crc2.fillStyle = _stalkColor;
//    crc2.fill();
//    crc2.beginPath();
//    crc2.strokeStyle = _stalkColor;
//    crc2.moveTo(_x, _y);
//    crc2.lineTo(_x, _y - 12);
//    crc2.lineTo(_x + 5, _y - 18);
//    crc2.lineTo(_x, _y - 5);
//    crc2.stroke();
//    crc2.closePath();
//    crc2.fillStyle = _stalkColor;
//    crc2.fill();
//    // petals
//    crc2.fillStyle = _petalColor;
//    crc2.beginPath();
//    crc2.arc(_x, _y - 25, 5, 0, 2 * Math.PI);
//    crc2.fill();
//    crc2.beginPath();
//    crc2.arc(_x - 5, _y - 20, 5, 0, 2 * Math.PI);
//    crc2.fill();
//    crc2.beginPath();
//    crc2.arc(_x + 5, _y - 20, 5, 0, 2 * Math.PI);
//    crc2.fill();
//    crc2.beginPath();
//    crc2.arc(_x, _y - 15, 5, 0, 2 * Math.PI);
//    crc2.fill();
//    //stamen
//    crc2.beginPath();
//    crc2.arc(_x, _y - 20, 5, 0, Math.PI);
//    crc2.fillStyle = _stamenColor;
//}
//
//
//
//
// //namespace
