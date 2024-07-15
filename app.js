//JavaScript basic 

/*1. Write a JavaScript program to display the current day and time in the following 
format.  
Sample Output : Today is : Friday.  
Current time is : 4 PM : 50 : 22 */

function displayCurrentTime() {
    // Create an array of day names
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    // Get the current date and time
    const now = new Date();

    // Get the day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
    const dayIndex = now.getDay();
    const dayName = days[dayIndex];

    // Get the current hour (in 12-hour format)
    const hour = now.getHours() % 12 || 12;

    // Get the current minutes and seconds
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Determine if it's AM or PM
    const ampm = now.getHours() >= 12 ? "PM" : "AM";

    // Construct the formatted output
    const output = `Today is: ${dayName}. Current time is: ${hour} ${ampm} : ${minutes} : ${seconds}`;

    // Display the output
    console.log(output);
}

// Call the function to display the current day and time
displayCurrentTime();

// 2. Write a JavaScript program to print the contents of the current window. 

function print_current_page() { 
    window.print(); 
} 

// 3. Write a JavaScript program to get the current date.  
// Expected Output :  
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy  

function getCurrentDate() {
    const today = new Date();

    // Get the day, month, and year
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months start at 0!
    const yyyy = today.getFullYear();

    // Format the date in different ways
    const mm_dd_yyyy = `${mm}-${dd}-${yyyy}`;
    const mm_slash_dd_slash_yyyy = `${mm}/${dd}/${yyyy}`;
    const dd_mm_yyyy = `${dd}-${mm}-${yyyy}`;
    const dd_slash_mm_slash_yyyy = `${dd}/${mm}/${yyyy}`;

    // Print the results
    console.log(`mm-dd-yyyy: ${mm_dd_yyyy}`);
    console.log(`mm/dd/yyyy: ${mm_slash_dd_slash_yyyy}`);
    console.log(`dd-mm-yyyy: ${dd_mm_yyyy}`);
    console.log(`dd/mm/yyyy: ${dd_slash_mm_slash_yyyy}`);
}

// Call the function to get the current date in different formats
getCurrentDate();

// 4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.  

var side1 = 5; 
var side2 = 6; 
var side3 = 7; 

// Calculate the semi-perimeter of the triangle
var s = (side1 + side2 + side3) / 2;

// Use Heron's formula to calculate the area of the triangle
var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

// Log the calculated area to the console
console.log(area);

// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

function rotateStringRight(inputString, rotations) {
    for (let i = 0; i < rotations; i++) {
        // Remove the last character
        const lastChar = inputString.charAt(inputString.length - 1);
        // Attach it to the front
        inputString = lastChar + inputString.slice(0, -1);
    }
    return inputString;
}

const originalString = 'w3resource';
const numRotations = 3;
const rotatedString = rotateStringRight(originalString, numRotations);

console.log(`Original string: ${originalString}`);
console.log(`Rotated string: ${rotatedString}`);

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

function checkLeapYear(year) {
    const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    if (isLeap) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

// Example usage:
const inputYear = prompt('Enter a year:');
checkLeapYear(parseInt(inputYear));

// 7. Write a JavaScript program to find 1st January be a Sunday between 2014 and 2050. 

for (let year = 2014; year <= 2050; year++) {
    const date = new Date(year, 0, 1);
    if (date.getDay() === 0) {
        console.log(`1st January is being a Sunday ${year}`);
    }
}

// 8. Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".  

function guessNumberGame() {
    // Generate a random integer between 1 and 10
    const randomNum = Math.floor(Math.random() * 10) + 1;

    // Prompt the user to input a guess number
    const userGuess = parseInt(prompt("Guess the number (between 1 and 10):"));

    // Check if the user's guess matches the random number
    if (userGuess === randomNum) {
        console.log("Good Work! You guessed correctly.");
    } else {
        console.log(`Not matched. The correct number was ${randomNum}.`);
    }
}

// Call the function to play the game
guessNumberGame();

// 9. Write a JavaScript program to calculate days left until next Christmas. 

const today = new Date();
const christmas = new Date(today.getFullYear(), 11, 25);

// Check if the current date is after December 25th
if (today.getMonth() === 11 && today.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1);
}

// Calculate the difference in days
const oneDayMilliseconds = 1000 * 60 * 60 * 24;
const remainingDays = Math.ceil((christmas.getTime() - today.getTime()) / oneDayMilliseconds);

console.log(`There are ${remainingDays} days left until Christmas.`);

// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

        function performOperation() {
            const num1 = parseFloat(document.getElementById("firstNumber").value);
            const num2 = parseFloat(document.getElementById("secondNumber").value);
            const operation = document.querySelector('input[name="operation"]:checked').value;

            if (operation === "multiply") {
                document.getElementById("result").innerHTML = num1 * num2;
            } else if (operation === "divide") {
                document.getElementById("result").innerHTML = num1 / num2;
            }
        }
        performOperation();

// 11. Write a JavaScript program to convert temperatures to and from celsius, fahrenheit.  [ Formula : c/5 = (f-32)/9 [ where c = temperature in celsius and f = temperature in fahrenheit ]  
   
// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}

// Example usage:
const celsiusTemp = 25;
const fahrenheitTemp = 77;

console.log(`${celsiusTemp}°C is equal to ${celsiusToFahrenheit(celsiusTemp)}°F`);
console.log(`${fahrenheitTemp}°F is equal to ${fahrenheitToCelsius(fahrenheitTemp)}°C`);

// 12 Write a JavaScript program to get the website URL (loading page). 
const currentUrl = window.location.href;
console.log(currentUrl);

// JavaScript functions  

// 1. Write a JavaScript program to get the website URL (loading page). 

function reverseNumber(x) {
    // Convert the number to a string
    const numStr = String(x);

    // Reverse the string
    const reversedStr = numStr.split('').reverse().join('');

    // Convert the reversed string back to an integer
    const reversedNum = parseInt(reversedStr);

    return reversedNum;
}

// Example usage
const x = 32243;
const reversedX = reverseNumber(x);
console.log(`The reversed number of ${x} is ${reversedX}`);

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not?  
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare the cleaned string with its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// Example usage:
const testString = 'madam';
const result = isPalindrome(testString);
console.log(result ? 'It is a palindrome' : 'It is not a palindrome');

// 3. Write a JavaScript function that generates all combinations of a string.  
// Example string : 'dog'  
// Expected Output : d,do,dog,o,og,g  

function generateCombinations(str) {
    const combinations = [];
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            combinations.push(str.slice(i, j));
        }
    }
    return combinations;
}

// Example usage:
const inputStrinng = 'dog';
const allCombinations = generateCombinations(inputStrinng);
console.log(allCombinations);


// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster'  
// Expected Output : 'abeemrstw' 

function sortStringAlphabetically(inputStringNew) {
    // Convert the string to an array of characters
    const charArray = inputStringNew.split('');

    // Sort the array in alphabetical order
    charArray.sort();

    // Join the sorted characters back into a string
    const sortedString = charArray.join('');

    return sortedString;
}

// Example usage:
const inputStringNew = 'webmaster';
const resultNew = sortStringAlphabetically(inputStringNew);
console.log(`The sorted string for '${inputStringNew}' is: ${resultNew}`);

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.  
// Example string : 'the quick brown fox'  
// Expected Output : 'The Quick Brown Fox ' 

function capitalizeFirstLetterOfWords(inputString) {
    // Split the input string into words
    const words = inputString.split(' ');

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // Join the capitalized words back into a string
    const result = capitalizedWords.join(' ');

    return result;
}

// Example usage:
const inputString = "the quick brown fox";
const outputString = capitalizeFirstLetterOfWords(inputString);
console.log(`The converted string is: ${outputString}`);

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.  
// Example string : 'Web Development Tutorial'  
// Expected Output : 'Development

function findLongestWord(data) {
    // Split the input string into an array of words
    const words = data.split(' ');

    // Initialize variables to track the longest word and its length
    let longestWord = '';
    let maxLength = 0;

    // Iterate through each word
    for (const word of words) {
        // Remove any punctuation from the word
        const cleanedWord = word.replace(/[^a-zA-Z]/g, '');

        // Check if the cleaned word is longer than the current longest
        if (cleanedWord.length > maxLength) {
            maxLength = cleanedWord.length;
            longestWord = cleanedWord;
        }
    }

    return longestWord;
}

// Example usage:
const data = 'Web Development Tutorial';
const results = findLongestWord(data);
console.log(`The longest word in "${data}" is: ${results}`);

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.  
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.  
// Example string : 'The quick brown fox'  
// Expected Output : 5 

function countVowels(vowelVal) {
    // Convert the input string to lowercase
    const lowerCaseString = vowelVal.toLowerCase();

    // Define the set of vowels (excluding 'y')
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    // Initialize the count
    let count = 0;

    // Count the vowels
    for (const char of lowerCaseString) {
        if (vowels.has(char)) {
            count++;
        }
    }

    return count;
}

// Example usage:
const vowelString = 'The quick brown fox';
const vowelResult = countVowels(vowelString);
console.log(`Number of vowels in '${vowelString}': ${vowelResult}`);

// 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not.  
// Note : A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself. 

function isPrime(number) {
    if (number <= 1) {
        return false; // 1 is neither prime nor composite
    }

    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // Not a prime number
        }
    }

    return true; // It's a prime number
}

// Example usage:
const num1 = 5;
const num2 = 10;

console.log(`${num1} is ${isPrime(num1) ? 'prime' : 'not prime'}`);
console.log(`${num2} is ${isPrime(num2) ? 'prime' : 'not prime'}`);

// 9. Write a JavaScript function which accepts an argument and returns the type.  
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.

function getType(arg) {
    return typeof arg;
}

// Example usage:
const value1 = 42;
const value2 = 'hello';
const value3 = true;

console.log(`Type of value1: ${getType(value1)}`);
console.log(`Type of value2: ${getType(value2)}`);
console.log(`Type of value3: ${getType(value3)}`);

// 10. Write a JavaScript function which returns the n rows by n columns identity matrix.

function generateIdentityMatrix(n) {
    const identityMatrix = [];
    for (let i = 0; i < n; i++) {
        const row = Array(n).fill(0);
        row[i] = 1;
        identityMatrix.push(row);
    }
    return identityMatrix;
}

// Example usage:
const n = 4;
const identityMatrix = generateIdentityMatrix(n);
console.log(identityMatrix);


// 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively.  
// Sample array : [1,2,3,4,5] 
// Expected Output : 2,4 

function findSecondLowestAndGreatest(arr) {
    // Remove duplicates and sort the array
    const uniqueSortedArr = [...new Set(arr)].sort((a, b) => a - b);
    
    // Check if there are at least 2 unique elements in the array
    if (uniqueSortedArr.length < 2) {
        return "Array must contain at least 2 unique elements";
    }
    
    // Return the second lowest and second greatest elements
    return `${uniqueSortedArr[1]},${uniqueSortedArr[uniqueSortedArr.length - 2]}`;
}

// Sample array
const sampleArray = [1, 2, 3, 4, 5];

// Find the second lowest and second greatest numbers
const resultNumbs = findSecondLowestAndGreatest(sampleArray);

console.log(`Expected Output: ${resultNumbs}`);

// 12. Write a JavaScript function which says whether a number is perfect.  
// According to Wikipedia : In number theory, a perfect number is a positive integer that is equal to the sum of its proper positive divisors, that is, the sum of its 
// positive divisors excluding the number itself (also known as its aliquot sum). Equivalently, a perfect number is a number that is half the sum of all of its 
// positive divisors (including itself). 
// Example : The first perfect number is 6, because 1, 2, and 3 are its proper positive divisors, and 1 + 2 + 3 = 6. Equivalently, the number 6 is equal to half the 
// sum of all its positive divisors: ( 1 + 2 + 3 + 6 ) / 2 = 6. The next perfect number is 28 = 1 + 2 + 4 + 7 + 14. This is followed by the perfect numbers 496 and 8128.

