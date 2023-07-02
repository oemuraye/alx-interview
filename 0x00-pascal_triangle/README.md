**0x00-pascal_triangle**

Pascal’s Triangle is a kind of number pattern. Pascal’s Triangle is the triangular arrangement of numbers that gives the coefficients in the expansion of any binomial expression. The numbers are so arranged that they reflect as a triangle. Firstly, 1 is placed at the top, and then we start putting the numbers in a triangular pattern. The numbers which we get in each step are the addition of the above two numbers. It is similar to the concept of triangular numbers.

  Pascal’s Triangle Properties
* Each number is the sum of the two numbers above it.
* The outside numbers are all 1.
* The triangle is symmetric.
* The first diagonal shows the counting numbers.
* The sums of the rows give the powers of 2.
* Each row gives the digits of the powers of 11.
* Each entry is an appropriate “choose number.”
* And those are the “binomial coefficients.”
* The Fibonacci numbers are there along diagonals.

  Algorithm:
* Take a number of rows to be printed, lets assume it to be n
* Make outer iteration i from 0 to n times to print the rows.
* Make inner iteration for j from 0 to (N – 1).
* Print single blank space ” “.
* Close inner loop (j loop) //its needed for left spacing.
* Make inner iteration for j from 0 to i.
* Print nCr of i and j.
* Close inner loop.
* Print newline character (\n) after each inner iteration

* ![Pascals-Triangle-1](https://github.com/oemuraye/alx-interview/assets/76441493/862abb17-e111-43e7-a33b-810587957b1e)
