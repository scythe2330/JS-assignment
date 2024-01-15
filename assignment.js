     //          JAVASCRIPT ASSIGNMENT - 1
//1. Write a function to find the area of a triangle where lengths of the three of its sides are given.

let s1= prompt("enter side 1");
let s2 =prompt ("Enter side 2");
let s3 = prompt ("Enter side3") ;
function TriangleArea(s1,s2,s3) {

	const s = (s1 + s2 + s3) / 2;
	const area = Math.sqrt(s * (s - s1) * (s - s2) * (s - s3));
	return area;
}
TriangleArea (s1,s2,s3);

// 2. Write a function to return the absolute difference between 2 numbers.

const absoluteDifference = (a,b) => {
    return Math.abs(a - b);
}
console.log(absoluteDifference(5,10));

//3. Write a function to determine whether a given year is a leap year or not.

function leapYear(year) {
    if (
        year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
    )
        console.log( year, "is a Leap Year");
    else
        console.log(year, "is not a Leap Year");
}
 leapYear(2020);

//4.Write a function to return the sum of all the elements in the array

let num = [1,2,3,4,5,6,7,8,9];
function getSum(arr){
    let sum=0;
    for (let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
        return sum;
}
console.log(getSum(num)) ;

//5. Write a function to swap pairs of adjacent digits of a given integer of even length.

let swapNumber = (num) => {
	let numStr = num.toString();
	let swapStr = "";
	for (let i = 0; i < numStr.length; i += 2) {
		swap += numStr[i + 1] + numStr[i];
	}
	return parseInt(swap);
};
let num = prompt("Enter a number");
console.log(swapNumber(num));


//6.Write a function to swap pairs of adjacent digits of a given integer of even length.

function Even(){
    let maxNum=0;
    for(i=0 ; i<number.length ; i++)
    {
        if (number[i]%2==0 && number[i]>maxNum)
        {
            maxNum=number[i];
        }
     }
    return maxNum;
}
console.log("The biggest even number in the array is: "+ Even());


// 7 - Write a function to delete the rollno property from the following object. Also print the object before or after deleting the property.

const student = {
    name: "John Doe",
    class: "VI",
    rollno: 12,
  };
  
  console.log("Before deleting the property:", student);
delete student.rollno;
  console.log("After deleting the property:", student);
