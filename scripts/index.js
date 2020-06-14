//Create typeWriter at the header of the page
function typeWriter() {
    const textArea = document.getElementById("typewriter"); //get area for text
    let verticalLine = document.querySelector("#vertical-line"); //create an element span
    // verticalLine.setAttribute('id', 'vertical-line', '|'); //give it id=#vertical-line
    // let insertLine = textArea.appendChild(verticalLine); //insert span at the end of the paragraph text
    let text = [
        "Hello! ",
        "Here you can translate ",
        "from Russian or English ",
        "to Morse, Binary, Hex ",
        "codes. ;) ",
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
        }, randomNumber(100, 400));

        //Create random number for the interval (for making typeWriter more humanity)
        function randomNumber(min, max) {
            let random = min + Math.random() * (max + 1 - min);
            return Math.floor(random);
        }
    }
    typeWriteText(); //start the function for start all with interval
}
typeWriter();

function encodeMorse() {
    //morse alphabet
    const morseInternational = {
        "a": ".-",
        "b": "-...",
        "c": "-.-.",
        "d": "-..",
        "e": ".",
        "f": "..-.",
        "g": "--.",
        "h": "....",
        "i": "..",
        "j": ".---",
        "k": "-.-",
        "l": ".-..",
        "m": "--",
        "n": "-.",
        "o": "---",
        "p": ".--.",
        "q": "--.-",
        "r": ".-.",
        "s": "...",
        "t": "-",
        "u": "..-",
        "v": "...-",
        "w": ".--",
        "x": "-..-",
        "y": "-.--",
        "z": "--..",
        ".": ".-.-.-",
        ",": "--..--",
        "?": "..--..",
        "!": "-.-.--",
        "-": "-....-",
        "/": "-..-.",
        "@": ".--.-.",
        "(": "-.--.",
        ")": "-.--.-",
        "0": "-----",
        "1": ".----",
        "2": "..---",
        "3": "...--",
        "4": "....-",
        "5": ".....",
        "6": "-....",
        "7": "--...",
        "8": "---..",
        "9": "----.",
        " ": "  ",
        "SOS": "...---..."
    };
    //click on button and make translation
    let textAreaFrom = document.getElementById("text-from");
    let buttonTranslate = document.querySelector(".translate");
    let textAreaTo = document.getElementById('text-to');
    buttonTranslate.addEventListener("click", (event) => {
        //take the word and make it lowercase
        let textValue = textAreaFrom.value.toLowerCase();

        for (let symbol of textValue) {
            //Clear the translation
            textAreaTo.value = '';
            //Translate
            textAreaTo.value += morseInternational[symbol] + ' ';
        }
        //If text, which we wanna translate - empty — clear the area
        if (textAreaFrom.value == '' || textAreaFrom.value == ' ') {
            textAreaTo.value = ' ';
        }
    });
}

encodeMorse();

decodeMorse = function(morseCode, lang) {
    const morseInternational = {
        ".-": "A",
        "-...": "B",
        "-.-.": "C",
        "-..": "D",
        ".": "E",
        "..-.": "F",
        "--.": "G",
        "....": "H",
        "..": "I",
        ".---": "J",
        "-.-": "K",
        ".-..": "L",
        "--": "M",
        "-.": "N",
        "---": "O",
        ".--.": "P",
        "--.-": "Q",
        ".-.": "R",
        "...": "S",
        "-": "T",
        "..-": "U",
        "...-": "V",
        ".--": "W",
        "-..-": "X",
        "-.--": "Y",
        "--..": "Z",
        "...---...": "SOS",
        "--..--": "!",
        "..--..": "?",
        "......": ".",
        ".-.-.-": ",",
        "---...": ":",
        "-.-.-.": ";",
        ".----": "1",
        "..---": "2",
        "...--": "3",
        "....-": "4",
        ".....": "5",
        "-....": "6",
        "--...": "7",
        "---..": "8",
        "----.": "9",
        "-----": "0",
    };

    const morseRu = {
        ".-": "А",
        "-...": "Б",
        "-.-.": "Ц",
        "-..": "Д",
        ".": "Е",
        "..-.": "Ф",
        "--.": "Г",
        "....": "Х",
        "..": "И",
        ".---": "Й",
        "-.-": "К",
        ".-..": "Л",
        "--": "М",
        "-.": "Н",
        "---": "О",
        ".--.": "П",
        "--.-": "Щ",
        ".-.": "Р",
        "...": "С",
        "-": "Т",
        "..-": "У",
        "...-": "Ж",
        ".--": "В",
        "-..-": "Ь",
        "-.--": "Ы",
        "--..": "З",
        "---.": "Ч",
        "----": "Ш",
        "--.--": "Ъ",
        "..-..": "Э",
        "..--": "Ю",
        ".-.-": "Я",
        "--..--": "!",
        "..--..": "?",
        "......": ".",
        ".-.-.-": ",",
        "---...": ":",
        "-.-.-.": ";",
        ".----": "1",
        "..---": "2",
        "...--": "3",
        "....-": "4",
        ".....": "5",
        "-....": "6",
        "--...": "7",
        "---..": "8",
        "----.": "9",
        "-----": "0",
    };
};