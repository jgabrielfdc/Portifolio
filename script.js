$(document).ready(function() {


   $("#lego").on("click",function(){
      $("html body *").addClass("border border-warning rounded ui-widget-content d-inline-block user-select-none")
      $("html body *").draggable();
   })

   $("#item1").click(function() {
      $('#itens').animate({
        scrollTop: $("#tst1").position().top
      }, 500);
    });
    $("#item2").click(function() {
      $('#itens').animate({
        scrollTop: $("#tst2").position().top
      }, 500);
    });
    $("#item3").click(function() {
      $('#itens').animate({
        scrollTop: $("#tst3").position().top
      }, 500);
    });
});