var todoList = document.getElementById('todoList');
var todoItemInput = document.getElementById("todoItemInput");
var addItemBtn = document.getElementById("addItemBtn");
var todoArray = [];
/*var todoArray = [
	"Eat dinner",
	"Get coffee",
	"Send email",
	"Go camping",
	"Visit DC",
	"Talk to the duck"];*/

function getTodoItem(evt) {
	var todoValue = todoItemInput.value;
	todoArray.push(todoValue);
	//console.log(todoArray);
	outputTodoArray();
	evt.preventDefault;
}
addItemBtn.onclick = getTodoItem;

function outputTodoArray() {
	todoList.innerHTML = "";
	for (var i = 0; i < todoArray.length; i++) {
		todoList.innerHTML += "<li>" + todoArray[i] + "</li>";
	}
}