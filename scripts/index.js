//Create typeWriter at the header of the page
function typeWriter() {
    const textArea = document.getElementById("typewriter"); //get area for text
    let verticalLine = document.querySelector('#vertical-line'); //create an element span
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

//morse alphabet
const morseInternational = {
    "a": ".-",
    // "A": ".-",
    "b": "-...",
    // 'B': '-...',
    "c": "-.-.",
    // 'C': '-.-.',
    "d": "-..",
    // 'D': '-..',
    "e": ".",
    // 'E': '.',
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
    " ": "  "
}



//click on button and make translation
function submitTranslate() {
    let textAreaFrom = document.getElementById('text-from');
    let buttonTranslate = document.querySelector('.translate');
    buttonTranslate.addEventListener('click', event => {
        // function takeValueByOneSymbol() {
        //take one symbol from each word
        let arr = [];
        let text;
        let textValue = textAreaFrom.value.split();
        for (let i = 0; i < textValue.length; i++) {
            for (let j = 0; j < textValue[i].length; j++) {
                arr += textValue[i][j];

            }
        }
        for (let prop in morseInternational) {
            console.log('out');
            let arrayOfMorseKeys = prop;
            if (arr == prop) {
                console.log('here');

                text += morseInternational[arr];
                console.log(text);
            } else {
                return text;
            }
        }

    });
}

submitTranslate();

decodeMorse = function(morseCode, lang) {
    const morseInternational = {
        '.-': 'A',
        '-...': 'B',
        '-.-.': 'C',
        '-..': 'D',
        '.': 'E',
        '..-.': 'F',
        '--.': 'G',
        '....': 'H',
        '..': 'I',
        '.---': 'J',
        '-.-': 'K',
        '.-..': 'L',
        '--': 'M',
        '-.': 'N',
        '---': 'O',
        '.--.': 'P',
        '--.-': 'Q',
        '.-.': 'R',
        '...': 'S',
        '-': 'T',
        '..-': 'U',
        '...-': 'V',
        '.--': 'W',
        '-..-': 'X',
        '-.--': 'Y',
        '--..': 'Z',
        '...---...': 'SOS',
        '--..--': '!',
        '..--..': '?',
        '......': '.',
        '.-.-.-': ',',
        '---...': ':',
        '-.-.-.': ';',
        '.----': '1',
        '..---': '2',
        '...--': '3',
        '....-': '4',
        '.....': '5',
        '-....': '6',
        '--...': '7',
        '---..': '8',
        '----.': '9',
        '-----': '0'
    };

    const morseRu = {
        '.-': 'А',
        '-...': 'Б',
        '-.-.': "Ц",
        '-..': "Д",
        '.': "Е",
        '..-.': "Ф",
        '--.': "Г",
        '....': "Х",
        '..': "И",
        '.---': "Й",
        '-.-': "К",
        '.-..': "Л",
        '--': "М",
        '-.': "Н",
        '---': "О",
        '.--.': "П",
        '--.-': "Щ",
        '.-.': "Р",
        '...': "С",
        '-': "Т",
        '..-': "У",
        '...-': "Ж",
        '.--': "В",
        '-..-': "Ь",
        '-.--': "Ы",
        '--..': "З",
        '---.': "Ч",
        '----': "Ш",
        '--.--': "Ъ",
        '..-..': "Э",
        '..--': "Ю",
        '.-.-': "Я",
        '--..--': '!',
        '..--..': '?',
        '......': '.',
        '.-.-.-': ',',
        '---...': ':',
        '-.-.-.': ';',
        '.----': '1',
        '..---': '2',
        '...--': '3',
        '....-': '4',
        '.....': '5',
        '-....': '6',
        '--...': '7',
        '---..': '8',
        '----.': '9',
        '-----': '0'
    };
}