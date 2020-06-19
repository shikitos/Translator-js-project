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
}

encodeMorse();

// function exchangeMorse() {
//     let exchangeButton = document.getElementById("exchange");
//     exchangeButton.addEventListener("click", () => {
//         exchangeButton.style.transform = "rotate(360deg)";
//         textAreaFrom.placeholder =
//             "Put here your text for translate it to Morse code";
//     });
// }

// exchangeMorse();

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

function encodeBinary() {
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
            textAreaTo.value += textValue[i].charCodeAt(0).toString(2) + " ";
        }
        //Text which we wanna translate empty? — clear the area
        if (textValue == "" || textValue == " ") {
            textAreaTo.value = " ";
        }
    });
}

function exchangeBinary() {}

function decodeBinary() {
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
            textAreaTo.value += textValue[i].charCodeAt(0).toString(10) + " ";
        }
        //Text which we wanna translate empty? — clear the area
        if (textValue == "" || textValue == " ") {
            textAreaTo.value = "";
        }
    });
}

// decodeBinary();

function encodeDecimal() {
    //create var-s
    let textAreaFrom = document.getElementById("text-from");
    let buttonTranslate = document.querySelector(".translate");
    let textAreaTo = document.getElementById("text-to");
    //create event listener - click => translate
    buttonTranslate.addEventListener("click", () => {
        //take the word and make it lowercase
        let textValue = textAreaFrom.value.toLowerCase();
        //Clear the translation
        textAreaTo.value = "";
        //encode character by character
        for (let i = 0; i < textValue.length; i++) {
            textAreaTo.value += textValue[i].charCodeAt(0).toString(10) + " ";
        }
        //Text which we wanna translate empty? — clear the area
        if (textValue == "" || textValue == " ") {
            textAreaTo.value = "";
        }
    });
}

//maybe I should do it as a Class
function exchangeDecimal() {}

function decodeDecimal() {

}

function encodeHex() {
    //create var-s
    let textAreaFrom = document.getElementById("text-from");
    let buttonTranslate = document.querySelector(".translate");
    let textAreaTo = document.getElementById("text-to");
    //create event listener - click => translate
    buttonTranslate.addEventListener("click", () => {
        //take the word and make it lowercase
        let textValue = textAreaFrom.value.toLowerCase();
        //Clear the translation
        textAreaTo.value = "";
        //encode character by character
        for (let i = 0; i < textValue.length; i++) {
            textAreaTo.value += textValue[i].charCodeAt(0).toString(16) + " ";
        }
        //Text which we wanna translate empty? — clear the area
        if (textValue == "" || textValue == " ") {
            textAreaTo.value = "";
        }
    });
}

function exchangeHex() {}

function decodeHex() {}

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
            //if switcher.value is morse => we start translate morse
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