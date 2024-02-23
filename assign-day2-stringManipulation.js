/*  Questions:
Given a string s consisting of words and spaces, return the length of the last word in the string.

Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
 
Example 2:
Input: s = "   fly me   to   the moon  "
Output: 4
Explanation: The last word is "moon" with length 4.

Example 3: 
Write a function to check if two strings are anagrams.
 Input: isAnagram('listen', 'silent')
 Output: true
 Input: isAnagram('hello', 'world') 
 Output: false
 Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.
If the given string and reverse string is same --> palindrome

Example : 4:
Objective: If the given string is palindrome
hints:
1) use the above logic to reverse the string
2) if the reverse string === original string --> true else the false
*/



// ***********************************Answers*******************************************************

// Given a string s consisting of words and spaces, return the length of the last word in the string.
// Finf the length of "World "

let input1 = "Hello World"
let splitString1 = input1.split(" ");
console.log(" splitString1 ", splitString1);
let length1 = splitString1[1].length;
console.log("length of the word World is " + length1);
console.log("********************************************************************************");


// Find length of "Moon " using Function and return the length 

let input2  = "   fly me   to   the moon  "
let splitString2 = input2.split(" ");
console.log("splitString2 " , splitString2);
let length2 = splitString2.length;
// compare the value present in each index of array with the word "moon" and print its length

let length_moon;
function checkLength_Moon()
{
    for(let i=0; i<length2; i++)
{
    if(splitString2[i]=="moon")
    {
        length_moon = splitString2[i].length;
        return length_moon;
    }
}
}
let output = checkLength_Moon();
console.log("Length of the  word moon is " + output);
console.log("********************************************************************************");


// To check given two strings are  Anagram or Not
// string1 = "listen";
// string2 = "silent";

function checkAnagram(string1,string2){

console.log("Given String 1 : " + string1 + " & "+ " Given String 2 : " +string2);    
let splitArray1 = string1.split('');
let splitArray2 = string2.split('');

let sortArray1 = splitArray1.sort();
let sortArray2 = splitArray2.sort();
console.log("sort Array1: " + sortArray1);
console.log("sort Array2: " + sortArray2);

let finalString1 = sortArray1.join('');
let finalString2 = sortArray2.join('');
console.log("Joined back to string1 : " + finalString1);
console.log("joined back to string2 : " + finalString2);

if(finalString1==finalString2)
{
    console.log("Output:");
    console.log("Given strings are anagram");
}
else
{
    console.log("Output:");
    console.log("Given strings are not anagram");
}

}

checkAnagram("listen","silent");
console.log("********************************************************************************");

// Check the given is Palindrome or Not
// let originalString = "Vidya"

function checkPalindrome(origString){
    let origArray = origString.split('');
    let revArray = origArray.reverse();
    let revString = revArray.join('');
     if(origString==revString)
     {
        console.log("Given word is " + "\"" + origString+ "\"");
        console.log("It is a palindrome");
     }
    else{

        console.log("Given word is " + origString);
        console.log("its not a plaindrome")
    }
}

checkPalindrome("madam");
console.log("********************************************************************************");
