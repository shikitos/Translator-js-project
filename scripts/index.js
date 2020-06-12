function typeWriter() {
    const textArea = document.getElementById("typewriter"); //get area for text
    let text = [
        "Hello! ",
        "This is a site, ",
        "where you can translate ",
        "from Russian or English, ",
        "to Morse, Binary, Decimal and Hex ",
        "languages! Welcome!",
    ]; //our text
    let lineCounter = 0; //line from array
    let symbolCounter = 0; //symbol from array
    let oneSymbol = "";

    function typeWriteText() {
        //draw the line
        let interval = setTimeout(function() {
            oneSymbol += text[lineCounter][symbolCounter];
            textArea.textContent = oneSymbol + "|"; //write symbol + "|"
            symbolCounter++; //increase symbol counter by one point
            if (symbolCounter >= text[lineCounter].length) {
                symbolCounter = 0; //reset the symbol counter
                lineCounter++; //increase line counter by one point
                if (lineCounter == text.length) {
                    clearTimeout(interval); //stop the timeout
                    textArea.textContent = oneSymbol; //remove "|"
                    return true; //stop the function working
                }
            }
            typeWriteText(); //start the function in the interval
        }, 300);
    }
    typeWriteText(); //start the function for start all with interval
}
typeWriter();