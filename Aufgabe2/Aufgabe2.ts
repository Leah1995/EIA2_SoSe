document.addEventListener("DOMContentLoaded", function (): void {
    let field: number = 0; // vom "ersten" Feld  an
    let line: number = 0; // von der "ersten" Linie an
    let rice: number = 1; // Reiskörner von hier an 1
    for (field = 0; field < 64; field++) { // Felder zwischen dem "ersten" und dem "letzten"
        let div: HTMLDivElement = document.createElement("div");
        div.innerText = "" + rice;
        rice = rice * 2; // Anzahl verdoppeln
        document.body.appendChild(div);
        if (field % 8 == 0) { // Modulo anwenden
            line = line + 1;
        }
        if (line % 2 == 0) {
            if (field % 2 != 0) {
                div.style.backgroundColor = "black";
                div.style.color = "white";
            }
            else {
                div.style.backgroundColor = "white";
            }
        }
        else {
            if (field % 2 != 0) { // Modulo des Felds ungerade
                div.style.backgroundColor = "white"; // Bedingung erfüllt -> Farbe1 ausführen
            }
            else {
                div.style.backgroundColor = "black"; // Bedingung nicht erfüllt -> Farbe2 ausführen
            }
        }
    }
});
//# sourceMappingURL=chess.js.map