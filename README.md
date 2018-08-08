# sign-checker
[![npm](https://img.shields.io/badge/npm-v1.0.3-blue.svg)](https://www.npmjs.com/package/sign-checker) 
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/ninanung/sign-checker/blob/master/LICENSE)
## v1.0.2

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
- checkLongerThan: param(string, number) : Check if 'string' param's length is longer than 'number' param.
- checkShorterThan: param(string, number) : Check if 'string' param's length is shorter than 'number' param.
- checkBetween: param(string, small, big) : Check if 'string' param's length is longer than 'small' and shorter than 'big'.
- checkLetters: param(string, letters[]) : Check if 'string' param have letters(RegExp) in 'letters' param.
- checkNumber: param(string) : Check if 'string' param have number letters.
- checkWhiteSpace: param(string) : Check if 'string' param have white space.
- checkKorean: param(string) : Check if 'string' param have Korean letters.
- checkLowerCase: param(string) : Check if 'string' param have lowercase(English) letters.
- checkUpperCase: param(string) : Check if 'string' param have uppercase(English) letters.
- checkSpecial: param(string) : Check if 'string' param have special letters.
- checkUpperSpecialNumber: param(string) : Check if 'string' param have uppercase, special, number letters. You can use this function for checking complicate account password.

## License  
[MIT](LICENSE)