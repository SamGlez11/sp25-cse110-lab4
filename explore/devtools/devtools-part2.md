# 1. What was the bug?
The bug is that when `calculateSum(num1, num2)` uses the `+` operator, to "add" `num1` and `num2`, JavaScript is doing concatenation rather than addition/arithmetic. This is happening because when we get `num1` and `num2` using `.value`, we are getting the string value rather than the number. That is why `+` is doing concatenation rather than addition, once it is used to add num1 and num2.


# 2. How would you fix it? Include a screenshot of your fix. Name it fix.png (or whatever image extension you would like to use) and add it to your expand/screenshots directory.
In order to fix this bug I would convert `num1` and `num2` into their number representation (from the string value that we are getting). This can be done using the `Number()` function *(EX: Number(num1) -> gets number representation of num1, Number(num2) ->gets number representation of num2, we can then add these together to get result)*. The screenshot titled "fix.png" in expand/screenshots demonstrates how I implemented this bug fix.
