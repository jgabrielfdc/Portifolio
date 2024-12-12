$(document).ready(function() {


   $("#lego").on("click",function(){
      $("html body *").addClass("border border-warning rounded ui-widget-content d-inline-block user-select-none")
      $("html body *").draggable();
   })
});