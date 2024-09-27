// Função para verificar se a seção está visível na tela
function isSectionVisible(section) {
    const rect = section.getBoundingClientRect();
    return rect.top <= (window.innerHeight || document.documentElement.clientHeight) && rect.bottom >= 0;
}

// Função para animar as seções ao rolar a página
function animateSections() {
    const sections = document.querySelectorAll('.animation');
    sections.forEach(section => {
        if (isSectionVisible(section)) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Evento de rolagem e ao carregar a página
window.addEventListener('scroll', animateSections);
window.addEventListener('load', animateSections);


/*
Como Funciona:
CSS: Cada seção tem uma animação específica definida com opacity e transform. A classe visible é adicionada quando a seção entra na tela.
JavaScript: O código detecta se uma seção está visível na tela (ou está sendo rolada para fora) e adiciona ou remove a classe visible, ativando a animação.

Como Editar:
Alterar Animações: Modifique os valores de transform, opacity, e transition no CSS para alterar a animação de entrada e saída.
Adicionar Novas Animações: Crie novas classes CSS para outras seções do site e adicione os mesmos gatilhos no JavaScript.
Ajustar Tempos e Efeitos: Você pode ajustar o tempo da animação alterando 0.6s para qualquer outro valor e mudar o efeito ease-out para outras opções como ease-in, ease-in-out, etc.
*/