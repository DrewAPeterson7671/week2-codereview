$(document).ready(function() {
  $("#formInput").submit(function(event) {
    var nameOne = $("input#nameOne").val();
    var favPlatform = $("#favPlatform").val();
    var favOs = $("input:radio[name=favOs]:checked").val();
    var favLocation = $("input:radio[name=favLocation]:checked").val();
    var personalDisposition = $("input:radio[name=personalDisposition]:checked").val();

    if (favPlatform === 'Mobile' && favOs === 'Apple') {
      console.log("Swift");
    } else {
      consol.log("bad logic");
    }

    $("#nameOneOut").text(nameOne);
    $("#favPlatformOut").text(favPlatform);
    $("#favOsOut").text(favOs);
    $("#favLocationOut").text(favLocation);
    $("#personalDispositionOut").text(personalDisposition);


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
