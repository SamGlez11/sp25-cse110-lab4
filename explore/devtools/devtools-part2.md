# 1. What was the bug?
The bug is that when `calculateSum(num1, num2)` uses the `+` operator, to "add" `num1` and `num2`, JavaScript is doing concatenation rather than addition/arithmetic. This is happening because when we get `num1` and `num2` using `.value` we are getting the string value rather than the number. That is why `+` is doing concatenation rather than addition, once it is used to add num1 and num2


# 2. How would you fix it? Include a screenshot of your fix. Name it fix.png (or whatever image extension you would like to use) and add it to your expand/screenshots directory.
