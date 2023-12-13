import React, { useState } from 'react';

const StringToTable = ({ inputString }) => {
  const rows = [];
  for (let i = 0; i < inputString.length; i += 9) {
    rows.push(inputString.slice(i, i + 9));
  }

  return (
    <table>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.split('').map((char, index) => (
              <td key={index}>{char}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

function OneTimePadEncryption() {
  const [isEncrypt, setIsEncrypt] = useState(false);
  const [inputText, setInputText] = useState('');
  const [keySequence] = useState([7, 1, 3, 2, 5, 4, 9, 8, 6]);
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [fileText, setFileText] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setFileText(reader.result);
    };
    reader.readAsText(file);
  };
  const handleNameChange = (event) => {
    const newValue = event.target.value;
    const regex = /^[а-яА-ЯёЁ\s]*$/;

    if (regex.test(newValue)) {
      setInputText(newValue);
    }
  };

  const encrypt = () => {
    let newText = inputText;

    if (newText.length > 90) {
      newText = newText.slice(0, 90);
    }

    while (newText.length < 90) {
      newText += 'а';
    }

    let table = Array(10)
      .fill()
      .map(() => Array(9).fill(null));
    let index = 0;

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 9; j++) {
        table[i][j] = newText[index];
        index++;
      }
    }

    let rearrangedTable = Array(10)
      .fill()
      .map(() => Array(9).fill(null));

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 9; j++) {
        let newIndex = keySequence[j];
        rearrangedTable[i][j] = table[i][newIndex - 1];
      }
    }

    let encrypted = '';
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 9; j++) {
        encrypted += rearrangedTable[i][j];
      }
    }

    setEncryptedText(encrypted);
    let blob = new Blob([encryptedText], { type: 'text/plain;charset=utf-8' });
    let url = URL.createObjectURL(blob);
    let link = document.createElement('a');
    link.href = url;
    link.download = 'encryptedText.txt';
    link.click();
    setIsEncrypt(true);
  };

  const decrypt = () => {
    let encryptedText = fileText;

    let rows = [];
    for (let i = 0; i < encryptedText.length; i += 9) {
      rows.push(encryptedText.slice(i, i + 9));
    }

    let rearrangedTable = Array(10)
      .fill()
      .map(() => Array(9).fill(null));

    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 9; j++) {
        let newIndex = keySequence[j];
        rearrangedTable[i][newIndex - 1] = rows[i][j];
      }
    }

    let decrypted = '';
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 9; j++) {
        decrypted += rearrangedTable[i][j];
      }
    }

    setDecryptedText(decrypted);
  };

  return (
    <div>
      <textarea value={inputText} onChange={handleNameChange} />
      <button onClick={encrypt}>Encrypt</button>
      <p>
        ключ{' '}
        {keySequence.map((currentNumber) => {
          return <span>{currentNumber}</span>;
        })}
      </p>
      {isEncrypt && <StringToTable inputString={encryptedText} />}
      <input type='file' onChange={handleFileChange} />
      <p>текст из файла- {fileText}</p>
      <button onClick={decrypt}>Decrypt</button>
      <p>расшифрованый текст {decryptedText}</p>
    </div>
  );
}

export default OneTimePadEncryption;
