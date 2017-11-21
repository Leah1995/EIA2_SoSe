namespace Classes {


    export class Baum2 extends Trees {

        constructor(_x: number, _y: number) {
            console.log("Baum2");
            super(_x, _y);

        }

        draw(): void {
           function drawBaum1 (_x: number, _y: number, _trunkColor: string, _topColor: string): void {
                // Stamm
                crc2.beginPath();
                crc2.moveTo(_x, _y);
                crc2.lineTo(_x + 25, _y + 565);
                crc2.lineTo(_x - 25, _y + 565);
                crc2.closePath();
                crc2.fillStyle = _trunkColor;
                crc2.fillRect(_x - 5, _y + 40, 12, 23);
                // Baumkrone
                crc2.beginPath();
                crc2.moveTo(_x + 25, _y + 40);
                crc2.lineTo(_x - 25, _y + 40);
                crc2.lineTo(_x, _y);
                crc2.closePath();
                crc2.fillStyle = _topColor;
                crc2.fill();
            }
        }
    }
}