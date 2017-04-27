var L3a_chess;
(function (L3a_chess) {
    document.addEventListener("DOMContentLoaded", function () {
        var n = 64; // Felder haben die Anzahl 64 
        var size = 120;
        var reihe = 1;
        var color;
        for (var i = 0; i < n; i++) {
            if (reihe % 2 != 0) {
                if (i % 2 == 0) {
                    color = "black";
                }
                else {
                    color = "white";
                }
            }
            else {
                if (i % 2 == 0) {
                    color = "white";
                }
                else {
                    color = "black";
                }
            }
            x = (i % 8) * size; // Modulo anwenden und mit Größe multiplizieren
            y = (reihe - 1) * size;
            placeDiv(color, x, y, size, i);
            if (x == (7 * size)) {
                reihe++;
            }
        }
        writerice();
        var divList = document.getElementsByTagName("div");
        for (var i = 1; i < 9; i++) {
            divList[i].addEventListener("click", function () {
                this.classList.toggle("select");
                showsumrice();
            });
        }
    });
    function placeDiv(_color, _x, _y, _size, _counter) {
        var div = document.createElement("div");
        document.body.appendChild(div);
        var s = div.style;
        s.position = "absolute";
        s.display = "inline-block";
        div.className += _color;
        div.className += " fields";
        s.width = _size + "px";
        s.height = _size + "px";
        s.left = _x + "px";
        s.top = _y + "px";
    }
    function writerice() {
        var feld = document.getElementsByClassName("fields");
        var rice;
        for (var j = 0; j < feld.length; j++) {
            var divList = document.getElementsByTagName("div");
            for (var i1 = 0; i1 < 9; i1++) {
                divList[i1].addEventListener("click", function () {
                    this.classList.toggle("selected");
                    showsumrice();
                });
            }
        }
    }
    function showsumrice() {
        var selectDivs = document.getElementsByClassName("select");
        var sumrice = 0;
        if (selectDivs.length == 0) {
            document.getElementById("alpha").style.display = "none";
        }
        else {
            document.getElementById("alpha").style.display = "inline-block";
        }
        for (var i = 0; i < selectDivs.length; i++) {
            sumrice += Number(selectDivs[i].textContent);
            document.getElementById("alpha").textContent = "sum of selected rice:" + "\r\n" + "Dezimal: " + sumrice.toString() + "\r\n" + "Hexadezimal: " + sumrice.toString(16);
        }
    }
    document.addEventListener("mousemove", function (_event) {
        document.getElementById("alpha").style.left = (_event.clientX + 10) + "px";
        document.getElementById("alpha").style.top = (_event.clientY + 10) + "px";
    });
})(L3a_chess || (L3a_chess = {}));
//# sourceMappingURL=Aufgabe3a.js.map