# sign-checker
[![npm](https://img.shields.io/badge/npm-v1.0.4-blue.svg)](https://www.npmjs.com/package/sign-checker) 
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ninanung/sign-checker/blob/master/LICENSE)

## Why did i make this  
I'm sick of making same 'checker' for every project. So, i will deploy this and use it for my project when i need signup and signin function.  

## How to install  
Install with npm.
```
cd your/some/npm/project
npm install --save sign-checker
```  

## How to use  
```javascript
import checker from 'sign-checker';

const someString = "someStringThatIWantToCheck";
const checkResult = checker.someFunction(someString);
if(checkResult) {
    doingSomething();
} else {
    doingOtherthing();
}
```  

## Functions  
- __checkLongerThan: param(string, number)__ : Check if 'string' param's length is longer than 'number' param. Return boolean.
- __checkShorterThan: param(string, number)__ : Check if 'string' param's length is shorter than 'number' param. Return boolean.
- __checkBetween: param(string, small, big)__ : Check if 'string' param's length is longer than 'small' and shorter than 'big'. Return boolean.
- __checkLetters: param(string, letters[])__ : Check if 'string' param have letters(RegExp) in 'letters' param. Return array of index that matched with string.
- __checkNumber: param(string)__ : Check if 'string' param have number letters. Return boolean.
- __checkWhiteSpace: param(string)__ : Check if 'string' param have white space. Return boolean.
- __checkKorean: param(string)__ : Check if 'string' param have Korean letters. Return boolean.
- __checkLowerCase: param(string)__ : Check if 'string' param have lowercase(English) letters. Return boolean.
- __checkUpperCase: param(string)__ : Check if 'string' param have uppercase(English) letters. Return boolean.
- __checkSpecial: param(string)__ : Check if 'string' param have special letters. Return boolean.
- __checkUpperSpecialNumber: param(string)__ : Check if 'string' param have uppercase, special, number letters. You can use this function for checking complicate account password. Return boolean.

## License  
[MIT](LICENSE)