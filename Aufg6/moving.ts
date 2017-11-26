namespace Aufgabe6 {

    export class MovingObject {
        x: number;
        y: number;
        size: number;
        color: string;

        // Instanzierung der Objekte
        constructor(_x: number, _y: number) {
            console.log("Create");
            this.setRandomColor();
            this.x = _x;
            this.y = _y;
        }

        update(): void {
            this.move();
            this.comeBack();
            this.draw();
        }

        move(): void {
            // vorher definiert
        }

        comeBack(): void {
            // vorher definiert
        }

        draw(): void {
            // vorher definiert
        }
        
        setRandomColor(): void {
            // vorher definiert
        }

    } // exportiert
} // Namespace