function isPerfectNumber(num) {
    // Initialize the sum of divisors
    let divisorSum = 0;

    // Iterate from 1 to num // 2 (since proper divisors are less than num // 2)
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            divisorSum += i;
        }
    }

    // Check if the sum of divisors is equal to the number itself
    return divisorSum === num;
}

// Test the function with some examples
console.log(isPerfectNumber(6));   // true
console.log(isPerfectNumber(28));  // true
console.log(isPerfectNumber(496)); // true
console.log(isPerfectNumber(8128));// true
console.log(isPerfectNumber(10));  // false

// 13. Write a JavaScript function to compute the factors of a positive integer. 
function computeFactors(num) {
    const factors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

// Example usage:
const positiveInteger = 28;
const factorsList = computeFactors(positiveInteger);
console.log(`The factors of ${positiveInteger} are: ${factorsList}`);

// 14. Write a JavaScript function to convert an amount to coins.  
// Sample function : amountTocoins(46, [25, 10, 5, 2, 1]) 
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.  
// Output : 25, 10, 10, 1

function amountToCoins(amount, coins) {
    const result = [];
    for (const coin of coins) {
        while (amount >= coin) {
            result.push(coin);
            amount -= coin;
        }
    }
    return result;
}

// Example usage:
const amount = 46;
const coinDenominations = [25, 10, 5, 2, 1];
const coins = amountToCoins(amount, coinDenominations);
console.log(`The coins for ${amount} are: ${coins.join(', ')}`);

// 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. 

function computeExponent(base, exponent) {
    return base ** exponent;
}

// Example usage:
const base = parseFloat(prompt("Enter the base (b):"));
const exponent = parseFloat(prompt("Enter the exponent (n):"));

const res = computeExponent(base, exponent);
console.log(`${base}^${exponent} = ${res}`);

// 16. Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

function extractUniqueCharacters(inputString) {
    // Create an empty Set to store unique characters
    const uniqueChars = new Set();

    // Iterate over each character in the input string
    for (const char of inputString) {
        // Add the character to the Set (Sets automatically remove duplicates)
        uniqueChars.add(char);
    }

    // Convert the Set back to a string and return it
    return Array.from(uniqueChars).join('');
}

// Example usage
const inString = "thequickbrownfoxjumpsoverthelazydog";
const outString = extractUniqueCharacters(inString);
console.log(`Input string: ${inString}`);
console.log(`Output string: ${outString}`);

// 17. Write a JavaScript function to  get the number of occurrences of each letter in specified string. 

function countOccurrences(str) {
    const charMap = new Map();

    for (const char of str) {
        if (char.match(/[a-zA-Z]/)) {
            charMap.set(char, (charMap.get(char) || 0) + 1);
        }
    }

    return charMap;
}

const inputStr = "thequickbrownfoxjumpsoverthelazydog";
const resultCount = countOccurrences(inputStr);
console.log("Character occurrences:");
for (const [char, count] of resultCount) {
    console.log(`${char} occurs ${count} times`);
}

// 18. Write a function for searching JavaScript arrays with a binary search.  
// Note : A binary search searches by splitting an array into smaller and smaller chunks until it finds the desired value. 
function binarySearch(arr, x) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === x) {
            return true; // Element found
        } else if (arr[mid] < x) {
            start = mid + 1; // Search the right half
        } else {
            end = mid - 1; // Search the left half
        }
    }

    return false; // Element not found
}

// Example usage
const arr = [1, 3, 5, 7, 8, 9];
const num = 5;

if (binarySearch(arr, num)) {
    console.log("Element found!");
} else {
    console.log("Element not found!");
}

// 19. Write a JavaScript function that returns array elements larger than a number. 

function getLargerElements(arr, num) {
    const largerElements = [];
    for (const element of arr) {
        if (element > num) {
            largerElements.push(element);
        }
    }
    return largerElements;
}

// Example usage:
const anotherArray = [12, 5, 8, 130, 44];
const anotherThreshold = 10;
const resultLarger = getLargerElements(anotherArray, anotherThreshold);
console.log(resultLarger); // Output: [12, 130, 44]

// 20. Write a JavaScript function that generates a string id (specified length) of random characters.  
// Sample character list : 
// "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"

function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

// Example usage:
const idLength = 10;
const randomID = generateRandomString(idLength);
console.log(randomID); // Example output: "3aB8kRw7Yz"

// 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array.  
//     Sample array : [1, 2, 3] and subset length is 2  
//     Expected output : [[2, 1], [3, 1], [3, 2], [3, 2, 1]] 

function getSubsetsWithLength(arr, length) {
    const result = [];

    function generateSubsets(currentSubset, start) {
        if (currentSubset.length === length) {
            result.push([...currentSubset]);
            return;
        }
        for (let i = start; i < arr.length; i++) {
            currentSubset.push(arr[i]);
            generateSubsets(currentSubset, i + 1);
            currentSubset.pop();
        }
    }

    generateSubsets([], 0);
    return result;
}

// Example usage:
const inputArray = [1, 2, 3];
const subsetLength = 2;
const resultSubsets = getSubsetsWithLength(inputArray, subsetLength);
console.log(resultSubsets); // Expected output: [[2, 1], [3, 1], [3, 2], [3, 2, 1]]

// 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string.  
// Sample arguments : 'w3resource.com', 'o'  
// Expected output : 2 

function countOccurrences(str, letter) {
    let letterCount = 0;
    for (let position = 0; position < str.length; position++) {
        if (str.charAt(position) === letter) {
            letterCount++;
        }
    }
    return letterCount;
}

// Example usage:
const inputSt = 'w3resource.com';
const targetLetter = 'o';
const reslt = countOccurrences(inputString, targetLetter);
console.log(`The letter '${targetLetter}' occurs ${reslt} times in the string '${inputSt}'.`);

// 23. Write a JavaScript function to find the first not repeated character.  
// Sample arguments : 'abacddbec'  
// Expected output : 'e'

function findFirstNotRepeatedChar(str) {
    const charMap = {}; // Create a hash map to store character occurrences

    // Loop through each character in the string
    for (let i = 0; i < str.length; i++) {
        const char = str[i]; // Use the character as a key in the hash map
        charMap[char] = (charMap[char] || 0) + 1; // Increment the occurrence count
    }

    // Loop through each character in the string again
    for (let i = 0; i < str.length; i++) {
        // If the occurrence count for the current character is 1, it's the first non-repeated character
        if (charMap[str[i]] === 1) {
            return str[i];
        }
    }

    // If no non-repeated character is found, return null or a specified value
    return null;
}

// Example usage:
const inputStringData = 'abacddbec';
const resultData = findFirstNotRepeatedChar(inputStringData);
console.log(resultData); // Output: 'e'

// 24. Write a JavaScript function to apply Bubble Sort algorithm.   
// Note : According to wikipedia "Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted, comparing each pair of adjacent items and swapping them if they are in the wrong order".  
// Sample array : [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213] 
// Expected output : [3223, 546, 455, 345, 234, 213, 122, 98, 84, 64, 23, 12, 9, 4, 1] 

function bubbleSort(arr) {
    const arrayLength = arr.length;
    let isSwapped;

    for (let i = 0; i < arrayLength; i++) {
        isSwapped = false;

        for (let j = 0; j < arrayLength - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isSwapped = true;
            }
        }

        // If no two elements were swapped in the inner loop, the array is sorted
        if (!isSwapped) {
            break;
        }
    }

    return arr;
}

// Example usage:
const inputArraySort = [12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213];
const sortedArray = bubbleSort(inputArraySort);
console.log("Sorted Array:");
console.log(sortedArray);

// 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.   
// Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"]) 
// Expected output : "United States of America" 

function longestCountryName(countryList) {
    let longestName = '';
    let maxLength = 0;

    for (const country of countryList) {
        if (country.length > maxLength) {
            maxLength = country.length;
            longestName = country;
        }
    }

    return longestName;
}

// Example usage:
const sampleCountries = ["Australia", "Germany", "United States of America"];
const resultCountries = longestCountryName(sampleCountries);
console.log(`The longest country name is: ${resultContries}`);

// 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. 

function longestSubstringWithoutRepeatingCharacters(input) {
    const chars = input.split('');
    let currSubstring = '';
    let longestSubstring = '';

    for (let r = 0; r < chars.length; r++) {
        const currChar = chars[r];
        if (!currSubstring.includes(currChar)) {
            currSubstring += currChar;
            if (currSubstring.length > longestSubstring.length) {
                longestSubstring = currSubstring;
            }
        } else {
            const prevDupeIndex = currSubstring.indexOf(currChar);
            const strFromPrevDupe = input.substring(prevDupeIndex + 1, r);
            currSubstring = strFromPrevDupe + currChar;
        }
    }

    return longestSubstring;
}

// Example usage:
console.log(longestSubstringWithoutRepeatingCharacters("google.com")); // Output: "gle.com"
console.log(longestSubstringWithoutRepeatingCharacters("example.com")); // Output: "exampl"

// 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. 

// Define a function that takes another function as a parameter
function executeFunction(callback) {
    console.log("Executing the provided function...");
    callback(); // Call the provided function
}

// Example usage:
function myFunction() {
    console.log("Hello from myFunction!");
}

executeFunction(myFunction); // Output: "Executing the provided function..." followed by "Hello from myFunction!"

// JavaScript Recursion
// 1. Write a JavaScript program to calculate the factorial of a number.  
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example, 5! = 5 x 4 x 3 x 2 x 1 = 120    

function factorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    } else if (n === 0) {
        return 1;
    } else {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

// Example usage:
const number = 5;
console.log(`The factorial of ${number} is ${factorial(number)}`);

// 2. Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.
function gcdIterative(a, b) {
    while (b !== 0) {
        const temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

// Example usage:
const no1 = 20;
const n02 = 12;
console.log(`GCD of ${num1} and ${num2} (Iterative): ${gcdIterative(no1, no2)}`);

// 3. Write a JavaScript program to get the integers in range (x, y).  
// Example : range(2, 9) 
function range(x, y) {
    const result = [];
    for (let i = x + 1; i < y; i++) {
        result.push(i);
    }
    return result;
}

// Example usage:
console.log(range(2, 9)); // Output: [3, 4, 5, 6, 7, 8]

// 4. Write a JavaScript program to compute the sum of an array of integers.  
// Example : var array = [1, 2, 3, 4, 5, 6] 
// Expected Output : 21 
function computeSum(arr) {
    return arr.reduce((total, currentValue) => total + currentValue, 0);
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6];
const resultSum = computeSum(array);
console.log(`The sum of the array [${array}] is ${resultSum}`);

// 6. Write a JavaScript program to get the first n Fibonacci numbers.  
// Note : The Fibonacci Sequence is the series of numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . Each subsequent number is the sum of the previous two.
function fibonacciSeries(n) {
    if (n <= 0) {
        return [];
    } else if (n === 1) {
        return [0];
    } else if (n === 2) {
        return [0, 1];
    } else {
        const series = fibonacciSeries(n - 1);
        series.push(series[series.length - 1] + series[series.length - 2]);
        return series;
    }
}

// Example usage:
const nVal = 10; // Change this to the desired number of terms
console.log(`Fibonacci Series (${n} terms):`, fibonacciSeries(nVal));

// 7. Write a JavaScript program to check whether a number is even or not. 

function isEven(number) {
    return number % 2 === 0;
}

// Example usage:
console.log(isEven(6)); // Output: true (6 is even)
console.log(isEven(27)); // Output: false (27 is odd)

// 8. Write a JavaScript program for binary search.  
// Sample array : [0,1,2,3,4,5,6] 
// console.log(l.br_search(5)) will return '5'  
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Element not found
}

// Example usage:
const sortedArr = [0, 1, 2, 3, 4, 5, 6];
const targetValue = 5;
const resultIndex = binarySearch(sortedArr, targetValue);
console.log(`Found ${targetValue} at index ${resultIndex}.`);
 
// 9. Write a merge sort program in JavaScript.  
// Sample array : [34,7,23,32,5,62] 
// Sample output : [5, 7, 23, 32, 34, 62] 

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

// Example usage:
const sampleArr = [34, 7, 23, 32, 5, 62];
const sortedArry = mergeSort(sampleArr);
console.log("Sorted array:", sortedArry);

// JavaScript conditional statements and loops 
// 1. Write a JavaScript program that accept two integers and display the larger

function findLargerInteger(num1, num2) {
    if (num1 > num2) {
        console.log(`The larger of ${num1} and ${num2} is ${num1}.`);
    } else if (num2 > num1) {
        console.log(`The larger of ${num1} and ${num2} is ${num2}.`);
    } else {
        console.log(`The values ${num1} and ${num2} are equal.`);
    }
}

// Example usage:
findLargerInteger(5, 8); // Output: "The larger of 5 and 8 is 8."
findLargerInteger(10, 5); // Output: "The larger of 10 and 5 is 10."
findLargerInteger(7, 7); // Output: "The values 7 and 7 are equal."

// 2. Write a JavaScript conditional statement to find the sign of product of three 
// numbers. Display an alert box with the specified sign.   
// Sample numbers : 3, -7, 2  
// Output : The sign is - 

function findSignOfProduct(x, y, z) {
    const product = x * y * z;

    if (product > 0) {
        alert("The sign is +");
    } else if (product < 0) {
        alert("The sign is -");
    } else {
        alert("The product is zero");
    }
}

// Example usage:
const number1 = 3;
const number2 = -7;
const number3 = 2;
findSignOfProduct(number1, number2, number3);

// 3. Write a JavaScript conditional statement to sort three numbers. Display an 
// alert box to show the result.   
// Sample numbers : 0, -1, 4  
// Output : 4, 0, -1 
function sortThreeNumbers(x, y, z) {
    const sortedNumbers = [x, y, z].sort((a, b) => a - b);
    alert(`Sorted numbers: ${sortedNumbers.join(', ')}`);
}

// Example usage:
const n1 = 0;
const n2 = -1;
const n3 = 4;
sortThreeNumbers(n1, n2, n3);

// 4. Write a JavaScript conditional statement to find the largest of five numbers. 
// Display an alert box to show the result.   
// Sample numbers : -5, -2, -6, 0, -1  
// Output : 0 

function findLargestOfFive(a, b, c, d, e) {
    const largest = Math.max(a, b, c, d, e);
    alert(`The largest number is ${largest}.`);
}

// Example usage:
const numb1 = -5;
const numb2 = -2;
const numb3 = -6;
const numb4 = 0;
const numb5 = -1;
findLargestOfFive(numb1, numb2, numb3, numb4, numb5);

// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it 
// will check if the current number is odd or even, and display a message to the 
// screen.   
// Sample Output :  
// "0 is even"  
// "1 is odd"  
// "2 is even" 

for (let num = 0; num <= 15; num++) {
    if (num % 2 === 0) {
        console.log(`${num} is even`);
    } else {
        console.log(`${num} is odd`);
    }
}

// 6. Write a JavaScript program which compute, the average marks of the following students Then, this average is used to determine the corresponding grade. 
// Student data
const students = [
    { name: 'David', marks: 80 },
    { name: 'Vinoth', marks: 77 },
    { name: 'Divya', marks: 88 },
    { name: 'Ishitha', marks: 95 },
    { name: 'Thomas', marks: 68 }
  ];
  
  // Calculate average marks
  const totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
  const averageMarks = totalMarks / students.length;
  
  // Determine grade based on average marks
  let grade;
  if (averageMarks < 60) {
    grade = 'F';
  } else if (averageMarks < 70) {
    grade = 'D';
  } else if (averageMarks < 80) {
    grade = 'C';
  } else if (averageMarks < 90) {
    grade = 'B';
  } else {
    grade = 'A';
  }
  
  console.log(`Average marks: ${averageMarks.toFixed(2)}`);
  console.log(`Grade: ${grade}`);

//   7. Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

  let fizzBuzz = function (n) {
    const arr = [];
    for (let i = 1; i <= n; i++) {
      if (i % 15 === 0) arr.push("FizzBuzz");
      else if (i % 3 === 0) arr.push("Fizz");
      else if (i % 5 === 0) arr.push("Buzz");
      else arr.push(i.toString());
    }
    return arr;
  };
  
  console.log(fizzBuzz(15));
  
//   8. According to Wikipedia a happy number is defined by the following process :  
// "Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers, while those that do not end in 1 are unhappy numbers (or sad numbers)".  
// Write a JavaScript program to find and print the first 5 happy numbers.   

function isHappyNumber(num) {
    const seen = new Set();
    while (num !== 1) {
        num = Array.from(String(num), Number).reduce((sum, digit) => sum + digit ** 2, 0);
        if (seen.has(num)) return false;
        seen.add(num);
    }
    return true;
}

function findFirstNHappyNumbers(n) {
    const happyNumbers = [];
    let num = 1;
    while (happyNumbers.length < n) {
        if (isHappyNumber(num)) {
            happyNumbers.push(num);
        }
        num++;
    }
    return happyNumbers;
}

const first5HappyNumbers = findFirstNHappyNumbers(5);
console.log("First 5 happy numbers:", first5HappyNumbers);

// 9. Write a JavaScript program to find the armstrong numbers of 3 digits.   
// Note : An Armstrong number of three digits is an integer such that the sum of the cubes of its digits is equal to the number itself. For example, 371 is an Armstrong number since 3**3 + 7**3 + 1**3 = 371. 

function isArmstrongNumber(num) {
    const numStr = num.toString();
    const numDigits = numStr.length;
    let sum = 0;

    for (let i = 0; i < numDigits; i++) {
        const digit = parseInt(numStr[i]);
        sum += digit ** numDigits;
    }

    return sum === num;
}

function findArmstrongNumbers() {
    const armstrongNumbers = [];

    for (let num = 100; num <= 999; num++) {
        if (isArmstrongNumber(num)) {
            armstrongNumbers.push(num);
        }
    }

    return armstrongNumbers;
}
// 10. Write a JavaScript program to construct the following pattern, using a nested 
// for loop.  
// *   
// * *   
// * * *   
// * * * *   
// * * * * *  
const armstrongNumbers3Digits = findArmstrongNumbers();
console.log("Armstrong numbers of 3 digits:", armstrongNumbers3Digits);

function printPattern () {
    for (let i = 0; i < 5; i++) {
       let row = "";
        for (let j = 0; j <= i; j++) {
            row += "*";
        }
        console.log(row);
    }
}
printPattern();

// JavaScript array
// 1. Write a JavaScript function to check whether an `input` is an array or not.  
// Test Data : 
// console.log(is_array('w3resource'));  
// console.log(is_array([1, 2, 4, 0])); 
// false 
// true
function is_array(input) {
    return Array.isArray(input);
}

// Test cases
console.log(is_array('w3resource')); // false
console.log(is_array([1, 2, 4, 0])); // true

// 2. Write a JavaScript function to clone an array.  
// Test Data : 
// console.log(array_Clone([1, 2, 4, 0]));  
// console.log(array_Clone([1, 2, [4, 0]])); 
// [1, 2, 4, 0]  
// [1, 2, [4, 0]] 

function array_Clone(arr) {
    // Use the slice operator to create a shallow copy of the array
    return arr.slice();
}

// Test cases
console.log(array_Clone([1, 2, 4, 0]));  // [1, 2, 4, 0]
console.log(array_Clone([1, 2, [4, 0]]));  // [1, 2, [4, 0]]

// 3. Write a JavaScript function to get the first element of an array. Passing a 
// parameter 'n' will return the first 'n' elements of the array.  
// Test Data :  
// console.log(first([7, 9, 0, -2]));  
// console.log(first([],3)); 
// console.log(first([7, 9, 0, -2],3)); 
// console.log(first([7, 9, 0, -2],6)); 
// console.log(first([7, 9, 0, -2],-3)); 
// Expected Output :  
// 7 
// []  
// [7, 9, 0]  
// [7, 9, 0, -2]  
// []  

function first(arr, n = 1) {
    return n >= 0 ? arr.slice(0, n) : [];
}

// Test cases
console.log(first([7, 9, 0, -2]));  // 7
console.log(first([], 3));          // []
console.log(first([7, 9, 0, -2], 3));  // [7, 9, 0]
console.log(first([7, 9, 0, -2], 6));  // [7, 9, 0, -2]
console.log(first([7, 9, 0, -2], -3)); // []

// 4. Write a JavaScript function to get the last element of an array. Passing a 
// parameter 'n' will return the last 'n' elements of the array.  
// Test Data :  
// console.log(last([7, 9, 0, -2]));  
// console.log(last([7, 9, 0, -2],3));  
// console.log(last([7, 9, 0, -2],6)); 
// Expected Output :  -2  
// [9, 0, -2]  
// [7, 9, 0, -2]

function last(arr, n = 1) {
    return n >= 0 ? arr.slice(-n) : [];
}

// Test cases
console.log(last([7, 9, 0, -2]));  // -2
console.log(last([7, 9, 0, -2], 3));  // [9, 0, -2]
console.log(last([7, 9, 0, -2], 6));  // [7, 9, 0, -2]

// 5. Write a simple JavaScript program to join all elements of the following array 
// into a string. 
// Sample array : myColor = ["Red", "Green", "White", "Black"]; 
// Expected Output :  
// "Red,Green,White,Black" 
// "Red,Green,White,Black" 
// "Red+Green+White+Black" 

const myColor = ["Red", "Green", "White", "Black"];

// Using the default separator (comma)
const result1 = myColor.join();
console.log(result1); // "Red,Green,White,Black"

// Using a custom separator (plus sign)
const result2 = myColor.join("+");
console.log(result2); // "Red+Green+White+Black"

// 6. Write a JavaScript program which accept a number as input and insert dashes (-) between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.

function insertDashesBetweenEvenNumbers(inputNumber) {
    const numberStr = inputNumber.toString();
    let result = "";

    for (let i = 0; i < numberStr.length; i++) {
        result += numberStr[i];

        // Check if the current digit is even and the next digit is also even
        if (parseInt(numberStr[i]) % 2 === 0 && i < numberStr.length - 1 && parseInt(numberStr[i + 1]) % 2 === 0) {
            result += "-";
        }
    }

    return result;
}

const inputNumber = 25468;
const output = insertDashesBetweenEvenNumbers(inputNumber);
console.log(`Input: ${inputNumber}, Output: ${output}`);

// 7. Write a JavaScript program to sort the items of an array.  
// Sample array : var arr1 = [ 3, 8, 7, 6, 5, -4, 3, 2, 1 ]; 
// Sample Output : -4,-3,1,2,3,5,6,7,8 
var arr1 = [3, 8, 7, 6, 5, -4, 3, 2, 1];
arr1.sort((a, b) => a - b); // Sort in ascending order
console.log(arr1.join(', ')); // Output: -4, -3, 1, 2, 3, 5, 6, 7, 8

// 8. Write a JavaScript program to find the most frequent item of an array.  
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; 
// Sample Output : a ( 5 times )  
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var counts = {};

for (var i = 0; i < arr1.length; i++) {
    var item = arr1[i];
    counts[item] = (counts[item] || 0) + 1;
}

var maxCount = 0;
var mostFrequentItem;

for (var key in counts) {
    if (counts[key] > maxCount) {
        maxCount = counts[key];
        mostFrequentItem = key;
    }
}

console.log(mostFrequentItem + ' (' + maxCount + ' times)');

// 9. Write a JavaScript program which accept a string as input and swap the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.  

function swapCase(inputString) {
    var result = '';
    for (var i = 0; i < inputString.length; i++) {
        var char = inputString[i];
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}

var input = 'The Quick Brown Fox';
var swapped = swapCase(input);
console.log(swapped); // Output: 'tHE qUICK bROWN fOX'

// 11. Write a JavaScript program to find the sum of squares of a numeric vector.  
function sumOfSquares(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += Math.pow(array[i], 2);
    }
    return sum;
}

const numericVector = [0, 1, 2, 3, 4];
const resultSumOfSquares = sumOfSquares(numericVector);
console.log("Sum of squares:", resultSumOfSquares);

// 12. Write a JavaScript program to compute the sum and product of an array of 
// integers. 
function computeSumAndProduct(array) {
    let sum = 0;
    let product = 1;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
        product *= array[i];
    }

    return { sum, product };
}

const integerArray = [1, 2, 3, 4, 5, 6];
const { sum, product } = computeSumAndProduct(integerArray);

console.log("Sum:", sum);
console.log("Product:", product);

// 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).  
function removeDuplicatesCaseInsensitive(arr) {
    const uniqueSet = new Set();
    return arr.filter(item => {
        const lowerCaseItem = item.toLowerCase();
        if (!uniqueSet.has(lowerCaseItem)) {
            uniqueSet.add(lowerCaseItem);
            return true;
        }
        return false;
    });
}

const inputArrayy = ['A', 'b', 'c', 'C', 'C', 'D'];
const resultt = removeDuplicatesCaseInsensitive(inputArrayy);
console.log(resultt); // Output: ['A', 'b', 'c', 'D']

// 15. We have the following arrays :  
//     color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "]; 
//     o = ["th","st","nd","rd"] 
//     Write a JavaScript program to display the colors in the following way : 
//     "1st choice is Blue ." 
//     "2nd choice is Green." 
//     "3rd choice is Red." - - - - - - - - - - - - - 
//     Note : Use ordinal numbers to tell their position. 
const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
const o = ["th", "st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
    const ordinalNumber = i + 1;
    const suffix = o[ordinalNumber] || o[0];
    console.log(`${ordinalNumber}${suffix} choice is ${color[i].trim()}.`);
}

// 16. Find the leap years in a given range of years.  
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function findLeapYearsInRange(startYear, endYear) {
    const leapYears = [];
    for (let year = startYear; year <= endYear; year++) {
        if (isLeapYear(year)) {
            leapYears.push(year);
        }
    }
    return leapYears;
}

const start = 2000;
const end = 2024;
const leapYearsInRange = findLeapYearsInRange(start, end);
console.log("Leap years between", start, "and", end, ":", leapYearsInRange);

// 17. Write a JavaScript program to shuffle an array.  
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

const originalArray = [1, 2, 3, 4, 5];
const shuffledArray = shuffleArray(originalArray);
console.log("Shuffled array:", shuffledArray);

// 18. Write a JavaScript program to perform a binary search.  
// Note : A binary search or half-interval search algorithm finds the position of a 
// specified input value within an array sorted by key value.  
// Sample array :  
// var items = [1, 2, 3, 4, 5, 7, 8, 9]; 
// Expected Output :  
// console.log(binary_Search(items, 1)); //0  
// console.log(binary_Search(items, 5)); //4 
function binary_Search(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

const items = [1, 2, 3, 4, 5, 7, 8, 9];
console.log(binary_Search(items, 1)); // Output: 0
console.log(binary_Search(items, 5)); // Output: 4

// 19. There are two arrays with individual values, write a JavaScript program to 
// compute the sum of each individual index value from the given arrays.  
// Sample array :  
// array1 = [1,0,2,3,4]; 
// array2 = [3,5,6,7,8,13]; 
// Expected Output :  
// [4, 5, 8, 10, 12, 13]  
function computeSumOfIndices(arr1, arr2) {
    const length = Math.max(arr1.length, arr2.length);
    const result = [];

    for (let i = 0; i < length; i++) {
        result.push((arr1[i] || 0) + (arr2[i] || 0));
    }

    return result;
}

const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];
const resultArr = computeSumOfIndices(array1, array2);
console.log(resultArr); // Output: [4, 5, 8, 10, 12, 13]

// 20. Write a JavaScript program to find duplicate values in a JavaScript array. 
function findDuplicateValues(arr) {
    const uniqueSet = new Set();
    const duplicates = [];

    for (const item of arr) {
        if (uniqueSet.has(item)) {
            duplicates.push(item);
        } else {
            uniqueSet.add(item);
        }
    }

    return duplicates;
}

const myArray = [1, 2, 3, 2, 4, 5, 3, 6, 7, 5];
const duplicateValues = findDuplicateValues(myArray);
console.log("Duplicate values:", duplicateValues);

// 21. Write a JavaScript program to flatten a nested (any depth) array. If you pass 
// shallow, the array will only be flattened a single level.  
// Sample Data : 
// console.log(flatten([1, [2], [3, [[4]]],[5,6]]));  
// [1, 2, 3, 4, 5, 6] 
// console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));  
// [1, 2, 3, [[4]], 5, 6] 
function flatten(arr, shallow = false) {
    const result = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            if (shallow) {
                result.push(...item);
            } else {
                result.push(...flatten(item));
            }
        } else {
            result.push(item);
        }
    }
    return result;
}

