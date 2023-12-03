 //Q 1 
function max(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

let result = max(5, 10);
console.log(result); 

//Q 2,

function max2(num1,num2,num3){
     return Math.max(num1, num2, num3);
      }
      
      let result2 = max2 (5, 10, 3);
      console.log(result); 

//Q 3,

function isVowel(char) {
    char = char.toLowerCase();
  
    return ['a', 'e', 'i', 'o', 'u'].includes(char);
  }

  console.log(isVowel('a'));  
  console.log(isVowel('E'));  
  console.log(isVowel('c'));  

 // Q 4,

 function sumOf(arr){
    let sum=0.0;
    for(let i=0;i<arr.length;i++) {
    sum+=arr[i];
    }
    return sum;
 }
 let sum = sumOf([1, 2, 3, 4]);
console.log(sum);  

  function multiplyOf(arr){
    let mul=1;
    for (let i = 0; i < arr.length; i++) {
        mul*= arr[i];
        }
        return mul;
  }
  let sumResult = multiplyOf([1, 2, 3, 4]);
  console.log(sumResult);

  //Q 5;

  function reverse(str){
    let rev="";
    for (let i = str.length-1; i>=0; i--) {
        rev+= str[i];
         }
         return rev;
  }
   let reversedString = reverse("jag testar");
  console.log(reversedString); 
   
  //Alternative
  function reverse(str) {
    return str.split('').reverse().join('');
  }
  
  let reversedStr = reverse("jag testar");
  console.log(reversedStr);  

  //Q6,

function findLongestWordLength(words) {
    let longest = 0;
  
    for (let i = 0; i < words.length; i++) {
  
      if ( words[i].length > longest) {
       longest  =  words[i].length;
      }
    }
  
    return longest;
  }
  const givenWords = ["sema", "makat", "mosi", "semere"];
  let longestWordLength = findLongestWordLength(givenWords);
  console.log(longestWordLength); 

  //Q7,

  function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
  }
  
  const wordsArray = ["sema", "makat", "mosi", "semere"];
  const minLength = 4;
  let filteredWords = filterLongWords(wordsArray, minLength);
  console.log(filteredWords);
  
  //Q8,

  function computeSumOfSquares(arr) {
    return arr.map((element) => element * element) 
              .reduce((sum, current) => sum + current, 0);
  }  
  const numbersArray = [1, 2, 3];
  let sumOfSquares= computeSumOfSquares(numbersArray);
  console.log(sumOfSquares);

  //Q9,

  function printOddNumbersOnly(numbers) {
    let oddNumbers = numbers.filter(num => num % 2 !== 0);
    console.log(oddNumbers.join(', '));
  }
  
  const numArray = [1, 2, 3, 4, 5, 6];
  printOddNumbersOnly(numArray);

  //Q10,

  function computeSumOfSquaresOfEvensOnly(numbers) {
    const sumOfSquaresOfEvens = numbers
      .filter(num => num % 2 === 0)  
      .reduce((sum, evenNum) => sum + evenNum ** 2, 0);  
  
    return sumOfSquaresOfEvens;
  }
  
  const numArr = [1, 2, 3, 4, 5];
  let sumOfSquaresOfEvens = computeSumOfSquaresOfEvensOnly(numArr);
  console.log(sumOfSquaresOfEvens); 
  
  //Q11,

  //sum of numbers in an array using reduce
function sum2(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  // product of numbers in an array using reduce
  function multiply(numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  }
  
  const numbers= [1, 2, 3, 4];
  let sumRes = sum2(numbers);
  console.log(sumResult);  
  
  let multiplyResult = multiply(numbersArray);
  console.log(multiplyResult);  
  
  //Q12,

function printFibo(n, a, b) {
    let arr = [];
    let temp = a;
    for (let i = 0; i < n; i++) {
      arr.push(a);
      temp = a;
      a = b;
      b = temp + b;
    }
    return arr;
  }
  
  
  
  
  