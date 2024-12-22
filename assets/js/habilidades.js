
$(document).ready(function(){
    $("#html").on("click",function(){
        $('#resumo_skills').load('components/html_content.html')
        $('#resumo_skills').addClass("pb-3")
    })
    $("#css").on("click",function(){
        $('#resumo_skills').load('components/css_content.html')
        $('#resumo_skills').addClass("pb-3")
    })


    $("#bootstrap").on("click",function(){
        $('#resumo_skills').load('components/bootstrap_content.html')
        $('#resumo_skills').addClass("pb-3")
    })
    
    $("#php").on("click",function(){
        $('#resumo_skills').load('components/php_content.html')
        $('#resumo_skills').addClass("pb-3")
    })
    $("#javascript").on("click",function(){
        $('#resumo_skills').load('components/javascript_content.html')
        $('#resumo_skills').addClass("pb-3")
    })
    $("#python").on("click",function(){
        $('#resumo_skills').load('components/python_content.html')
        $('#resumo_skills').addClass("pb-3")
    })
    $("#sql").on("click",function(){
        $('#resumo_skills').load('components/mysql_content.html')
        $('#resumo_skills').addClass("pb-3")
    })
    $("#uikit").on("click",function(){
        $('#resumo_skills').load('components/uikit_content.html')
        $('#resumo_skills').addClass("pb-3")
    })
    $("#csharp").on("click",function(){
        $('#resumo_skills').load('components/csharp_content.html')
        $('#resumo_skills').addClass("pb-3")
    })

})