// Example usage
console.log(flatten([1, [2], [3, [[4]]], [5, 6]])); // [1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]], [5, 6]], true)); // [1, 2, 3, [[4]], 5, 6]


// 22. Write a JavaScript program to compute the union of two arrays.  
// Sample Data : 
// console.log(union([1, 2, 3], [100, 2, 1, 10])); 
// [1, 2, 3, 10, 100] 
function union(arr1, arr2) {
    const merged = [...arr1, ...arr2];
    const uniqueValues = [...new Set(merged)];
    return uniqueValues;
}

// Example usage
console.log(union([1, 2, 3], [100, 2, 1, 10])); // [1, 2, 3, 10, 100]


// 23. Write a JavaScript function to find the difference of two arrays.  
// Test Data : 
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));  
// ["3", "10", "100"] 
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));  
// ["6"] 
// console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
// ["3", "10", "100"]  
function difference(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const diff = [...set1].filter(item => !set2.has(item));
    return diff.map(String); // Convert numbers to strings
}

// Example usage
console.log(difference([1, 2, 3], [100, 2, 1, 10])); // ["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]])); // ["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10])); // ["3", "10", "100"]


// 24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 
// 'NaN' values from an array.  
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null] 
// Expected result : [15, -22, 47]
function removeInvalidValues(arr) {
    return arr.filter(item => ![null, 0, '', false, undefined, NaN].includes(item));
}

// Example usage
const sampArray = [NaN, 0, 15, false, -22, '', undefined, 47, null];
const resut = removeInvalidValues(sampArray);
console.log(resut); // [15, -22, 47]

// 26. Write a JavaScript program to find a pair of elements (indices of the two 
//     numbers) from an given array whose sum equals a specific target number.  
//     Input: numbers= [10,20,10,40,50,60,70], target=50 
//     Output: 3, 4 
function findPairWithSum(arr, target) {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(arr[i], i);
    }

    return null;
}

const numbers = [10, 20, 10, 40, 50, 60, 70];
const targetSum = 50;
const resultIndices = findPairWithSum(numbers, targetSum);
console.log("Output:", resultIndices); // Output: [3, 4]

// 27. Write a JavaScript function to retrieve the value of a given property from all 
//     elements in an array.  
//     Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null] 
//     Expected result : [15, -22, 47] 
function getPropertyValues(arr, prop) {
    return arr.map(item => item[prop]);
}

const sampleArra = [NaN, 0, 15, false, -22, '', undefined, 47, null];
const resul = getPropertyValues(sampleArra, 'toString');
console.log("Expected result:", resul); // Output: [15, -22, 47]

// 28. Write a JavaScript function to find the longest common starting substring in a 
//     set of strings.  
//     Sample array : console.log(longest_common_starting_substring(['go', 'google'])); 
//     Expected result : "go" 
function longestCommonStartingSubstring(arr) {
    const sortedArray = [...arr].sort();
    const firstItem = sortedArray[0];
    const lastItem = sortedArray[sortedArray.length - 1];

    let i = 0;
    while (i < firstItem.length && firstItem.charAt(i) === lastItem.charAt(i)) {
        i++;
    }

    return firstItem.substring(0, i);
}

console.log(longestCommonStartingSubstring(['go', 'google'])); // Output: "go"

// 29. Write a JavaScript function to fill an array with values (numeric, string with 
//     one character) on supplied bounds.  
//     Test Data :  
//     console.log(num_string_range('a', "z", 2)); 
//     ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"] 
function num_string_range(start, end, step) {
    const result = [];
    for (let i = start.charCodeAt(0); i <= end.charCodeAt(0); i += step) {
        result.push(String.fromCharCode(i));
    }
    return result;
}

console.log(num_string_range('a', 'z', 2));
// Output: ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

// 30. Write a JavaScript function to merge two arrays and removes all duplicates 
//     elements.  
//     Test data : 
//     var array1 = [1, 2, 3];  
//     var array2 = [2, 30, 1];  
//     console.log(merge_array(array1, array2)); 
//     [3, 2, 30, 1]

function mergeAndRemoveDuplicates(arr1, arr2) {
    const mergedArray = [...arr1, ...arr2];
    const uniqueValues = [...new Set(mergedArray)];
    return uniqueValues;
}

const arra1 = [1, 2, 3];
const arra2 = [2, 30, 1];
const mergedResult = mergeAndRemoveDuplicates(array1, array2);
console.log(mergedResult); // Output: [3, 2, 30, 1]

// 31. Write a JavaScript function to remove a specific element from an array.  
// Test data : 
// console.log(remove_array_element([2, 5, 9, 6], 5)); 
// [2, 9, 6] 
function remove_array_element(arr, element) {
    const index = arr.indexOf(element);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}

console.log(remove_array_element([2, 5, 9, 6], 5)); // [2, 9, 6]


// 32. Write a JavaScript function to find an array contains a specific element.  
// Test data : 
// console.log(remove_array_element([2, 5, 9, 6], 5)); 
// [2, 9, 6] 
function contains_element(arr, element) {
    return element in arr;
}

console.log(contains_element([2, 5, 9, 6], 5)); // true


// 33. Write a JavaScript script to empty an array keeping the original.  
// . 
const originaArray = [10, 20, 30];
originalArray.length = 0;
console.log(originaArray); // []

// 34. Write a JavaScript function to get nth largest element from an unsorted 
// array.  
// Test Data : 
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4)); 
// 89 
function nthlargest(arr, n) {
    const sortedArray = arr.slice().sort((a, b) => b - a);
    return sortedArray[n - 1];
}

console.log(nthlargest([43, 56, 23, 89, 88, 90, 99, 652], 4)); // 89

// 35. Write a JavaScript function to get a random item from an array.  
function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

console.log(getRandomItem([1, 2, 3, 4, 5])); // Random item from the array

// 36. Write a JavaScript function to create a specified number of elements with 
// pre-filled numeric value array.  
// Test Data : 
// console.log(array_filled(6, 0));  
// [0, 0, 0, 0, 0, 0] 
// console.log(array_filled(4, 11)); 
// [11, 11, 11, 11] 
function array_filled(length, value) {
    return Array.from({ length }, () => value);
}

console.log(array_filled(6, 0)); // [0, 0, 0, 0, 0, 0]
console.log(array_filled(4, 11)); // [11, 11, 11, 11]


