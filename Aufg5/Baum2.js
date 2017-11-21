var Classes;
(function (Classes) {
    class Baum1 extends Classes.Trees {
        constructor(_x, _y) {
            console.log("Baum2");
            super(_x, _y);
        }
        draw() {
            function drawBaum1(_x, _y, _trunkColor, _topColor) {
                // Stamm
                Classes.crc2.beginPath();
                Classes.crc2.moveTo(_x, _y);
                Classes.crc2.lineTo(_x + 30, _y - 135);
                Classes.crc2.lineTo(_x - 30, _y - 135);
                Classes.crc2.fillStyle = _trunkColor;
                Classes.crc2.fillRect(_x - 7, _y + 70, 12, 23);
                Classes.crc2.closePath();
                // Baumkrone
                Classes.crc2.beginPath();
                Classes.crc2.moveTo(_x, _y);
                Classes.crc2.lineTo(_x + 20, _y + 70);
                Classes.crc2.lineTo(_x - 20, _y + 70);
                Classes.crc2.closePath();
                Classes.crc2.fillStyle = _topColor;
                Classes.crc2.fill();
            }
        }
    }
    Classes.Baum1 = Baum1;
})(Classes || (Classes = {}));
//# sourceMappingURL=Baum2.js.map