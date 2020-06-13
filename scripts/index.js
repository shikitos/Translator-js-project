function typeWriter() {
    const textArea = document.getElementById("typewriter"); //get area for text
    let verticalLine = document.querySelector('#vertical-line'); //create an element span
    // verticalLine.setAttribute('id', 'vertical-line', '|'); //give it id=#vertical-line
    // let insertLine = textArea.appendChild(verticalLine); //insert span at the end of the paragraph text
    let text = [
        "Hello! ",
        "Here you can translate ",
        "from Russian or English, ",
        "to Morse, Binary, Decimal and Hex ",
        "code. ;) ",
    ]; //our text
    let lineCounter = 0; //line from array
    let symbolCounter = 0; //symbol from array
    let oneSymbol = "";


    function typeWriteText() {
        //draw the line
        let interval = setTimeout(function() {
            oneSymbol += text[lineCounter][symbolCounter];
            textArea.innerHTML = oneSymbol; //write symbol + "|"
            symbolCounter++; //increase symbol counter by one point
            if (symbolCounter >= text[lineCounter].length) {
                symbolCounter = 0; //reset the symbol counter
                lineCounter++; //increase line counter by one point
                if (lineCounter == text.length) {
                    clearTimeout(interval); //stop the timeout
                    return true; //stop the function working
                }
            }
            typeWriteText(); //start the function in the interval
        }, 200);
    }
    typeWriteText(); //start the function for start all with interval
}
typeWriter();