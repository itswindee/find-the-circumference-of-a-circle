# find-the-circumference-of-a-circle

This is a simple program that prompts the user to enter the radius of a circle and it will return back the circumference.

First, I assigned const to pi to ensure that pi remains the same value throughout the whole code. This is to make sure we don't accidentally reassign pi to a different value later in the program which would give us the wrong circumference.

When the "submit" button gets clicked on:
1. Javascript will take in the user input from the textbox
2. Convert the user input into a number (because originally, it took in a string and we need to change that into a number in order to do the caculation)
3. We calculate the circumference by the formula+ 2 * pi * radius
4. I have added an H3 element at the end that will change that text into the answer after we have finished doing the calculation.
