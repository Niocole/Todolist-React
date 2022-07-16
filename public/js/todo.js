let push = document.getElementById("push");
const addtask = () => {
	console.log(`button have been loaded`);
	let task = document.getElementById("inputvalue").value;
	const li = document.createElement('li');
	li.innerHTML = `${task}`;
	document.getElementById("ol").appendChild(li); 
	console.log(`${task} have been loaded`);
	// const h3 = document.getElementById("h3");
	// let x = document.getElementById("li");
	// let number = x
	// h3.innerHTML = `You now have ${number} tasks`
};

// if (task === "") {
// 	alert(`Just write something`);
// } else {
// 	return;
// }
push.addEventListener("click", addtask());