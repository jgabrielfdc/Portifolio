async function findSkill(id){
    console.log(id)
    id=id.split('-');
    let response= await fetch("dataset/skills.json")
    let JSONResponse=await response.json();
    let skillArray=JSONResponse['skills'].filter(item=>item.id==id[1])
    $("#display").load("assets/components/DisplayContainer.html",()=>{
        displaySkills(skillArray[0])
    });
}

function getExperiencePeriod(dataInput) {
    let dataInicio = new Date(dataInput);
    let dataAtual = new Date();

    let anos = dataAtual.getFullYear() - dataInicio.getFullYear();
    let meses = dataAtual.getMonth() - dataInicio.getMonth();
    let dias = dataAtual.getDate() - dataInicio.getDate();

    // Ajuste de dias negativos (mês incompleto)
    if (dias < 0) {
        meses--;
        let ultimoDiaMesAnterior = new Date(dataAtual.getFullYear(), dataAtual.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
    }

    // Ajuste de meses negativos (ano incompleto)
    if (meses < 0) {
        anos--;
        meses += 12;
    }

    // --- NOVA LÓGICA DE EXIBIÇÃO LIMPA ---
    let partes = [];

    if (anos > 0) {
        partes.push(`${anos} ${anos === 1 ? 'ano' : 'anos'}`);
    }

    if (meses > 0) {
        partes.push(`${meses} ${meses === 1 ? 'mês' : 'meses'}`);
    }

    // Caso não tenha anos nem meses, mostra os dias
    if (partes.length === 0) {
        return `${dias} ${dias === 1 ? 'dia' : 'dias'}`;
    }

    // Junta as partes com " e " (ex: "1 ano e 2 meses" ou apenas "2 anos")
    return partes.join(' e ');
}

function displaySkills({title, experience, certificados}){
    $("#display__title").text(title);
    $("#display__experience").text(getExperiencePeriod(experience));

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

        $(mensagem).text('Não Há certificados disponiveis');
        $(item).append(mensagem);

        $("#display__certificados").append(item)
    }
    
}