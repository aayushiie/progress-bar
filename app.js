const progressBar = document.querySelector('.inner-box');
const containerBox = document.querySelector('.outer-box');

let completedTasks = 0;

function countCheckedBoxes() {
    let count = 0;
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    //Count checked boxes
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            count++;
        }
    }

    //Percentage of completed tasks
    completedTasks = Math.trunc((count / checkboxes.length) * 100);

    //Update the width of progress bar
    progressBar.style.width = completedTasks + '%';
}

//updating values of checked boxes
const checkboxes = document.querySelectorAll('.my-checkbox');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', countCheckedBoxes)
})

// console.log(`checked checkboxes: ${checkboxes}`); //for verification
