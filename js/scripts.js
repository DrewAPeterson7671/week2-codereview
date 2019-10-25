$(document).ready(function() {
  $("#formInput").submit(function(event) {
    var nameOne = $("input#nameOne").val();
    var favPlatform = $("#favPlatform").val();

    $("#nameOneOut").text(nameOne);
    $("#favPlatformOut").append(favPlatform);

    console.log(favPlatform);

    $(".surveyResults").hide();
    $(".surveyParrot").hide(); //considering joining with surveyResults
    $(".surveyResults").show();
    $(".surveyParrot").show(); //considering joining with surveyResults
//    $('.surveyResults').removeClass('show");
//    $('.surveyParrot').removeClass('show");

    event.preventDefault();
  });
});
