const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(encodedString) { 
    let array = encodedString.split('');
    console.log(array);
    let encodedLetters = [];
    let symbols = [];
    let morseLetters = [];
    let decodedString;
    
    for (let i = 2; i < array.length + 2; i+=2)
    {
        encodedLetters.push(array.slice(i-2, i).join(''));
    }
    console.log(encodedLetters);
    symbols = encodedLetters.map(item => {
        if(item == '**') return '*';
        else if(item == '10') return '.';
        else if (item == '11') return '-';
        else return '';
    })    
    console.log(symbols);
    for (let i = 5; i < symbols.length + 5; i += 5)
    {
        morseLetters.push(symbols.slice(i-5, i).join(''));

    }
    console.log(morseLetters);
    decodedString = morseLetters.map(code => {
        if(code == '*****') return ' ';
        else return MORSE_TABLE[code];         
    });
    console.log(decodedString);
    console.log(decodedString.join(''));
    return decodedString.join('');    
}

module.exports = {
    decode
}
decode("0000101010000000101100101010110000000010**********00000011110000000010");
