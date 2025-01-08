$(document).ready(function(){

    $("#habilidades .uk-card").each(function(){
        $(this).on("click",function(){
            let archive=$(this).attr("id");
            $('#resumo_skills').load("assets/components/"+archive+"_content.html");
            $('#resumo_skills').addClass("pb-3")
        })
    })

})