namespace Classes {

    export class Flocke {
        x: number;
        y: number;
        petalColor: string;
        stalkColor: string;

        constructor(_x: number, _y: number) {
            console.log("Flocke");

            this.x = _x;
            this.y = _y;
        }

        draw(): void {
            function drawFlocke(_x: number, _y: number): void {

                // gerade Linie
                crc2.beginPath();
                crc2.moveTo(_x, _y - 15);
                crc2.lineTo(_x, _y + 10);
                crc2.strokeStyle = "white";
                crc2.lineWidth = 5;
                crc2.stroke();

                // schiefe Linien
                crc2.beginPath();
                crc2.moveTo(_x - 12, _y + 5);
                crc2.lineTo(_x + 12, _y - 10);
                crc2.strokeStyle = "white";
                crc2.lineWidth = 5;
                crc2.stroke();

                crc2.beginPath();
                crc2.moveTo(_x + 12, _y + 5);
                crc2.lineTo(_x - 12, _y - 10);
                crc2.strokeStyle = "white";
                crc2.lineWidth = 5;
                crc2.stroke();

                crc2.closePath();
            }
        }
    }
}