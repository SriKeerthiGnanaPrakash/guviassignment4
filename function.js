/*
* 1. Print odd numbers in an array
*/


var oddnum = (range)=>{
        
    var start = range[0]
    var end = range[1]
    var oddNums = "";

    for(i=start; i<=end; i++){

      if(i % 2 != 0){
        oddNums += i +' ' ;
      }
    }
    console.log(oddNums);
  }
  
// output:     oddnum([0,10])

/*
* 2. Convert all the strings to title caps in a string array
*/

var titlecaps = (line) =>{
    return line.split(' ').map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

// output: console.log(titlecaps('sri keerthi gnana prakash'));

/*
3. Sum of all numbers in an array
*/


var sumarr =  (arr) =>{
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i]
    }
    return sum;
  }
  
// output:  console.log(sumarr([10, 20, 30, 40, 50]))
  

// output: console.log(titlecaps('sri keerthi gnana prakash'));

/*
4. Return all the prime numbers in an array
*/



var isprime = numArray => {
	numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});
return numArray;
}

// output: console.log(isprime([2, 3, 4, 5, 6, 7, 8, 9, 10]));


/*
5. Return all the palindromes in an array
*/

const isPalindrome = el => {
    const str = String(el);
    let i = 0;
    let j = str.length - 1;
    while(i < j) {
       if(str[i] === str[j]) {
          i++;
          j--;
       } else {
          return false;
       }
    }
    return true;
 };
 const findPalindrome = arr => {
    return arr.filter(el => isPalindrome(el));
 };
 // output: console.log(findPalindrome(['skgp', 1344, 12321, 'did', 'cannot','malayalam',0000,'madam']));