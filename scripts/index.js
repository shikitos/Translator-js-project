'use strict'

function typeWriter() {
    let text = `Hello! This is a translater — site where you can translate Russian or English text to "Morse", "Binary", "Decimal" and "Hex" codes.`;
    let speed = 250;
    let paragraphArea = document.getElementById('typewriter');

    function typeWriterText() {
        let i = 0;
        if (i < text.length) {
            paragraphArea.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriterText();
}
typeWriter();