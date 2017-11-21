namespace Classes {
    export class Trees {
        x: number;
        y: number;

        constructor(_x: number, _y: number) {
            console.log("Trees");

            this.x = _x;
            this.y = _y;
            this.setRandomPosition();
        }

        draw(): void {
            //abstract
        }

        setRandomPosition(): void {
            this.x = (Math.random() * (400 - 1)) + 1;
            this.y = (Math.random() * (300 - 230)) + 230;
        }

        drawRandomTrees(): void {
            for (let i: number = 0; i < 20; i++) {
                let randomX: number = (Math.random() * (800 - 1)) + 1;
                let randomY: number = (Math.random() * (500 - 400)) + 400;
                let randomBaum1: number = Math.floor((Math.random() * 2)) + 1;
                console.log("X is " + randomX, "Y is " + randomY, randomBaum1);
                if (randomBaum1 == 1) {
                    let b: Baum1 = new Baum1(100, 200);
                    b.draw();
                }
                else {
                    let t: Baum2 = new Baum2(200, 100);
                    t.draw();
                }
            }
        }
    }
}