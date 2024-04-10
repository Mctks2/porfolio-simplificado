/*
    Objetivo 1 - quando o usuário clicar no botão de mostrar mais deve abrir os projetos que estão escondidos no html

        Passo 1 - pegar o botão "mostrar mais" no JS pra poder verificar quando o usuário clicar em cima dele

        Passo 2 - identificar o clique no botão
        
        Passo 3 - adicionar a classe "ativo" nos projetos escondidos

    Objetivo 2 - esconder o botão de mostrar mais
        Passo 1 - pegar o botão e esconder ele
*/

const btnShowProjects = document.querySelector(".btn-show-projects");

const projectsDisabled = document.querySelectorAll(".project:not(.active)");

btnShowProjects.addEventListener("click", () => {
  showNewProjects();
  hideButton();
});
function hideButton() {
  btnShowProjects.classList.add("remove");
}

function showNewProjects() {
  projectsDisabled.forEach((projectDisabled) => {
    projectDisabled.classList.add("active");
  });
}
