"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Check if string have longer length than some number.
* @param {string} string The string that user want to check
* @param {number} number The number of length that user want to check.
* @return {boolean} If length of param "string" is bigger than param number, return true.
*/
function checkLongerThan(string, number) {
    if (string.length > number) {
        return true;
    }
    else {
        return false;
    }
}
exports.checkLongerThan = checkLongerThan;
/** Check if string have shorter length than some number.
* @param {string} string The string that user want to check
* @param {number} number The number of length that user want to check.
* @return {boolean} If length of param "string" is smaller than param number, return true.
*/
function checkShorterThan(string, number) {
    if (string.length < number) {
        return true;
    }
    else {
        return false;
    }
}
exports.checkShorterThan = checkShorterThan;
/** Check if string have shorter and longer length than both numbers.
* @param {string} string The string that user want to check.
* @param {number} small The number of length that user want to check(smaller one).
* @param {number} big The number of length that user want to check(bigger one).
* @return {boolean} If length of param "string" is bigger than second param and smaller than third param, return true.
*/
function checkBetween(string, small, big) {
    if (small < string.length && string.length < big) {
        return true;
    }
    else {
        return false;
    }
}
exports.checkBetween = checkBetween;
/** Check if string have letters of array.
* @param {string} string The string that user want to check.
* @param {RegExp[]} letters The array of RegExp that user want to check.
* @return {boolean[]} Return bool about each element of array if string have it.
*/
function checkLetters(string, letters) {
    var boolArray = [];
    for (var i = 0; i < letters.length; i++) {
        if (letters[i].test(string)) {
            boolArray.push(true);
        }
        else {
            boolArray.push(false);
        }
    }
    return boolArray;
}
exports.checkLetters = checkLetters;
/** Check if string have the number.
* @param {string} string The string that user want to check.
* @return {boolean} If string have the number, return true.
*/
function checkNumber(string) {
    var number = /[0-9]/;
    if (number.test(string)) {
        return true;
    }
    else {
        return false;
    }
}
exports.checkNumber = checkNumber;
/** Check if string have the whitespace.
* @param {string} string The string that user want to check.
* @return {boolean} If string have the whitespace, return true.
*/
function checkWhiteSpace(string) {
    var white = /\s/;
    if (white.test(string)) {
        return true;
    }
    else {
        return false;
    }
}
exports.checkWhiteSpace = checkWhiteSpace;
/** Check if string have the Korean letter.
* @param {string} string The string that user want to check.
* @return {boolean} If string have the Korean letter, return true.
*/
function checkKorean(string) {
    var korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
    if (korean.test(string)) {
        return true;
    }
    else {
        return false;
    }
}
exports.checkKorean = checkKorean;
/** Check if string have the lowercase letter.
* @param {string} string The string that user want to check.
* @return {boolean} If string have the lowercase letter., return true.
*/
function checkLowerCase(string) {
    var lower = /[a-z]/;
    if (lower.test(string)) {
        return true;
    }
    else {
        return false;
    }
}
exports.checkLowerCase = checkLowerCase;
/** Check if string have the uppercase letter.
* @param {string} string The string that user want to check.
* @return {boolean} If string have the uppercase letter, return true.
*/
function checkUpperCase(string) {
    var upper = /[A-Z]/;
    if (upper.test(string)) {
        return true;
    }
    else {
        return false;
    }
}
exports.checkUpperCase = checkUpperCase;
/** Check if string have the special letter.
* @param {string} string The string that user want to check.
* @return {boolean} If string have the special letter, return true.
*/
function checkSpecial(string) {
    var special = /[!@#$%^&*()\-_=+\\\/\[\]{};:\'",.<>\/?|`~]/;
    if (special.test(string)) {
        return true;
    }
    else {
        return false;
    }
}
exports.checkSpecial = checkSpecial;
/** Check if string have uppercase letter, number and special letter. For complicate password check.
* @param {string} string The string that user want to check.
* @return {boolean} If string have all the letters, return true.
*/
function checkUpperSpecialNumber(string) {
    if (this.checkSpecial(string) && this.checkUpperCase(string) && this.checkNumber(string)) {
        return true;
    }
    else {
        return false;
    }
}
exports.checkUpperSpecialNumber = checkUpperSpecialNumber;
