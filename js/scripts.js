$(document).ready(function() {
  $("#formInput").submit(function(event) {
    var nameOne = $("input#nameOne").val();


    $("#nameOneOut").text(nameOne);


    $(".surveyResults").show();
    $(".surveyParrot").show();


    event.preventDefault();
  });
});
