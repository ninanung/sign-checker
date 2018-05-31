# sign-checker

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
- checkLongerThan: param(string, number) 
- checkShorterThan: param(string, number) 
- checkBetween: param(string, small, big) 
- checkLetters: param(string, letters) 
- checkNumber: param(string) 
- checkWhiteSpace: param(string) 
- checkKorean: param(string) 
- checkLowerCase: param(string) 
- checkUpperCase: param(string) 
- checkSpecial: param(string) 
