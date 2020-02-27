$(document).ready(function() {
  $("#cat_button").click(function(){
    $.ajax({
      url: "https://api.thecatapi.com/v1/images/search",
      headers: { "x-api-key": "9c1793b9-97c3-488f-bb19-e8b94f281470" },
      type: "GET",
      dataType: "json",

      success: function(result) {
        $("#cat_image").attr("src", result[0].url)
      }
    });
  });
});
