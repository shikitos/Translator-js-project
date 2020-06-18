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
        a: ".-",
        b: "-...",
        c: "-.-.",
        d: "-..",
        e: ".",
        f: "..-.",
        g: "--.",
        h: "....",
        i: "..",
        j: ".---",
        k: "-.-",
        l: ".-..",
        m: "--",
        n: "-.",
        o: "---",
        p: ".--.",
        q: "--.-",
        r: ".-.",
        s: "...",
        t: "-",
        u: "..-",
        v: "...-",
        w: ".--",
        x: "-..-",
        y: "-.--",
        z: "--..",
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
    };

    const morseRussian = {
        а: ".-",
        б: "-...",
        в: ".--",
        г: "--.",
        д: "-..",
        е: ".",
        ё: ".",
        ж: "...-",
        з: "--..",
        и: "..",
        й: ".---",
        к: "-.-",
        л: ".-..",
        м: "--",
        н: "-.",
        о: "---",
        п: ".--.",
        р: ".-.",
        с: "...",
        т: "-",
        у: "..-",
        ф: "..-.",
        х: "....",
        ц: "-.-.",
        ч: "---.",
        ш: "----",
        щ: "--.-",
        ъ: ".--.-.",
        ы: "-.--",
        ь: "-..-",
        э: "...-...",
        ю: "..--",
        я: ".-.-",
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
        "\n": "\n",
    };

    //create var-s from DOM tree
    let textAreaFrom = document.getElementById("text-from");
    let buttonTranslate = document.querySelector(".translate");
    let textAreaTo = document.getElementById("text-to");
    //click on button and make translation
    buttonTranslate.addEventListener("click", (event) => {
        //take the word and make it lowercase
        let textValue = textAreaFrom.value.toLowerCase();
        //Clear the translation
        textAreaTo.value = "";

        //Iterating over the values and replacing them
        for (let symbol of textValue) {
            // If value is russian — translate by using morseRussian object
            if (Object.keys(morseRussian).includes(textValue[0])) {
                textAreaTo.value += morseRussian[symbol] + " ";
                //else — translate by using morseInternational
            } else {
                textAreaTo.value += morseInternational[symbol] + " ";
            }
        }
        //Text which we wanna translate empty? — clear the area
        if (
            textAreaFrom.value == "" ||
            textAreaFrom.value == null ||
            textAreaFrom.value == " "
        ) {
            textAreaTo.value = " ";
        }
    });

    // function exchange() {
    //     let exchangeButton = document.getElementById("exchange");
    //     exchangeButton.addEventListener("click", () => {
    //         exchangeButton.style.transform = "rotate(360deg)";
    //         textAreaFrom.placeholder =
    //             "Put here your text for translate it to Morse code";
    //     });
    // }

    // exchange();
}

// encodeMorse();

decodeMorse = function() {
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

    const morseRussian = {
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

    //create var-s from DOM tree
    let textAreaFrom = document.getElementById("text-from");
    let buttonTranslate = document.querySelector(".translate");
    let textAreaTo = document.getElementById("text-to");
    //click on button and make translation
    buttonTranslate.addEventListener("click", (event) => {
        //take the word and make it lowercase
        let textValue = textAreaFrom.value.toLowerCase();
        //Clear the translation
        textAreaTo.value = "";
        //Iterating over the values and replacing them
        for (let symbol of textValue) {
            // If value is russian — translate by using morseRussian object
            if (Object.keys(morseRussian).includes(textValue[0])) {
                textAreaTo.value += morseRussian[symbol] + " ";
                //else — translate by using morseInternational
            } else {
                textAreaTo.value += morseInternational[symbol] + " ";
            }
        }
        //Text which we wanna translate empty? — clear the area
        if (textAreaFrom.value == "" || textAreaFrom.value == " ") {
            textAreaTo.value = " ";
        }
    });
};

// decodeMorse();

function encodeBinary() {
    //create var-s
    let textAreaFrom = document.getElementById("text-from");
    let buttonTranslate = document.querySelector(".translate");
    let textAreaTo = document.getElementById("text-to");
    //create event listener - click => translate
    buttonTranslate.addEventListener("click", () => {
        //take the word and make it lowercase
        let textValue = textAreaFrom.value.toLowerCase();
        //encode character by character
        for (let i = 0; i < textValue.length; i++) {
            textAreaTo.value += textValue[i].charCodeAt(0).toString(2) + " ";
        }
        //Text which we wanna translate empty? — clear the area
        if (textValue == "" || textValue == " ") {
            textAreaTo.value = "";
        }
    });
}

encodeBinary();

//function for the <option> elements
function switchMode() {
    let switcher = document.getElementById("type-of-lang");
    // let switchModeMorse = document.getElementById('morse');
    // let switchModeBinary = document.getElementById('binary');
    // let switchModeDecimal = document.getElementById('decimal');
    // let switchModeHex = document.getElementById('hex');
    //when you click, and if value of the select item ...
    switcher.addEventListener("click", () => {
        if (switcher.value == "morse") {
            console.log("morse");
            encodeMorse();
        } else if (switcher.value == "binary") {
            encodeBinary();
            console.log("binary");
        } else if (switcher.value == "decimal") {
            encodeDecimal();
            console.log("decimal");
        } else {
            encodeHex();
            console.log("hex");
        }
    });
}

switchMode();