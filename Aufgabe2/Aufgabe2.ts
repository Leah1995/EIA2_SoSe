
window.onload = function (): void {
    placeDivs();
    let table: HTMLTableElement = document.createElement("table");
    let row: HTMLTableRowElement = document.createElement("tr");
    let column: HTMLTableCellElement = document.createElement("td");
    table.appendChild(row);
    row.appendChild(column);
    document.body.appendChild(table);
};

function placeDivs(): void {
    let rice: number = 1;
    for (let i: number = 0; i < 64; i++) {
        let element: HTMLElement = document.createElement("div");

        if (i % 2 == 0) {
            element.className = "board white";
        } else {
            element.className = "board black";
        }

        element.innerText = "" + rice;
        rice *= 2;
        document.body.appendChild(element);
    }
}

/*Versuch 2
for (var i=0; i< 64; i++){
    document.getElementById("chessboard").appendChild(document.createElement("div")).style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? '#ffffff' : 'white';    
}
*/


/*Versuch 3
 var chessboard = function(size){
    var hash = '#'
    var space = '_'
    for (var i = 0; i < size; i++) 
    {        

        hash += '\n'

        for (var j = 0; j < size; j++) 
        {
        if((i +j) % 2 == 0)
        {
        hash  += space
        }
        else
        {
        hash  += "#"
        }
    };

};

console.log(hash)
}(8)

*/

/*Versuch 4

var x=8;
var y=8;

var chessboard = document.getElementById("chessBoard");

for (var i=0; i<y; i++){
    var row = chessboard.appendChild(document.createElement("div"));
    for (var j=0; j<x; j++){
        row.appendChild(document.createElement("span"));
    }
}
*/