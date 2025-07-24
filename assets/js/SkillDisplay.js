async function findSkill(id){
    id=id.split('-');
    let response= await fetch("dataset/skills.json")
    let JSONResponse=await response.json();
    let skillArray=JSONResponse['skills'].filter(item=>item.id==id[1])
    $("#skills__display").load("assets/components/DisplayContainer.html",()=>{
        displaySkills(skillArray[0])
    });
    
}

function displaySkills({title, experiencia, certificados}){
    $("#display__title").text(title);
    $("#display__experience").text(experiencia);

    if(certificados[0]){
        for(certificado of certificados){
            let itemList=document.createElement('li');
            let linkCertificado=document.createElement('a');

            $(linkCertificado).text(certificado.title);
            $(linkCertificado).attr('href',certificado.link);
            $(linkCertificado).attr('target',"_blank");

            $(itemList).append(linkCertificado);
        
            $("#display__certificados").append(itemList)
        }
    }else{
        let item=document.createElement('li');
        let mensagem=document.createElement('h4');

        $(mensagem).addClass("text-primary")
        $(mensagem).text("Não Há Certificados");
        $(item).append(mensagem);

        $("#display__certificados").append(item)
    }
    
}