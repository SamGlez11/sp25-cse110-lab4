# 1. What is printed by line 9? If the code returns an error, explain why.
Line 9 prints: "values added: 20". No error is thrown. This is printed because num1 = 10, num2 = 10, and add = true, thus result will be 10 + 10 = 20 and  "values added: 20" is then printed after computation.

# 2. What is printed by line 13? If the code returns an error, explain why. 
Line 13 prints: "final result: 20". No error is thrown. This is printed because the result is of type `var`, so after the "if" block executes and "values added: 20" is printed, the result `var` remains accessible outside of the if-block; thus, line 13 can access the result of value 20 to print "final result: 20".

# 3. Why should you not use var? Explain why. 
There are multiple reasons not to use `var`. One reason is that it has an unideal scope behavior (function scope), meaning that no matter where in a function `var` is defined, it will remain accessible within the whole function (as we saw in number 2), not just the block it is defined in. We also have hoisting issues where, when a `var` is assigned, it is "hoisted" to the top, meaning that even though the `var` is not declared in a function yet, it can still appear. A third reason is that `var` allows you to declare the same variable multiple times (might cause unwanted overrides). While there may be more reasons not to use `var`, I believe these are more than enough to demonstrate why we should not use it.

# 4. What is printed by line 9? If the code returns an error, explain why.
Line 9 prints: "values added: 20". No error is thrown. The logic is similar to the logic of #1, thus line 9 within the if-block executes correctly and prints "values added: 20".

# 5. What is printed by line 13? If the code returns an error, explain why. 
The following error is thrown:

`/workspaces/Lab4_Starter/scripts/testing.js:13
  console.log('final result: ', result);
                                ^

ReferenceError: result is not defined
    at sumValues (/workspaces/Lab4_Starter/scripts/testing.js:13:33)
    at Object.<anonymous> (/workspaces/Lab4_Starter/scripts/testing.js:16:1)
    at Module._compile (node:internal/modules/cjs/loader:1529:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1613:10)
    at Module.load (node:internal/modules/cjs/loader:1275:32)
    at Module._load (node:internal/modules/cjs/loader:1096:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49`

Nothing is printed, the **ReferenceError** is thrown because now that result is of type `let` it has "block-scope" rather than "function-scope" meaning it can only be accessed in the if-block; therefore, when line 13 executes, result is no longer in the scope, there is no reference to it, it will not be found, and the error is thrown.

# 6. What is printed by line 9? If the code returns an error, explain why.
The following error is thrown:

"/workspaces/Lab4_Starter/scripts/testing.js:7
    result = num1 + num2;
           ^

TypeError: Assignment to constant variable.
    at sumValues (/workspaces/Lab4_Starter/scripts/testing.js:7:12)
    at Object.<anonymous> (/workspaces/Lab4_Starter/scripts/testing.js:16:1)
    at Module._compile (node:internal/modules/cjs/loader:1529:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1613:10)
    at Module.load (node:internal/modules/cjs/loader:1275:32)
    at Module._load (node:internal/modules/cjs/loader:1096:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:164:12)
    at node:internal/main/run_main_module:28:49"

Nothing is printed, the **TypeError** is thrown because resutl is now a `const` meaning that once it is declared its value cannot change (or else an error is thrown), so when its value is updated in line 7 afte rbeing declared the **TypeError** is thrown. Line 7 triggers the error and line 9 is not reached.

# 7. What is printed by line 13? If the code returns an error, explain why. 
Line 13 does not execute. Because an error is thrown after line 7, line 13 is not reached. Instead, all we see is the error from line 7 (see #6 for details) and no print statement or error from line 13. If the code was to reach line 13 somehow, though, it would throw **ReferenceError** similar to #5.
