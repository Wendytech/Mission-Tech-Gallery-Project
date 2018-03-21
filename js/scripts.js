
$( document ).ready(function () {

  console.log("Hello world!");

  $("#article p a img").click(function (event) {
    event.preventDefault();

    $("#lightbox").show();

    var imageLink = $(this).attr("src");

    var imgText = "<img src='" + imageLink + "' />";

    $("#lightbox").html(imgText);

    $("#lightbox").click(function (event) {
      $("#lightbox").hide();

    });

  });
});
