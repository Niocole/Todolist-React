let gettask = "task";
let count = $("#count").length;
if(count <= 1) {
    gettask = "task"
} else {
    gettask="tasks"
}
const inputvalue = $("#inputvalue").value
//Callback
$(document).ready(function(){
    addtask();
    upno();
})
//Add task
const addtask = () => {
    $("addtask").click(function(){
        $("#tasklist").append(`<li>${inputvalue}</li>`) 
    })
}
//Update number of task
const upno = () => {
    $("")
}