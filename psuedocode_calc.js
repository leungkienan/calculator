let count = 0;
let calcArr = [];

startCalc();

function startCalc() {
  document.addEventListener("click", buttonPress);
  console.log("js initialised");
}

// when a button is clicked, call a function that checks what button is pressed and go through the methods
function buttonPress() {
  let val = event.target.value;
  if (!isNaN(val) || val == ".") {
    inputValue(val);
  } else if (val == "AC") {
    clearAC();
  } else if (val == "CE") {
    clearCE();
  } else if (val == "=") {
    calcValue();
  } else {
    storeValue(val);
  }
}

// if a number is pressed, store the value to "val" and display that number on the screen as a string
function inputValue(num) {
  calcArr.push(num);
  console.log(calcArr);
  console.log("The number " + num + " button works ");
}

// if the ac button is pressed
// reset the entries and temp data variables so they are empty and the totals to 0
// display the value (0)
function clearAC() {
  calcArr = [];
  console.log(calcArr);
}
// if ce is pressed
// clears the previous entry from the screen
// set temp to '' and display the value 0
function clearCE() {
  // will clear the number you last entered
  calcArr.pop();
  console.log(calcArr);
}

function storeValue(symbol) {
  if (symbol == "*") {
    calcArr.push(symbol);
    console.log(calcArr);
  }
}
// multiply is pressed
// push a value "temp" to the entries array
// then push a *, so the array looks like entries = [temp, *]
// set temp to be empty so more entries can be made

// divide symbol
// same as above, but push '/' instead

function calcValue() {
  // turn the values in the array to nums
  // do the correct operations depending on what buttons are pressed
  // e.g. 6+7 should = 13
  // challenge is for the calculator to do bedmas?
  // e.g. takes the numbers before and after the "x" and multiply them
}
// equals symbol
// push temp to entries array
// sets var nt to the the first number of the entries array
// loops to check what the content of the array are and sets them to nums and symbols
// if a + is recognised, then the var nt is added with nextNum
// and soon for the other values

// if the number inputted has a '-' in front (negative number)
// if nt < 0
// set the value nt to an absolute value and add a - sign at the end
// call answer, with a value of nt (negative number now)
// clear entries and temp
// is the number negative?
// recognise that as a negative and set it to a variable
// call that new variable as a valid entry

// pushing numbers
// otherwise if nt isnt negative, push the temp and val into entries and clear temp
