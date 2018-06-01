const checker = {
    /** Check if string have longer length than some number.  
    * @param {string} string The string that user want to check 
    * @param {number} number The number of length that user want to check.
    * @return {boolean} If length of param "string" is bigger than param number, return true. 
    */
    checkLongerThan: function(string, number) {
        if(string.length > number) {
            return true;
        } else {
            return false;
        }
    },
    /** Check if string have shorter length than some number.
    * @param {string} string The string that user want to check 
    * @param {number} number The number of length that user want to check.
    * @return {boolean} If length of param "string" is smaller than param number, return true. 
    */
    checkShorterThan: function(string, number) {
        if(string.length < number) {
            return true;
        } else {
            return false;
        }
    },
    /** Check if string have shorter and longer length than both numbers.
    * @param {string} string The string that user want to check.
    * @param {number} small The number of length that user want to check(smaller one).
    * @param {number} big The number of length that user want to check(bigger one).
    * @return {boolean} If length of param "string" is bigger than second param and smaller than third param, return true. 
    */
    checkBetween: function(string, small, big) {
        if(small < string.length < big) {
            return true;
        } else {
            return false;
        }
    },
    /** Check if string have letters of array.   
    * @param {string} string The string that user want to check.
    * @param {string[]} letters The array of letters that user want to check.
    * @return {boolean[]} Return bool about each element of array if string have it. 
    */
    checkLetters: function(string, letters) {
        let boolArray = [];
        for(let i = 0; i < letters.length; i++) {
            if(letters[i].test(string)) {
                boolArray.push(true);
            } else {
                boolArray.push(false);
            }
        }
        return boolArray;
    },
    /** Check if string have the number.
    * @param {string} string The string that user want to check.
    * @return {boolean} If string have the number, return true.
    */
    checkNumber: function(string) {
        const number = /[0-9]/;
        if(number.test(string)) {
            return true;
        } else {
            return false;
        }
    },
    /** Check if string have the whitespace.  
    * @param {string} string The string that user want to check.
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
    * @param {string} string The string that user want to check.
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
    * @param {string} string The string that user want to check.
    * @return {boolean} If string have the lowercase letter., return true.
    */
    checkLowerCase: function(string) {
        const lower = /[a-z]/;
        if(lower.test(string)) {
            return true;
        } else {
            return  false;
        }
    },
    /** Check if string have the uppercase letter.  
    * @param {string} string The string that user want to check.
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
    * @param {string} string The string that user want to check.
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
    },
    /** Check if string have uppercase letter, number and special letter. For complicate password check.
    * @param {string} string The string that user want to check.
    * @return {boolean} If string have all the letters, return true.
    */
    checkUpperSpecialNumber: function(string) {
        if(this.checkSpecial(string) && this.checkUpperCase(string) && this.checkNumber(string)) {
            return true;
        } else {
            return false;
        }
    }
}

module.exports = checker;