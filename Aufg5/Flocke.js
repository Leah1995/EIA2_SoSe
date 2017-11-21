var Classes;
(function (Classes) {
    class Flocke {
        constructor(_x, _y) {
            console.log("Flocke");
            this.x = _x;
            this.y = _y;
        }
        draw() {
            function drawFlocke(_x, _y) {
                // gerade Linie
                Classes.crc2.beginPath();
                Classes.crc2.moveTo(_x, _y - 15);
                Classes.crc2.lineTo(_x, _y + 10);
                Classes.crc2.strokeStyle = "white";
                Classes.crc2.lineWidth = 5;
                Classes.crc2.stroke();
                // schiefe Linien
                Classes.crc2.beginPath();
                Classes.crc2.moveTo(_x - 12, _y + 5);
                Classes.crc2.lineTo(_x + 12, _y - 10);
                Classes.crc2.strokeStyle = "white";
                Classes.crc2.lineWidth = 5;
                Classes.crc2.stroke();
                Classes.crc2.beginPath();
                Classes.crc2.moveTo(_x + 12, _y + 5);
                Classes.crc2.lineTo(_x - 12, _y - 10);
                Classes.crc2.strokeStyle = "white";
                Classes.crc2.lineWidth = 5;
                Classes.crc2.stroke();
                Classes.crc2.closePath();
            }
        }
    }
    Classes.Flocke = Flocke;
})(Classes || (Classes = {}));
//# sourceMappingURL=Flocke.js.map