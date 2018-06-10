// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(document).ready(function() {
    // $(document).on("change", input, function(event){

    // });
    // $("input").change(function(){
    //   alert("The text has been changed.");
    // $(this).val();
    // });
    //$( "input[type='text']" ).change(function(event) {
    
    // $(document).on("change", $("input[type='text']").val(), function(event){  
    //$("input").change(function(event){
    $("body").on('change', "input[class='list']", function(event) {
      event.preventDefault();
      console.log($(this).val());
      var id = $(this).parent().attr("id");
      var newburgername = $(this).val();
      console.log("changed burger id: " + id);
      console.log("changed burger name: " + newburgername);
      var changedburger = {
        burger_name: newburgername,
        // devoured: 0
      };
     console.log(changedburger);
    // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
         type: "PUT",
         data: changedburger
      }).then(
        function() {
           console.log("changed burger name to", newburgername);
        // Reload the page to get the updated list
        location.reload();
         }
        );
     });
      // Check input( $( this ).val() ) for validity here
    });
  
    $("#submit").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newburger = {
        burger: $("input[name=burger]").val().trim()
      };
       console.log(newburger);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newburger
      }).then(function() {
          console.log("created new burger");  
          // Reload the page to get the updated list
          location.reload();
        }
      );

      // $("body").on('click', "button[class='devour']", function(event) {
      // //$("body").on('click', "button[class='devour']", function(event) {
      //   event.preventDefault();
      //   var id=$(this).parent().attr("id");
      //   console.log(id);
      //   $("'#"+id+"'").appendTo("#devourlist");
        //remove form and add input now allow edit to devour list
        //append input to devourlist 
      // })
      

    });

  