// Script para alternar a exibição das respostas
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    item.addEventListener('click', () => {
        // Adiciona ou remove a classe "active" para abrir/fechar a resposta
        item.classList.toggle('active');
    });
});
