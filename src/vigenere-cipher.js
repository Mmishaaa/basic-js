const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(boolValue = true) {
    this.boolValue = boolValue;
  }

  encrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }

    text = text.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = '';
    let index = 0;
    
    for (let i = 0; i < text.length; i++) {
      if (text[i].match(/[A-Z]/)) {
        const messageCode = text.charCodeAt(i) - 65;
        const keyCharCode = key.charCodeAt(index) - 65;
        const encryptedCode = (messageCode + keyCharCode) % 26;
        const encryptedChar = String.fromCharCode(encryptedCode + 65);
        encryptedMessage += encryptedChar;
        index++;
        if (index === key.length) {
          index = 0;
        }
      } else {
        encryptedMessage += text[i];
      }
    }
    return this.boolValue ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }
    text = text.toUpperCase();
    key = key.toUpperCase();
    let decryptedMessage = '';
    let index = 0;
    for (let i = 0; i < text.length; i++) {
      if (text[i].match(/[A-Z]/)) {
        const encryptedCharCode = text.charCodeAt(i) - 65;
        const keyCharCode = key.charCodeAt(index) - 65;
        const decryptedCharCode = (encryptedCharCode - keyCharCode + 26) % 26;
        const decryptedChar = String.fromCharCode(decryptedCharCode + 65);
        decryptedMessage += decryptedChar;
        index++;
        if (index === key.length) {
          index = 0;
        }
      } else {
        decryptedMessage += text[i];
      }
    }
    return this.boolValue ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}
module.exports = {
  VigenereCipheringMachine
};
