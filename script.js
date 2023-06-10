// reference items
const items = document.querySelectorAll('.item');
const container2 = document.getElementById('container2');
const successMessage = document.createElement('div');
successMessage.className = 'success-message';

let draggedItem = null;
//  Add Event liseteners for new items
for (const item of items) {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
}
// Event liseteners to drag and drop
container2.addEventListener('dragover', dragOver);
container2.addEventListener('dragenter', dragEnter);
container2.addEventListener('dragleave', dragLeave);
container2.addEventListener('drop', drop);

// Add a 'dragging' class to the dragged
function dragStart() {
  draggedItem = this;
  setTimeout(() => {
    this.classList.add('dragging');
  }, 0);
}

// Remove the 'dragging' class from dragged
function dragEnd() {
  this.classList.remove('dragging');
}

// The defult behavior to allow dropping
function dragOver(e) {
  e.preventDefault();
}
// Add 'hover' class to the container
function dragEnter(e) {
  e.preventDefault();
  this.classList.add('hovered');
}
// Remove 'hover' class to the container
function dragLeave() {
  this.classList.remove('hovered');
}

function drop() {
  this.classList.remove('hovered');
  this.appendChild(draggedItem);
  container2.appendChild(successMessage);
  successMessage.innerText = 'Item dropped successfully!';
}
// Reset container
function resetContainers() {
  container2.innerHTML = '';
  container2.appendChild(successMessage);
  successMessage.innerText = '';
  for (const item of items) {
    document.getElementById('container1').appendChild(item);
  }
}