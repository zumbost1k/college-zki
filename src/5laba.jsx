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

const FifthLaba = () => {
  const [vizenerdecryptText, setVizenerdecryptText] = useState('');
  const [vizenerEnecryptText, setVizenerEnecryptText] = useState('');
  const [vigenerKeyText, setvigenerKeyText] = useState('');
  const [pleyfnirDecryptText, setPleyfnirDecryptText] = useState('');
  const [pleyfnirEncryptText, setPleyfnirEncryptText] = useState('');
  const alphabet = [
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
    '1',
    '2',
    '3',
    '4',
  ];
  const [alphabetWithKeyWord, setAlphabetWithKeyWord] = useState(alphabet);

  const SetAlphabetWithKeyHandler = () => {
    const keywordArray = Array.from(vizenerEnecryptText);

    const uniqueAlphabet = alphabet.filter(
      (letter) => !keywordArray.includes(letter)
    );

    const newAlphabetWithKeyWord = [...keywordArray, ...uniqueAlphabet];
    const uniqueNewAlphabetWithKeyWord = [...new Set(newAlphabetWithKeyWord)];
    setAlphabetWithKeyWord(uniqueNewAlphabetWithKeyWord);
  };
  function chunkArray(array, chunk_size) {
    var results = [];
    while (array.length) {
      results.push(array.splice(0, chunk_size));
    }
    return results;
  }
  const rows = chunkArray(alphabetWithKeyWord.slice(0), 6);
  const vigenereCipher = () => {
    let result = '';
    let newText = vizenerdecryptText;
    let newKeyText = vigenerKeyText;
    if (newText.length > 26) {
      newText = newText.slice(0, 26);
    }

    while (newText.length < 26) {
      newText += 'a';
    }

    if (newKeyText.length > 26) {
      newKeyText = newText.slice(0, 26);
    }

    while (newKeyText.length < 26) {
      newKeyText += 'a';
    }

    for (let i = 0; i < newText.length; i++) {
      let char = newText[i];
      if (char.match(/[a-z]/i)) {
        let asciiOffset =
          char.charCodeAt() - (char.toLowerCase() < 'a' ? 65 : 97);
        let shiftedChar =
          vizenerAlphabet[asciiOffset][
            newKeyText[i].charCodeAt() -
              (newKeyText[i].toLowerCase() < 'a' ? 65 : 97)
          ];
        result += shiftedChar;
      } else {
        result += char;
      }
    }

    setVizenerEnecryptText(result);
  };
  function encryptWithPlayfairCipher() {
    let encryptedText = '';

    const pairs = pleyfnirDecryptText.match(/.{1,2}/g);

    pairs.forEach((pair) => {
      let [char1, char2] = pair.split('');

      let pos1, pos2;
      for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].length; j++) {
          if (rows[i][j] === char1) pos1 = { row: i, col: j };
          if (rows[i][j] === char2) pos2 = { row: i, col: j };
        }
      }

      if (pos1.row === pos2.row) {
        let newCol1 = pos2.col === rows[pos1.row].length - 1 ? 0 : pos2.col + 1;
        let newCol2 = pos1.col === rows[pos2.row].length - 1 ? 0 : pos1.col + 1;
        encryptedText += rows[pos1.row][newCol2] + rows[pos2.row][newCol1];
      } else if (pos1.col === pos2.col) {
        let newRow1 = pos1.row === rows.length - 1 ? 0 : pos1.row + 1;
        let newRow2 = pos2.row === rows.length - 1 ? 0 : pos2.row + 1;
        encryptedText += rows[newRow1][pos1.col] + rows[newRow2][pos2.col];
      } else {
        encryptedText += rows[pos1.row][pos2.col] + rows[pos2.row][pos1.col];
      }
    });
    let blob = new Blob([`${encryptedText}\n${alphabetWithKeyWord.join('')}`], {
      type: 'text/plain;charset=utf-8',
    });
    let url = URL.createObjectURL(blob);
    let link = document.createElement('a');
    link.href = url;
    link.download = 'encryptedText.txt';
    link.click();
    setPleyfnirEncryptText(encryptedText);
  }
  function decryptWithPlayfairCipher() {
    let decryptedText = '';

    const pairs = pleyfnirEncryptText.match(/.{1,2}/g);

    pairs.forEach((pair) => {
      let [char1, char2] = pair.split('');

      let pos1, pos2;
      for (let i = 0; i < rows.length; i++) {
        for (let j = 0; j < rows[i].length; j++) {
          if (rows[i][j] === char1) pos1 = { row: i, col: j };
          if (rows[i][j] === char2) pos2 = { row: i, col: j };
        }
      }

      if (pos1.row === pos2.row) {
        let newCol1 = pos1.col === 0 ? rows[pos1.row].length - 1 : pos1.col - 1;
        let newCol2 = pos2.col === 0 ? rows[pos2.row].length - 1 : pos2.col - 1;
        decryptedText += rows[pos1.row][newCol1] + rows[pos2.row][newCol2];
      } else if (pos1.col === pos2.col) {
        let newRow1 = pos1.row === 0 ? rows.length - 1 : pos1.row - 1;
        let newRow2 = pos2.row === 0 ? rows.length - 1 : pos2.row - 1;
        decryptedText += rows[newRow1][pos1.col] + rows[newRow2][pos2.col];
      } else {
        decryptedText += rows[pos1.row][pos2.col] + rows[pos2.row][pos1.col];
      }
    });

    setPleyfnirDecryptText(decryptedText);
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      const lines = contents.split('\n');

      setPleyfnirEncryptText(lines[0]);
      setAlphabetWithKeyWord(lines[1].split(''));
    };

    reader.readAsText(file);
  };
  return (
    <div>
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
      <label>
        ключ для шифрования по виженеру:
        <input
          onChange={(e) => {
            let value = e.target.value;
            value = value.replace(/[^A-Za-z]/g, '');
            setvigenerKeyText(value);
          }}
          value={vigenerKeyText}
        />
      </label>
      <button
        onClick={() => {
          vigenereCipher();
        }}
      >
        зашифровать по виженеру
      </button>
      <p>зашифрованный текст по виженеру: {vizenerEnecryptText}</p>
      <label>
        текст для шифрования по плейфниру:
        <input
          onChange={(e) => {
            let value = e.target.value;
            value = value.replace(/[^A-Za-z]/g, '').toUpperCase();
            setPleyfnirDecryptText(value);
          }}
          value={pleyfnirDecryptText}
        />
      </label>
      <p>текст алфавита {alphabetWithKeyWord}</p>
      <button onClick={SetAlphabetWithKeyHandler}>сформировать алфавит</button>
      <button onClick={encryptWithPlayfairCipher}>
        зашифровать по плейфниру
      </button>
      <button onClick={decryptWithPlayfairCipher}>
        расшифровать по плейфниру
      </button>
      <p>зашифрованный текст по плейфниру {pleyfnirEncryptText}</p>
      <label>
        <p>прочесть из файла</p>
        <input type='file' onChange={handleFileChange} />
      </label>
      <table>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((symbol, index) => (
              <td key={index}>{symbol}</td>
            ))}
          </tr>
        ))}
      </table>
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
export default FifthLaba;
