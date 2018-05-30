const checker = {
    /** Check if string have longer length than some number.  
    * @param {string} string The string that user want to check 
    * @param {number} number The number of length that user want to check.
    * @return {boolean} If length of param "string" is bigger than param number, return true. 
    */
    checkLongerThan: function(string, number) {
        return true;
    },
    /** Check if string have shorter length than some number.
    * @param {string} string The string that user want to check 
    * @param {number} number The number of length that user want to check.
    * @return {boolean} If length of param "string" is smaller than param number, return true. 
    */
    checkShorterThan: function(string, number) {

    },
    /** Check if string have shorter and longer length than both numbers.
    * @param {string} string The string that user want to check.
    * @param {number} small The number of length that user want to check(smaller one).
    * @param {number} big The number of length that user want to check(bigger one).
    * @return {boolean} If length of param "string" is bigger than second param and smaller than third param, return true. 
    */
    checkBetween: function(string, small, big) {

    },
    /** Check if string have letters of array.   
    * @param {string} string The string that user want to check.
    * @param {string[]} letters The array of letters that user want to check.
    * @return {boolean[]} Return bool about each element of array if string have it. 
    */
    checkLetters: function(string, letters) {

    },
    /** Check if string have the number.
    * @param {string} string The string that user want to check.
    * @return {boolean} If string have the number, return true.
    */
    checkNumber: function(string) {

    },
    /** Check if string have the whitespace.  
    * @param {string} string The string that user want to check
    * @return {boolean} If string have the whitespace, return true.
    */
    checkWhiteSpace: function(string) {
        const white = /\s/;
        if(white.test(string)) {
            return true;
        }
        else {
            return false;
        }
    },
    /** Check if string have the Korean letter.  
    * @param {string} string The string that user want to check
    * @return {boolean} If string have the Korean letter, return true.
    */
    checkKorean: function(string) {
        const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        if(korean.test(string)) {
            return true;
        }
        else {
            return false;
        }
    },
    /** Check if string have the lowercase letter.
    * @param {string} string The string that user want to check
    * @return {boolean} If string have the lowercase letter., return true.
    */
    checkLowerCase: function(string) {

    },
    /** Check if string have the uppercase letter.  
    * @param {string} string The string that user want to check
    * @return {boolean} If string have the uppercase letter, return true.
    */
    checkUpperCase: function(string) {
        const upper = /[A-Z]/;
        if(upper.test(string)) {
            return true;
        }
        else {
            return false;
        }
    },
    /** Check if string have the special letter.  
    * @param {string} string The string that user want to check
    * @return {boolean} If string have the special letter, return true.
    */
    checkSpecial: function(string) {
        const special = /[!@#$%^&*()\-_=+\\\/\[\]{};:\'",.<>\/?|`~]/;
        if(special.test(string)) {
            return true;
        }
        else {
            return false;
        }
    }
}

module.exports = checker;