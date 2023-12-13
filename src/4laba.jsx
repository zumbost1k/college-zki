import { useState } from 'react';
import './index.css';
let vizenerAlphabet = [
  [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ],
  [
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
  ],
  [
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
  ],
  [
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
  ],
  [
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
  ],
  [
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
  ],
  [
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
  ],
  [
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
  ],
  [
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
  ],
  [
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
  ],
  [
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
  ],
  [
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
  ],
  [
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
  ],
  [
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
  ],
  [
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
  ],
  [
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
  ],
  [
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
  ],
  [
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
  ],
  [
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
  ],
  [
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
  ],
  [
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
  ],
  [
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
  ],
  [
    'W',
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
  ],
  [
    'X',
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
  ],
  [
    'Y',
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
  ],
  [
    'Z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
  ],
];

const ThirdLaba = () => {
  const [vizenerdecryptText, setVizenerdecryptText] = useState('');
  const [vizenerEnecryptText, setVizenerEnecryptText] = useState('');
  const [decryptText, setDecryptText] = useState('');
  const [key, setKey] = useState('');
  const [offset, setOffset] = useState(0);
  const [encryptText, setEncryptText] = useState('');
  const caesarCipher = () => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    let newText = decryptText.toLowerCase();

    if (newText.length > 26) {
      newText = newText.slice(0, 26);
    }

    while (newText.length < 26) {
      newText += 'a';
    }
    setDecryptText(newText);

    for (let i = 0; i < newText.length; i++) {
      let currentLetter = newText[i];
      let newIndex = alphabet.indexOf(currentLetter) + offset;
      if (newIndex > 25) newIndex = newIndex - 26;
      if (newIndex < 0) newIndex = 26 + newIndex;
      result += alphabet[newIndex];
    }

    setEncryptText(result);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      const lines = contents.split('\n');

      setVizenerEnecryptText(lines[0]);
      setEncryptText(lines[1]);
    };

    reader.readAsText(file);
  };

  const vigenereCipher = () => {
    let result = '';
    let newText = vizenerdecryptText;
    if (newText.length > 26) {
      newText = newText.slice(0, 26);
    }

    while (newText.length < 26) {
      newText += 'a';
    }

    for (let i = 0; i < newText.length; i++) {
      let char = newText[i];
      if (char.match(/[a-z]/i)) {
        let asciiOffset =
          char.charCodeAt() - (char.toLowerCase() < 'a' ? 65 : 97);
        let shiftedChar =
          vizenerAlphabet[asciiOffset][
            encryptText[i].charCodeAt() -
              (encryptText[i].toLowerCase() < 'a' ? 65 : 97)
          ];
        result += shiftedChar;
      } else {
        result += char;
      }
    }
    let blob = new Blob([`${result}\n${encryptText}`], {
      type: 'text/plain;charset=utf-8',
    });
    let url = URL.createObjectURL(blob);
    let link = document.createElement('a');
    link.href = url;
    link.download = 'encryptedText.txt';
    link.click();
    setVizenerEnecryptText(result);
  };
  const vigenereDecipher = () => {
    let result = '';
    let newText = vizenerEnecryptText;

    for (let i = 0; i < newText.length; i++) {
      let char = newText[i];
      if (char.match(/[a-z]/i)) {
        let asciiOffset =
          encryptText[i].charCodeAt() -
          (encryptText[i].toLowerCase() < 'a' ? 65 : 97);
        let shiftedCharIndex = vizenerAlphabet[asciiOffset].indexOf(char);
        let shiftedChar = String.fromCharCode(
          shiftedCharIndex + (char.toLowerCase() < 'a' ? 65 : 97)
        );
        result += shiftedChar;
      } else {
        result += char;
      }
    }

    setDecryptText(result);
  };

  const handleKeyChange = (event) => {
    setKey(event.target.value);
  };
  const handleDecryptTextChange = (event) => {
    let value = event.target.value;
    value = value.replace(/[^A-Za-z]/g, '');
    setDecryptText(value);
  };

  const handleOffsetChange = (event) => {
    setOffset(event.target.value);
  };
  return (
    <div>
      <label>
        Ключ шифрования:
        <input type='text' value={key} onChange={handleKeyChange} />
      </label>
      <label>
        Смещение:
        <input type='number' value={offset} onChange={handleOffsetChange} />
      </label>
      <label>
        фраза для шифрования:
        <input
          type='text'
          value={decryptText}
          onChange={handleDecryptTextChange}
        />
      </label>
      <button
        onClick={() => {
          caesarCipher();
        }}
      >
        зашифровать по цезарю
      </button>

      <p>зашифрованный текст по цезарю: {encryptText}</p>
      <label>
        фраза для шифрования по виженеру:
        <input
          onChange={(e) => {
            let value = e.target.value;
            value = value.replace(/[^A-Za-z]/g, '');
            setVizenerdecryptText(value);
          }}
          value={vizenerdecryptText}
        />
      </label>

      <button
        onClick={() => {
          vigenereCipher();
        }}
      >
        зашифровать по виженеру
      </button>
      <button
        onClick={() => {
          vigenereDecipher();
        }}
      >
        расшифровать по виженеру
      </button>
      <p>зашифрованный текст по виженеру: {vizenerEnecryptText}</p>
      <label>
        <p>прочесть из файла</p>
        <input type='file' onChange={handleFileChange} />
      </label>
      {vizenerAlphabet.map((currentAlphabet) => {
        return (
          <p className='vizener'>
            {currentAlphabet.map((currentLetter) => {
              return <span className='vizener'>{currentLetter}</span>;
            })}
          </p>
        );
      })}
    </div>
  );
};
export default ThirdLaba;
