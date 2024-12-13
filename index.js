// A F M BAZLUR RASHID 

    // 1. Difference between  taking the first and second arguments and return difference of them

   function calculateDifference(num1, num2){
        var num3 = num1 - num2;
         return num3;
        // console.log(num3);
    }

   // calculateDifference(65, 25);
    
    console.log(calculateDifference(65, 25)); 



      // 2. isOdd Function takes one argument and return true or false for Odd or Even Number;

      function isOdd(numOdd){
        if(numOdd % 2 == 0) 
        
       {
              return true;
           
          //  console.log(numOdd + " is Even Number. So ");
        } else {
             return false;
          
           // console.log(numOdd + " is Odd Number. ");
       }
    }
  
    // isOdd(80);
    // isOdd(97);

    console.log(isOdd(60) + " For Even Number.");
  
    console.log(isOdd(75) + " For Odd Number."); 



// 3. Function named findMin that takes an array of numbers and returns the smallest number from the array.

function findMin(numarray)
{ 
numarray.sort(function(a, b){return a-b}); //sort the array in 
return numarray[0]; //the first number in your array is minimum number
}
var numberArray=[45, 25, 6, 75, 23, 10, 58];
console.log(findMin(numberArray) + " is minimum number.")

  
// 4. Function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even Number;

 numbers = [2, 4, 7, 16, 8, 11, 12, 9, 16]

function filterEvenNumber(array) {
	finishedArray = []
	array.forEach(function(num) {
  	if(!(num % 2)) {
    	finishedArray.push(num)
    }
  })
  return finishedArray;
}
console.log(filterEvenNumber(numbers)) 


// 5. function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending(numarray)
{ 
numarray.sort(function(a, b){return a-b}); //sort the array in 
return numarray; //the first number in your array is minimum number
}
var numberArray=[45, 25, 6, 75, 23, 10, 58];
console.log(sortArrayDescending(numberArray))




// 6. function named lowercaseFirstLetter that takes an string of numbers and returns the same string with the first letter lowercased.

function lowercaseFirstLetter(str){
  return str.charAt(0).toLowerCase() + str.substring(1);
}

const str = 'THE EIFFEl TOWER';
const newStr = `${str[0].toLowerCase()}${str.slice(1)}`;
console.log('Original String:', str); // the Eiffel Tower
console.log('New String:', newStr);

 // 7. Function named findAverage that an array of numbers and returns the average of all elements.

 const grades = [90, 85, 65, 75, 65];
 const grades2 = [];
 
 function findAverage(grades) {
   if (grades.length === 0) return 'Empty grades array';
   return grades.reduce((acc, c) => acc + c, 0) / grades.length;
 }
 
 console.log(findAverage(grades));
 console.log(findAverage(grades2));


    //8. Function Named isLeapYear that takes a year as an argument and return true if the year is Leap Year and false if not leap year.

      function isLeapYear(year){
            if(year % 400 == 0){
             return true;            
            } else if(year % 100 == 0){

                    return false; 

            } else if(year % 4 == 0){
          
             return true; 
                
            }

            else {
           
             return false; 
            }
           
         }
        
        console.log(isLeapYear(2400) +" For leap year.");
        console.log(isLeapYear(1900) +" For not leap year."); 

        // End Assainmnt - 2

        