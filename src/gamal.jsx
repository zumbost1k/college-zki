import React, { useState } from 'react';

const Gamal = () => {
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState([]);
  const [randomVariables, setRandomVariables] = useState([]);
  const publicKey = [
    19, // p
    5, // g
    11, // h
  ];

  function power(base, exponent, modulo) {
    if (exponent === 0) return 1;
    else if (exponent % 2 === 0) {
      let halfPower = power(base, exponent / 2, modulo);
      return (halfPower * halfPower) % modulo;
    } else return (base * power(base, exponent - 1, modulo)) % modulo;
  }

  function encrypt() {
    let [p, g, h] = publicKey;
    let a = Math.floor(Math.random() * (p - 2)) + 1;
    let cipher1 = power(g, a, p);

    let cipherText = [];
    for (let i = 0; i < encryptedText.length; i++) {
      let M = encryptedText.charCodeAt(i) - 'A'.charCodeAt(0) + 1;
      let cipher2 = (M * power(h, a, p)) % p;
      cipherText.push([cipher1, cipher2]);
    }
    setDecryptedText(cipherText);
    setRandomVariables(a);
    let data = `${a}\n ${JSON.stringify(cipherText)}\n`;
    let blob = new Blob([data], { type: 'text/plain' });
    let url = URL.createObjectURL(blob);
    let link = document.createElement('a');
    link.href = url;
    link.download = 'decryption_data.txt';
    link.click();
  }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      const lines = contents.split('\n');

      setRandomVariables(parseInt(lines[0]));
      setDecryptedText(JSON.parse(lines[1]));
    };

    reader.readAsText(file);
  };

  function decrypt() {
    let [p, g] = publicKey;
    let a = randomVariables;
    let y = power(g, a, p);
    let plainText = '';

    for (let i = 0; i < decryptedText.length; i++) {
      let [cipher1, cipher2] = decryptedText[i];
      let M = (cipher2 * power(y, p - 2 - a, p)) % p;
      plainText += String.fromCharCode(M + 'A'.charCodeAt(0) - 1);
    }

    setEncryptedText(plainText);
  }

  return (
    <div>
      <label>
        текст для шифрования по гамалю:
        <input
          onChange={(e) => {
            let value = e.target.value;
            value = value.replace(/[^A-Z]/g, '');
            setEncryptedText(value);
          }}
          value={encryptedText}
        />
      </label>
      <button onClick={encrypt}>зашифровать</button>
      <button onClick={decrypt}>расшифровать</button>
      <p>Случайная переменная: {randomVariables}</p>
      <p>
        зашифрованное слово{' '}
        {decryptedText.map((letters) => {
          return <p>{`${letters[0]} ${letters[1]}`}</p>;
        })}
      </p>
      <p>
        открытый ключ{' '}
        {publicKey.map((letter) => {
          return <p>{letter}</p>;
        })}
      </p>
      <label>
        <p>прочесть из файла</p>
        <input type='file' onChange={handleFileChange} />
      </label>
    </div>
  );
};

export default Gamal;
