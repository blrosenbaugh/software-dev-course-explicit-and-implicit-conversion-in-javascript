/*

Debugging Type Conversions:

After running the given code, the output shows:

The result is: 3
This is valid!
Total Age: 255

Fix 1-
I'm not certain exactly what there is to fix on this one, seeing as it printed:
"The result is: 3"
Which I would've expected. I'm not sure what other outcome was trying to be achieved here. The "5" is a string, and with my understanding of implicit conversion,
I was under the understanding that for subraction, Javascript converts strings to numbers. Therefore it would be 5-2=3.

I suppose if you wanted to be explicit in your coding, or if for whatever reason you received a different result, you could:
let result = Number("5") - 2; 
console.log("The result is: " + result); // Output: The result is: 3 (here we explicity converted 5 to a number)

Fix 2- 
Boolean("false") returns true because it's a non-empty string
// Correct approach: Use a strict comparison to "false" string
let isValid = Boolean("false"); // Still true because "false" is a non-empty string

let revisedIsValid = ("false" === "true");
if (revisedIsValid) {
    console.log("This is valid!"); // This will not print
}

Fix 3- 
This piece of code is concatanating 25 and 5 because its turning 5 into a string and mushing them together instead of adding the sum.
We'll need to convert 'age' to a number before addition to avoid this.

let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge); // Output: Total Age: 30

Examples of Type Conversion-

Implicit Type Conversion
let implicitExample = "5" * 2; // "5" is implicitly converted to a number
console.log(implicitExample); // Output: 10

Explicit Type Conversion
let explicitExample = Number("10"); // Explicitly converting string to number
console.log(explicitExample); // Output: 10

Edge Case: Converting NaN
let edgeCaseNaN = Number("Hello"); // This results in NaN
console.log(edgeCaseNaN); // Output: NaN

*/


let result = Number("5") - 2; 
console.log("The result is: " + result);

let revisedIsValid = ("false" === "true");
if (revisedIsValid) {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5;
console.log("Total Age: " + totalAge);

let implicitExample = "5" * 2;
console.log(implicitExample);

let explicitExample = Number("10");
console.log(explicitExample);

let edgeCaseNaN = Number("Hello");
console.log(edgeCaseNaN);
