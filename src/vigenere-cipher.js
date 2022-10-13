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

  constructor(value){
    if (value === false) {this.type = 'reverse'}
    else {this.type = 'direct'}
  }
  
  encrypt(string, key) {

    if(!string || !key){ throw Error('Incorrect arguments!'); }
    
    string = string.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let key_symbol_number = 0
    
    for (let i = 0; i < string.length; i++) {

      if (string[i].charCodeAt(0) < 65 || string[i].charCodeAt(0) > 90) { 
        result += string[i]
      } else {
        let letter_ascii_value = key[key_symbol_number].charCodeAt(0) + string[i].charCodeAt(0) - 65;
        if (letter_ascii_value > 90) { letter_ascii_value -= 26;}

        result += String.fromCharCode(letter_ascii_value)
        
        console.log(string[i], ' - ', key[key_symbol_number], ' - ', letter_ascii_value, ' - ', result)
        key_symbol_number++;
        if (key_symbol_number === key.length) {key_symbol_number = 0}
      }
    }    
    return this.type === 'direct' ? result : result.split("").reverse().join("");
  }
  decrypt(string, key) {
    
    if(!string || !key){ throw Error('Incorrect arguments!'); }

    string = string.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let key_symbol_number = 0
    
    for (let i = 0; i < string.length; i++) {

      if (string[i].charCodeAt(0) < 65 || string[i].charCodeAt(0) > 90) { 
        result += string[i]
      } else {
        let letter_ascii_value = string[i].charCodeAt(0) - key[key_symbol_number].charCodeAt(0) + 65 ;
        if (letter_ascii_value < 65) { letter_ascii_value += 26;}

        result += String.fromCharCode(letter_ascii_value)
        
        console.log(string[i], ' - ', key[key_symbol_number], ' - ', letter_ascii_value, ' - ', result)
        key_symbol_number++;
        if (key_symbol_number === key.length) {key_symbol_number = 0}
      }
    }    
    return this.type === 'direct' ? result : result.split("").reverse().join("");
  } 
}

module.exports = {
  VigenereCipheringMachine
};
