namespace Classes {
    window.addEventListener("load", init);
    export let crc2: CanvasRenderingContext2D;

    let skiNumber: number = 4;
    let flockeNumber: number = 20;
    let ski: Ski[] = [];
    //let tree: Trees[] = [];


    export let targetX: number;
    export let targetY: number;
    export let flocken: Flocke[] = [];

    //    for (let i: number = 0; i < 10; i++) {
    //        let b: Baum1 = new Baum1(200, 200);
    //        b.draw();
    //        tree.push(b);
    //    }

    console.log("1");

    let imgData: ImageData;
    //


    function init(_event: Event): void {
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0]; //das erste von der Liste von elements        
        crc2 = canvas.getContext("2d");
        crc2.fillRect(0, 0, canvas.width, canvas.height);



        console.log("INIT MID");
        for (let i: number = 0; i < skiNumber; i++) {
            console.log("ski " + i);
            let s: Ski = new Ski(65, 183);
            ski[i] = s;
        }

        //Fertige Landschaft wird gespeichert

        imgData = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        console.log("postImage");

    } //init

    //funktionsaufruf



    function animate(): void {
        console.log("anim");
        crc2.putImageData(imgData, 0, 0); //gespeichertes Bild verwenden
        for (let i: number = 0; i < skiNumber; i++) {
            let s: Ski = ski[i];

        }


        window.setTimeout(animate, 20);
        console.log("TimeOut");
    }


    // Sky
    crc2.beginPath();
    crc2.fillStyle = "#ccf5ff";
    crc2.fillRect(0, 0, 800, 370);

    //Skilift
    crc2.beginPath();
    crc2.fillStyle = "black";
    crc2.fillRect(0, 170, 800, 15); // Anfang, Höhe, Länge, Dicke

    // Skisitz 1
    crc2.beginPath();
    crc2.fillStyle = "black";
    crc2.fillRect(570, 170, 10, 45);
    crc2.beginPath();
    crc2.fillStyle = "black";
    crc2.fillRect(650, 170, 10, 45);
    crc2.beginPath();
    crc2.fillStyle = "black";
    crc2.fillRect(540, 200, 150, 120);
    crc2.beginPath();
    crc2.fillStyle = "#F8FCFE";
    crc2.fillRect(570, 230, 100, 70);

    // Skisitz
    crc2.beginPath();
    crc2.fillStyle = "black";
    crc2.fillRect(170, 170, 10, 45);
    crc2.beginPath();
    crc2.fillStyle = "black";
    crc2.fillRect(250, 170, 10, 45);
    crc2.beginPath();
    crc2.fillStyle = "black";
    crc2.fillRect(140, 200, 150, 120);
    crc2.beginPath();
    crc2.fillStyle = "#F8FCFE";
    crc2.fillRect(170, 230, 100, 70);

    // Sonne
    crc2.beginPath();
    crc2.arc(690, 70, 45, 0, 2 * Math.PI); // x, y, size
    crc2.fillStyle = "#ffff99";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(690, 70, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "#ffffb3";
    crc2.fill();


    console.log("MiddleDrawDaShiiit");

    // Wolke 1
    crc2.beginPath();
    crc2.arc(120, 70, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(150, 80, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(80, 60, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(130, 50, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(80, 75, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(110, 40, 30, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();

    // Wolke 2
    crc2.beginPath();
    crc2.arc(520, 130, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(550, 120, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(580, 120, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(530, 130, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(590, 120, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(580, 110, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(510, 110, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(480, 100, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(540, 105, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(440, 90, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(450, 100, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(540, 100, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();
    crc2.beginPath();
    crc2.arc(430, 100, 40, 0, 2 * Math.PI);
    crc2.fillStyle = "white";
    crc2.fill();

    // Schneelandschaft
    crc2.fillStyle = "#white";
    crc2.fillRect(0, 400, 800, 200);
    crc2.fillStyle = "#f2f2f2";
    crc2.fillRect(0, 380, 800, 20);

    animate();
}