let post = document.getElementById("ButtonPost");
let clear = document.getElementById("ButtonClear");
let mark = document.getElementById("ButtonMark");
let del = document.getElementById("ButtonDelete");

post.addEventListener("click", TodoPost);
clear.addEventListener("click", TodoClear);
mark.addEventListener("click", TodoMark);
del.addEventListener("click", TodoDel);

function TodoPost(e) {
    e.preventDefault(); // disable the default page reload when clicked

    var todo = document.getElementById("todoText").value;
    var list = document.getElementById("todoList");

    let currentList = list.innerHTML;
    list.innerHTML = currentList + `<input type = "checkbox" name="todo" />${todo}<br>`
}

function TodoClear(e) {
    e.preventDefault();

    var todos = document.getElementsByName("todo");

    todos.forEach(element => element.checked = false);
}

function TodoMark(e) {
    e.preventDefault();

    var todos = document.getElementsByName("todo");

    todos.forEach(element => element.checked = true);
}

function TodoDel(e) {
    e.preventDefault();

    document.getElementById("todoList").innerHTML = "";
}
