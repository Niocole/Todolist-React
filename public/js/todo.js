//
let count = $("#count").length;
let gtask = "task";
if(count <= 1) {
    gtask = "task"
} else {
    gtask="tasks"
}
const inputvalue = $("#inputvalue").value
//callback function
$(document).ready(function(){
    addtask();
    upno();
})
//Add task
const addtask = () => {
    $("addtask").click(function(){
        $("#tasklist").append(`<li>${inputvalue}</li>`)
    })
    return true;
}
//Update number of task
const upno = () => {
    $("")
    return true;
}