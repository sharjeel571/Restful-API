$(document).ready(function(){
    const outputDiv = $("#output");
  
    $("#get-btn").click(function(){
      $.get("https://jsonplaceholder.typicode.com/posts", function(data, status){
        outputDiv.html("<pre>" + JSON.stringify(data, null, 2) + "</pre>");
      });
    });
  
    $("#post-form").submit(function(event){
      event.preventDefault();
      const title = $("#title").val();
      $.post("https://jsonplaceholder.typicode.com/posts", { title: title, body: 'Sample body', userId: 1 }, function(data, status){
        outputDiv.html("<pre>" + JSON.stringify(data, null, 2) + "</pre>");
      });
    });
  
    $("#update-form").submit(function(event){
      event.preventDefault();
      const id = $("#update-id").val();
      const newTitle = $("#new-title").val();
      $.ajax({
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
        method: 'PUT',
        data: { id: id, title: newTitle, body: 'Sample body', userId: 1 },
        success: function(data, status){
          outputDiv.html("<pre>" + JSON.stringify(data, null, 2) + "</pre>");
        }
      });
    });
  
    $("#delete-form").submit(function(event){
      event.preventDefault();
      const id = $("#delete-id").val();
      $.ajax({
        url: `https://jsonplaceholder.typicode.com/posts/${id}`,
        method: 'DELETE',
        success: function(data, status){
          outputDiv.html("<pre>" + JSON.stringify(data, null, 2) + "</pre>");
        }
      });
    });
  });