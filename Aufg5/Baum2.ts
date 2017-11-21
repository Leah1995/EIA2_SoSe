namespace Classes {


    export class Baum1 extends Trees {

        constructor(_x: number, _y: number) {
            console.log("Baum2");
            super(_x, _y);

        }

        draw(): void {
            function drawBaum1(_x: number, _y: number, _trunkColor: string, _topColor: string): void {
                // Stamm
                crc2.beginPath();
                crc2.moveTo(_x, _y);
                crc2.lineTo(_x + 30, _y - 135);
                crc2.lineTo(_x - 30, _y - 135);
                crc2.fillStyle = _trunkColor;
                crc2.fillRect(_x - 7, _y + 70, 12, 23);
                crc2.closePath();
                // Baumkrone
                crc2.beginPath();
                crc2.moveTo(_x, _y);
                crc2.lineTo(_x + 20, _y + 70);
                crc2.lineTo(_x - 20, _y + 70);
                crc2.closePath();
                crc2.fillStyle = _topColor;
                crc2.fill();
            }
        }
    }


}