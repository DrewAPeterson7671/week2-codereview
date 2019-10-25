$(document).ready(function() {
  $("#formInput").submit(function(event) {
    var nameOne = $("input#nameOne").val();
    var favPlatform = $("#favPlatform").val();
    var favOs = $("input:radio[name=favOs]:checked").val();
    var favLocation = $("input:radio[name=favLocation]:checked").val();
    var personalDisposition = $("input:radio[name=personalDisposition]:checked").val();
    var count = 0;



    if (favPlatform === 'Mobile' && favOs === 'Apple') {
      $("#languageSwift").show();
      count += 1;
    } else if {
      (favPlatform === 'Mobile' && favOs === "Google") {
        $("#languageGo").show();
        count += 1;
      } else if {
        (favorite === 'Systems & Servers' && favOs === "Windows") {
          $("#languageCs").show();
        } else {
          console.log("fail");
        }
      }
    }








    $("#nameOneOut").text(nameOne);
    $("#favPlatformOut").text(favPlatform);
    $("#favOsOut").text(favOs);
    $("#favLocationOut").text(favLocation);
    $("#personalDispositionOut").text(personalDisposition);
    $("#language1Out").text(recLanguage1);
    $("#language2Out").text(recLanguage2);
    $("#language3Out").text(recLanguage3);

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
