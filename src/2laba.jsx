import React, { useState } from 'react';

const magicSquare = [3, 8, 1, 7, 0, 5, 2, 4, 6];
function encryptText(text) {
  let textarr = text.split('');
  let decryptText = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
  magicSquare.forEach((currentIndex, index) => {
    decryptText[index] = textarr[currentIndex];
  });
  return decryptText.join('');
}

function decryptText(text) {
  let textarr = text.split('');
  let decryptText = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
  magicSquare.forEach((currentIndex, index) => {
    decryptText[currentIndex] = textarr[index];
  });

  return decryptText.join('');
}

function MagicSquareEncryption() {
  const [text, setText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [fileContent, setFileContent] = useState('');
  const [decryptedFileContent, setDecryptedFileContent] = useState('');

  const handleEncrypt = () => {
    let adjustedText = text.slice(0, 9).padEnd(9, 'а');
    setEncryptedText(encryptText(adjustedText));
   };
   

  const handleDecrypt = () => {
    setDecryptedFileContent(decryptText(fileContent));
  };

  const handleDownload = () => {
    const blob = new Blob([encryptedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'encryptedText.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setFileContent(event.target.result);
    };

    reader.readAsText(file);
  };

  return (
    <div>
      <input
        type='text'
        value={text}
        onChange={(e) => {
          const re = /[а-яА-Я]/g;
          if (re.test(e.target.value)) {
            setText(e.target.value);
          }
        }}
      />
      <button onClick={handleEncrypt}>Encrypt</button>
      <button onClick={handleDownload}>Download encrypted text</button>
      <p>Encrypted text: {encryptedText}</p>
      <input type='file' onChange={handleFileChange} />
      <button onClick={handleDecrypt}>Decrypt file content</button>
      <div>
        <p>4 9 2</p>
        <p>8 1 6</p>
        <p>3 5 7</p>
      </div>
      <p>Decrypted file content: {decryptedFileContent}</p>
      <p>File content: {fileContent}</p>
    </div>
  );
}

export default MagicSquareEncryption;
