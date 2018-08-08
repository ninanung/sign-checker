/** Check if string have longer length than some number.  
* @param {string} string The string that user want to check 
* @param {number} number The number of length that user want to check.
* @return {boolean} If length of param "string" is bigger than param number, return true. 
*/
function checkLongerThan (string: string, number: number): boolean {
    if(string.length > number) {
        return true;
    } else {
        return false;
    }
}
/** Check if string have shorter length than some number.
* @param {string} string The string that user want to check 
* @param {number} number The number of length that user want to check.
* @return {boolean} If length of param "string" is smaller than param number, return true. 
*/
function checkShorterThan (string: string, number: number): boolean {
    if(string.length < number) {
        return true;
    } else {
        return false;
    }
}
/** Check if string have shorter and longer length than both numbers.
* @param {string} string The string that user want to check.
* @param {number} small The number of length that user want to check(smaller one).
* @param {number} big The number of length that user want to check(bigger one).
* @return {boolean} If length of param "string" is bigger than second param and smaller than third param, return true. 
*/
function checkBetween (string: string, small: number, big: number): boolean {
    if(small < string.length && string.length < big) {
        return true;
    } else {
        return false;
    }
}
/** Check if string have letters of array.   
* @param {string} string The string that user want to check.
* @param {RegExp[]} letters The array of RegExp that user want to check.
* @return {number[]} Return array of index that matched with string.
*/
function checkLetters (string: string, letters: RegExp[]): number[] {
const matchedArray: number[] = [];
    for(let i = 0; i < letters.length; i++) {
        if(letters[i].test(string)) {
            matchedArray.push(i);
        }
    }
    return matchedArray;
}
/** Check if string have the number.
* @param {string} string The string that user want to check.
* @return {boolean} If string have the number, return true.
*/
function checkNumber (string: string): boolean {
const number: RegExp = /[0-9]/;
    if(number.test(string)) {
        return true;
    } else {
        return false;
    }
}
/** Check if string have the whitespace.  
* @param {string} string The string that user want to check.
* @return {boolean} If string have the whitespace, return true.
*/
function checkWhiteSpace (string: string): boolean {
const white: RegExp = /\s/;
    if(white.test(string)) {
        return true;
    } else {
        return false;
    }
}
/** Check if string have the Korean letter.  
* @param {string} string The string that user want to check.
* @return {boolean} If string have the Korean letter, return true.
*/
function checkKorean (string): boolean {
const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if(korean.test(string)) {
        return true;
    } else {
        return false;
    }
}
/** Check if string have the lowercase letter.
* @param {string} string The string that user want to check.
* @return {boolean} If string have the lowercase letter., return true.
*/
function checkLowerCase (string: string): boolean {
const lower: RegExp = /[a-z]/;
    if(lower.test(string)) {
        return true;
    } else {
        return  false;
    }
}
/** Check if string have the uppercase letter.  
* @param {string} string The string that user want to check.
* @return {boolean} If string have the uppercase letter, return true.
*/
function checkUpperCase (string: string): boolean {
const upper: RegExp = /[A-Z]/;
    if(upper.test(string)) {
        return true;
    } else {
        return false;
    }
}
/** Check if string have the special letter.  
* @param {string} string The string that user want to check.
* @return {boolean} If string have the special letter, return true.
*/
function checkSpecial (string: string): boolean {
const special: RegExp = /[!@#$%^&*()\-_=+\\\/\[\]{};:\'",.<>\/?|`~]/;
    if(special.test(string)) {
        return true;
    } else {
        return false;
    }
}
/** Check if string have uppercase letter, number and special letter. For complicate password check.
* @param {string} string The string that user want to check.
* @return {boolean} If string have all the letters, return true.
*/
function checkUpperSpecialNumber (string: string): boolean {
    if(this.checkSpecial(string) && this.checkUpperCase(string) && this.checkNumber(string)) {
        return true;
    } else {
        return false;
    }
}

export {
checkKorean,
checkBetween,
checkLetters,
checkLongerThan,
checkLowerCase,
checkNumber,
checkShorterThan,
checkSpecial,
checkUpperCase,
checkUpperSpecialNumber,
checkWhiteSpace
}