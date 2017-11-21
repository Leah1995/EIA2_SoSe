var Classes;
(function (Classes) {
    class Ski {
        constructor(_x, _y) {
            console.log("Ski");
            this.skiX = _x;
            this.skiY = _y;
        }
        draw() {
            function drawSki(_ski) {
                _ski.skiX += _ski.skidX;
                _ski.skiY += _ski.skidY;
                Classes.crc2.fillStyle = _ski.color;
                // Skifahrer tauchen wieder auf
                if (_ski.skiX > 800) {
                    _ski.skiX = 0;
                    _ski.skiY = 10;
                }
                // K�rper
                Classes.crc2.beginPath();
                Classes.crc2.arc(_ski.skiX + _ski.skiY + 12, 445, 5, 3, 2 * Math.PI);
                Classes.crc2.fill();
                Classes.crc2.fillRect(_ski.skiX + _ski.skiY + 7, 445, 10, 31);
                Classes.crc2.closePath();
                Classes.crc2.beginPath();
                Classes.crc2.moveTo(_ski.skiX + _ski.skiY + 10, 450);
                Classes.crc2.lineTo(_ski.skiX + _ski.skiY + 27, 455);
                Classes.crc2.lineWidth = 5;
                Classes.crc2.stroke();
                Classes.crc2.closePath();
                // Kopf
                Classes.crc2.beginPath();
                Classes.crc2.arc(_ski.skiX + _ski.skiY + 12, 435, 5.5, 0, 2 * Math.PI);
                Classes.crc2.fillStyle = "#fff7b5";
                Classes.crc2.fill();
                Classes.crc2.closePath();
                // Skier
                Classes.crc2.fillStyle = "#121219";
                Classes.crc2.fillRect(_ski.skiX + _ski.skiY + 5, 476, 40, 4);
                Classes.crc2.moveTo(_ski.skiX + _ski.skiY + 25, 445);
                Classes.crc2.lineTo(_ski.skiX + _ski.skiY + 10, 485);
                Classes.crc2.strokeStyle = "#121219";
                Classes.crc2.lineWidth = 2;
                Classes.crc2.stroke();
                Classes.crc2.closePath();
                // Helm
                Classes.crc2.beginPath();
                Classes.crc2.arc(_ski.skiX + _ski.skiY + 10, 433, 7.5, 2, 2 * Math.PI);
                Classes.crc2.fill();
                Classes.crc2.closePath();
            }
            if (this.skiY > Classes.crc2.canvas.height) {
                this.skiY = 0;
            }
            if (this.skiY < 0) {
                this.skiY = Classes.crc2.canvas.height;
            }
        }
    }
    Classes.Ski = Ski;
})(Classes || (Classes = {}));
//# sourceMappingURL=Ski.js.map