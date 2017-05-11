namespace StudiVZ {
    interface StudentData {
        matrikelnr: number;
        name: string;
        vorName: string;
        age: number;
        geschlecht: boolean;
        comment: string;
    }

    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (bitte mit Komma trennen) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 für weiblich oder 1 für männlich) und Kommentar");
                alert(saveData(input)); 
                break;
            case "a":
            case "A":
                var matrikelnr: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikelnr));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let dataArr: string[] = _input.split(",");
        let s: StudentData = {
            matrikelnr: parseInt(dataArr[0]),
            name: dataArr[1],
            vorName: dataArr[2],
            age: parseInt(dataArr[3]),
            geschlecht: parseInt(dataArr[4]) == 1,
            comment: dataArr[5]
        };

        students.push(s); 

        let gender: string;
        if (parseInt(dataArr[4]) == 1) {   
            gender = "männlich";
        }
        else {                     
            gender = "weiblich";
        }

        //Ausgabe
        return "Deine eingegebenen Daten:\n" + "\nMatrikelnr.: " + s.matrikelnr + "\nName: " + s.name + "," + s.vorName + "\nAlter: " + s.age + "\nGeschlecht: " + gender + "\nKommentar: " + s.comment;
    }

    function queryData(_matrikelnr: number): string {

        for (let i: number = 0; i < students.length; i++) {

            if (students[i].matrikelnr == _matrikelnr) {
                let gender: string = students[i].geschlecht ? "männlich" : "weiblich";
                return "Abgespeicherte Daten zu folgender Matrikelnummer: " + students[i].matrikelnr + "\n\nName: " + students[i].name + "," + students[i].vorName + "\nAlter: " + students[i].age + "\nGeschlecht: " + gender + "\nKommentar: " + students[i].comment;
            }

            else {
                return "nicht vorhanden";
            }
        }
    }
}