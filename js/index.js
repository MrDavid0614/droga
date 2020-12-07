const modal = document.getElementById("Modal");

const createTask = document.querySelector('.create-btn');

// Get the <span> element that closes the modal
const span = document.querySelector('.close');

const addBtn = document.querySelector('.add-btn');

const itemsNumber = document.querySelector('.items-number');

// When the user clicks on the button, open the modal
createTask.onclick = function() {
  modal.style.display = "flex";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

addBtn.addEventListener('click', () => {

    let total = 0;

    Array.prototype.forEach.call(tasks, task => {

        total += task;

    })

    itemsNumber.innerHTML = total;

})