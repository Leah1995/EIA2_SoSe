var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (bitte mit Komma trennen) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 f�r weiblich oder 1 f�r m�nnlich) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikelnr = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikelnr));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        var dataArr = _input.split(",");
        var s = {
            matrikelnr: parseInt(dataArr[0]),
            name: dataArr[1],
            vorName: dataArr[2],
            age: parseInt(dataArr[3]),
            geschlecht: parseInt(dataArr[4]) == 1,
            comment: dataArr[5]
        };
        students.push(s);
        var gender;
        if (parseInt(dataArr[4]) == 1) {
            gender = "m�nnlich";
        }
        else {
            gender = "weiblich";
        }
        //Ausgabe
        return "Deine eingegebenen Daten:\n" + "\nMatrikelnr.: " + s.matrikelnr + "\nName: " + s.name + "," + s.vorName + "\nAlter: " + s.age + "\nGeschlecht: " + gender + "\nKommentar: " + s.comment;
    }
    function queryData(_matrikelnr) {
        for (var i = 0; i < students.length; i++) {
            if (students[i].matrikelnr == _matrikelnr) {
                var gender = students[i].geschlecht ? "m�nnlich" : "weiblich";
                return "Abgespeicherte Daten zu folgender Matrikelnummer: " + students[i].matrikelnr + "\n\nName: " + students[i].name + "," + students[i].vorName + "\nAlter: " + students[i].age + "\nGeschlecht: " + gender + "\nKommentar: " + students[i].comment;
            }
            else {
                return "nicht vorhanden";
            }
        }
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=Aufgabe6B.js.map