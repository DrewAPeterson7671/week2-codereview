$(document).ready(function() {
  $("#formInput").submit(function(event) {
    var nameOne = $("input#nameOne").val();
    var favPlatform = $("#favPlatform").val();
    var favOs = $("input:radio[name=favOs]:checked").val();
    var favLocation = $("input:radio[name=favLocation]:checked").val();
    var personalDisposition = $("input:radio[name=personalDisposition]:checked").val();


    $("#languageJavascript").hide();
    $("#languageRuby").hide();
    $("#languageSwift").hide();
    $("#languageGo").hide();
    $("#languageSwift").hide();
    $("#languagePython").hide();
    $("#languageCs").hide();
    $("#languagePython").hide();
    $("#languageRust").hide();





    if (favPlatform === 'Web') {
      $("#languageJavascript").show();
      $("#languageRuby").show();
      $("#languageSwift").show();
      } else if (favPlatform === 'Mobile') {
        $("#languageGo").show();
        $("#languageSwift").show();
        $("#languagePython").show();
      } else if (favPlatform === 'Systems & Servers') {
        $("#languageCs").show();
        $("#languagePython").show();
        $("#languageRust").show();
      } else {
        console.log ("fail");
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
