//Create typeWriter at the header of the page
function typeWriter() {
    const textArea = document.getElementById('typewriter'); //get area for text
    //our text
    let text = [
        'Hello! ',
        'Here you can translate ',
        'from Russian or English ',
        'to Morse, Binary, Hex ',
        'codes. ;) ',
    ];
    //line from array
    let lineCounter = 0;
    //symbol from array
    let symbolCounter = 0;
    let oneSymbol = '';

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

//encode morse function
function encodeMorse() {
    //morse alphabet
    const morseInternational = {
        a: '.-',
        b: '-...',
        c: '-.-.',
        d: '-..',
        e: '.',
        f: '..-.',
        g: '--.',
        h: '....',
        i: '..',
        j: '.---',
        k: '-.-',
        l: '.-..',
        m: '--',
        n: '-.',
        o: '---',
        p: '.--.',
        q: '--.-',
        r: '.-.',
        s: '...',
        t: '-',
        u: '..-',
        v: '...-',
        w: '.--',
        x: '-..-',
        y: '-.--',
        z: '--..',
        '.': '.-.-.-',
        ',': '--..--',
        '?': '..--..',
        '!': '--.--',
        '-': '-....-',
        '/': '-..-.',
        '@': '.--.-.',
        '(': '-.--.',
        ')': '-.--.-',
        '0': '-----',
        '1': '.----',
        '2': '..---',
        '3': '...--',
        '4': '....-',
        '5': '.....',
        '6': '-....',
        '7': '--...',
        '8': '---..',
        '9': '----.',
        ' ': '  ',
        '\n': '\n',
    };

    const morseRussian = {
        а: '.-',
        б: '-...',
        в: '.--',
        г: '--.',
        д: '-..',
        е: '.',
        ё: '.',
        ж: '...-',
        з: '--..',
        и: '..',
        й: '.---',
        к: '-.-',
        л: '.-..',
        м: '--',
        н: '-.',
        о: '---',
        п: '.--.',
        р: '.-.',
        с: '...',
        т: '-',
        у: '..-',
        ф: '..-.',
        х: '....',
        ц: '-.-.',
        ч: '---.',
        ш: '----',
        щ: '--.-',
        ъ: '.--.-.',
        ы: '-.--',
        ь: '-..-',
        э: '...-...',
        ю: '..--',
        я: '.-.-',
        '.': '......',
        ',': '.-.-.-',
        ':': '---...',
        ';': '-.-.-.',
        '?': '..--..',
        '!': '--..--',
        '-': '-....-',
        '/': '-..-.',
        '@': '.--.-.',
        '(': '-.--.',
        ')': '-.--.-',
        '0': '-----',
        '1': '.----',
        '2': '..---',
        '3': '...--',
        '4': '....-',
        '5': '.....',
        '6': '-....',
        '7': '--...',
        '8': '---..',
        '9': '----.',
        ' ': '  ',
        '\n': '\n',
    };

    //create var-s from DOM tree
    let textAreaFrom = document.getElementById('text-from');
    let buttonTranslate = document.querySelector('.translate');
    let textAreaTo = document.getElementById('text-to');
    //textAreaFrom placeholder
    textAreaFrom.placeholder =
        'Put here your text for translate it to Morse code';
    //click on button and make translation
    buttonTranslate.addEventListener('click', (event) => {
        //take the word and make it lowercase
        let textValue = textAreaFrom.value.toLowerCase();
        //Clear the translation
        textAreaTo.value = '';

        //Iterating over the values and replacing them
        for (let symbol of textValue) {
            // If value is russian — translate by using morseRussian object
            if (Object.keys(morseRussian).includes(textValue[0])) {
                textAreaTo.value += morseRussian[symbol] + ' ';
                //else — translate by using morseInternational
            } else {
                textAreaTo.value += morseInternational[symbol] + ' ';
            }
        }
        //Text which we wanna translate empty? — clear the area
        if (
            textAreaFrom.value == '' ||
            textAreaFrom.value == null ||
            textAreaFrom.value == ' '
        ) {
            textAreaTo.value = ' ';
        }
        textAreaTo.classList.add('morse');
    });
}

encodeMorse();

function decodeMorse() {
    const morseInternational = {
        '.-': 'a',
        '-...': 'b',
        '-.-.': 'c',
        '-..': 'd',
        '.': 'e',
        '..-.': 'f',
        '--.': 'g',
        '....': 'h',
        '..': 'i',
        '.---': 'j',
        '-.-': 'k',
        '.-..': 'l',
        '--': 'm',
        '-.': 'n',
        '---': 'o',
        '.--.': 'p',
        '--.-': 'q',
        '.-.': 'r',
        '...': 's',
        '-': 't',
        '..-': 'u',
        '...-': 'v',
        '.--': 'w',
        '-..-': 'x',
        '-.--': 'y',
        '--..': 'z',
        '--..--': '!',
        '..--..': '?',
        '......': '.',
        '.-.-.-': ',',
        '---...': ':',
        '-.-.-.': ';',
        '-....-': '-',
        '-..-.': '/',
        '.--.-.': '@',
        '-.--.': '(',
        '-.--.-': ')',
        '.----': '1',
        '..---': '2',
        '...--': '3',
        '....-': '4',
        '.....': '5',
        '-....': '6',
        '--...': '7',
        '---..': '8',
        '----.': '9',
        '-----': '0',
        '\n': '\n',
        ' ': ' ',
        '': '',
    };

    const morseRussian = {
        '.-': 'а',
        '-...': 'б',
        '.--': 'в',
        '--.': 'г',
        '-..': 'д',
        '.': 'ё',
        '.': 'е',
        '...-': 'ж',
        '--..': 'з',
        '..': 'и',
        '.---': 'й',
        '-.-': 'к',
        '.-..': 'л',
        '--': 'м',
        '-.': 'н',
        '---': 'о',
        '.--.': 'п',
        '.-.': 'р',
        '...': 'с',
        '-': 'т',
        '..-': 'у',
        '..-.': 'ф',
        '....': 'х',
        '-.-.': 'ц',
        '---.': 'ч',
        '----': 'ш',
        '--.-': 'щ',
        '.--.-.': 'ъ',
        '-.--': 'ы',
        '-..-': 'ь',
        '...-...': 'э',
        '..--': 'ю',
        '.-.-': 'я',
        '--..--': '!',
        '..--..': '?',
        '......': '.',
        '.-.-.-': ',',
        '---...': ':',
        '-.-.-.': ';',
        '-....-': '-',
        '-..-.': '/',
        '.--.-.': '@',
        '-.--.': '(',
        '-.--.-': ')',
        '.----': '1',
        '..---': '2',
        '...--': '3',
        '....-': '4',
        '.....': '5',
        '-....': '6',
        '--...': '7',
        '---..': '8',
        '----.': '9',
        '-----': '0',
        '\n': '\n',
        ' ': '  ',
        '': '',
    };

    //create var-s from DOM tree
    let textAreaFrom = document.getElementById('text-from');
    let buttonTranslate = document.querySelector('.translate');
    let textAreaTo = document.getElementById('text-to');
    //click on button and make translation
    buttonTranslate.addEventListener('click', (event) => {
        //take the word and make it lowercase
        let textValue = textAreaFrom.value.toLowerCase().split(' ');
        //Clear the translation
        textAreaTo.value = '';
        //Iterating over the values and replacing them
        for (let symbol of textValue) {
            // If value is russian — translate by using morseRussian object
            if (Object.keys(morseRussian).includes(textValue[0])) {
                //I can create one more for. And every symbol will be checked <-- for the future
                textAreaTo.value += morseRussian[symbol];
                //else — translate by using morseInternational
            } else {
                textAreaTo.value += morseInternational[symbol];
            }
        }
        //Text which we wanna translate empty? — clear the area
        if (textAreaFrom.value == '' || textAreaFrom.value == ' ') {
            textAreaTo.value = ' ';
        }
        //add class to the textareato
        textAreaTo.classList.add('morse-to-text');
    });
}

function exchangeValue() {
    let switcher = document.getElementById('type-of-lang');
    let exchangeButton = document.getElementById('exchange');
    let textAreaTo = document.getElementById('text-to');
    let textAreaFrom = document.getElementById('text-from');
    let counter = 0;
    exchangeButton.addEventListener('click', () => {
        //rotate exchange button
        //take translation from textAreaTo to textAreaFrom for future translate
        textAreaFrom.value = textAreaTo.value;
        //clean textAreaTo
        textAreaTo.value = '';
        if (counter % 2 == 0 && switcher.value == "morse") {
            //rotate switcher
            exchangeButton.style.transform = 'rotate(360deg)';
            //decode morse
            decodeMorse();
            //increase counter by one
            counter++;
        } else if (counter % 2 !== 0 && switcher.value == 'morse') {
            exchangeButton.style.transform = 'rotate(0deg)';
            encodeMorse();
            counter--;
        } else if (counter % 2 == 0 && switcher.value == "binary") {
            //rotate switcher
            exchangeButton.style.transform = 'rotate(360deg)';
            //decode binary
            encodeSystem(2, 'Binary');
            //increase counter by one
            counter++;
        } else if (counter % 2 !== 0 && switcher.value == 'binary') {
            exchangeButton.style.transform = 'rotate(0deg)';
            decodeBinary('Binary');
            counter--;
        } else if (counter % 2 == 0 && switcher.value == "decimal") {
            //rotate switcher
            exchangeButton.style.transform = 'rotate(360deg)';
            //decode binary
            encodeSystem(10, 'Decimal');
            //increase counter by one
            counter++;
        } else if (counter % 2 !== 0 && switcher.value == 'decimal') {
            exchangeButton.style.transform = 'rotate(0deg)';
            decodeSystem('Decimal');
            counter--;
        } else if (counter % 2 == 0 && switcher.value == "hex") {
            //rotate switcher
            exchangeButton.style.transform = 'rotate(360deg)';
            //decode binary
            encodeSystem(16, 'Hex');
            //increase counter by one
            counter++;
        } else if (counter % 2 !== 0 && switcher.value == 'hex') {
            exchangeButton.style.transform = 'rotate(0deg)';
            decodeSystem('Hex');
            counter--;
        }
    });
}

exchangeValue();


//encode all number system
function encodeSystem(baseOfSystem, translationCode) {
    //create var-s
    let textAreaFrom = document.getElementById('text-from');
    let buttonTranslate = document.querySelector('.translate');
    let textAreaTo = document.getElementById('text-to');
    //textAreaFrom placeholder
    textAreaFrom.placeholder =
        `Put here your text for translate it to ${translationCode} code`;
    //create event listener - click => translate
    buttonTranslate.addEventListener('click', () => {
        //take the word and make it lowercase
        let textValue = textAreaFrom.value.toLowerCase();
        //clean the textarea
        textAreaTo.value = '';
        //encode character by character
        for (let i = 0; i < textValue.length; i++) {
            textAreaTo.value +=
                textValue[i].charCodeAt(0).toString(baseOfSystem) + ' ';
        }
        //Text which we wanna translate empty? — clear the area
        if (textValue == '' || textValue == ' ') {
            textAreaTo.value = ' ';
        }
    });
}

function decodeBinary(translationCode) {
    //create var-s
    let textAreaFrom = document.getElementById('text-from');
    let buttonTranslate = document.querySelector('.translate');
    let textAreaTo = document.getElementById('text-to');
    let text = [];
    //textAreaFrom placeholder
    textAreaFrom.placeholder =
        `Put here your ${translationCode} code for translate it to text`;
    //create event listener - click => translate
    buttonTranslate.addEventListener('click', () => {
        //take the word and make it lowercase
        let textValue = textAreaFrom.value.toLowerCase().split(' ');
        //clean textAreaTo
        textAreaTo.value = '';
        //encode character by character
        for (let i = 0; i < textValue.length; i++) {
            //translate to text
            text.push(String.fromCharCode(parseInt(textValue[i], 2)));
        }
        //change the type from array to string
        text = text.toString();
        //remove all commas from text
        text = text.replace(/[,.]/g, '');
        //show text in the textAreaTo
        textAreaTo.value = text;
        //Text which we wanna translate empty? — clear the area
        if (textValue == '' || textValue == ' ') {
            textAreaTo.value = '';
        }
    });
}

// decodeSystem();

// function for the < option > elements
function switchMode() {
    let switcher = document.getElementById('type-of-lang');
    //when you click, and if value of the select item ...
    switcher.addEventListener('change', event => {
        if (event.target.value == 'morse') {
            //if switcher.value is morse => we start translate morse
            encodeMorse();
        } else if (event.target.value == 'binary') {
            //function to encode binary
            encodeSystem(2, 'Binary');
        } else if (event.target.value == 'decimal') {
            //function to encode decimal
            encodeSystem(10, 'Decimal');
        } else {
            //function to encode hex
            encodeSystem(16, 'Hex');
        }
    });
}

switchMode();