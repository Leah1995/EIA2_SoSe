var Classes;
(function (Classes) {
    window.addEventListener("load", init);
    let skiNumber = 4;
    let flockeNumber = 20;
    let ski = [];
    let tree = [];
    Classes.flocken = [];
    //    for (let i: number = 0; i < 10; i++) {
    //        let b: Baum1 = new Baum1(200, 200);
    //        b.draw();
    //        tree.push(b);
    //    }
    let imgData;
    function init(_event) {
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        Classes.crc2 = canvas.getContext("2d");
        Classes.crc2.fillRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < skiNumber; i++) {
            let s = new Classes.Ski(65, 183);
            ski[i] = s;
        }
        //Fertige Landschaft wird gespeichert
        imgData = Classes.crc2.getImageData(0, 0, Classes.crc2.canvas.width, Classes.crc2.canvas.height);
    } //init
    function animate() {
        Classes.crc2.putImageData(imgData, 0, 0); //gespeichertes Bild verwenden
        for (let i = 0; i < skiNumber; i++) {
            let s = ski[i];
        }
        window.setTimeout(animate, 20);
    }
    // Sky
    Classes.crc2.fillStyle = "#ccf5ff";
    Classes.crc2.fillRect(0, 0, 800, 370);
    //Skilift
    Classes.crc2.beginPath();
    Classes.crc2.fillStyle = "black";
    Classes.crc2.fillRect(0, 170, 800, 15); // Anfang, H�he, L�nge, Dicke
    // Skisitz 1
    Classes.crc2.beginPath();
    Classes.crc2.fillStyle = "black";
    Classes.crc2.fillRect(570, 170, 10, 45);
    Classes.crc2.beginPath();
    Classes.crc2.fillStyle = "black";
    Classes.crc2.fillRect(650, 170, 10, 45);
    Classes.crc2.beginPath();
    Classes.crc2.fillStyle = "black";
    Classes.crc2.fillRect(540, 200, 150, 120);
    Classes.crc2.beginPath();
    Classes.crc2.fillStyle = "#F8FCFE";
    Classes.crc2.fillRect(570, 230, 100, 70);
    // Skisitz
    Classes.crc2.beginPath();
    Classes.crc2.fillStyle = "black";
    Classes.crc2.fillRect(170, 170, 10, 45);
    Classes.crc2.beginPath();
    Classes.crc2.fillStyle = "black";
    Classes.crc2.fillRect(250, 170, 10, 45);
    Classes.crc2.beginPath();
    Classes.crc2.fillStyle = "black";
    Classes.crc2.fillRect(140, 200, 150, 120);
    Classes.crc2.beginPath();
    Classes.crc2.fillStyle = "#F8FCFE";
    Classes.crc2.fillRect(170, 230, 100, 70);
    // Sonne
    Classes.crc2.beginPath();
    Classes.crc2.arc(690, 70, 45, 0, 2 * Math.PI); // x, y, size
    Classes.crc2.fillStyle = "#ffff99";
    Classes.crc2.fill();
    Classes.crc2.beginPath();
    Classes.crc2.arc(690, 70, 30, 0, 2 * Math.PI);
    Classes.crc2.fillStyle = "#ffffb3";
    Classes.crc2.fill();
    // Wolke 1
    Classes.crc2.beginPath();
    Classes.crc2.arc(120, 70, 30, 0, 2 * Math.PI);
    Classes.crc2.fillStyle = "white";
    Classes.crc2.fill();
    Classes.crc2.beginPath();
    Classes.crc2.arc(150, 80, 30, 0, 2 * Math.PI);
    Classes.crc2.fillStyle = "white";
    Classes.crc2.fill();
    Classes.crc2.beginPath();
    Classes.crc2.arc(80, 60, 30, 0, 2 * Math.PI);
    Classes.crc2.fillStyle = "white";
    Classes.crc2.fill();
    Classes.crc2.beginPath();
    Classes.crc2.arc(130, 50, 30, 0, 2 * Math.PI);
    Classes.crc2.fillStyle = "white";
    Classes.crc2.fill();
    Classes.crc2.beginPath();
    Classes.crc2.arc(80, 75, 30, 0, 2 * Math.PI);
    Classes.crc2.fillStyle = "white";
    Classes.crc2.fill();
    Classes.crc2.beginPath();
    Classes.crc2.arc(110, 40, 30, 0, 2 * Math.PI);
    Classes.crc2.fillStyle = "white";
    Classes.crc2.fill();
    // Wolke 2
    Classes.crc2.beginPath();
    Classes.crc2.arc(520, 130, 40, 0, 2 * Math.PI);
    Classes.crc2.fillStyle = "white";
    Classes.crc2.fill();
    Classes.crc2.beginPath();
    Classes.crc2.arc(550, 120, 40, 0, 2 * Math.PI);
    Classes.crc2.fillStyle = "white";
    Classes.crc2.fill();
    Classes.crc2.beginPath();
    Classes.crc2.arc(580, 120, 40, 0, 2 * Math.PI);
    Classes.crc2.fillStyle = "white";
    Classes.crc2.fill();
    Classes.crc2.beginPath();
    Classes.crc2.arc(530, 130, 40, 0, 2 * Math.PI);
    Classes.crc2.fillStyle = "white";
    Classes.crc2.fill();
    Classes.crc2.beginPath();
    Classes.crc2.arc(590, 120, 40, 0, 2 * Math.PI);
    Classes.crc2.fillStyle = "white";
    Classes.crc2.fill();
    Classes.crc2.beginPath();
    Classes.crc2.arc(580, 110, 40, 0, 2 * Math.PI);
    Classes.crc2.fillStyle = "white";
    Classes.crc2.fill();
    Classes.crc2.beginPath();
    Classes.crc2.arc(510, 110, 40, 0, 2 * Math.PI);
    Classes.crc2.fillStyle = "white";
    Classes.crc2.fill();
    Classes.crc2.beginPath();
    Classes.crc2.arc(480, 100, 40, 0, 2 * Math.PI);
    Classes.crc2.fillStyle = "white";
    Classes.crc2.fill();
    Classes.crc2.beginPath();
    Classes.crc2.arc(540, 105, 40, 0, 2 * Math.PI);
    Classes.crc2.fillStyle = "white";
    Classes.crc2.fill();
    Classes.crc2.beginPath();
    Classes.crc2.arc(440, 90, 40, 0, 2 * Math.PI);
    Classes.crc2.fillStyle = "white";
    Classes.crc2.fill();
    Classes.crc2.beginPath();
    Classes.crc2.arc(450, 100, 40, 0, 2 * Math.PI);
    Classes.crc2.fillStyle = "white";
    Classes.crc2.fill();
    Classes.crc2.beginPath();
    Classes.crc2.arc(540, 100, 40, 0, 2 * Math.PI);
    Classes.crc2.fillStyle = "white";
    Classes.crc2.fill();
    Classes.crc2.beginPath();
    Classes.crc2.arc(430, 100, 40, 0, 2 * Math.PI);
    Classes.crc2.fillStyle = "white";
    Classes.crc2.fill();
    // Schneelandschaft
    Classes.crc2.fillStyle = "#white";
    Classes.crc2.fillRect(0, 400, 800, 200);
    Classes.crc2.fillStyle = "#f2f2f2";
    Classes.crc2.fillRect(0, 380, 800, 20);
})(Classes || (Classes = {}));
//# sourceMappingURL=main.js.map