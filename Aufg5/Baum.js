var Classes;
(function (Classes) {
    class Trees {
        constructor(_x, _y) {
            console.log("Trees");
            this.x = _x;
            this.y = _y;
            this.setRandomPosition();
        }
        draw() {
            //abstract
        }
        setRandomPosition() {
            this.x = (Math.random() * (400 - 1)) + 1;
            this.y = (Math.random() * (300 - 230)) + 230;
        }
        drawRandomTrees() {
            for (let i = 0; i < 20; i++) {
                let randomX = (Math.random() * (800 - 1)) + 1;
                let randomY = (Math.random() * (500 - 400)) + 400;
                let randomBaum1 = Math.floor((Math.random() * 2)) + 1;
                console.log("X is " + randomX, "Y is " + randomY, randomBaum1);
                if (randomBaum1 == 1) {
                    let b = new Classes.Baum1(100, 200);
                    b.draw();
                }
                else {
                    let t = new Classes.Baum2(200, 100);
                    t.draw();
                }
            }
        }
    }
    Classes.Trees = Trees;
})(Classes || (Classes = {}));
//# sourceMappingURL=Baum.js.map