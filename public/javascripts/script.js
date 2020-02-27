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

  $("#cat_button_clothes").click(function(){
    $.ajax({
      url: "https://api.thecatapi.com/v1/images/search?category_ids=15",
      headers: { "x-api-key": "9c1793b9-97c3-488f-bb19-e8b94f281470" },
      type: "GET",
      dataType: "json",

      success: function(result) {
        $("#cat_image_clothes").attr("src", result[0].url)
      }
    });
  });
});
