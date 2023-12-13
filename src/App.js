import React, { useState } from 'react';
import './App.css';
import { saveAs } from 'file-saver';

function StringTable({ str }) {
  const rows = [];
  for (let i = 0; i < str.length; i += 5) {
    const row = [];
    for (let j = i; j < i + 5 && j < str.length; j++) {
      row.push(str[j]);
    }
    rows.push(row);
  }

  return (
    <table>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((char, j) => (
              <td className='letter' key={j}>
                {char}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
function DoubleTranspositionCipher() {
  const [message, setMessage] = useState('');
  const [intermediateMessage1, setIntermediateMessage1] = useState('');
  const [intermediateMessage2, setIntermediateMessage2] = useState('');
  const [isComputing, setIsComputing] = useState(true);
  const [isInverseComputing, setIsInverseComputing] = useState(true);
  const [messageToDecrypt, setMessageToDecrypt] = useState('');
  const handleChange = (event) => {
    const result = event.target.value.toUpperCase();
    const validCharacters = result
      .split('')
      .filter((char) => alphabet.includes(char))
      .join('');
    setMessage(validCharacters);
  };
  const handleEncrypt = () => {
    const key1 = '31524';
    const key2 = '54321';
    let newMessage = message.toUpperCase();

    if (newMessage.length < 25) {
      newMessage = newMessage.padEnd(25, 'Q');
    } else if (newMessage.length > 25) {
      newMessage = newMessage.substring(0, 25);
    }

    setMessage(newMessage);

    let intermediateMessage1 = performSubstitution(newMessage, key1);
    setIntermediateMessage1(intermediateMessage1);

    let intermediateMessage2 = performSubstitution(intermediateMessage1, key2);
    setIntermediateMessage2(intermediateMessage2);
    saveAs(
      new Blob([intermediateMessage2], { type: 'text/plain' }),
      'encrypted.txt'
    );
    setIsComputing(false);
  };

  const performSubstitution = (message, key) => {
    let intermediateMessage = '';
    for (let i = 0; i < message.length; i++) {
      const letter = message[i];
      const index = alphabet.indexOf(letter);
      if (index === -1) {
        intermediateMessage += letter;
        continue;
      }
      const row = Math.floor(index / 5);
      const col = index % 5;

      const newRow = parseInt(key[row]) - 1;
      const newCol = parseInt(key[col]) - 1;

      const newIndex = newRow * 5 + newCol;
      if (newIndex >= alphabet.length) {
        console.error(`Invalid index: ${newIndex}`);
        continue;
      }
      intermediateMessage += alphabet[newIndex];
    }
    return intermediateMessage;
  };
  const handleDecrypt = () => {
    setIsComputing(true);
    const key1 = '54321';
    const key2 = '31524';

    let decryptedMessage = messageToDecrypt.toUpperCase();

    let intermediateMessage1 = performSubstitution(decryptedMessage, key2);
    setIntermediateMessage1(intermediateMessage1);

    decryptedMessage = performSubstitution(intermediateMessage1, key1);
    setMessage(decryptedMessage);

    setIsInverseComputing(false);
  };

  function handleFileChange(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      setMessageToDecrypt(event.target.result);
      handleDecrypt();
    };

    reader.readAsText(file);
    event.target.value = null;
  }

  return (
    <div>
      <input
        type='text'
        value={message}
        onChange={handleChange}
      />
      <button onClick={handleEncrypt}>Encrypt</button>
      <h1>Original Message: {message}</h1>
      {!isComputing && (
        <div>
          <h1>Intermediate Message 1:</h1>
          <StringTable str={intermediateMessage1} />
          <h1>Intermediate Message 2: </h1>
          <StringTable str={intermediateMessage2} />
        </div>
      )}
      <label htmlFor='file_reader'>Read from file</label>
      <input id='file_reader' type='file' onChange={handleFileChange} />
      {isInverseComputing && <h1>Original Message: {message}</h1>}
    </div>
  );
}

export default DoubleTranspositionCipher;
