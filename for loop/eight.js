// Question 8: Count Digits
// Count the number of digits in a positive integer using a loop.


let num = 1234;
let count = 0;

if(num < 0){
    console.log("nagative number");
}

else{
    while (num > 0) {
               num = parseInt(num / 10);
               count++;
    }
    console.log(count);
}


