let e = 5;

console.log(e >= 5 && e < 10); // true
// Explanation: e is equal to 5. The condition e >= 5 is true because e is greater than or equal to 5.
// The condition e < 10 is also true because e is less than 10.
// The logical AND operator (&&) requires both conditions to be true for the overall expression to be true.
// Therefore, the output is true.

console.log(e > 5 && e < 10); // false
// Explanation: e is equal to 5. The condition e > 5 is false because e is not greater than 5.
// The condition e < 10 is true because e is less than 10.
// The logical AND operator (&&) requires both conditions to be true for the overall expression to be true.
// Since one of the conditions (e > 5) is false, the output is false.

console.log(e >= 5 || e < 10); // true
// Explanation: e is equal to 5. The condition e >= 5 is true because e is greater than or equal to 5.
// The logical OR operator (||) requires at least one condition to be true for the overall expression to be true.
// Since the first condition (e >= 5) is true, the overall expression is true.
// Therefore, the output is true.

console.log(e > 5 || e < 10); // true
// Explanation: e is equal to 5. The condition e > 5 is false because e is not greater than 5.
// The condition e < 10 is true because e is less than 10.
// The logical OR operator (||) requires at least one condition to be true for the overall expression to be true.
// Since the second condition (e < 10) is true, the overall expression is true.
// Therefore, the output is true.

console.log(!(e < 10)); // false
// Explanation: e is equal to 5. The condition e < 10 is true because e is less than 10.
// The logical NOT operator (!) negates the value of the expression.
// Since (e < 10) is true, the negation results in false.
// Therefore, the output is false.

console.log(!(e > 10)); // true
// Explanation: e is equal to 5. The condition e > 10 is false because e is not greater than 10.
// The logical NOT operator (!) negates the value of the expression.
// Since (e > 10) is false, the negation results in true.
// Therefore, the output is true.
