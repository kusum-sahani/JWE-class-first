
//Create an array of your 5th-standard marks
 // Create an array of marks
  const marks = [85, 92, 78, 60, 95];

//1. Run the below operations - 
        //1. Iterate over all items

for (let i = 0; i < marks.length; i++) {
    console.log(marks[i])
}

  // forEach => Iterate all the items in an array
const marksForEach = function (index) {
    console.log(marks[index - 1])
}

 marks.forEach(marksForEach)
 //foreach doesnot returns anything(undefined) and iterate all items

      // 2. Multiply all marks by 3 and console log
 //marks => [85, 92, 78, 60, 95];
   //  Pass a function to map
const marksMap  = marks.map((marks) => marks * 3);

 console.log(marksMap);
// Expected output:
//map works as itreate and gave return also, map returns new Array(modiefied arry items)

    // 3. Get all marks that are greater than 70

//marks => [85, 92, 78, 60, 95];
const foundItem = marks.filter(function (num, index) {
     return num >= 70
 })

 console.log(foundItem);
 //Iterate all the items and return the ALL item, if condition === true.


      //4. Find the first mark that is greater than 90

//marks => [85, 92, 78, 60, 95];
const foundItem1 = marks.find(function (num, index) {
    return num >= 90
})

console.log(foundItem1);
//Iterate all the items and return the FIRST item, if condition === true.

//2. Create a UL element in UI and not put any list item into them.
//     1. Create a li item in Javascript and insert it into UL

const todoSubmitButton = document.getElementById('todo-submit')

const todos = [] //make a list

   //Add Click Event Handler
 todoSubmitButton.addEventListener('click', function () {
    const todoInput = document.getElementById('todo-input')
 
    //todos.push(todoInput.value) // added item(push item in todo array)

    //upadte into DOM
    const todoList = document.getElementById('todo-list') 

    const listTag = document.createElement('li')//create a new Li tag
    listTag.innerHTML = todoInput.value
    
    todoList.appendChild(listTag)//Add into UL list
    
    console.log(todos)
    
});

//Number Multiplier
// function multiplyByFive() {
//     // Get the input value
//     var inputValue = parseFloat(document.getElementById("numberInput").value);

//     // Check if the input is a valid number
//     if (!isNaN(inputValue)) {
//         // Multiply by 5
//         var result = inputValue * 5;

//         // Update the paragraph with the result
//         document.getElementById("multiplierResult").innerHTML = "Result: " + result;
//     } else {
//         // Display an error message if the input is not a valid number
//         document.getElementById("multiplierResult").innerHTML = "Please enter a valid number.";
//     }
// }

function multiplyByFive(){
    var inputValue = parseFloat(document.getElementById("numberInput").value); // Get the input value
      
    if (!isNaN(inputValue)){
        var result = inputValue * 5;
        document.getElementById("multiplierResult").innerHTML = "Result: " + result;
    }
    else {
        document.getElementById("multiplierResult").innerHTML = "Please enter a valid number.";  
    }
    
}
// function multiplyByFive() {
//     // Get the input value
//     let inputValue = parseFloat(document.getElementById("numberInput").value);
//     //parsefloat is used to convert the input value to a floating-point number (a decimal number) because input values are initially treated as strings.

//     // Check if the input is a valid number
//     if (!isNaN(inputValue)) {
//         // Multiply by 5
//         var result = inputValue * 5;

//         // Update the paragraph with the result
//         document.getElementById("resultParagraph").innerHTML = "Result: " + result;
//     } else {
//         // Display an error message if the input is not a valid number
//         document.getElementById("resultParagraph").innerHTML = "Please enter a valid number.";
//     }
// }



