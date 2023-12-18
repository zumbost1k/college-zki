import { useState } from 'react';
import './index.css';

const SixthLaba = () => {
  const [playfnirAlphabet, setplayfnirAlphabet] = useState('');
  const [pleyfnirDecryptText, setPleyfnirDecryptText] = useState('');
  const [pleyfnirEncryptText, setPleyfnirEncryptText] = useState('');
  const [uitsonTextKey, setuitsonTextKey] = useState('');
  const [uitsonDecryptText, setUitsonDecryptText] = useState('');
  const [uitsonEncryptText, setUitsonEncryptText] = useState('');
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
  const [alphabetWithKeyWordUitson, setAlphabetWithKeyWordUitson] =
    useState(alphabet);
  const [alphabetWithKeyWordUitson2, setAlphabetWithKeyWordUitson2] =
    useState(alphabet);
  const SetAlphabetWithKeyHandler = (typeOfAlphabet, setFunction) => {
    const keywordArray = Array.from(typeOfAlphabet);

    const uniqueAlphabet = alphabet.filter(
      (letter) => !keywordArray.includes(letter)
    );

    const newAlphabetWithKeyWord = [...keywordArray, ...uniqueAlphabet];
    const uniqueNewAlphabetWithKeyWord = [...new Set(newAlphabetWithKeyWord)];
    setFunction(uniqueNewAlphabetWithKeyWord);
  };
  function chunkArray(array, chunk_size) {
    var results = [];
    while (array.length) {
      results.push(array.splice(0, chunk_size));
    }
    return results;
  }
  const rows = chunkArray(alphabetWithKeyWord.slice(0), 6);
  const rowsUitson = chunkArray(alphabetWithKeyWordUitson.slice(0), 6);
  const rowsUitson2 = chunkArray(alphabetWithKeyWordUitson2.slice(0), 6);
  function encryptWithPlayfairCipher() {
    let encryptedText = '';
    if (pleyfnirDecryptText.length % 2 === 0) {
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

        if (pos1.row === pos2.row || pos1.col === pos2.col) {
          let newCol1 =
            pos2.col === rows[pos1.row].length - 1 ? 0 : pos2.col + 1;
          let newCol2 =
            pos1.col === rows[pos2.row].length - 1 ? 0 : pos1.col + 1;
          encryptedText += rows[pos1.row][newCol2] + rows[pos2.row][newCol1];
        } else {
          encryptedText += rows[pos1.row][pos2.col] + rows[pos2.row][pos1.col];
        }
      });
     
      setPleyfnirEncryptText(encryptedText);
    }
  }

  const encryptWithUitsonCipher = () => {
    let encryptedText = '';
    if (uitsonDecryptText.length % 2 === 0) {
      const pairs = uitsonDecryptText.match(/.{1,2}/g);

      pairs.forEach((pair) => {
        let [char1, char2] = pair.split('');

        let pos1, pos2;
        for (let i = 0; i < rowsUitson.length; i++) {
          for (let j = 0; j < rowsUitson[i].length; j++) {
            if (rowsUitson[i][j] === char1) pos1 = { row: i, col: j };
            if (rowsUitson2[i][j] === char2) pos2 = { row: i, col: j };
          }
        }

        if (pos1.row === pos2.row || pos1.col === pos2.col) {
          encryptedText +=
            rowsUitson2[pos1.row][pos1.col] + rowsUitson[pos2.row][pos2.col];
        } else {
          encryptedText +=
            rowsUitson2[pos1.row][pos2.col] + rowsUitson[pos2.row][pos1.col];
        }
      });
      let blob = new Blob(
        [
          `${encryptedText}\n${alphabetWithKeyWordUitson.join(
            ''
          )}\n${alphabetWithKeyWordUitson2.join('')}`,
        ],
        {
          type: 'text/plain;charset=utf-8',
        }
      );
      let url = URL.createObjectURL(blob);
      let link = document.createElement('a');
      link.href = url;
      link.download = 'encryptedText.txt';
      link.click();
      setUitsonEncryptText(encryptedText);
    }
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      const lines = contents.split('\n');

      setUitsonEncryptText(lines[0]);
      setAlphabetWithKeyWordUitson(lines[1].split(''));
      setAlphabetWithKeyWordUitson2(lines[2].split(''));
    };

    reader.readAsText(file);
  };
  const decryptWithUitsonCipher = () => {
    let decryptedText = '';

    const pairs = uitsonEncryptText.match(/.{1,2}/g);

    pairs.forEach((pair) => {
      let [char1, char2] = pair.split('');

      let pos1, pos2;
      for (let i = 0; i < rowsUitson.length; i++) {
        for (let j = 0; j < rowsUitson[i].length; j++) {
          if (rowsUitson2[i][j] === char1) pos1 = { row: i, col: j };
          if (rowsUitson[i][j] === char2) pos2 = { row: i, col: j };
        }
      }

      if (pos1.row === pos2.row || pos1.col === pos2.col) {
        decryptedText +=
          rowsUitson[pos1.row][pos1.col] + rowsUitson2[pos2.row][pos2.col];
      } else {
        decryptedText +=
          rowsUitson[pos1.row][pos2.col] + rowsUitson2[pos2.row][pos1.col];
      }
    });

    setUitsonDecryptText(decryptedText);
  };

  return (
    <div>
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
      <label>
        текст для алфавита по плейфниру:
        <input
          onChange={(e) => {
            let value = e.target.value;
            value = value.replace(/[^A-Za-z]/g, '').toUpperCase();
            setplayfnirAlphabet(value);
          }}
          value={playfnirAlphabet}
        />
      </label>
      <label>
        текст для алфавита по плейфниру 2:
        <input
          onChange={(e) => {
            let value = e.target.value;
            value = value.replace(/[^A-Za-z]/g, '').toUpperCase();
            setuitsonTextKey(value);
          }}
          value={uitsonTextKey}
        />
      </label>
      <p>текст алфавита {alphabetWithKeyWord}</p>
      <button
        onClick={() => {
          SetAlphabetWithKeyHandler(playfnirAlphabet, setAlphabetWithKeyWord);
        }}
      >
        сформировать алфавит по плейфниру
      </button>
      <button onClick={encryptWithPlayfairCipher}>
        зашифровать по плейфниру
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
      <button
        onClick={() => {
          SetAlphabetWithKeyHandler(
            pleyfnirEncryptText,
            setAlphabetWithKeyWordUitson
          );
        }}
      >
        сформировать алфавит по уитсону 1
      </button>
      <button
        onClick={() => {
          SetAlphabetWithKeyHandler(
            uitsonTextKey,
            setAlphabetWithKeyWordUitson2
          );
        }}
      >
        сформировать алфавит по уитсону 2
      </button>
      <label>
        текст для уитсона:
        <input
          onChange={(e) => {
            let value = e.target.value;
            value = value.replace(/[^A-Za-z]/g, '').toUpperCase();
            setUitsonDecryptText(value);
          }}
          value={uitsonDecryptText}
        />
      </label>
      <p>зашифрованный текст по уитсону {uitsonEncryptText}</p>
      <button onClick={encryptWithUitsonCipher}>зашифровать по уитсону</button>
      <button onClick={decryptWithUitsonCipher}>расшифровать по уитсону</button>
      <div className='playf'>
        <table>
          {rowsUitson.map((row, index) => (
            <tr key={index}>
              {row.map((symbol, index) => (
                <td key={index}>{symbol}</td>
              ))}
            </tr>
          ))}
        </table>
        <br />
        <table>
          {rowsUitson2.map((row, index) => (
            <tr key={index}>
              {row.map((symbol, index) => (
                <td key={index}>{symbol}</td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};
export default SixthLaba;
