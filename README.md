# 🔐 Vigenere Cipher (Letters + Digits)

<p>
This project implements a modern version of the <strong>Vigenere Cipher</strong> using JavaScript (Node.js).
It supports encryption and decryption of both <strong>alphabetic characters (A-Z, a-z)</strong> and <strong>digits (0-9)</strong>,
while preserving symbols, punctuation, and whitespace. The encryption key can contain any mix of letters and numbers.
</p>

---

## ✨ Features

- 🔡 Encrypts letters with classic Vigenere cipher logic (mod 26)
- 🔢 Encrypts digits using modular rotation (mod 10)
- 🔐 Key can contain any characters (letters, numbers, etc.)
- 🧹 Non-alphanumeric characters remain unchanged
- 📄 Reads input from a `.txt` file and prints encrypted + decrypted output

---

## 🛠️ How to Run

```bash
# 1. Clone or download the repository
# 2. Make sure you're using Node.js v14+ (with ESM module support)
# 3. Save your input text in pass.txt

# 4. Run the encryption + decryption
node app.mjs
```
