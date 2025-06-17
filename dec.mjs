function vigenereDecrypt(cipherText, key) {
  let decrypted = "";
  key = key.toLowerCase();
  let keyIndex = 0;

  for (let i = 0; i < cipherText.length; i++) {
    let char = cipherText[i];

    if (char.match(/[a-zA-Z]/)) {
      let isUpper = char === char.toUpperCase();
      let base = isUpper ? 65 : 97;
      let keyChar = key[keyIndex % key.length];
      // let keyShift = keyChar.charCodeAt(0) - 97;
      let keyShift = keyChar.charCodeAt(0) % 26;
      let code = cipherText.charCodeAt(i);
      let decryptedChar = String.fromCharCode(
        ((code - base - keyShift + 26) % 26) + base
      );
      decrypted += decryptedChar;
      keyIndex++;
    } else if (char.match(/[0-9]/)) {
      let keyChar = key[keyIndex % key.length];
      let keyShift = keyChar.charCodeAt(0) - 97;

      let digit = parseInt(char, 10);
      let decryptedDigit = (digit - keyShift + 10) % 10;
      decrypted += decryptedDigit.toString();
      keyIndex++;
    } else {
      decrypted += char; // leave symbols unchanged
    }
  }

  return decrypted;
}

export default { vigenereDecrypt };
