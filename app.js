const progressBar = document.querySelector('.inner-box');
const containerBox = document.querySelector('.outer-box');

//counting the number of checked boxes
function countCheckedBoxes() {
    let count = 0;


    console.log(`count initially = ${count}`)


    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            count++;
        }
    }



    console.log(`count finally: ${count}`);
    console.log(`number of checkboxes: ${checkboxes.length}`)



}
countCheckedBoxes()

//updating values of checked boxes
const checkboxes = document.querySelectorAll('.my-checkbox');
checkboxes.forEach(checkbox =>{
    checkbox.addEventListener('change', countCheckedBoxes)
})
console.log(`checked checkboxes: ${checkboxes}`); //for verification

//percentage of completed tasks (here 3 tasks)
const completedTasks = count/3*100;
console.log(completedTasks);