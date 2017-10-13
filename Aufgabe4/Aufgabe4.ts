namespace L4_Blumenwiese {
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
        crc2.beginPath();
        crc2.moveTo(0, 250);
        crc2.lineTo(0, 0);
        crc2.lineTo(400, 0);
        crc2.lineTo(400, 250);
        crc2.fillStyle = "#ccf5ff"; //blau
        crc2.fill();
        drawBerg(250, 170, "#c2d6d6", "#999966");

        // Sun
        crc2.beginPath();
        crc2.arc(290, 70, 45, 0, 2 * Math.PI); // x, y, size
        crc2.fillStyle = "#ffdb4d";
        crc2.fill();
        crc2.beginPath();
        crc2.arc(290, 70, 30, 0, 2 * Math.PI);
        crc2.fillStyle = "yellow";
        crc2.fill();

        // Cloud 1
        //      crc2.beginPath();
        //      crc2.arc(120, 70, 20, 0, 2 * Math.PI);
        //      crc2.fillStyle = "white";
        //      crc2.fill();
        //      crc2.beginPath();
        //      crc2.arc(150, 80, 20, 0, 2 * Math.PI);
        //      crc2.fillStyle = "white";
        //      crc2.fill();
        //      crc2.beginPath();
        //      crc2.arc(80, 60, 20, 0, 2 * Math.PI);
        //      crc2.fillStyle = "white";
        //      crc2.fill();
        //      crc2.beginPath();
        //      crc2.arc(130, 50, 20, 0, 2 * Math.PI);
        //      crc2.fillStyle = "white";
        //      crc2.fill();
        //      crc2.beginPath();
        //      crc2.arc(80, 75, 20, 0, 2 * Math.PI);
        //      crc2.fillStyle = "white";
        //      crc2.fill();
        //      crc2.beginPath();
        //      crc2.arc(110, 40, 20, 0, 2 * Math.PI);
        //      crc2.fillStyle = "white";
        //      crc2.fill();
        // Cloud
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

        //Ellipse
        ////      ctx.beginPath();
        //        ctx.moveTo(x, ym);
        //        ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
        //        ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
        //        ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
        //        ctx.er - ox, ye, x, ym + oy, x, ym);


        // Grass
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

        // Path
        crc2.beginPath();
        crc2.moveTo(-50, 230);
        crc2.lineTo(400, 200);
        crc2.lineTo(40, 280);
        crc2.lineTo(230, 350);
        crc2.closePath();
        crc2.fillStyle = "#ffe699";
        crc2.fill();


        // Put flowers at random
        let colors: string[] = [];
        for (let i: number = 0; i < 70; i++) {
            let randomX: number = (Math.random() * (400 - 1)) + 1;
            let randomY: number = (Math.random() * (250 - 200)) + 200;
            console.log("X is " + randomX, "Y is " + randomY, randomSunflower);
            let randomSunflower: number = Math.floor((Math.random() * 2)) + 1;
            if (randomSunflower == 1) {
                drawSunflower(randomX, randomY, "#44d580", "#332900", "#ffd11a");
            } else {
                drawDaisy(randomX, randomY, "#40ff00", "yellow", "white");
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

        //Blumen
        function drawSunflower(_x: number, _y: number, _stalkColor: string, _stamenColor: string, _petalColor: string): void {
            crc2.beginPath();
            crc2.strokeStyle = _stalkColor;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 20);
            crc2.stroke();
            crc2.closePath();
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
            // stamen
            crc2.beginPath();
            crc2.arc(_x, _y - 20, 5, 0, 2 * Math.PI);
            crc2.fillStyle = _stamenColor;
            crc2.fill();

        }
        function drawDaisy(_x: number, _y: number, _stalkColor: string, _stamenColor: string, _petalColor: string): void {
            crc2.beginPath();
            crc2.strokeStyle = _stalkColor;
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 20);
            crc2.stroke();
            crc2.closePath();
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
            // stamen
            crc2.beginPath();
            crc2.arc(_x, _y - 20, 5, 0, 2 * Math.PI);
            crc2.fillStyle = _stamenColor;
            crc2.fill();

        }

    }

}