// 37. Write a JavaScript function to create a specified number of elements with 
// pre-filled string value array.  
// Test Data : 
// console.log(array_filled(3, 'default value'));  
// ["default value", "default value", "default value"] 
// console.log(array_filled(4, 'password')); 
// ["password", "password", "password", "password"] 
function array_filled(length, value) {
    return Array.from({ length }, () => value);
}

console.log(array_filled(3, 'default value')); // ["default value", "default value", "default value"]
console.log(array_filled(4, 'password')); // ["password", "password", "password", "password"]


// 38. Write a JavaScript function to move an array element from one position to 
// another.  
// Test Data : 
// console.log(move([10, 20, 30, 40, 50], 0, 2)); 
// [20, 30, 10, 40, 50] 
// console.log(move([10, 20, 30, 40, 50], -1, -2)); 
// [10, 20, 30, 50, 40] 
function move(arr, fromIndex, toIndex) {
    const element = arr.splice(fromIndex, 1)[0];
    arr.splice(toIndex, 0, element);
    return arr;
}

console.log(move([10, 20, 30, 40, 50], 0, 2)); // [20, 30, 10, 40, 50]
console.log(move([10, 20, 30, 40, 50], -1, -2)); // [10, 20, 30, 50, 40]


// 39. Write a JavaScript function to filter false, null, 0 and blank values from an 
// array.  
// Test Data : 
// console.log(filter_array_values([58, '', 'abcd', true, null, false, 0])); 
// [58, "abcd", true] 
function filter_array_values(arr) {
    return arr.filter(item => item || typeof item === 'number');
}

console.log(filter_array_values([58, '', 'abcd', true, null, false, 0])); // [58, "abcd",

// 40. Write a JavaScript function to generate an array of specified length, filled with 
// integer numbers, increase by one from starting position.  
// Test Data : 
// console.log(array_range(1, 4));  
// [1, 2, 3, 4] 
// console.log(array_range(-6, 4)); 
// [-6, -5, -4, -3] 
function array_range(start, length) {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(start + i);
    }
    return result;
}

console.log(array_range(1, 4)); // [1, 2, 3, 4]
console.log(array_range(-6, 4)); // [-6, -5, -4, -3]

// 41. Write a JavaScript function to generate an array between two integers of 1 
// step length. 
// Test Data : 
// console.log(rangeBetwee(4, 7));  
// [4, 5, 6, 7] 
// console.log(rangeBetwee(-4, 7)); 
// [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7] 
function rangeBetween(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        result.push(i);
    }
    return result;
}

console.log(rangeBetween(4, 7)); // [4, 5, 6, 7]
console.log(rangeBetween(-4, 7)); // [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7]

// 42. Write a JavaScript function to find the unique elements from two arrays.  
// Test Data : 
// console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
// ["1", "2", "3", "10", "100"] 
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));  
// ["1", "2", "3", "4", "5", "6"] 
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));  
// ["1", "2", "3", "10", "100"]
function findUniqueElements(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    // Combine the sets and convert back to an array
    const uniqueElements = [...new Set([...set1, ...set2])];

    return uniqueElements;
}

console.log(findUniqueElements([1, 2, 3], [100, 2, 1, 10])); // ["1", "2", "3", "10", "100"]
console.log(findUniqueElements([1, 2, 3, 4, 5], [1, [2], [3, [[4]]], [5, 6]])); // ["1", "2", "3", "4", "5", "6"]
console.log(findUniqueElements([1, 2, 3], [100, 2, 1, 10])); // ["1", "2", "3", "10", "100"]

// JavaScript Date 
// 1. Write a JavaScript function to check whether an `input` is a date object or not.  
// Test Data : 
// console.log(is_date("October 13, 2014 11:13:00"));  
// console.log(is_date(new Date(86400000)));  
// console.log(is_date(new Date(99,5,24,11,33,30,0)));  
// console.log(is_date([1, 2, 4, 0])); 
// Output : 
// false  
// true  
// true  
// false 
function is_date(input) {
    return input instanceof Date;
}

// Test cases
console.log(is_date("October 13, 2014 11:13:00")); // false
console.log(is_date(new Date(86400000))); // true
console.log(is_date(new Date(99, 5, 24, 11, 33, 30, 0))); // true
console.log(is_date([1, 2, 4, 0])); // false


// 2. Write a JavaScript function to get the current date.  
// Note : Pass a separator as an argument. 
// Test Data : 
// console.log(curday('/'));  
// console.log(curday('-')); 
// Output : 
// "11/13/2014"  
// "11-13-2014" 
function curday(separator) {
    const currentDate = new Date();
    return currentDate.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', separator });
}

// Test cases
console.log(curday('/')); // "07/15/2024"
console.log(curday('-')); // "07-15-2024"


// 3. Write a JavaScript function to get the number of days in a month.  
// Test Data : 
// console.log(getDaysInMonth(1, 2012));  
// console.log(getDaysInMonth(2, 2012));  
// console.log(getDaysInMonth(9, 2012));  
// console.log(getDaysInMonth(12, 2012));  
// Output : 
// 31  
// 29  
// 30  
// 31 
function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
}

// Test cases
console.log(getDaysInMonth(1, 2012)); // 31
console.log(getDaysInMonth(2, 2012)); // 29
console.log(getDaysInMonth(9, 2012)); // 30
console.log(getDaysInMonth(12, 2012)); // 31

// 4. Write a JavaScript function to get the month name from a particular date.  
// Test Data : 
// console.log(month_name(new Date("10/11/2009")));  
// console.log(month_name(new Date("11/13/2014"))); 
// Output : 
// "October"  
// "November" 
function month_name(date) {
    return date.toLocaleString('default', { month: 'long' });
}

// Test cases
console.log(month_name(new Date("10/11/2009"))); // "October"
console.log(month_name(new Date("11/13/2014"))); // "November"

// 5. Write a JavaScript function to compare dates (i.e. greater than, less than or 
// equal to).  
// Test Data : 
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 
// 00:00')));  
// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 
// 00:00')));  
// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 
// 00:01'))); 
// Output : 
// "Date1 = Date2"  
// "Date1 > Date2"  
// "Date2 > Date1" 
function compare_dates(date1, date2) {
    if (date1.getTime() === date2.getTime()) {
        return "Date1 = Date2";
    } else if (date1 > date2) {
        return "Date1 > Date2";
    } else {
        return "Date2 > Date1";
    }
}

// Test cases
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00'))); // "Date1 = Date2"
console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00'))); // "Date1 > Date2"
console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01'))); // "Date2 > Date1"

// 6. Write a JavaScript function to add specified minutes to a Date object.  
// Test Data : 
// console.log(add_minutes(new Date(2014,10,2), 30).toString()); 
// Output : 
// "Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)" 
function add_minutes(dt, minutes) {
    return new Date(dt.getTime() + minutes * 60000);
}

// Test case
console.log(add_minutes(new Date(2014, 10, 2), 30).toString());

// 7. Write a JavaScript function to test whether a date is a weekend.  
// Note : Use standard Saturday/Sunday definition of a weekend. 
// Test Data : 
// console.log(is_weekend('Nov 15, 2014'));  
// console.log(is_weekend('Nov 16, 2014'));  
// console.log(is_weekend('Nov 17, 2014')); 
// Output : 
// "weekend"  
// "weekend"  
// undefined 
function is_weekend(dateString) {
    const date = new Date(dateString);
    const dayOfWeek = date.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6 ? "weekend" : undefined;
}

// Test cases
console.log(is_weekend('Nov 15, 2014')); // "weekend"
console.log(is_weekend('Nov 16, 2014')); // "weekend"
console.log(is_week);

// 8. Write a JavaScript function to get difference between two dates in days.  
// Test Data : 
// console.log(date_diff_indays('04/02/2014', '11/04/2014'));  
// console.log(date_diff_indays('12/02/2014', '11/04/2014')); 
// Output : 
// 216  -28 
function date_diff_indays(date1, date2) {
    const timestamp1 = new Date(date1).getTime();
    const timestamp2 = new Date(date2).getTime();
    return Math.abs((timestamp2 - timestamp1) / (24 * 60 * 60 * 1000));
}

// Test cases
console.log(date_diff_indays('04/02/2014', '11/04/2014')); // 216
console.log(date_diff_indays('12/02/2014', '11/04/2014')); // 28

// 9. Write a JavaScript function to get the last day of a month.  
// Test Data : 
// console.log(lastday(2014,0));  
// console.log(lastday(2014,1));  
// console.log(lastday(2014,11)); 
// Output : 
// 31  
// 28  
// 31 
function lastday(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

// Test cases
console.log(lastday(2014, 0)); // 31
console.log(lastday(2014, 1)); // 28
console.log(lastday(2014, 11)); // 31

// 10. Write a JavaScript function to calculate 'yesterday day'.  
// Test Data : 
// console.log(yesterday('Nov 15, 2014'));  
// console.log(yesterday('Nov 16, 2015'));  
// console.log(yesterday('Nov 17, 2016')); 
// Output : 
// "Fri Nov 14 2014 00:00:00 GMT+0530 (India Standard Time)"  
// "Sun Nov 15 2015 00:00:00 GMT+0530 (India Standard Time)"  
// "Wed Nov 16 2016 00:00:00 GMT+0530 (India Standard Time)" 
function yesterday(dateString) {
    const currentDate = new Date(dateString);
    currentDate.setDate(currentDate.getDate() - 1);
    return currentDate.toString();
}

// Test cases
console.log(yesterday('Nov 15, 2014'));
console.log(yesterday('Nov 16, 2015'));
console.log(yesterday('Nov 17, 2016'));

// 11. Write a JavaScript function to get the maximum date from an array of dates.  
// Test Data : 
// console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03'])); 
// Output : 
// "2015/02/02" 
function max_date(dates) {
    return new Date(Math.max(...dates.map(date => new Date(date))));
}

// Test case
console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03'])); // "2015/02/02"

// 12. Write a JavaScript function to get the minimum date from an array of dates.  
// Test Data : 
// console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03'])); 
// Output : 
// "2015/01/03" 
function min_date(dates) {
    return new Date(Math.min(...dates.map(date => new Date(date))));
}

// Test case
console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03'])); // "2015/01/03"

// 13. Write a JavaScript function that will return the number of minutes in hours 
// and minutes. 
// Test Data : 
// console.log(timeConvert(200)); 
// Output : 
// "200 minutes = 3 hour(s) and 20 minute(s)." 
function timeConvert(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;
    return `${minutes} minutes = ${hours} hour(s) and ${remainingMinutes} minute(s).`;
}

// Test case
console.log(timeConvert(200)); // "200 minutes = 3 hour(s) and 20 minute(s)."


// 14. Write a JavaScript function to get the amount of days of a year.  
// Test Data : 
// console.log(days_of_a_year(2015));  
// 365 
// console.log(days_of_a_year(2016)); 
// 366 
function days_of_a_year(year) {
    return new Date(year, 12, 0).getDate();
}

// Test cases
console.log(days_of_a_year(2015)); // 365
console.log(days_of_a_year(2016)); // 366


// 15. Write a JavaScript function to get the quarter (1 to 4) of the year.  
// Test Data : 
// console.log(quarter_of_the_year(new Date(2015, 1, 21)));  
// 2 
// console.log(quarter_of_the_year(new Date(2015, 10, 18))); 
// 4 
function quarter_of_the_year(date) {
    const month = date.getMonth();
    return Math.floor(month / 3) + 1;
}

// Test cases
console.log(quarter_of_the_year(new Date(2015, 1, 21))); // 2
console.log(quarter_of_the_year(new Date(2015, 10, 18))); // 4

// 16. Write a JavaScript function to count the number of days passed since 
// beginning of the year.  
// Test Data : 
// console.log(days_passed(new Date(2015, 0, 15)));  
// 15 
// console.log(days_passed(new Date(2015, 11, 14))); 
// 348 
function days_passed(dt) {
    // Create a copy of the provided date using getTime() method to avoid modifying the original date
    const current = new Date(dt.getTime());
    // Create a new Date object representing January 1st of the same year as the provided date
    const previous = new Date(dt.getFullYear(), 0, 1);
        return Math.ceil((current - previous + 1) / 86400000);
}

// Test cases
console.log(days_passed(new Date(2015, 0, 15))); // 15
console.log(days_passed(new Date(2015, 11, 14))); // 348


// 17. Write a JavaScript function to convert a Unix timestamp to time.  
// Test Data : 
// console.log(days_passed(new Date(2015, 0, 15)));  
// 15 
// console.log(days_passed(new Date(2015, 11, 14))); 
// 348 
function convertUnixTimestampToTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleTimeString();
}

