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
 
