namespace Aufgabe6 {

    export class Skifahrer extends MovingObject {
        dx: number;
        dy: number;


        constructor(_x: number, _y: number) {
            super(_x, _y);
        }

        update(): void {
            this.moving();
            this.return();
            this.draw();
        }

        moving(): void {
            this.x += Math.random() * 10 + 10;
            this.y += Math.random() *  0.01 - 0.01;
        }

        return(): void {
            if (this.x > 850) {
                this.x = 0;
            }
        }

        // Skifahrer zeichnen
        draw(): void {
            //Körper
            crc2.beginPath();
            crc2.arc(this.x + this.y + 12, 445, 5, 3, 2 * Math.PI);
            crc2.fill();
            crc2.fillRect(this.x + this.y + 7, 445, 10, 31);
            crc2.closePath();
            crc2.beginPath();
            crc2.moveTo(this.x + this.y + 10, 450);
            crc2.lineTo(this.x + this.y + 27, 455);
            crc2.lineWidth = 5;
            crc2.stroke();
            crc2.closePath();
            // Kopf
            crc2.beginPath();
            crc2.arc(this.x + this.y + 12, 435, 5.5, 0, 2 * Math.PI);           
            crc2.fillStyle = "#fff7b5";  
            crc2.fill();          
            crc2.closePath();
            // Skier
            crc2.fillStyle = "#121219";
            crc2.fillRect(this.x + this.y + 5, 476, 40, 4);
            crc2.moveTo(this.x + this.y + 25, 445);
            crc2.lineTo(this.x + this.y + 10, 485);
            crc2.strokeStyle = "#121219";
            crc2.lineWidth = 2;
            crc2.stroke();
            crc2.closePath();
            // Helm
            crc2.beginPath();
            crc2.arc(this.x + this.y + 10, 433, 7.5, 2, 2 * Math.PI);            
            crc2.closePath();
            crc2.strokeStyle = this.color;
            crc2.stroke();
            crc2.fillStyle = this.color;
            crc2.fill();
        }

        setRandomColor(): void {
            this.color = "hsl(" + Math.random() * -120 + ", 60%, 70%)";
        }

    }
}