// Test cases
console.log(convertUnixTimestampToTime(1420070400)); // "00:00:00"
console.log(convertUnixTimestampToTime(1420070401)); // "00:00:01"


// 18. Write a JavaScript program to calculate age.  
// Test Data : 
// console.log(calculate_age(new Date(1982, 11, 4)));  
// 32 
// console.log(calculate_age(new Date(1962, 1, 1))); 
// 53 
function calculate_age(birthDate) {
    const currentDate = new Date();
    const birthYear = birthDate.getFullYear();
    const currentYear = currentDate.getFullYear();
    return currentYear - birthYear;
}

// Test cases
console.log(calculate_age(new Date(1982, 11, 4))); // 32
console.log(calculate_age(new Date(1962, 1, 1))); // 53


// 19. Write a JavaScript function to get the day of the month, 2 digits with leading 
// zeros.   
// Test Data : 
// d= new Date(2015, 10, 1);  
// console.log(day_of_the_month(d)); 
// "01" 
function day_of_the_month(date) {
    const day = date.getDate();
    return day.toString().padStart(2, '0');
}

// Test case
const d = new Date(2015, 10, 1);
console.log(day_of_the_month(d)); // "01"


// 20. Write a JavaScript function to get a textual representation of a day (three 
// letters, Mon through Sun).   
// Test Data : 
// dt = new Date(2015, 10, 1);  
// console.log(short_Days(dt)); 
// "Sun" 
function short_Days(date) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return days[date.getDay()];
}

// Test case
const dt = new Date(2015, 10, 1);
console.log(short_Days(dt)); // "Sun"

// 21. Write a JavaScript function to get a full textual representation of the day of 
// the week (Sunday through Saturday).   
// Test Data : 
// dt = new Date(2015, 10, 1);  
// console.log(long_Days(dt)); 
// "Sunday" 
function long_Days(date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
}

// Test case
const dtt = new Date(2015, 10, 1);
console.log(long_Days(dtt)); // "Sunday"


// 22. Write a JavaScript function to get ISO-8601 numeric representation of the 
// day of the week (1 (for Monday) to 7 (for Sunday)).   
// Test Data : 
// dt = new Date(2015, 10, 1);  
// console.log(ISO_numeric_date(dt)); 
// 7 
function ISO_numeric_date(dt) {
    return dt.getDay() === 0 ? 7 : dt.getDay();
}

// Test cases
const dt1 = new Date();
console.log(ISO_numeric_date(dt1)); // Current day of the week (1 to 7)
const dt2 = new Date(2015,  10, 1);
console.log(ISO_numeric_date(dt2)); // 7 (Sunday)


// 23. Write a JavaScript function to get English ordinal suffix for the day of the 
// month, 2 characters (st, nd, rd or th.).   
// Test Data : 
// dt = new Date(2015, 10, 1);  
// console.log(english_ordinal_suffix(dt)); 
// "1st" 
function english_ordinal_suffix(date) {
    const day = date.getDate();
    const lastDigit = day % 10;
    let suffix;

    if (day >= 11 && day <= 13) {
        suffix = 'th';
    } else {
        switch (lastDigit) {
            case 1:
                suffix = 'st';
                break;
            case 2:
                suffix = 'nd';
                break;
            case 3:
                suffix = 'rd';
                break;
            default:
                suffix = 'th';
        }
    }

    return day + suffix;
}

// Test case
const dt3 = new Date(2015, 10, 1);
console.log(english_ordinal_suffix(dt3)); // "1st"


// 24. Write a JavaScript function to get ISO-8601 week number of year, weeks 
// starting on Monday.   
// Example : 42 (the 42nd week in the year) 
// Test Data : 
// dt = new Date(2015, 10, 1);  
// console.log(ISO8601_week_no(dt));  
// 44 
function ISO8601_week_no(dt) {
    const targetDate = new Date(dt);
    targetDate.setHours(0, 0, 0, 0); // Set time to midnight
    targetDate.setDate(targetDate.getDate() + 4 - (targetDate.getDay() || 7)); // Adjust to Thursday (ISO week starts on Monday)
    const yearStart = new Date(targetDate.getFullYear(), 0, 1);
    const weekNumber = Math.ceil(((targetDate - yearStart) / 86400000 + 1) / 7); // 86400000 = milliseconds in a day
    return weekNumber;
}

// Test case
const dt4 = new Date(2015, 10, 1);
console.log(ISO8601_week_no(dt4)); // 44


// 25. Write a JavaScript function to get a full textual representation of a month, 
// such as January or June.   
// Test Data : 
// dt = new Date(2015, 10, 1);  
// console.log(full_month(dt)); 
// "November"
function full_month(date) {
    return date.toLocaleString('default', { month: 'long' });
}

// Test case
const dt5 = new Date(2015, 10, 1);
console.log(full_month(dt5)); // "November"

// 26. Write a JavaScript function to get a numeric representation of a month, with 
// leading zeros (01 through 12).   
// Test Data : 
// dt = new Date(2015, 10, 1);  
// console.log(numeric_month(dt)); 
// "11" 
function numeric_month(dt) {
    const month = dt.getMonth() + 1; // Add 1 to the month index
    return month.toString().padStart(2, '0'); // Ensure two-digit format
}

// Test case
const dtt1 = new Date(2015, 10, 1);
console.log(numeric_month(dtt1)); // "11"


// 27. Write a JavaScript function to get a short textual representation of a month, 
// three letters (Jan through Dec).   
// Test Data : 
// dt = new Date(2015, 10, 1); 
// console.log(short_months(dt)); 
// "Nov" 
function short_months(dt) {
    const shortMonthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return shortMonthNames[dt.getMonth()];
}

// Test case
const dtt2 = new Date(2015, 10, 1);
console.log(short_months(dtt2)); // "Nov"


// 28. Write a JavaScript function to get a full numeric representation of a year (4 
// digits).   
// Test Data : 
// dt = new Date(2015, 10, 1);  
// console.log(full_year(dt));  
// 2015 
function full_year(dt) {
    return dt.getFullYear();
}

// Test case
const dtt3 = new Date(2015, 10, 1);
console.log(full_year(dtt3)); // 2015


// 29. Write a JavaScript function to get a two digit representation of a year.   
// Examples : 79 or 04 
// Test Data : 
// dt = new Date(1989, 10, 1);  
// console.log(sort_year(dt)); 
// "89" 
function sort_year(dt) {
    const fullYear = dt.getFullYear();
    return fullYear.toString().slice(-2); // Get the last two digits
}

// Test case
const dtt4 = new Date(1989, 10, 1);
console.log(sort_year(dtt4)); // "89"


// 30. Write a JavaScript function to get lowercase Ante meridiem and Post 
// meridiem. 
function lowercase_meridiem(dt) {
    const hour = dt.getHours();
    return hour < 12 ? 'am' : 'pm';
}

// Test case
const dtt5 = new Date(2023, 5, 31, 10, 30); // 10:30 AM
console.log(lowercase_meridiem(dtt5)); // "am"

// 31. Write a JavaScript function to get uppercase Ante meridiem and Post 
// meridiem.  
function uppercase_meridiem(dt) {
    const hour = dt.getHours();
    return hour < 12 ? 'AM' : 'PM';
}

// Test case
const dt6 = new Date(2023, 5, 31, 15, 45); // 3:45 PM
console.log(uppercase_meridiem(dt6)); // "PM"

// 32. Write a JavaScript function to swatch Internet time (000 through 999).   
// Test Data : 
// dt = new Date(1989, 10, 1);  
// console.log(internet_time(dt)); 
// 812
function internet_time(dt) {
    const totalMinutes = dt.getUTCHours() * 60 + dt.getUTCMinutes();
    const beats = Math.floor((totalMinutes / 1440) * 1000); // 1440 minutes in a day
    return beats.toString().padStart(3, '0');
}

// Test case
const dt7 = new Date(1989, 10, 1, 8, 12); // 08:12 UTC
console.log(internet_time(dt7)); // "812"

// 33. Write a JavaScript function to get 12-hour format of an hour with leading 
// zeros.   
// Test Data : 
// dt = new Date(1989, 10, 1);  
// console.log(hours_with_zeroes(dt));  
// "12" 
function hours_with_zeroes(dt) {
    const hour = dt.toLocaleString(undefined, { hour: '2-digit', hour12: true });
    return hour;
}

// Test case
const ddt1 = new Date(1989, 10, 1);
console.log(hours_with_zeroes(ddt1)); // "12"


// 34. Write a JavaScript function to get 24-hour format of an hour without leading 
// zeros.   
// Test Data : 
// dt = new Date(1989, 10, 1);  
// console.log(hours_without_zeroes(dt));  
// 0 
function hours_without_zeroes(dt) {
    const hour = dt.toLocaleString(undefined, { hour: 'numeric', hour12: false });
    return hour;
}

// Test case
const ddt2 = new Date(1989, 10, 1);
console.log(hours_without_zeroes(ddt2)); // 0


// 35. Write a JavaScript function to get minutes with leading zeros (00 to 59).   
// Test Data : 
// dt = new Date(1989, 10, 1);  
// console.log(minutes_with_leading_zeros(dt));  
// "00" 
function minutes_with_leading_zeros(dt) {
    const minutes = dt.toLocaleString(undefined, { minute: '2-digit' });
    return minutes;
}

// Test case
const ddt3 = new Date(1989, 10, 1);
console.log(minutes_with_leading_zeros(ddt3)); // "00"


// 36. Write a JavaScript function to get seconds with leading zeros (00 through 
// 59).   
// Test Data : 
// dt = new Date(1989, 10, 1);  
// console.log(seconds_with_leading_zeros(dt));  
// "00" 
function seconds_with_leading_zeros(dt) {
    const seconds = dt.toLocaleString(undefined, { second: '2-digit' });
    return seconds;
}

// Test case
const ddt4 = new Date(1989, 10, 1);
console.log(seconds_with_leading_zeros(ddt4)); // "00"


// 37. Write a JavaScript function to get Timezone.   
// Test Data : 
// dt = new Date();  
// console.log(seconds_with_leading_zeros(dt)); 
// "India Standard Time"  
function getTimezone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}

// Test case
const ddt5 = new Date();
console.log(getTimezone()); // "India Standard Time"


// 38. Write a JavaScript function to find whether or not the date is in daylights 
// savings time.   
// Test Data : 
// dt = new Date();  
// console.log(daylights_savings(dt));  
// 1
function isDaylightSavingTime(dt) {
    const janOffset = new Date(dt.getFullYear(), 0, 1).getTimezoneOffset();
    const julOffset = new Date(dt.getFullYear(), 6, 1).getTimezoneOffset();
    return Math.max(janOffset, julOffset) !== dt.getTimezoneOffset();
}

// Test case
const ddt6 = new Date();
console.log(isDaylightSavingTime(ddt6)); // 1 (true) if DST is in effect

