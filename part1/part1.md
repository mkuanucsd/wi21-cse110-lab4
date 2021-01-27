1. Prints the length of prices array because it is in the right scope and
   iterates through the loop.
   
   Output: 3

2. Prints the discountedPrice of the last index of prices array because
   the variables are in the right scope and it keeps the last calculation of
   prices[i] * (1 - discount).
   
   Output: 150

3. It will give the finalPrice of the last element in prices or 
  the last element in discounted array because finalPrices is assigned
  "Math.round(discountedPrice * 100) / 100".
  
  Output: 150

4. [ 50, 100, 150 ] because the function will calculate the discounted prices of
  each element in prices array. When iterating through the elements of the
  prices array, it would perform 
  "let discountedPrice = prices[i] * (1 - discount);", then
  "finalPrice = Math.round(discountedPrice * 100) / 100;", and finally store it
  push it into the finalPrice array, which will then get returned.

5. ReferenceError: i is not defined. This is because "let" creates a variable
  that is block scoped, but "var" creates a variable that is function scoped.
  i is in the block of the for loop.

6. ReferenceError: discountedPrice is not defined. This is because "let" 
  creates a variable that is block scoped, but "var" creates a variable that is
  function scoped. discountedPrice is in the block of the for loop.

7. It will give the finalPrice of the last element in prices or 
  the last element in discounted array because finalPrices is assigned
  "Math.round(discountedPrice * 100) / 100". This still works because finalPrice
  is within the scope of the call.

  Output: 150

8. [ 50, 100, 150 ] because the function will calculate the discounted prices of
  each element in prices array. When iterating through the elements of the
  prices array, it would perform 
  "let discountedPrice = prices[i] * (1 - discount);", then
  "finalPrice = Math.round(discountedPrice * 100) / 100;", and finally
  push it into the finalPrice array, which will then get returned.

9. It will return ReferenceError: i is not defined. This is because i is not
  defined in the scope of the function. Even if you remove, "console.log(i)",
  you will still get an error from "console.log(discountedPrice)" because it is
  not within the scope of the call. To answer this, ReferenceError because i is
  not in the scope of the call, it was declared in the for loop.

10. If the for loop were to not run successfully, we would run
  into "TypeError: Assignment to constant variable" because we would get
  because finalPrice is a "const". If finalPrice was not "const" and was
  "var" or "let", then the output would  still be a problem because
  discountedPrice is still in the scope of the for loop.

11. TypeError: Assignment to constant variable. This is because you are changing
  the "const" variable finalPrice.

12. TypeError: Assignment to constant variable, which is caused by the 
  reassignment of a "const" variable. If discountedPrice was not printed and
  finalPrice were set to "let" or "var", then the function would return
  [ 50, 100, 150 ].

13. 
  A. student.name
  B. student["Grad Year"]
  C. student.greeting()
  D. student["Favorite Teacher"].name
  E. student.courseLoad[0]

14. 
  A. '32', this performs a string concatenation because the first type was a
    string and it was a "+" sign, which means it implies concatenation
  B. 1, this performs subtraction. Although there is a string at the start,
    there is no such thing as string subtraction.
  C. 3, this is because null will imply 0 if it is not a string and since the
    first value was an integer.
  D. '3null', 3 was a string so it would convert null to a string and
    concatenate.
  E. 4, because true would imply 1 when adding with another integer value.
  F. 0, false implies 0 because there is addition performed and null would imply
    0.
  G. '3undefined', the first value was a string so it implies that it would be
    string concatenation with "undefined" which is another string. The "+" sign
    also implied concatenation instead of addition, so it converted "undefined"
    to a string
  H. NaN, it is impossible to perform subtraction with undefined because it
    does not result in a value.

15. 
  A. true, the string '2' becomes a number 2 and this makes it true since 2 > 1.
  B. false, the first character on the first string is '2', while the first 
    character on the second string is '1', so it is less.
  C. true, this convert '2' to the number 2 and so it makes it true since 
    2 == 2.
  D. false, this is because triple equals compares both the value and type.
    Since, the left side is an integer and the right side is a string, it
    returns false.
  E. false, this is because true would imply the value 1, but 1 is not equal to
    2.
  F. true, because we are comparing the same type and value. A value is true 
    for booleans if it is not equal to 0 and since we type cast to boolean, it 
    is of the same type.

16. "==" compares the value of the two compared "elements" which means it allows
  implicit conversion, while "===" does not allow implicit type conversion.
    
  "===" requires that the values and types be the same to return true, while
  "==" requires that the values be the same to return true.

17. "How are you?", because 2 does not equal 1 (from the first if statement) and
    the second statement does an implied conversion "Boolean(2)" which returns
    true, so it will print "How are you?"

19. [ 6, 8, 10]

    The function creates a new array. Then, it will iterate 3 times, where it
    calls the callback function (doSomething). This is like a function in a 
    function. 
    
    On the first iteration,
    When "callback(array[i], function(x) {...} )" is called, it will
    call doSomething(1, function(x)), which will run
    "return function(1 + 2)", then jumping back to line 4 and 5, which will run
    function (3), which returns "3 * 2", so it will push 6 into newArr.

    This process will do the same for the second iteration and the third
    iteration. 
    
    The second iteration: function(2+2), then, return 4 * 2, then push into
    newArr.

    The third iteration: function(3 + 2), then return 5 * 2, then push into
    newArr.

21. 1
  4
  3
  2