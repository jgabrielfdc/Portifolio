$(document).ready(function() {


  $("#item1").click(function() {
    $("#itens").animate(
      {
          scrollTop: $("#tst1").offset().top - $("#itens").offset().top,
      },
      1000
  );
});

$("#item2").click(function() {
  $("#itens").animate(
    {
        scrollTop: $("#tst2").offset().top - $("#itens").offset().top,
    },
    1000
);
});

$("#item3").click(function() {
  $("#itens").animate(
    {
        scrollTop: $("#tst3").offset().top - $("#itens").offset().top,
    },
    1000
);
});
});