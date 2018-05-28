export default {
    checkWhiteSpace: function(string) {
        const white = /\s/;
        if(white.test(string)) {
            return true;
        }
        else {
            return false;
        }
    },
    checkBlockSomeSpecioal: function(string) {
        const special = /[,\/]/;
        if(special.test(string)) {
            return true;
        }
        else {
            return false;
        }
    },
    checkKorean: function(string) {
        const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        if(korean.test(string)) {
            return true;
        }
        else {
            return false;
        }
    },
    checkUpperDigit: function(string) {
        const upper = /[A-Z]/;
        if(upper.test(string)) {
            return true;
        }
        else {
            return false;
        }
    },
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