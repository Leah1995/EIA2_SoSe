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
            this.moving();
            this.return();
            this.draw();
        }
        moving() { }
        return() { }
        draw() { }
        setRandomColor() { }
    }
    Aufgabe6.MovingObject = MovingObject; // exportiert
})(Aufgabe6 || (Aufgabe6 = {})); // Namespace
//# sourceMappingURL=moving.js.map