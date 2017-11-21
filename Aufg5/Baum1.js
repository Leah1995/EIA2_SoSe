var Classes;
(function (Classes) {
    class Baum2 extends Classes.Trees {
        constructor(_x, _y) {
            console.log("Baum2");
            super(_x, _y);
        }
        draw() {
            function drawBaum1(_x, _y, _trunkColor, _topColor) {
                // Stamm
                Classes.crc2.beginPath();
                Classes.crc2.moveTo(_x, _y);
                Classes.crc2.lineTo(_x + 25, _y + 565);
                Classes.crc2.lineTo(_x - 25, _y + 565);
                Classes.crc2.closePath();
                Classes.crc2.fillStyle = _trunkColor;
                Classes.crc2.fillRect(_x - 5, _y + 40, 12, 23);
                // Baumkrone
                Classes.crc2.beginPath();
                Classes.crc2.moveTo(_x + 25, _y + 40);
                Classes.crc2.lineTo(_x - 25, _y + 40);
                Classes.crc2.lineTo(_x, _y);
                Classes.crc2.closePath();
                Classes.crc2.fillStyle = _topColor;
                Classes.crc2.fill();
            }
        }
    }
    Classes.Baum2 = Baum2;
})(Classes || (Classes = {}));
//# sourceMappingURL=Baum1.js.map