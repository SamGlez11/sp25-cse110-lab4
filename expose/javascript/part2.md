# 1. What will happen at line 12 and why? If the code causes an error, explain why. 
At line 12, "3" will be printed. No error is thrown. This is because line 12 prints the value of i after the for loop is done executing, which will end up being the length of `prices` ([100, 200, 300] has a length of 3). i starts at 0, then it reaches 2, which still satisfies the condition (i < prices.length); however, after it is incremented one more time to 3, the for loop is done executing and i holds a value of 3 which is printed on line 12.

# 2. What will happen at line 13 and why? If the code causes an error, explain why. 
At line 13, "150" will be printed. No error is thrown. This is because line 13 prints the value of discountedPrice which is of type `var`. Because it is a `var` it has function-scope and it is accesible outside the for loop. Thus, on the last iteration of the for loop that updates discountedPrice, discountedPrice will be set to 150, (a 50 percent discount on 300 is 150) and 150 is printed with no error because discountedPrice is accessible by line 13.

# 3. What will happen at line 14 and why? If the code causes an error, explain why.
At line 14, "150" will be printed. No error is thrown. This is because line 14 prints the value of finalPrice, which is of type `var`. Because it is a `var` it has function-scope and it is accesible outside the for loop. Thus, on the last iteration of the for loop that updates finalPrice, finalPrice will be set to 150, (final price of a 50 percent discount on 300 is 150) and 150 is printed with no error because finalPrice is accessible by line 14.

# 4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
This function returns an array [50, 100, 150]. No error is thrown. The function take an array [100, 200, 300] and a discount to be applied, .5. For each price in the array the discount is applied, finalized and then pushed into a new array. This new array (once all prices have been discounted from the original array and added to the new one) is then returned. 

# 5. What will happen at line 12 and why?  If the code causes an error, explain why.
The following error is thrown:

"/workspaces/Lab4_Starter/scripts/testing.js:12
  console.log(i);
              ^