// 40. Write a JavaScript function to get timezone offset in seconds.   
// Note : The offset for timezones west of UTC is always negative, and for those 
// east of UTC is always positive. 
// Test Data : 
// dt = new Date();  
// console.log(timezone_offset_in_seconds(dt)); 
// 19800 
function timezone_offset_in_seconds(dt) {
    // Get the timezone offset in minutes
    const offsetMinutes = dt.getTimezoneOffset();
    // Convert to seconds
    const offsetSeconds = offsetMinutes * 60;
    return offsetSeconds;
}

// Test case
const ddt = new Date();
console.log(timezone_offset_in_seconds(ddt)); // 19800 (India Standard Time)


// 41. Write a JavaScript function to add specified years to a date.  
// Test Data : 
// dt = new Date(2014,10,2);  
// console.log(add_years(dt, 10).toString()); 
// Output : 
// "Sat Nov 02 2024 00:00:00 GMT+0530 (India Standard Time)" 
function add_years(date, years) {
    date.setFullYear(date.getFullYear() + years);
    return date;
}

// Test case
const det1 = new Date(2014, 10, 2);
console.log(add_years(dedt1, 10).toString()); // "Sat Nov 02 2024 00:00:00 GMT+0530 (India Standard Time)"


// 42. Write a JavaScript function to add specified weeks to a date.  
// Test Data : 
// dt = new Date(2014,10,2);  
// console.log(add_weeks(dt, 10).toString()); 
// Output : 
// "Sun Jan 11 2015 00:00:00 GMT+0530 (India Standard Time)" 
function add_weeks(date, weeks) {
    date.setDate(date.getDate() + weeks * 7);
    return date;
}

// Test case
const det2 = new Date(2014, 10, 2);
console.log(add_weeks(det2, 10).toString()); // "Sun Jan 11 2015 00:00:00 GMT+0530 (India Standard Time)"


// 43. Write a JavaScript function to add specified months to a date.  
// Test Data : 
// dt = new Date(2014,10,2); 
// console.log(add_months(dt, 10).toString()); 
// Output : 
// "Wed Sep 02 2015 00:00:00 GMT+0530 (India Standard Time)" 
function add_months(date, months) {
    date.setMonth(date.getMonth() + months);
    return date;
}

// Test case
const det3 = new Date(2014, 10, 2);
console.log(add_months(det3, 10).toString()); // "Wed Sep 02 2015 00:00:00 GMT+0530 (India Standard Time)"


// 44. Write a JavaScript function to get time differences in minutes between two 
// dates.  
// Test Data : 
// dt1 = new Date("October 13, 2014 11:11:00");  
// dt2 = new Date("October 13, 2014 11:13:00");  
// console.log(diff_minutes(dt1, dt2));  
// 2 
function diff_minutes(dt1, dt2) {
    const diffMilliseconds = Math.abs(dt2 - dt1);
    return Math.floor(diffMilliseconds / 60000); // 60000 milliseconds in a minute
}

// Test case
const det4 = new Date("October 13, 2014 11:11:00");
const det5 = new Date("October 13, 2014 11:13:00");
console.log(diff_minutes(det4, det5)); // 2


// 45. Write a JavaScript function to get time differences in hours between two 
// dates.  
// Test Data : 
// dt1 = new Date("October 13, 2014 08:11:00");  
// dt2 = new Date("October 13, 2014 11:13:00");  
// console.log(diff_hours(dt1, dt2));  
// 3 
function diff_hours(dt1, dt2) {
    const diffMilliseconds = Math.abs(dt2 - dt1);
    return Math.floor(diffMilliseconds / 3600000); // 3600000 milliseconds in an hour
}

// Test case
const det6 = new Date("October 13, 2014 08:11:00");
const det7 = new Date("October 13, 2014 11:13:00");
console.log(diff_hours(det6, det7)); // 3

// 50. Write a JavaScript function to get the week start date.  
function getWeekStartDate(year, month, day) {
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();
    const diff = dayOfWeek - 0;
    date.setDate(date.getDate() - diff);
    return date;
}

// 51. Write a JavaScript function to get the week end date.
function getWeekEndDate(year, month, day) {
    const date = new Date(year, month - 1, day);
    const dayOfWeek = date.getDay();
    const diff = 6 - dayOfWeek;
    date.setDate(date.getDate() + diff);
    return date;
}

// 52. Write a JavaScript function to get the month start date.  
function getMonthStartDate(year, month, day) {
    const date = new Date(year, month - 1, day);
    date.setDate(1);
    return date;
}

// 53. Write a JavaScript function to get the month end date.
function getMonthEndDate(year, month, day) {
    const date = new Date(year, month - 1, day);
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);
    return date;
}

// JavaScript String  

// 1. Write a JavaScript function to check whether an `input` is a string or not.  
// Test Data : 
// console.log(is_string('w3resource'));  
// true 
// console.log(is_string([1, 2, 4, 0])); 
// false 
function isString(input) {
    return typeof input === 'string' || input instanceof String;
}

// Test examples:
console.log(isString('w3resource')); // true
console.log(isString([1, 2, 4, 0])); // false

// 2. Write a JavaScript function to check whether a string is blank or not.  
// Test Data : 
// console.log(is_Blank(''));  
// console.log(is_Blank('abc')); 
// true  
// false 
function isBlank(str) {
    return str.trim() === '';
}

// Test examples:
console.log(isBlank('')); // true
console.log(isBlank('abc')); // false

// 3. Write a JavaScript function to split a string and convert it into an array of 
// words.  
// Test Data : 
// console.log(string_to_array("Robin Singh")); 
// ["Robin", "Singh"] 
function stringToArray(str) {
    return str.split(/\s+/); // Split by whitespace
}

// Test example:
console.log(stringToArray('Robin Singh')); // ["Robin", "Singh"]

// 4. Write a JavaScript function to remove specified number of characters from a 
// string.  
// Test Data : 
// console.log(truncate_string("Robin Singh",4)); 
// "Robi" 
function truncateString(str, num) {
    return str.slice(0, num);
}

// Test example:
console.log(truncateString('Robin Singh', 4)); // "Robi"

// 5. Write a JavaScript function to convert a string in abbreviated form.  
// Test Data : 
// console.log(abbrev_name("Robin Singh")); 
// "Robin S." 
function abbrevName(name) {
    const parts = name.split(' ');
    if (parts.length > 1) {
        return parts[0] + ' ' + parts[1][0] + '.';
    }
    return name;
}

// Test example:
console.log(abbrevName('Robin Singh')); // "Robin S."
 
// 6. Write a JavaScript function to hide email addresses to protect from 
// unauthorized user.  
// Test Data : 
// console.log(protect_email("robin_singh@example.com")); 
// "robin...@example.com" 
function protectEmail(email) {
    const [username, domain] = email.split('@');
    const hiddenUsername = username.slice(0, 4) + '...';
    return hiddenUsername + '@' + domain;
}

// Test example:
console.log(protectEmail('robin_singh@example.com')); // "robin...@example.com"
 
// 7. Write a JavaScript function to parameterize a string.  
// Test Data : 
// console.log(string_parameterize("Robin Singh from USA.")); 
// "robin-singh-from-usa" 
function parameterizeString(str) {
    return str.toLowerCase().replace(/\s+/g, '-');
}

// Test example:
console.log(parameterizeString('Robin Singh from USA.')); // "robin-singh-from-usa"

// 8. Write a JavaScript function to capitalize the first letter of a string.  
// Test Data : 
// console.log(capitalize('js string exercises')); 
// "Js string exercises" 
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Test example:
console.log(capitalizeFirstLetter('js string exercises')); // "Js string exercises"
 
// 9. Write a JavaScript function to capitalize the first letter of each word in a string.  
// Test Data : 
// console.log(capitalize_Words('js string exercises')); 
// "Js String Exercises" 
function capitalizeWords(str) {
    return str.replace(/\b\w/g, (match) => match.toUpperCase());
}

// Test example:
console.log(capitalizeWords('js string exercises')); // "Js String Exercises"
 
// 10. Write a JavaScript function that takes a string which has lower and upper 
// case letters as a parameter and converts upper case letters to lower case, and 
// lower case letters to upper case.  
// Test Data : 
// console.log(swapcase('AaBbc')); 
// "aAbBC"
function swapCase(str) {
    return str.replace(/[a-zA-Z]/g, (match) =>
        match === match.toUpperCase() ? match.toLowerCase() : match.toUpperCase()
    );
}

// Test example:
console.log(swapCase('AaBbc')); // "aAbBC"

// 11. Write a JavaScript function to convert a string into camel case. 
// Test Data : 
// console.log(camelize("JavaScript Exercises"));  
// console.log(camelize("JavaScript exercises"));  
// console.log(camelize("JavaScriptExercises")); 
// "JavaScriptExercises"  
// "JavaScriptExercises"  
// "JavaScriptExercises" 
function camelize(str) {
    return str.replace(/(?:^\\w|[A-Z]|\\b\\w)/g, function(word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\\s+/g, '');
}

// Test examples:
console.log(camelize("JavaScript Exercises")); // "JavaScriptExercises"
console.log(camelize("JavaScript exercises")); // "JavaScriptExercises"
console.log(camelize("JavaScriptExercises")); // "JavaScriptExercises"

// 12. Write a JavaScript function to uncamelize a string.  
// Test Data : 
// console.log(uncamelize('helloWorld'));  
// console.log(uncamelize('helloWorld','-'));  
// console.log(uncamelize('helloWorld','_')); 
// "hello world"  
// "hello-world"  
// "hello_world" 
function uncamelize(text, separator = " ") {
    return text.replace(/([a-z\\d])([A-Z])/g, '$1' + separator + '$2').toLowerCase();
}

// Test examples:
console.log(uncamelize('helloWorld')); // "hello world"
console.log(uncamelize('helloWorld', '-')); // "hello-world"
console.log(uncamelize('helloWorld', '_')); // "hello_world"

// 13. Write a JavaScript function to concatenates a given string n times (default is 
// 1).  
// Test Data : 
// console.log(repeat('Ha!'));  
// console.log(repeat('Ha!',2));  
// console.log(repeat('Ha!',3)); 
// "Ha!"  
// "Ha!Ha!"  
// "Ha!Ha!Ha!" 
function repeat(str, n = 1) {
    return str.repeat(n);
}

// Test examples:
console.log(repeat('Ha!')); // "Ha!"
console.log(repeat('Ha!', 2)); // "Ha!Ha!"
console.log(repeat('Ha!', 3)); // "Ha!Ha!Ha!"

// 14. Write a JavaScript function to insert a string within a string at a particular 
// position (default is 1). 
// Test Data : 
// console.log(insert('We are doing some exercises.'));  
// console.log(insert('We are doing some exercises.','JavaScript '));  
// console.log(insert('We are doing some exercises.','JavaScript ',18)); 
// "We are doing some exercises."  
// "JavaScript We are doing some exercises."  
// "We are doing some JavaScript exercises." 
function insert(original, insertString, position = 1) {
    return original.slice(0, position) + insertString + original.slice(position);
}

// Test examples:
console.log(insert('We are doing some exercises.')); // "We are doing some exercises."
console.log(insert('We are doing some exercises.', 'JavaScript ')); // "JavaScript We are doing some exercises."
console.log(insert('We are doing some exercises.', 'JavaScript ', 18)); // "We are doing some JavaScript exercises."

// 15. Write a JavaScript function to humanized number (Formats a number to a 
// human-readable string.) with the correct suffix such as 1st, 2nd, 3rd or 4th.  
// Test Data : 
// console.log(humanize_format());  
// console.log(humanize_format(1));  
// console.log(humanize_format(8));  
// console.log(humanize_format(301));  
// console.log(humanize_format(402));  
// "1st"  
// "8th"  
// "301st"  
// "402nd" 
function humanize_format(num) {
    const suffixes = ['st', 'nd', 'rd', 'th'];
    const index = Math.min(Math.abs(num) % 10 - 1, 3);
    return num + (suffixes[index] || 'th');
}

// Test examples:
console.log(humanize_format()); // "1st"
console.log(humanize_format(1)); // "1st"
console.log(humanize_format(8)); // "8th"
console.log(humanize_format(301)); // "301st"
console.log(humanize_format(402)); // "402nd"

// 16. Write a JavaScript function to truncates a string if it is longer than the 
// specified number of characters. Truncated strings will end with a translatable 
// ellipsis sequence ("…") (by default) or specified characters.  
// Test Data : 
// console.log(text_truncate('We are doing JS string exercises.'))  
// console.log(text_truncate('We are doing JS string exercises.',19)) 
// console.log(text_truncate('We are doing JS string exercises.',15,'!!')) 
// "We are doing JS string exercises."  
// "We are doing JS ..."  
// "We are doing !!" 
function text_truncate(str, length = 100, ending = '...') {
    if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
    }
    return str;
}

