document.addEventListener('DOMContentLoaded', function () {
    var field = 0;
    var line = 0;
    var rice = 1;
    for (field = 0; field < 64; field++) { //Feld zwischen 0 und 64 (8x8=64)
        var div = document.createElement("div");
        div.innerText = "" + rice; // Anzahl der Reiskörner einfügen
        rice = rice * 2; //jeweils das Doppelte hinzufügen
        document.body.appendChild(div);
        if (field % 8 == 0) {
            line = line + 1;
        }
        if (line % 2 == 0) { //Modulo des Feldes gerade
            if (field % 2 != 0) { //Modulo des Feldes ungerade
                div.style.backgroundColor = "black"; // Bedingung erf�llt -> Farbe2 ausf�hren
            }
            else {
                div.style.backgroundColor = "white"; // Bedingung nicht erf�llt -> Farbe1 ausf�hren
            }
        }
        else {
            if (field % 2 != 0) { //Modulo des Feldes ungerade
                div.style.backgroundColor = "white"; // Bedingung erf�llt -> Farbe1 ausf�hren
            }
            else {
                div.style.backgroundColor = "black"; // Bedingung nicht erf�llt -> Farbe2 ausf�hren
            }
        }
    }
});
//# sourceMappingURL=chess.js.map 
//# sourceMappingURL=Aufgabe2.js.map