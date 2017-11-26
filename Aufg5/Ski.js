var Classes;
(function (Classes) {
    // Exportieren
    class Ski {
        // Konstruktor
        constructor(_x, _y) {
            console.log("Ski");
            this.skiX = _x;
            this.skiY = _y;
        }
        draw() {
            // Skifahrer tauchen wieder auf
            if (this.skiX > 800) {
                this.skiX = 0;
                this.skiY = 10;
            }
            // K�rper
            Classes.crc2.beginPath();
            Classes.crc2.arc(this.skiX + this.skiY + 12, 445, 5, 3, 2 * Math.PI);
            Classes.crc2.fill();
            Classes.crc2.fillRect(this.skiX + this.skiY + 7, 445, 10, 31);
            Classes.crc2.closePath();
            Classes.crc2.beginPath();
            Classes.crc2.moveTo(this.skiX + this.skiY + 10, 450);
            Classes.crc2.lineTo(this.skiX + this.skiY + 27, 455);
            Classes.crc2.lineWidth = 5;
            Classes.crc2.stroke();
            Classes.crc2.closePath();
            // Kopf
            Classes.crc2.beginPath();
            Classes.crc2.arc(this.skiX + this.skiY + 12, 435, 5.5, 0, 2 * Math.PI);
            Classes.crc2.fillStyle = "#fff7b5";
            Classes.crc2.fill();
            Classes.crc2.closePath();
            // Skier
            Classes.crc2.fillStyle = "#121219";
            Classes.crc2.fillRect(this.skiX + this.skiY + 5, 476, 40, 4);
            Classes.crc2.moveTo(this.skiX + this.skiY + 25, 445);
            Classes.crc2.lineTo(this.skiX + this.skiY + 10, 485);
            Classes.crc2.strokeStyle = "#121219";
            Classes.crc2.lineWidth = 2;
            Classes.crc2.stroke();
            Classes.crc2.closePath();
            // Helm
            Classes.crc2.beginPath();
            Classes.crc2.arc(this.skiX + this.skiY + 10, 433, 7.5, 2, 2 * Math.PI);
            Classes.crc2.fill();
            Classes.crc2.closePath();
            if (this.skiY > Classes.crc2.canvas.height) {
                this.skiY = 0;
            }
            if (this.skiY < 0) {
                this.skiY = Classes.crc2.canvas.height;
            }
        } // Draw-Funktion
    }
    Classes.Ski = Ski; // Export-Class
})(Classes || (Classes = {}));
//# sourceMappingURL=Ski.js.map