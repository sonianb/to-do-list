'use strict';

const taskInput = document.getElementById('task');
const submitBtn = document.getElementById('submit-btn')

// Hard-coded example data structure:
const toDoList = [
    {
        task: "walk the dog",
        done: false,
        date: new Date()
    },
    {
        task: "water the plants",
        done: false,
        date: new Date()
    }
]

// push new items to the toDoList

function addItem(taskContent) {
    let newObj = {name: taskContent, done: false, date: new Date()} 
    toDoList.push(newObj);
    return newObj;
}


// Joe: update display/DOM

// Joe: update item in toDoList (to set it as "done")

// Sonia: remove/delete item from toDoList

// (Stretch goal: hide completed items)

/*

    Add, update and delete functions *only* change the array.
    (They only change the data that we're storing.)

    The "update display" function *only* modifies the DOM.
    (It always reads the most up-to-date data that we're storing, and updates the DOM using that.)

    When they've finished changing the array, the add, update, and delete functions
    will always call the update display function.

    test("addTask() should add a new object to the toDoList array", () => {
        ...
    });

    function addTask(task) {
        ...
    }

*/

