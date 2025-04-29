# 1. What will happen at line 12 and why? If the code causes an error, explain why. 
At line 12, "3" will be printed. No error is thrown. This is because line 12 prints the value of i after the for loop is done executing, which will end up being the length of `prices` ([100, 200, 300] has a length of 3). i starts at 0, then it reaches 2, which still satisfies the condition (i < prices.length); however, after it is incremented one more time to 3, the for loop is done executing and i holds a value of 3 which is printed on line 12.

# 2. What will happen at line 13 and why? If the code causes an error, explain why. 
At line 13, "150" will be printed. No error is thrown. This is because line 13 prints the value of discountedPrice which is of type `var`. Because it is a `var` it has function-scope and it is accesible outside the for loop. Thus, on the last iteration of the for loop that updates discountedPrice, discountedPrice will be set to 150, (a 50 percent discount on 300 is 150) and 150 is printed with no error because discountedPrice is accessible by line 13.

# 3. What will happen at line 14 and why? If the code causes an error, explain why.
At line 14, "150" will be printed. No error is thrown. This is because line 14 prints the value of finalPrice, which is of type `var`. Because it is a `var` it has function-scope and it is accesible outside the for loop. Thus, on the last iteration of the for loop that updates finalPrice, finalPrice will be set to 150, (final price of a 50 percent discount on 300 is 150) and 150 is printed with no error because finalPrice is accessible by line 14.

# 4. What will this function return? Give a brief explanation why. If the code causes an error, explain why.
This function returns an array [50, 100, 150]. No error is thrown. The function take an array [100, 200, 300] and a discount to be applied, .5. For each price in the array the discount is applied, finalized and then pushed into a new array. This new array (once all prices have been discounted from the original array and added to the new one) is then returned. 

# 5. What will happen at line 12 and why?  If the code causes an error, explain why.
