$(document).ready(function() {
  $("#formInput").submit(function(event) {
    var nameOne = $("input#nameOne").val();


    $("#nameOneOut").append(nameOne);


    $("#surveyResults").show();
    $("#surveyParrot").show();


    event.preventDefault();
  });
});
