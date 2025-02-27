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
    eachTask.textContent = task;

    // Create icon container
    let iconContainer = document.createElement('span');
    iconContainer.classList.add('icons');

    // Edit (pencil) icon
    let editIcon = document.createElement('span');
    editIcon.innerHTML = `<img src="pen.png" alt="pencil">`;
    editIcon.classList.add('edit-icon');
    editIcon.onclick = function () {
      let newText = prompt("Edit task:", eachTask.textContent);
      if (newText) {
        eachTask.firstChild.textContent = newText;
      }
    };

    // Delete (✖️) icon
    let deleteIcon = document.createElement('span');
    deleteIcon.innerHTML = `<img src="cancel.png" alt="pencil">`;
    deleteIcon.classList.add('delete-icon');
    deleteIcon.onclick = function () {
      olElement.removeChild(eachTask);
      if (olElement.children.length === 0) {
        olElement.remove();
        olElement = null;
      }
    };

    // Append icons
    iconContainer.appendChild(editIcon);
    iconContainer.appendChild(deleteIcon);
    eachTask.appendChild(iconContainer);
    olElement.appendChild(eachTask);

    inputSpace.value = '';
  }
}