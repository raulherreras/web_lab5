$("#ButtonPost").on("click", function(e) {
    e.preventDefault(); // disable the default page reload when clicked

    var todo = $("#todoText").val();
    var list = $("#todoList");

    let currentList = list.html();
    list.html(`${currentList}<input type = "checkbox" name="todo" />${todo}<br>`);
});

$("#ButtonClear").on("click", function(e) {
    e.preventDefault();

    var todos = $("[name='todo']");

    for (var i = 0; i < todos.length; i++) {
        todos[i].checked = false;
    }
});

$("#ButtonMark").on("click", function(e) {
    e.preventDefault();

    var todos = $("[name='todo']");

    for (var i = 0; i < todos.length; i++) {
        todos[i].checked = true;
    }
});

$("#ButtonDelete").on("click", function(e) {
    e.preventDefault();

    $("#todoList").html("");
});