ReferenceError: i is not defined
    at discountPrices (/workspaces/Lab4_Starter/scripts/testing.js:12:15)
    at Object.<anonymous> (/workspaces/Lab4_Starter/scripts/testing.js:19:1)
    at Module._compile (node:internal/modules/cjs/loader:1529:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1613:10)
    at Module.load (node:internal/modules/cjs/loader:1275:32)
    at Module._load (node:internal/modules/cjs/loader:1096:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49"

This error is thrown because in question 5, the variable i is defined using `let`, which does not have the scope necessary for it to be accessed outside of the if-block. Thus, i cannot be referenced outside of the if-block, and when we try to print it, an error is thrown.

# 6.  What will happen at line 13 and why? If the code causes an error, explain why. 
The following error is thrown:

"/workspaces/Lab4_Starter/scripts/testing.js:13
  console.log(discountedPrice);
              ^

ReferenceError: discountedPrice is not defined
    at discountPrices (/workspaces/Lab4_Starter/scripts/testing.js:13:15)
    at Object.<anonymous> (/workspaces/Lab4_Starter/scripts/testing.js:19:1)
    at Module._compile (node:internal/modules/cjs/loader:1529:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1613:10)
    at Module.load (node:internal/modules/cjs/loader:1275:32)
    at Module._load (node:internal/modules/cjs/loader:1096:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49"

This error is thrown because, similar to question #5, discountPrice is declared using let, meaning that if we try to access it outside of its scope, as we did with the print statement in line 13, a **ReferenceError** will be thrwon because we dont have access or a reference to discountPrice.

# 7.  What will happen at line 14 and why? If the code causes an error, explain why
No error is thrown. At line 14, 150 will be printed. At the very beginning of the function, finalPrice is declared using let, meaning that the scope for finalPrice is anywhere in the whole function. Thus, the final execution of finalPrice will be printed without error, which happens to be 150 (50 percent of 300).

# 8. What will this function return? Give a brief explanation. If the code causes an error, explain why.
The function will return an array [50, 100, 150] without any errors. The array [100, 200, 300] is taken, and a discount .5 is taken and applied as well. After the original array is discounted, its new values are stored in the new array discounted, which is returned with values [50, 100, 150]. Variables properly declared thus no errors.

# 9. What will happen at line 11 and why? If the code causes an error, explain why. 
The following error is thrown:

"/workspaces/Lab4_Starter/scripts/testing.js:11
  console.log(i);
              ^

ReferenceError: i is not defined
    at discountPrices (/workspaces/Lab4_Starter/scripts/testing.js:11:15)
    at Object.<anonymous> (/workspaces/Lab4_Starter/scripts/testing.js:17:1)
    at Module._compile (node:internal/modules/cjs/loader:1529:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1613:10)
    at Module.load (node:internal/modules/cjs/loader:1275:32)
    at Module._load (node:internal/modules/cjs/loader:1096:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49"

The variable i is declared using `let` within the for loop so its scope is only within this block. i is not accessible outside of the block so when line 11 tries to access it, a **ReferenceError** is thrown because its is trying to be access outside of its scope.

# 10. What will happen at line 12 and why? If the code causes an error, explain why.
No error is thrown. "3" is printed. `length` is declared as a constant with prices.length as its value (which is 3 [100, 200, 300]). Because this constant is declared at the top of the function, its scope is anywhere within the function, thus no error is thrown when we try to print the value again within the same function. Additionally, the value is never updated, and because it is a constant this is good, as it will throw no error.

# 11. What will this function return? Give a brief explanation. If the code causes an error, explain why.
No error is thrown. An array [50, 100, 150] is returned. We know the discount functionality works as intended (50 percent discount on the array [100, 200, 300] leads to the stated return value). This works because all constants are not updated after declaration adn are declared at the beginning of the function, meaning their scope lies within the whole function. Furthermore, all other variables are properly declared and handled giving [50, 100, 150] as the return with no errors.

# 12. Given the above Object, write the notation for:  (These should be in your part2.md)
A. Accessing the value of the name property in the student object
- student.name

B. Accessing the value of the Grad Year property in the student object
- student['Grad Year']

C. Calling the function for the greeting property in the student object
- student.greeting()

D. Accessing the name property of the object in the Favorite Teacher property in student
- student['Favorite Teacher'].name

E. Access index zero in the array of the courseLoad property of the student object
- student.courseLoad[0]

# 13. Arithmetic
A. '3' + 2
- '32' : When `+` is used on string concatenation occurs, and 2 is just converted to '2' to allow concatenation, '3' + '2' = '32'

B. '3' - 2
- 1 : `-` only works with numbers, '3' is converted to 3, and 3 - 2 = 1

C. 3 + null
- 3 : With arithmetic, null turns into 0, 3 + 0 = 3

D. '3' + null
- '3null' : `+` when used on strings does concatenation, null is converted to 'null', '3' + 'null' = '3null'

E. true + 3
- 4 : in arithmetic, true converts to 1, 1 + 3 = 4

F. false + null
- 0 : in arithmetic, false converts to 0, null converts to 0, 0 + 0 = 0

G. '3' + undefined
- '3undefined' : `+` when used on strings does concatenation, undefined is converted to 'undefined', '3' + 'undefined' = '3undefined'

H. '3' - undefined
- 'NaN' : `-` tries to convert both terms to numbers, '3' turns into 3, undefined turns into NaN (Not a Number), because we have NaN any arithmetic done with it will result in NaN

# 14. Comparison
A. '2' > 1
- true : When comparing different types, JS turns them into numbers, '2' turns into 2, 2 > 1 -> true

B.'2' < '12'
- false : When comparing strings, JS compares lexographically, '2' comes after '1', thus '2' < '12' -> false

C. 2 == '2'
- true : `==` does type conversion, '2' becomes 2, 2 == 2 -> true

D. 2 === '2'
- false : `===` checks for equality (no type conversion), because '2' is a string and 2 is a number they are not equal, so 2 === '2' -> flase

E. true == 2
- false : `==` does type conversion, true becomes 1, 1 == 2 -> false

F. true === Boolean(2)
- true : Boolean(2) becomes true because any non-zero number is considered true in boolean, so true === true -> true

# 15. Explain the difference between the == and === operators.
- `==` : performs type conversion and checks for equality after type conversion
- `===` : **Does not perform type conversion**, verifies equality in type AND value

# 16. Different file (part2-question16.js)

# 17. If the function above is called with the following parameters modifyArray([1,2,3], doSomething), what will be the result? Briefly walk through how you arrived at that result. (This should be in your part2.md). Here we are passing in a function as a parameter, however we can also return a function from another function just as easily, you're encouraged to play around with callbacks as they are used heavily in frontend JS development. 
The result will be [2, 4, 6]
1. `array` parameter receives [1, 2, 3]
2. `callback` parameter receives `doSomething`
3. Now, within `modifyArray`:
   - `newArr` is made
   - loops through input array
   - for each element, call `callback(array[i])` which is `doSomething(num)
       - doSomething(1) returns 2
       - doSomething(2) returns 4
       - doSomething(3) returns 6
    - each result is pushed to `newArr`
4. [2, 4, 6] is returned
