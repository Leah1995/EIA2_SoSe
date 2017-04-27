
namespace L3a_chess {
    document.addEventListener("DOMContentLoaded", function(): void {
        let n: number = 64; // Felder haben die Anzahl 64 
        let size: number = 120; 
        let reihe: number = 1;
        let color: string;

        for (let i: number = 0; i < n; i++) {
            if (reihe % 2 != 0) { // Modulo anwenden -> wenn ungerade
                if (i % 2 == 0) {
                    color = "black";
                }
                else {
                    color = "white";
                }
            }
            else {
                if (i % 2 == 0) { // Modulo anwenden -> wenn gerade
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
        let divList: NodeListOf<Element> = document.getElementsByTagName("div");
        for (let i: number = 1; i < 9; i++) {
            divList[i].addEventListener("click", function(): void {
                this.classList.toggle("select");
                showsumrice();
            });
        }
    });

    function placeDiv(_color: string, _x: number, _y: number, _size: number, _counter: number): void {
        let div: HTMLElement = document.createElement("div");
        document.body.appendChild(div);
        let s: CSSStyleDeclaration = div.style;
        s.position = "absolute";
        s.display = "inline-block";
        div.className += _color;
        div.className += " fields";
        s.width = _size + "px";
        s.height = _size + "px";
        s.left = _x + "px";
        s.top = _y + "px";
    }


    function writerice(): void {
        let feld: NodeListOf<Element> = document.getElementsByClassName("fields");
        let rice: number;
        for (let j: number = 0; j < feld.length; j++) {
            let divList: NodeListOf<Element> = document.getElementsByTagName("div");
            for (let i1: number = 0; i1 < 9; i1++) {
                divList[i1].addEventListener("click", function(): void {
                    this.classList.toggle("selected");
                    showsumrice();
                });
            }
        }
    }


    function showsumrice(): void {
        let selectDivs: NodeListOf<Element> = document.getElementsByClassName("select");
        let sumrice: number = 0;
        if (selectDivs.length == 0) {
            document.getElementById("alpha").style.display = "none";
        }
        else {
            document.getElementById("alpha").style.display = "inline-block";
        }
        for (let i: number = 0; i < selectDivs.length; i++) {
            sumrice += Number(selectDivs[i].textContent);
            document.getElementById("alpha").textContent = "sum of selected rice:" + "\r\n" + "Dezimal: " + sumrice.toString() + "\r\n" + "Hexadezimal: " + sumrice.toString(16);
        }
    }

    document.addEventListener("mousemove", function(_event: MouseEvent): void {
        document.getElementById("alpha").style.left = (_event.clientX + 10) + "px";
        document.getElementById("alpha").style.top = (_event.clientY + 10) + "px";
    });
}