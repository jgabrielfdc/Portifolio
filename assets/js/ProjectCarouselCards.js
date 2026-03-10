$("#projects__container").ready(() => {
  fetch("dataset/projects.json")
    .then((item) => item.json())
    .then(({ projects }) => {
      projects.forEach((item) => {
        slideDiv(item);
      });
    });
});

// Criar uma div para o card do projeto
function slideDiv(item) {
  const slideContainer = document.createElement("div");
  $(slideContainer).attr("class", "slide"); // Adiciona a classe slide ao elemento

  $(slideContainer).append(cardDiv(item)); // Cria um container de slide

  // Adiciona o slide ao carousel
  $('#carousel-track').append(slideContainer);
}

// Cria a div do card do projeto
function cardDiv(item){
    const projectCard=document.createElement('div');
    $(projectCard).attr('class','project-card');

    // Container de Imagem
    $(projectCard).append(imageDiv(item));

    $(projectCard).append(cardContainerDiv(item));

    return projectCard;
}

// ! Cria o container para a imagem do card
function imageDiv({image,name}){
    // Container da Imagem
    const imageDiv=document.createElement('div');
    $(imageDiv).attr('class','card-image-wrapper');

    // Imagem do Card
    const imageElement=document.createElement('img');
    $(imageElement).attr('class','project-img');
    $(imageElement).attr('src',image);
    $(imageElement).attr('alt',name);

    $(imageDiv).append(imageElement)
    return imageDiv;
}

// Cria os Badges
function createBadge({name,icon,skill_id}){
    const badge=document.createElement('a');
    $(badge).attr('class','badge tech-badge');
    $(badge).attr('href','#skills__container');
    $(badge).on('click',()=>{
        document.getElementById(skill_id).click();
    })
    $(badge).text(name);

    if(icon!=""){
        $(badge).prepend(createIcon(icon));
    }

    return badge;
}

// Cria o container para o conteudo do card do projeto
function cardContainerDiv({name,resources,description,demo_link,repository_link}){
    const cardContainer=document.createElement('div');
    $(cardContainer).attr('class','card-content');

    // Titulo do Projeto <h3>
    const card_title=document.createElement('h3');
    $(card_title).attr('class','project-title');
    $(card_title).text(name);
    $(cardContainer).append(card_title);

    // Badges das tecnologias utilizadas no projeto <div>
    const badgesList=document.createElement('div');
    $(badgesList).attr('class','project-badges d-flex flex-wrap gap-2');
    resources.forEach((item)=>{
        $(badgesList).append(createBadge(item))
    });
    $(cardContainer).append(badgesList)

    // Descrição do Projeto <p>
    const projectDescription=document.createElement('p');
    $(projectDescription).attr('class','project-description');
    $(projectDescription).text(description);
    $(cardContainer).append(projectDescription)

    // Buttons do card <div>
    const buttonsContainer=document.createElement('div');
    $(buttonsContainer).attr('class','card-buttons');

    // Botão para a Demo do Projeto
    if(demo_link!==""){
        const demoButton=document.createElement('a');
        $(demoButton).attr('class','btn-card btn-live');
        $(demoButton).attr('href',demo_link);
        $(demoButton).attr('target',"_blank");
        $(demoButton).text('Ver Demonstração');
        const iconElement=document.createElement('i');
        $(iconElement).attr('class',`fas fa-external-link-alt`);
        $(demoButton).prepend(iconElement);

        $(buttonsContainer).append(demoButton);
    }
    
    // Botão para o Diretorio do Projeto
    const directoryButton=document.createElement('a');
    $(directoryButton).attr('class','btn-card btn-repo');
    $(directoryButton).attr('href',repository_link);
    $(directoryButton).attr('target',"_blank");
    $(directoryButton).text('Repositorio');
    $(directoryButton).prepend(createIcon('github'));
    $(buttonsContainer).append(directoryButton);

    $(cardContainer).append(buttonsContainer)

    return cardContainer;
}

function createIcon(icon){
    const iconElement=document.createElement('i');
    $(iconElement).attr('class',`fab fa-${icon}`);

    return iconElement;
}