document.addEventListener("DOMContentLoaded", function(): void { // keine anonymen Funktionen nutzen, es fehlen Typdeklarationen
    let stapelCards: string[] = ["Diamonds 7", "Diamonds 8", "Diamonds 9", "Diamonds 10", "Diamonds Jack", "Diamonds Queen", "Diamonds King", "Diamonds Ace", "Cross 7", "Cross 8", "Cross 9", "Cross 10", "Cross Jack", "Cross Queen", "Cross King", "Cross Ace", "Heart 7", "Heart 8", "Heart 9", "Heart 10", "Heart Jack", "Heart Queen", "Heart King", "Heart Ace", "Spade 7", "Spade 8", "Spade 9", "Spade 10", "Spade Jack", "Spade Queen", "Spade King", "Spade Ace"];
    let handCards: string[] = [];
    let filedCards: string[] = [];
    document.getElementById("Draw").addEventListener("click", function(): void { // keine anonymen und verschachtelten Funktionen!
        if (handCards.length < 5 && stapelCards.length > 0) {
            let stapelCardsnummer: number = Math.floor((Math.random() * (stapelCards.length - 1)) + 0); // zufällige Zahl (zwischen 0 und 31)
            handCards.push(stapelCards[stapelCardsnummer]); // fügt die Karte der Hand
            stapelCards.splice(stapelCardsnummer, 1); // entfernt gewählte Karte aus dem Stapel
            let div: HTMLDivElement = document.createElement("div"); // Darstellung der Karte auf der Hand
            document.getElementById("Hand").appendChild(div);
            var s: CSSStyleDeclaration = div.style;
            div.className = "handstapelCards";
            div.textContent = handCards[handCards.length - 1];
            div.addEventListener("click", function(): void { // ebenso hier!
                for (let i: number = 0; i < handCards.length; i++) {
                    if (this.textContent == handCards[i]) {
                        filedCards.push(handCards[i]); // fügt die Karte dem Filed Array hinzu
                        handCards.splice(i, 1); // entfernt ausgewählte Karte aus dem Array
                        break;
                    }

                }
                document.getElementById("Filed").textContent = "Filed" + "\r\n" + "Oberste Karte: " + "\r\n" + filedCards[filedCards.length - 1] + "\r\n" + "\r\n" + "Cards: " + filedCards.length.toString();
                document.getElementById("Filed").style.display = "inline-block";
                this.parentNode.removeChild(this);
            });
            document.getElementById("Draw").textContent = "Cardsstapel" + "\r\n" + "Cards: " + stapelCards.length.toString();
        }

        ;
    });
});
//# sourceMappingURL=script.js.map