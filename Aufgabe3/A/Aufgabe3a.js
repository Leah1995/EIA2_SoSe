var L3a_chess;
(function (L3a_chess) {
    document.addEventListener("DOMContentLoaded", function () {
        let n = 64; // Felder haben die Anzahl 64 
        let size = 120;
        let reihe = 1;
        let color;
        for (let i = 0; i < n; i++) {
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
        let divList = document.getElementsByTagName("div");
        for (let i = 1; i < 9; i++) {
            divList[i].addEventListener("click", function () {
                this.classList.toggle("select");
                showsumrice();
            });
        }
    });
    function placeDiv(_color, _x, _y, _size, _counter) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let s = div.style;
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
        let feld = document.getElementsByClassName("fields");
        let rice;
        for (let j = 0; j < feld.length; j++) {
            let divList = document.getElementsByTagName("div");
            for (let i1 = 0; i1 < 9; i1++) {
                divList[i1].addEventListener("click", function () {
                    this.classList.toggle("select");
                    showsumrice();
                });
            }
        }
    }
    function showsumrice() {
        let selectDivs = document.getElementsByClassName("select");
        let sumrice = 0;
        if (selectDivs.length == 0) {
            document.getElementById("alpha").style.display = "none";
        }
        else {
            document.getElementById("alpha").style.display = "inline-block";
        }
        for (let i2 = 0; i2 < selectDivs.length; i2++) {
            sumrice += Number(selectDivs[i2].textContent);
            document.getElementById("alpha").textContent = "sumofselectedrice:" + "\r\n" + "Dezimal: " + sumrice.toString() + "\r\n" + "Hexadezimal: " + sumrice.toString(16);
        }
    }
    document.addEventListener("mousemove", function (_event) {
        document.getElementById("alpha").style.left = (_event.clientX + 10) + "px";
        document.getElementById("alpha").style.top = (_event.clientY + 10) + "px";
    });
})(L3a_chess || (L3a_chess = {}));
//# sourceMappingURL=Aufgabe3a.js.map