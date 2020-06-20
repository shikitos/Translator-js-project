//Create typeWriter at the header of the page
function typeWriter() {
    const textArea = document.getElementById("typewriter"); //get area for text
    //our text
    let text = [
        "Hello! ",
        "Here you can translate ",
        "from Russian or English ",
        "to Morse, Binary, Hex ",
        "codes. ;) ",
    ];
    //line from array
    let lineCounter = 0;
    //symbol from array
    let symbolCounter = 0;
    let oneSymbol = "";

    function typeWriteText() {
        //draw the line
        let interval = setTimeout(function() {
            oneSymbol += text[lineCounter][symbolCounter];
            //write symbol + "|"
            textArea.innerHTML = oneSymbol;
            //increase symbol counter by one point
            symbolCounter++;
            if (symbolCounter >= text[lineCounter].length) {
                //reset the symbol counter
                symbolCounter = 0;
                //increase line counter by one point
                lineCounter++;
                if (lineCounter == text.length) {
                    //stop the timeout
                    clearTimeout(interval);
                    //stop the function working
                    return true;
                }
            }
            //start the function in the interval
            typeWriteText();
        }, randomNumber(100, 400));

        //Create random number for the interval (for making typeWriter more humanity)
        function randomNumber(min, max) {
            let random = min + Math.random() * (max + 1 - min);
            return Math.floor(random);
        }
    }
    //start the function for start all with interval
    typeWriteText();
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
        "!": "--.--",
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
        "!": "--.--",
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
    //textAreaFrom placeholder
    textAreaFrom.placeholder =
        "Put here your text for translate it to Morse code";
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
}

encodeMorse();

decodeMorse = function() {
    const morseInternational = {
        ".-": "a",
        "-...": "b",
        "-.-.": "c",
        "-..": "d",
        ".": "e",
        "..-.": "f",
        "--.": "g",
        "....": "h",
        "..": "i",
        ".---": "j",
        "-.-": "k",
        ".-..": "l",
        "--": "m",
        "-.": "n",
        "---": "o",
        ".--.": "p",
        "--.-": "q",
        ".-.": "r",
        "...": "s",
        "-": "t",
        "..-": "u",
        "...-": "v",
        ".--": "w",
        "-..-": "x",
        "-.--": "y",
        "--..": "z",
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
        "\n": "\n",
        " ": " ",
        "": "",
    };

    const morseRussian = {
        ".-": "а",
        "-...": "б",
        ".--": "в",
        "--.": "г",
        "-..": "д",
        ".": "е",
        "...-": "ж",
        "--..": "з",
        "..": "и",
        ".---": "й",
        "-.-": "к",
        ".-..": "л",
        "--": "м",
        "-.": "н",
        "---": "о",
        ".--.": "п",
        ".-.": "р",
        "...": "с",
        "-": "т",
        "..-": "у",
        "..-.": "ф",
        "....": "ч",
        "-.-.": "ц",
        "---.": "ч",
        "----": "ш",
        "--.-": "щ",
        "-..-": "ь",
        "-.--": "ы",
        ".--.-.": "ъ",
        "...-...": "э",
        "..--": "ю",
        ".-.-": "я",
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
        "\n": "\n",
        " ": "  ",
        "": "",
    };

    //create var-s from DOM tree
    let textAreaFrom = document.getElementById("text-from");
    let buttonTranslate = document.querySelector(".translate");
    let textAreaTo = document.getElementById("text-to");
    //click on button and make translation
    buttonTranslate.addEventListener("click", (event) => {
        //take the word and make it lowercase
        let textValue = textAreaFrom.value.toLowerCase().split(" ");
        console.log(textValue);

        //Clear the translation
        textAreaTo.value = "";
        //Iterating over the values and replacing them
        for (let symbol of textValue) {
            // If value is russian — translate by using morseRussian object
            if (Object.keys(morseRussian).includes(textValue[0])) {
                textAreaTo.value += morseRussian[symbol];
                //else — translate by using morseInternational
            } else {
                textAreaTo.value += morseInternational[symbol];
            }
        }
        //Text which we wanna translate empty? — clear the area
        if (textAreaFrom.value == "" || textAreaFrom.value == " ") {
            textAreaTo.value = " ";
        }
    });
};

function exchangeValue() {
    let exchangeButton = document.getElementById("exchange");
    let textAreaTo = document.getElementById("text-to");
    let textAreaFrom = document.getElementById("text-from");
    exchangeButton.addEventListener("click", () => {
        //rotate exchange button
        exchangeButton.style.transform += "rotate(360deg)";
        //edit placeholder depends on the mode
        textAreaFrom.placeholder =
            "Put here your text for translate it to blalba code";
        //take translation from textAreaTo to textAreaFrom for future translate
        textAreaFrom.value = textAreaTo.value;
        textAreaTo.value = "";
        decodeMorse();
    });
}

exchangeValue();

//encode all number system
function encodeSystem(baseOfSystem) {
    //create var-s
    let textAreaFrom = document.getElementById("text-from");
    let buttonTranslate = document.querySelector(".translate");
    let textAreaTo = document.getElementById("text-to");
    //create event listener - click => translate
    buttonTranslate.addEventListener("click", () => {
        //take the word and make it lowercase
        let textValue = textAreaFrom.value.toLowerCase();
        //clean the textarea
        textAreaTo.value = "";
        //encode character by character
        for (let i = 0; i < textValue.length; i++) {
            textAreaTo.value +=
                textValue[i].charCodeAt(0).toString(baseOfSystem) + " ";
        }
        //Text which we wanna translate empty? — clear the area
        if (textValue == "" || textValue == " ") {
            textAreaTo.value = " ";
        }
    });
}

function exchangeBinary() {}

function decodeSystem() {
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
            textAreaTo.value += textValue[i].toString(10);
        }
        //Text which we wanna translate empty? — clear the area
        if (textValue == "" || textValue == " ") {
            textAreaTo.value = "";
        }
    });
}

decodeSystem();

//maybe I should do it as a Class
function exchangeDecimal() {}

function decodeDecimal() {}

function exchangeHex() {}

function decodeHex() {}

//function for the <option> elements
function switchMode() {
    let switcher = document.getElementById("type-of-lang");
    //when you click, and if value of the select item ...
    switcher.addEventListener("click", () => {
        if (switcher.value == "morse") {
            console.log("morse");
            //if switcher.value is morse => we start translate morse
            encodeMorse();
        } else if (switcher.value == "binary") {
            //function to encode binary
            encodeSystem(2);
            console.log("binary");
        } else if (switcher.value == "decimal") {
            //function to encode decimal
            encodeSystem(10);
            console.log("decimal");
        } else {
            //function to encode hex
            encodeSystem(16);
            console.log("hex");
        }
    });
}

switchMode();