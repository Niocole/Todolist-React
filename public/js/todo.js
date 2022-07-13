let push = document.getElementById("push");
const addtask = () => {
	console.log(`button have been clicked`);
	let task = document.getElementById("inputvalue").value;
	const li = document.createElement("li").innerHTML = `${task}`;
	li.appendChild;
	console.log(`${task} have been added`);
	task.value = "";
	if (task === "") {
		alert(`Just write something`);
	} else {
		return;
	}
};
push.addEventListener("click", addtask());