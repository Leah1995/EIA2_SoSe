var Aufgabe6;
(function (Aufgabe6) {
    class MovingObject {
        // Instanzierung der Objekte
        constructor(_x, _y) {
            console.log("Create");
            this.setRandomColor();
            this.x = _x;
            this.y = _y;
        }
        update() {
            this.move();
            this.comeBack();
            this.draw();
        }
        move() {
            // vorher definiert
        }
        comeBack() {
            // vorher definiert
        }
        draw() {
            // vorher definiert
        }
        setRandomColor() {
            // vorher definiert
        }
    }
    Aufgabe6.MovingObject = MovingObject; // exportiert
})(Aufgabe6 || (Aufgabe6 = {})); // Namespace
//# sourceMappingURL=moving.js.map