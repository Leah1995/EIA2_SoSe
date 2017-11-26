var Aufgabe6;
(function (Aufgabe6) {
    class Schnee extends Aufgabe6.MovingObject {
        // vorbereitende Methodenaufrufe zur Verwendung des Objekts
        constructor(_x, _y) {
            super(_x, _y); // Superklasse
        }
        // Verweisung auf Eigenschaften der Objekte
        update() {
            this.move();
            this.comeBack();
            this.draw();
        }
        // Geschwindigkeit
        move() {
            this.y += Math.random() * 20;
        }
        // Schneeflocken tauchen wieder auf
        comeBack() {
            if (this.y > 600) {
                this.y = 0;
            }
        }
        // Schneeflocken zeichnen
        // gerade Linie
        draw() {
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x, this.y - 15);
            Aufgabe6.crc2.lineTo(this.x, this.y + 10);
            Aufgabe6.crc2.strokeStyle = "white";
            Aufgabe6.crc2.lineWidth = 5;
            Aufgabe6.crc2.stroke();
            // schiefe Linien
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x - 12, this.y + 5);
            Aufgabe6.crc2.lineTo(this.x + 12, this.y - 10);
            Aufgabe6.crc2.strokeStyle = "white";
            Aufgabe6.crc2.lineWidth = 5;
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.beginPath();
            Aufgabe6.crc2.moveTo(this.x + 12, this.y + 5);
            Aufgabe6.crc2.lineTo(this.x - 12, this.y - 10);
            Aufgabe6.crc2.strokeStyle = "white";
            Aufgabe6.crc2.lineWidth = 5;
            Aufgabe6.crc2.stroke();
            Aufgabe6.crc2.closePath();
        }
    }
    Aufgabe6.Schnee = Schnee; // exportiert
})(Aufgabe6 || (Aufgabe6 = {})); // Namespace
//# sourceMappingURL=Schnee.js.map