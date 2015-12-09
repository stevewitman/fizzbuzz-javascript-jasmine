var FizzBuzz = require('../src');

describe("for_number()", function() {
  
  it("returns the string of the number when provided 1 as input", function() {
    expect(FizzBuzz.for_number(1)).toEqual("1");
  });

  it("returns the string of the number when provided 2 as input", function() {
    expect(FizzBuzz.for_number(2)).toEqual("2");
  });

  it("returns the word 'fizz' when provided 3 as input", function() {
    expect(FizzBuzz.for_number(3)).toEqual("fizz");
  });

  it("returns the word 'buzz' when provided 5 as input", function() {
    expect(FizzBuzz.for_number(5)).toEqual("buzz");
  });

  it("returns the word 'fizz' when provided a multiple of 3", function() {
    expect(FizzBuzz.for_number(6)).toEqual("fizz");
  });

  it("returns the word 'buzz' when provided a multiple of 5", function() {
    expect(FizzBuzz.for_number(10)).toEqual("buzz");
  });

  it("returns the phrase 'fizz buzz' when provided a multiple of both 3 and 5", function() {
    expect(FizzBuzz.for_number(15)).toEqual("fizz buzz");
  });

  it("for all other numbers it returns the number as a string", function() {
    expect(FizzBuzz.for_number(7)).toEqual("7");
  });
});

describe("print_to()", function() {
  it("returns a string with fizz-buzz values for each number from one up to n", function() {
    expect(FizzBuzz.print_to(10)).toEqual("1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz");
    // expect(FizzBuzz.print_to(7)).toEqual("1, 2, fizz, 4, buzz, fizz, 7");
  });
});

describe("print_between()", function() {
  it("returns a string with fizz-buzz values for each number from n1 to n2", function() {
    expect(FizzBuzz.print_between(3,9)).toEqual("fizz, 4, buzz, fizz, 7, 8, fizz");
  });
});
















// for_number(n) 

//   Input   Output
//   -----   ------
//     1     "1"
//     2     "2"
//     3     "fizz"
//     4     "4"
//     5     "buzz"
//     6     "fizz"
//     7     "7"
//     8     "8"
//     9     "fizz"
//     10    "buzz"
//     11    "11"
//     12    "fizz"
//     13    "13"
//     14    "14"
//     15    "fizz buzz"
//     16    "16"
//     17    "17"
//     18    "fizz"
//     19    "19"
//     20    "buzz"







