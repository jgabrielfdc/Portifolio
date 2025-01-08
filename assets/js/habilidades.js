function skill(archive){
    $('#resumo_skills').load(skill("assets/components/"+archive+"_content.html"))
    $('#resumo_skills').addClass("pb-3")
}

$(document).ready(function(){

    $("#habilidades li .uk-card").each(function(index){
        $(this).on("click",function(){
            let archive=$(this).attr("id");
            skill(archive);
        })
    })

})