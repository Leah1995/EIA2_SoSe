function placeDivs(): void {
    for (let i: number = 0; i < 64; i++ { //64 mal Durchlauf, jedes Mal um eins erhöht
        let element: HTMLElement = document.createElement("div");
        
        if (i % 2 == 0) { // Feld gerade
            element.className = "board white"
            } else { // Feld ungerade
            element.className = "board white" 
            
            document.body.appendChild(element);
          
        }
        }