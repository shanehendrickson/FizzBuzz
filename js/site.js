//get values from the user. need to get fizz and buzz values.
function getValues() {

  //get the user values from the page
  let fizzValue = document.getElementById("fizzValue").value;
  let buzzValue = document.getElementById("buzzValue").value;

  //parse for numbers - turns string into integer
  fizzValue = parseInt(fizzValue);
  buzzValue = parseInt(buzzValue);
  
  //check that the numbers are integers
  if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

    //call fizzBuzz function
    let fbArray = fizzBuzz(fizzValue, buzzValue);

    //call displayData and write the values to the screen
    displayData(fbArray);
  } else {
    alert("You must enter integers.")
  }
}

//do fizz buzz
function fizzBuzz(fizzValue, buzzValue) {
  let returnArray = [];
  
  //loop from 1 to 100
  for(let i = 1; i <= 100; i++) {

    //check value against fizzbuzz: both, either, neither and push result to the array  
    if(i % fizzValue == 0 && i % buzzValue == 0) {
      returnArray.push("FizzBuzz");
    } else if(i % fizzValue == 0) {
      returnArray.push("Fizz");
    } else if(i % buzzValue == 0) {
      returnArray.push("Buzz");
    } else {    
      returnArray.push(i);
    }
  }
  return returnArray;
}


//loop over the array and create a tablerow for each item
function displayData(fbArray) {

  //get the table body element from the page
  let tableBody = document.getElementById("results");

  //get the template row
  let templateRow = document.getElementById("fbTemplate");

  //clear table first
  tableBody.innerHTML = "";

  for(let index = 0; index <fbArray.length; index += 5) {
    
    //import copy of the temlate tag from the page into memory
    let tableRow = document.importNode(templateRow.content, true);

    //grab the tds from the table to put into the array
    let rowCols = tableRow.querySelectorAll("td")
    rowCols[0].textContent = fbArray[index];
    rowCols[1].textContent = fbArray[index+1];
    rowCols[2].textContent = fbArray[index+2];
    rowCols[3].textContent = fbArray[index+3];
    rowCols[4].textContent = fbArray[index+4];

    tableBody.appendChild(tableRow);
  }
}

