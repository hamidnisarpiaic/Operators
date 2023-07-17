"use strict";
let e = 5;
console.log(e >= 5 && e < 10); // true
// Explanation: e is equal to 5, so e >= 5 is true. e is also less than 10, so e < 10 is true.
// The logical AND operator (&&) requires both conditions to be true for the overall expression to be true.
// Therefore, the output is true.
console.log(e > 5 && e < 10); // false
// Explanation: e is equal to 5, so e > 5 is false. The logical AND operator (&&) requires both conditions to be true,
// but one of them (e > 5) is false. Therefore, the output is false.
console.log(e >= 5 || e < 10); // true
// Explanation: e is equal to 5, so e >= 5 is true. The logical OR operator (||) requires at least one condition to be true
// for the overall expression to be true. Since the first condition (e >= 5) is true, the overall expression is true.
// Therefore, the output is true.
console.log(e > 5 || e < 10); // true
// Explanation: e is equal to 5, so e > 5 is false. The logical OR operator (||) requires at least one condition to be true.
// Since the second condition (e < 10) is true, the overall expression is true.
// Therefore, the output is true.
console.log(!(e < 10)); // false
// Explanation: The expression (e < 10) evaluates to true because e is equal to 5, which is less than 10.
// The logical NOT operator (!) negates the value of the expression.
// Since (e < 10) is true, the negation results in false.
// Therefore, the output is false.
console.log(!(e > 10)); // true
// Explanation: The expression (e > 10) evaluates to false because e is equal to 5, which is not greater than 10.
// The logical NOT operator (!) negates the value of the expression.
// Since (e > 10) is false, the negation results in true.
// Therefore, the output is true.
