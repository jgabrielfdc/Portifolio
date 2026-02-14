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

function getExperiencePeriod(dataInput){

let dataInicio = new Date(dataInput);
let dataAtual = new Date();

let anos = dataAtual.getFullYear() - dataInicio.getFullYear();
let meses = dataAtual.getMonth() - dataInicio.getMonth();
let dias = dataAtual.getDate() - dataInicio.getDate();

// Ajuste se o dia atual for menor que o dia de início (mês incompleto)
if (dias < 0) {
    meses--;
}

// Ajuste se o mês atual for menor que o mês de início (ano incompleto)
if (meses < 0) {
    anos--;
    meses += 12;
}

// Lógica de exibição dinâmica
if (anos > 0) {
    return `${anos} ${anos === 1 ? 'ano' : 'anos'} e ${meses} ${meses === 1 ? 'mês' : 'meses'}`;
} else {
    return `${meses} ${meses === 1 ? 'mês' : 'meses'}`;
}
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