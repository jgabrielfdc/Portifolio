$(document).ready(function () {
  fetch("dataset/skills.json")
    .then((item) => item.json())
    .then((item) => {
      for (skill of item["skills"]) {
        cardBuilder(skill);
      }
    });

  function cardBuilder({ title, tipo, id, icon }) {
    let itemList = document.createElement("li");
    let cardBody = document.createElement("div");
    let cardCanvas = document.createElement("canvas");
    let cardContent = document.createElement("div");
    let cardIcon = document.createElement("div");
    let cardTitle = document.createElement("div");

    // $(itemList).attr("data-size", "small");
    // $(itemList).attr("class", "uk-first-column");
    $(itemList).attr("id", tipo);

    $(cardBody).addClass(
      "uk-card uk-card-hover uk-card-default uk-card-body uk-border-rounded"
    );
    $(cardBody).attr("id", `${icon.name}-${id}`);

    $(cardCanvas).attr("width", 40);
    $(cardCanvas).attr("height", 60);

    $(cardContent).addClass("uk-position-center h1 pb-3");

    if(icon.type=="bootstrap"){
      $(cardIcon).addClass(`fa-brands fa-${icon.name} fa-2xl uk-text-secondary`);
    }

    if(icon.type=="uikit"){
      $(cardIcon).attr('class',"uk-text-medium uk-text-secondary uk-icon")
      $(cardIcon).attr('uk-icon',`icon: ${icon.name};ratio: 3;`)
    }

    $(cardTitle).addClass("uk-position-bottom-center h4 p-1");
    $(cardTitle).text(title);

    $(cardContent).append(cardIcon);

    $(cardBody).append(cardCanvas).append(cardContent).append(cardTitle);

    $(itemList).append(cardBody);
    
    $(itemList).on("click",({currentTarget})=>{
      let currentTargetId=$($(currentTarget).children()[0]).attr('id');

      findSkill(currentTargetId)
    });

    $("#skill__cards").append(itemList);
  }
});