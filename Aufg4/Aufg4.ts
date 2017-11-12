namespace L4_Schneelandschaft {

    // Interface
    interface SkiInfo {
        skiX: number;
        skiY: number;
        skidX: number;
        skidY: number;
        color: string;
    }

    // Skifahrer Arrays
    let skiX: number[] = [];
    let skidX: number[] = [];
    let skiY: number[] = [];
    let skidY: number[] = [];

    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;
    let ski: SkiInfo[] = [];

    function init(): void {
        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        console.log("setTimeout");
        animate();
        let skiNumber: number = 4;
        for (let i: number = 0; i < skiNumber; i++) {
            ski[i] = {
                skiX: 5,
                skiY: 1,
                skidX: Math.random() * 5,
                skidY: Math.random() * 2,
                color: "hsl(" + Math.random() * -120 + ", 60%, 70%)"
            };

        }
    }

    function animate(): void {

        for (let i: number = 0; i < ski.length; i++) {
            skiX[i] = 0 + Math.random() * 800;
            skiY[i] = 0 + Math.random() * 600;
            drawSki(ski[i]);
        }

        window.setTimeout(animate, 10);


        function drawSki(_ski: SkiInfo): void {
            _ski.skiX += _ski.skidX;
            _ski.skiY += _ski.skidY;

            crc2.fillStyle = _ski.color;

            // Skifahrer tauchen wieder auf
            if (_ski.skiX > 800) {
                _ski.skiX = 0;
                _ski.skiY = 10;

            }

            // Körper
            crc2.beginPath();
            crc2.arc(_ski.skiX + _ski.skiY + 12, 445, 5, 3, 2 * Math.PI);
            crc2.fill();
            crc2.fillRect(_ski.skiX + _ski.skiY + 7, 445, 10, 31);
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(_ski.skiX + _ski.skiY + 10, 450);
            crc2.lineTo(_ski.skiX + _ski.skiY + 27, 455);
            crc2.lineWidth = 5;
            crc2.stroke();
            crc2.closePath();
            // Kopf
            crc2.beginPath();
            crc2.arc(_ski.skiX + _ski.skiY + 12, 435, 5.5, 0, 2 * Math.PI);
            crc2.fillStyle = "#fff7b5";
            crc2.fill();
            crc2.closePath();
            // Skier
            crc2.fillStyle = "#121219";
            crc2.fillRect(_ski.skiX + _ski.skiY + 5, 476, 40, 4);
            crc2.moveTo(_ski.skiX + _ski.skiY + 25, 445);
            crc2.lineTo(_ski.skiX + _ski.skiY + 10, 485);
            crc2.strokeStyle = "#121219";
            crc2.lineWidth = 2;
            crc2.stroke();
            crc2.closePath();
            // Helm
            crc2.beginPath();
            crc2.arc(_ski.skiX + _ski.skiY + 10, 433, 7.5, 2, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
        }
    }
}