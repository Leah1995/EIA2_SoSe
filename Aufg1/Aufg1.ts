namespace L4_Schneelandschaft {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        // Sky
        crc2.fillStyle = "#ccf5ff";
        crc2.fillRect(0, 0, 800, 600);
        
        // Skilift
        crc2.fillStyle = "black";
        crc2.fillRect(0, 230, 800, 15);

        // Funktionen
        drawBerg(450, 370, "#c2d6d6", "#ffffff");
        drawBerg(300, 380, "#c2d6d6", "#f2f2f2");
        drawBerg(700, 350, "#c2d6d6", "#e6e6e6");
        drawBerg(200, 360, "#c2d6d6", "#d9d9d9");
        drawBaum1(800, 200, "#cc9966", "#00514c");
        drawBaum2(800, 200, "#4c2e0a", "#44d271");
        drawSkilift(200, 400);
        drawSkisitz(100, 300);

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
        let colors: string[] = [];
        for (let i: number = 0; i < 20; i++) {
            let randomX: number = (Math.random() * (400 - 1)) + 1;
            let randomY: number = (Math.random() * (250 - 200)) + 200;
            let randomBaum1: number = Math.floor((Math.random() * 2)) + 1;
            console.log("X is " + randomX, "Y is " + randomY, randomBaum1);
            if (randomBaum1 == 1) {
                drawBaum1(randomX, randomY, "#cc9966", "#00514c");
            } else {
                drawBaum2(randomX, randomY, "#4c2e0a", "#44d271");
            }
        }

        // Berg
        function drawBerg(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
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
        function drawBaum1(_x: number, _y: number, _trunkColor: string, _topColor: string): void {
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
        function drawBaum2(_x: number, _y: number, _trunkColor: string, _topColor: string): void {
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

        //Skilift
        function drawSkilift(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.lineWidth = 7;
            crc2.moveTo(_x - 60, _y + 400);
            crc2.lineTo(_x + 50, _y - 400);
            crc2.stroke();
        }
        
        // Skisitz
        function drawSkisitz(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.strokeStyle = "black";
            crc2.lineWidth = 20;
            crc2.moveTo(_x - 570, _y + 300);
            crc2.lineTo(_x + 150, _y - 200);
            crc2.stroke();
        }

    }

}