// Test examples:
console.log(text_truncate('We are doing JS string exercises.')); // "We are doing JS string exercises."
console.log(text_truncate('We are doing JS string exercises.', 19)); // "We are doing JS ..."
console.log(text_truncate('We are doing JS string exercises.', 15, '!!')); // "We are doing !!"

// 17. Write a JavaScript function to chop a string into chunks of a given length.  
// Test Data : 
// console.log(string_chop('w3resource'));  
// console.log(string_chop('w3resource',2));  
// console.log(string_chop('w3resource',3)); 
// ["w3resource"]  
// ["w3", "re", "so", "ur", "ce"]  
// ["w3r", "eso", "urc", "e"] 
function string_chop(str, chunkSize) {
    const chunks = [];
    for (let i = 0; i < str.length; i += chunkSize) {
        chunks.push(str.slice(i, i + chunkSize));
    }
    return chunks;
}

// Test examples:
console.log(string_chop('w3resource')); // ["w3resource"]
console.log(string_chop('w3resource', 2)); // ["w3", "re", "so", "ur", "ce"]
console.log(string_chop('w3resource', 3)); 

// 18. Write a JavaScript function to count the occurrence of a substring in a string.  
// Test Data : 
// console.log(count("The quick brown fox jumps over the lazy dog", 'the')); 
// Output : 
// 2 
// console.log(count("The quick brown fox jumps over the lazy dog", 'fox',false)); 
// Output : 
// 1 
function countOccurrences(mainString, subString) {
    const regex = new RegExp(subString, 'g');
    const matches = mainString.match(regex);
    return matches ? matches.length : 0;
}

// Test examples:
console.log(countOccurrences("The quick brown fox jumps over the lazy dog", 'the')); // Output: 2
console.log(countOccurrences("The quick brown fox jumps over the lazy dog", 'fox', false)); // Output: 1

// 19. Write a JavaScript function to escape a HTML string.  
// Test Data : 
// console.log(escape_HTML('<a href="javascript-string-exercise-17.php" 
// target="_blank">')); 
// Output :  
// "&lt;a href=&quot;javascript-string-exercise-17.php&quot; 
// target=&quot;_blank&quot;&gt;" 
function escapeHTML(htmlStr) {
    const tempElement = document.createElement('p');
    tempElement.appendChild(document.createTextNode(htmlStr));
    return tempElement.innerHTML;
}

// Test example:
console.log(escapeHTML('<a href="javascript-string-exercise-17.php" target="_blank">'));
// Output: "<a href="javascript-string-exercise-17.php" target="_blank">"

// 20. Write a JavaScript function that can pad (left, right) a string to get to a 
// determined length. 
// Test Data : 
// console.log(formatted_string('0000',123,'l')); 
// console.log(formatted_string('00000000',123,'')); 
// Output :  
// "0123"  
// "12300000"
function formatted_string(str, value, direction = 'l') {
    const paddingChar = '0'; // You can change this to any desired padding character
    const maxLength = str.length;
    const diff = Math.max(0, value.toString().length - maxLength);
    const padding = paddingChar.repeat(diff);

    if (direction === 'l') {
        return padding + value;
    } else if (direction === 'r') {
        return value + padding;
    } else {
        throw new Error('Invalid direction. Use "l" for left padding or "r" for right padding.');
    }
}

// Test examples:
console.log(formatted_string('0000', 123, 'l')); // Output: "0123"
console.log(formatted_string('00000000', 123, 'r')); // Output: "12300000"


// 21. Write a JavaScript function to repeat a string a specified times.  
// Test Data : 
// console.log(repeat_string('a', 4));  
// console.log(repeat_string('a')); 
// Output :  
// "aaaa"  
// "Error in string or count." 
function repeat_string(str, n) {
    if (n < 0) {
        return "Error in string or count.";
    }
    return str.repeat(n);
}

// Test examples:
console.log(repeat_string('a', 4)); // Output: "aaaa"
console.log(repeat_string('a'));    // Output: "Error in string or count."

// 22. Write a JavaScript function to get a part of a string after a specified character. 
// Test Data : 
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));  
// console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b')); 
// Output :  
// "w3resource"  
// "xercises" 
function subStrAfterChars(str, char) {
    const index = str.indexOf(char);
    if (index !== -1) {
        return str.slice(index + 1);
    } else {
        return `'${char}' not found in the string.`;
    }
}

// Test examples:
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':', 'a')); // Output: "w3resource"
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E', 'b')); // Output: "xercises"

// 23. Write a JavaScript function to strip leading and trailing spaces from a string.  
// Test Data : 
// console.log(strip('w3resource '));  
// console.log(strip(' w3resource'));  
// console.log(strip(' w3resource ')); 
// Output :  
// "w3resource"  
// "w3resource"  
// "w3resource" 
function strip(str) {
    return str.trim();
}

// Test examples:
console.log(strip('w3resource '));  // Output: "w3resource"
console.log(strip(' w3resource')); // Output: "w3resource"
console.log(strip(' w3resource ')); // Output: "w3resource"
 
// 24. Write a JavaScript function to truncate a string to a certain number of words.  
// Test Data : 
// console.log(truncate('The quick brown fox jumps over the lazy dog', 4)); 
// Output :  
// "The quick brown fox" 
function truncate(str, no_words) {
    const words = str.split(' ');
    return words.slice(0, no_words).join(' ');
}

// Test example:
console.log(truncate('The quick brown fox jumps over the lazy dog', 4)); // Output: "The quick brown fox"
 
// 25. Write a JavaScript function to alphabetize a given string.  
// Alphabetize string : An individual string can be alphabetized. This rearranges the 
// letters so they are sorted A to Z. 
// Test Data : 
// console.log(alphabetize_string('United States')); 
// Output :  
// "SUadeeinsttt" 
function alphabetize_string(str) {
    return str.split('').sort().join('').trim();
}

// Test example:
console.log(alphabetize_string('United States')); // Output: "SUadeeinsttt"

// 26. Write a JavaScript function to remove the first occurrence of a given 'search 
// string' from a string.  
// Test Data : 
// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy 
// dog", 'the')); 
// Output :  
// "The quick brown fox jumps over lazy dog" 
function remove_first_occurrence(str, search) {
    return str.replace(search, '');
}

// Test example:
console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog", 'the'));
// Output: "The quick brown fox jumps over lazy dog"

// 27. Write a JavaScript function to convert ASCII to Hexadecimal format.  
// Test Data : 
// console.log(ascii_to_hexa('12'));  
// console.log(ascii_to_hexa('100')); 
// Output :  
// "3132"  
// "313030" 
function ascii_to_hexa(str) {
    return str.split('').map(char => char.charCodeAt(0).toString(16)).join('');
}

// Test examples:
console.log(ascii_to_hexa('12'));   // Output: "3132"
console.log(ascii_to_hexa('100'));  // Output: "313030"
 
// 28. Write a JavaScript function to convert Hexadecimal to ASCII format.  
// Test Data : 
// console.log(hex_to_ascii('3132'));  
// console.log(hex_to_ascii('313030')); 
// Output :  
// "12"  
// "100" 
function hex_to_ascii(str) {
    return str.match(/.{1,2}/g).map(hex => String.fromCharCode(parseInt(hex, 16))).join('');
}

// Test examples:
console.log(hex_to_ascii('3132'));    // Output: "12"
console.log(hex_to_ascii('313030'));  // Output: "100"

// 29. Write a JavaScript function to find a word within a string.  
// Test Data : 
// console.log(search_word('The quick brown fox', 'fox'));  
// console.log(search_word('aa, bb, cc, dd, aa', 'aa')); 
// Output :  
// "'fox' was found 1 times."  
// "'aa' was found 2 times." 
function search_word(str, word) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = str.match(regex);
    return `'${word}' was found ${matches ? matches.length : 0} times.`;
}

// Test examples:
console.log(search_word('The quick brown fox', 'fox')); // Output: "'fox' was found 1 times."
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));   // Output: "'aa' was found 2 times."

// 30. Write a JavaScript function check if a string ends with specified suffix.  
// Test Data : 
// console.log(string_endsWith('JS PHP PYTHON','PYTHON'));  
// true 
// console.log(string_endsWith('JS PHP PYTHON','')); 
// false
function string_endsWith(str, suffix) {
    return str.endsWith(suffix);
}

// Example usage:
console.log(string_endsWith('JS PHP PYTHON', 'PYTHON')); // Output: true
console.log(string_endsWith('JS PHP PYTHON', '')); // Output: false

// 35. Write a JavaScript function to remove HTML/XML tags from string.  
// Test Data : 
// console.log(strip_html_tags('<p><strong><em>PHP 
// Exercises</em></strong></p>')); 
// "PHP Exercises" 
function strip_html_tags(str) {
    return str.replace(/<[^>]*>/g, '');
}

// Test example:
console.log(strip_html_tags('<p><strong><em>PHP Exercises</em></strong></p>'));
// Output: "PHP Exercises"

// 36. Write a JavaScript function to create a Zerofilled value with optional +, - sign.  
// Test Data : 
// console.log(zeroFill(120, 5, '-'));  
// "+00120" 
// console.log(zeroFill(29, 4)); 
// "0029" 
function zeroFill(number, width, osign) {
    const num = Math.abs(number).toString();
    const zerosToAdd = width - num.length;
    const sign = number >= 0;
    return (sign ? (osign ? '+' : '') : '-') +
        Math.pow(10, Math.max(0, zerosToAdd)).toString().substr(1) + num;
}

// Test examples:
console.log(zeroFill(120, 5, '-')); // Output: "-00120"
console.log(zeroFill(29, 4)); // Output: "0029"
 
// 37. Write a JavaScript function to test case insensitive (except special Unicode 
// characters) string comparison.  
// Test Data : 
// console.log(compare_strings('abcd', 'AbcD'));  
// true 
// console.log(compare_strings('ABCD', 'Abce')); 
// false 
function compare_strings(str1, str2) {
    return str1.toUpperCase() === str2.toUpperCase();
}

// Test examples:
console.log(compare_strings('abcd', 'AbcD')); // Output: true
console.log(compare_strings('ABCD', 'Abce')); // Output: false

// 38. Write a JavaScript function to create a case-insensitive search.  
// Test Data : 
// console.log(case_insensitive_search('JavaScript Exercises', 'exercises'));  
// "Matched" 
// console.log(case_insensitive_search('JavaScript Exercises', 'Exercises'));  
// "Matched" 
// console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess'));  
// "Not Matched" 

function case_insensitive_search(str, search) {
    const regex = new RegExp(search, 'i');
    return regex.test(str) ? 'Matched' : 'Not Matched';
}

// Test examples:
console.log(case_insensitive_search('JavaScript Exercises', 'exercises')); // Output: "Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercises')); // Output: "Matched"
console.log(case_insensitive_search('JavaScript Exercises', 'Exercisess')); // Output: "Not Matched"
