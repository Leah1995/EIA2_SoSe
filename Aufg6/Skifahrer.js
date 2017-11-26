var Aufgabe6;
(function (Aufgabe6) {
    class Skifahrer extends Aufgabe6.MovingObject {
        constructor(_x, _y) {
            super(_x, _y);
        }
        update() {
            this.moving();
            this.return();
            this.draw();
        }
        moving() {
            this.x += Math.random() * 10 + 10;
            this.y += Math.random() * 0.01 - 0.01;
        }
        return() {
            if (this.x > 850) {
                this.x = 0;
            }
        }
        // Skifahrer zeichnen
        draw() {
            //K�rper
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + this.y + 12, 445, 5, 3, 2 * Math.PI);
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.fillRect(this.x + this.y + 7, 445, 10, 31);
            Aufgabe6.crc2.closePath();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x + this.y + 10, 450);
            Aufgabe6.crc2.lineTo(this.x + this.y + 27, 455);
            Aufgabe6.crc2.lineWidth = 5;
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.closePath();
            // Kopf
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + this.y + 12, 435, 5.5, 0, 2 * Math.PI);
            Aufgabe6.crc2.fillStyle = "#fff7b5";
            Aufgabe6.crc2.fill();
            Aufgabe6.crc2.closePath();
            // Skier
            Aufgabe6.crc2.fillStyle = "#121219";
            Aufgabe6.crc2.fillRect(this.x + this.y + 5, 476, 40, 4);
            Aufgabe6.crc2.moveTo(this.x + this.y + 25, 445);
            Aufgabe6.crc2.lineTo(this.x + this.y + 10, 485);
            Aufgabe6.crc2.strokeStyle = "#121219";
            Aufgabe6.crc2.lineWidth = 2;
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.closePath();
            // Helm
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.arc(this.x + this.y + 10, 433, 7.5, 2, 2 * Math.PI);
            Aufgabe6.crc2.closePath();
            Aufgabe6.crc2.strokeStyle = this.color;
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.fillStyle = this.color;
            Aufgabe6.crc2.fill();
        }
        setRandomColor() {
            this.color = "hsl(" + Math.random() * -120 + ", 60%, 70%)";
        }
    }
    Aufgabe6.Skifahrer = Skifahrer;
})(Aufgabe6 || (Aufgabe6 = {}));
//# sourceMappingURL=Skifahrer.js.map