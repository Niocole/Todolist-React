const push = document.getElementById("push")
push.addEventListener("click", addtask());

const addtask = () => {
	console.log(`button have been clicked`);
	const newtask = document.createElement("li");
	const task = document.getElementById.innerHTML("inputvalue").value;
	const t = document.createTextNode(inputValue);
	newtask.appendChild(task);
	console.log(`${task} have been added`)
	if (task === "") {
		windows.alert(`Just write something`);
	}
	return
}
