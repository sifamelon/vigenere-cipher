import { readFile } from "fs";
import encr from "./encr.mjs";
import dec from "./dec.mjs";
readFile("./pass.txt", (err, data) => {
  if (err) {
    console.error("error reading", err);
  } else {
    const encrypted = encr.vigenereEncrypt(data.toString(), "hello323");
    console.log("encrypted =", encrypted);
    console.log("decrypted=", dec.vigenereDecrypt(encrypted, "hello323"));
  }
});
