$(document).ready(function() {
  $("#formInput").submit(function(event) {
    var nameOne = $("input#nameOne").val();
    var favPlatform = $("#favPlatform").val();
    var favOs = $("input:radio[name=favOs]:checked").val();

    $("#nameOneOut").text(nameOne);
    $("#favPlatformOut").text(favPlatform);
    $("#favOsOut").text(favOs);

//    console.log(favPlatform);

    $(".surveyResults").hide();
    $(".surveyParrot").hide(); //considering joining with surveyResults
    $(".surveyResults").show();
    $(".surveyParrot").show(); //considering joining with surveyResults
//    $('.surveyResults').removeClass('show");
//    $('.surveyParrot').removeClass('show");

    event.preventDefault();
  });
});
