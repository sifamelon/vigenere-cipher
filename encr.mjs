function vigenereEncrypt(plainText, key) {
  let encrypted = "";
  key = key.toLowerCase();
  let keyIndex = 0;

  for (let i = 0; i < plainText.length; i++) {
    let char = plainText[i];

    if (char.match(/[a-zA-Z]/)) {
      let isUpper = char === char.toUpperCase();
      let base = isUpper ? 65 : 97;
      let keyChar = key[keyIndex % key.length];
      // let keyShift = keyChar.charCodeAt(0) - 97;
      let keyShift = keyChar.charCodeAt(0) % 26; // now allows any key character
      let code = plainText.charCodeAt(i);
      let encryptedChar = String.fromCharCode(
        ((code - base + keyShift) % 26) + base
      );
      encrypted += encryptedChar;
      keyIndex++;
    } else if (char.match(/[0-9]/)) {
      let keyChar = key[keyIndex % key.length];
      let keyShift = keyChar.charCodeAt(0) - 97;

      let digit = parseInt(char, 10);
      let encryptedDigit = (digit + keyShift) % 10;
      encrypted += encryptedDigit.toString();
      keyIndex++;
    } else {
      encrypted += char; // leave symbols unchanged
    }
  }

  return encrypted;
}
export default { vigenereEncrypt };
