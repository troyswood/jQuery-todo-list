$(document).ready(function(){
  $("form#add-todo").submit(function(event) {
    event.preventDefault();
    var newTodo = $(this).find("textarea");
    
    // 1. Clone the template element
    var newTodoLi = $(".todo-item:last").clone(true).show();
    
    // 2. Change the template content
    newTodoLi.find(".todo-text").text(newTodo.val());
    
    // 3. Write to the DOM
    $("#todo-items").prepend(newTodoLi);
    
    newTodo.val("");
  });
  
  $(":checkbox").click(function() {
    $(this).parents("li").toggleClass("done");
  });
  
  $("#clear-done").on("click", function() {
    $(".todo-item.done").remove();
  });
});


