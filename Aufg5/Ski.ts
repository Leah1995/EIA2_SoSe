namespace Classes {

    // Exportieren
    export class Ski {
        skiX: number;
        skiY: number;
        skidX: number;
        skidY: number;
        color: string;

        // Konstruktor
        constructor(_x: number, _y: number) {
            console.log("Ski");
            this.skiX = _x;
            this.skiY = _y;
        }

        draw(): void {
            
            // Skifahrer tauchen wieder auf
            if (this.skiX > 800) {
                this.skiX = 0;
                this.skiY = 10;
            }

            // Körper
            crc2.beginPath();
            crc2.arc(this.skiX + this.skiY + 12, 445, 5, 3, 2 * Math.PI);
            crc2.fill();
            crc2.fillRect(this.skiX + this.skiY + 7, 445, 10, 31);
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.skiX + this.skiY + 10, 450);
            crc2.lineTo(this.skiX + this.skiY + 27, 455);
            crc2.lineWidth = 5;
            crc2.stroke();
            crc2.closePath();
            // Kopf
            crc2.beginPath();
            crc2.arc(this.skiX + this.skiY + 12, 435, 5.5, 0, 2 * Math.PI);
            crc2.fillStyle = "#fff7b5";
            crc2.fill();
            crc2.closePath();
            // Skier
            crc2.fillStyle = "#121219";
            crc2.fillRect(this.skiX + this.skiY + 5, 476, 40, 4);
            crc2.moveTo(this.skiX + this.skiY + 25, 445);
            crc2.lineTo(this.skiX + this.skiY + 10, 485);
            crc2.strokeStyle = "#121219";
            crc2.lineWidth = 2;
            crc2.stroke();
            crc2.closePath();
            // Helm
            crc2.beginPath();
            crc2.arc(this.skiX + this.skiY + 10, 433, 7.5, 2, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();

            
            
            if (this.skiY > crc2.canvas.height) {
                this.skiY = 0;
            }
            if (this.skiY < 0) {
                this.skiY = crc2.canvas.height;
            }
        } // Draw-Funktion
    } // Export-Class
}
