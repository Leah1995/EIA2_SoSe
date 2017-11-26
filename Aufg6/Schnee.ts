namespace Aufgabe6 {

    export class Schnee extends MovingObject {

        // vorbereitende Methodenaufrufe zur Verwendung des Objekts
        constructor(_x: number, _y: number) {
            super(_x, _y); // Superklasse
        }

        // Verweisung auf Eigenschaften der Objekte
        update(): void {
            this.moving();
            this.return();
            this.draw();
        }

        // Geschwindigkeit
        moving(): void {
            this.y += Math.random() * 20;
        }

        // Schneeflocken tauchen wieder auf
        return(): void {
            if (this.y > 600) {
                this.y = 0;
            }
        }

        // Schneeflocken zeichnen
        // gerade Linie
        draw(): void {
            crc2.beginPath();
            crc2.moveTo(this.x, this.y - 15);
            crc2.lineTo(this.x, this.y + 10);
            crc2.strokeStyle = "white";
            crc2.lineWidth = 5;
            crc2.stroke();

            // schiefe Linien
            crc2.beginPath();
            crc2.moveTo(this.x - 12, this.y + 5);
            crc2.lineTo(this.x + 12, this.y - 10);
            crc2.strokeStyle = "white";
            crc2.lineWidth = 5;
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x + 12, this.y + 5);
            crc2.lineTo(this.x - 12, this.y - 10);
            crc2.strokeStyle = "white";
            crc2.lineWidth = 5;
            crc2.stroke();

            crc2.closePath();
        }

    } // exportiert
} // Namespace