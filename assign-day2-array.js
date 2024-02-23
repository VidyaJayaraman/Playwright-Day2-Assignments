/*
1) Move Zeroes:
 
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example 1:
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

Example 2:
Input: nums = [0]
Output: [0]

2) Array intersection 
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.
 
Example 1:
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
 
Example 2:
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [9,4]
Explanation: [4,9] is also accepted.

3) Find the maximum and minimum:

Given an integer array, find the maximum amd minimum elements in an array and return their indices.

Example: 
Input: nums = [34, 7, 21, 89, 54, 10, 91, 67]
Output: Maximum Element: 91, Index: 6
Minimum Element: 7, Index: 1

4) Remove Duplicates:

Given an integer array with duplicate elements as input, return a new array with duplicates 
elements removed. The order of the elements in the resulting array should be same as the order
in the original array.

Example: 
Input: iputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
Output: resultArray = [1, 2, 3, 4, 5, 6]

1) Find the number of occurances.  

const nums = [2,4,5,2,1,2];
const k = 2
// output >> 3

hint: loop through the array and compare the k with array index value and if matches, increase the count

2) Two Sum 

const nums = [2,4,7,8,11,14]; // sort array !!
const target = 18;

return the indices that has matching target? 7+11 (2,4), 4+14 (1,5)

*/


//***************************************************Answers *****************************************************
//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//Input: nums = [0,1,0,3,12]
//Output: [1,3,12,0,0]

let inputArray = [0, 1, 0, 3, 12];
let inputSortArray = inputArray.sort((x, y) => x - y);
inputSortArray.shift();
inputSortArray.shift();
inputSortArray.push(0);
inputSortArray.push(0);
console.log("Expected Output Array");
console.log(inputSortArray);
console.log("*******************************************************************************************************")


// Array Intersection
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
let nums1 = [1, 2, 2, 1];
let nums2 = [2, 2];
let nums3 = [];

function checkIntersection() {

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j] && !nums3.includes(nums1[i])) {
        nums3.push(nums1[i]);
      }

    }

  }
  return nums3;
}
console.log("Intersection Array :", checkIntersection());
console.log("*******************************************************************************************************")

// Find Max and Minimum numbers in given array.
        
let array1 = [34, 7, 21, 89, 54, 10, 91, 67];
let min = Infinity;
let max = -Infinity;

for (let i = 0; i < array1.length; i++) {
  if (array1[i] < min) {
    min = array1[i];
  }
  if (array1[i] > max) {
    max = array1[i];
  }
}

console.log("min value is  ", min);
console.log("min value index is " + array1.indexOf(min));
console.log("max value is ", max);
console.log("max value index is " + array1.indexOf(max));
console.log("*******************************************************************************************************")

// Remove Duplicates:
//Input: inputArray = [1, 2, 3, 4, 2, 5, 6, 1, 6]
//Output: resultArray = [1, 2, 3, 4, 5, 6]

let dupArray = [1, 2, 3, 4, 2, 5, 6, 1, 6];
let resultArray = [];

function removeDuplicates(Array1) {

  for (let i = 0; i < dupArray.length; i++) {
    if (!resultArray.includes(dupArray[i])) {
      resultArray.push(dupArray[i]);

    }
  }
  return resultArray;
}
console.log("original Array which has duplicates ", dupArray);
let output = removeDuplicates(dupArray);
console.log("resultant Array without duplicates ", output);
console.log("*******************************************************************************************************")


// Find the number of occurances of the given number in an array. 
const nums = [2, 4, 5, 2, 1, 2];
const k = 2;
let n = 0;

function checkOccurence() {
  for (let i = 0; i <= nums.length - 1; i++)
   {
    if (nums[i] == k) 
    {
      n = n + 1
    }
  }
  return n;
}
console.log("Given Array is ", nums);
console.log("No of occurrence of ", k + " in the given array is ");
let occurCount = checkOccurence();
console.log(occurCount);
console.log("*******************************************************************************************************")

//Two Sum (return the indices that has matching target? 7+11 (2,4), 4+14 (1,5))

const givenArray = [2,4,7,8,11,14]; 
let target = 18;
console.log("Given Array is ", givenArray);
for(let i=0 ; i<givenArray.length ; i++)
{
 
 for(let j=1; j<givenArray.length;j++)
 {
  if(givenArray[i]+givenArray[j]==target)
  {
 console.log("Index has which has the target sum " + target + " is " + i +" , " + j )
  }
}

}







