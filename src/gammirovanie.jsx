import React, { useCallback, useEffect, useState } from 'react';

const Gammirovanie = () => {
  const [decryptText, setDecryptText] = useState('');
  const [key, setKey] = useState('');
  const [offset, setOffset] = useState(0);
  const [encryptText, setEncryptText] = useState('');
  const [shouldChangeGamma, setShouldChangeGamma] = useState(true);

  const [gammaDecryptText, setGammaDecryptText] = useState('');
  const words = useCallback(() => {
    return [
      'gsdfdsvvarwefwefsdfsdf',
      'gdfjuyukghngjhffvbxzcq',
      'sdvcxhtytjytujrtsdfgdf',
      'sdvcxhtytjytujrtsdfgdf',
      'jghkifuhcvcxvwefwerwer',
      'qwertyuioplkjhgfdssazx',
      'nbvmbntyhvbaerfwertigh',
    ];
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [gamma, setGamma] = useState(words()[currentIndex]);
  let alphabetOld = 'abcdefghijklmnopqrstuvwxyz';
  const caesarCipher = () => {
    let result = '';

    let alphabet = Array.from(new Set(key.toLowerCase() + alphabetOld)).join(
      ''
    );

    let newText = decryptText.toLowerCase();

    for (let i = 0; i < newText.length; i++) {
      let newIndex = alphabetOld.indexOf(newText[i]) + parseInt(offset);
      if (alphabet[newIndex]) {
        result += alphabet[newIndex];
      } else {
        result += alphabet[newIndex - 26];
      }
    }

    setEncryptText(result);
  };
  const handleDownload = (documentName, encryptedText, shouldStopGamma) => {
    const blob = new Blob([encryptedText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${documentName}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShouldChangeGamma(!shouldStopGamma);
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
    if (event.target.value <= 26) setOffset(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
      const contents = e.target.result;
      const lines = contents.split('\n');

      setGammaDecryptText(lines[0]);
      setGamma(lines[1]);
    };
    setShouldChangeGamma(false);
    reader.readAsText(file);
  };
  const gammaEncrypt = () => {
    let textLen = encryptText.length;
    let gammaLen = gamma.length;

    let keyText = [];
    for (let i = 0; i < textLen / gammaLen; i++) {
      for (let symb of gamma) {
        keyText.push(symb);
      }
    }
    for (let i = 0; i < textLen % gammaLen; i++) {
      keyText.push(gamma[i]);
    }

    // Encryption
    let code = [];
    for (let i = 0; i < textLen; i++) {
      let alphabet = 'abcdefghijklmnopqrstuvwxyz';
      let index1 = alphabet.indexOf(encryptText[i]);
      let index2 = alphabet.indexOf(keyText[i]);
      code.push(alphabet[(index1 + index2) % 26]);
    }

    setGammaDecryptText(code.join(''));
    handleDownload('decryptedText', `${code.join('')}\n${gamma}`, true);
  };
  const gammaDecrypt = () => {
    let textLen = gammaDecryptText.length;
    let gammaLen = gamma.length;

    let keyText = [];
    for (let i = 0; i < textLen / gammaLen; i++) {
      for (let symb of gamma) {
        keyText.push(symb);
      }
    }
    for (let i = 0; i < textLen % gammaLen; i++) {
      keyText.push(gamma[i]);
    }

    // Decryption
    let code = [];
    for (let i = 0; i < textLen; i++) {
      let alphabet = 'abcdefghijklmnopqrstuvwxyz';
      let index1 = alphabet.indexOf(gammaDecryptText[i]);
      let index2 = alphabet.indexOf(keyText[i]);
      code.push(alphabet[(index1 - index2 + 26) % 26]);
    }

    setEncryptText(code.join(''));
  };

  useEffect(() => {
    const wordsArray = words();
    const intervalId = setInterval(() => {
      if (shouldChangeGamma) {
        setGamma(wordsArray[currentIndex]);
        setCurrentIndex((currentIndex + 1) % wordsArray.length);
      }
    }, 500);

    return () => clearInterval(intervalId);
  }, [words, currentIndex, shouldChangeGamma]);
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

      <button
        onClick={() => {
          handleDownload('gamma', gamma, true);
        }}
      >
        скачать гамму
      </button>
      <button onClick={gammaEncrypt}>зашифровать по гамме</button>
      <button onClick={gammaDecrypt}>расшифровать по гамме</button>
      <label>
        <p>прочесть из файла</p>
        <input type='file' onChange={handleFileChange} />
      </label>
      <p>
        зашифрованный текст по цезарю:{encryptText}
        {encryptText.split('').map((letter) => {
          return <div>{alphabetOld.indexOf(letter) + ` `} </div>;
        })}
      </p>
      <p>
        гамма:{' '}
        {gamma.split('').map((letter) => {
          return <div>{alphabetOld.indexOf(letter) + ` `} </div>;
        })}
      </p>
      <p>зашифрованный текст по гаммированию: {gammaDecryptText}</p>
    </div>
  );
};

export default Gammirovanie;
