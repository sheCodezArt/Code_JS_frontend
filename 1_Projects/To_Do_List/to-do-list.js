/* FIRST EVER TO DO LIST PROJECT */

// CREATED THE WHOLE LIST
// let olElement;

// ADDED A FUNCTION TAT ADDS TASKS TO THE LIST
// function addTask() {
//   const inputSpace = document.getElementById('text');
  
// CREATED A VARIABLE THAT STORES THE VALUE ENTERED BY USER IN THE INPUT ELEMENT
//   let task = inputSpace.value.trim();
  
// IF STATEMENT IF CHECKS THE VALUE ENTERED BY USER IS NOT EMPTY
//   if (task) {

// CHECKS IF THE OL ELEMENT IS NOT CREATED
//     if (!olElement) {

// CREATES OL ELEMENT
//       olElement = document.createElement('ol');
      
//       const displayDiv = document.querySelector('.container');
      
// ADDS THE OL ELEMENT TO THE CONTAINER DIV TO ALLOW ALL TASKS TO BE DISPLAYED ON THE PAGE
//       displayDiv.appendChild(olElement);
//     }

// CREATES LI ELEMENTS FOR EACH TASK
//     let eachTask = document.createElement('li');

// ADDS THE STRING OR TASK VALUE ENTERED BY USER TO THE LI ELEMENT
//     eachTask.textContent = task;
    
// ADDS LI ELEMENT TO THE OL ELEMENT
//     olElement.appendChild(eachTask);
    
// CLEARS THE INPUT SPACE AFTER ADDING THE TASK
//     inputSpace.value = '';
//   }
// }

// let olElement;

// function addTask() {
//   const inputSpace = document.getElementById('text');
//   let task = inputSpace.value.trim();

//   if (task) {
//     if (!olElement) {
//       olElement = document.createElement('ol');
//       const displayDiv = document.querySelector('.container');
//       displayDiv.appendChild(olElement);
//     }

//     let eachTask = document.createElement('li');
//     eachTask.textContent = task;

//     let iconContainer = document.createElement('span');
//     iconContainer.classList.add('icons');

//     let editIcon = document.createElement('span');
//     editIcon.innerHTML = `<img src="pen.png" alt="pencil">`;
//     editIcon.classList.add('edit-icon');
//     editIcon.onclick = function () {
//       let newText = prompt("Edit task:", eachTask.textContent);
//       if (newText) {
//         eachTask.firstChild.textContent = newText;
//       }
//     };

//     let deleteIcon = document.createElement('span');
//     deleteIcon.innerHTML = `<img src="cancel.png" alt="pencil">`;
//     deleteIcon.classList.add('delete-icon');
//     deleteIcon.onclick = function () {
//       olElement.removeChild(eachTask);
//       if (olElement.children.length === 0) {
//         olElement.remove();
//         olElement = null;
//       }
//     };

//     iconContainer.appendChild(editIcon);
//     iconContainer.appendChild(deleteIcon);
//     eachTask.appendChild(iconContainer);
//     olElement.appendChild(eachTask);

//     inputSpace.value = '';
//   }
// }

let olElement;

function addTask() {
  const inputSpace = document.getElementById('text');
  let task = inputSpace.value.trim();

  if (task) {
    if (!olElement) {
      olElement = document.createElement('ol');
      const displayDiv = document.querySelector('.container');
      displayDiv.appendChild(olElement);
    }

    let eachTask = document.createElement('li');

    let taskText = document.createElement('span');
    taskText.textContent = task;

    let imgContainer = document.createElement('div');
    imgContainer.classList.add('task-images');

    let img1 = document.createElement('img');
    img1.src = "img/cancel.png";
    img1.alt = "cancel";

    let img2 = document.createElement('img');
    img2.src = "img/pen.png";
    img2.alt = "edit";

    img2.onclick = function () {
      let newText = prompt("Edit task:", taskText.textContent);
      if (newText) {
        taskText.textContent = newText;
      }
    };

    img1.onclick = function () {
      olElement.removeChild(eachTask);
      if (olElement.children.length === 0) {
        olElement.remove();
        olElement = null;
      }
    };

    imgContainer.appendChild(img1);
    imgContainer.appendChild(img2);

    eachTask.appendChild(taskText);
    eachTask.appendChild(imgContainer);
    
    olElement.appendChild(eachTask);

    inputSpace.value = '';
  }
}

