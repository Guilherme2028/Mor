// Função para ativar e desativar o menu
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// Função para criar as estrelas que piscam
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const numberOfStars = 100; // Quantidade de estrelas

    for (let i = 0; i < numberOfStars; i++) {
        const star = document.createElement('span');
        star.style.left = `${Math.random() * 100}vw`; // A posição horizontal das estrelas
        star.style.top = `${Math.random() * 100}vh`; // A posição vertical das estrelas
        star.style.width = `${Math.random() * 3 + 1}px`; // Tamanho aleatório
        star.style.height = star.style.width; // Manter formato circular

        starsContainer.appendChild(star);
    }
}

createStars(); // Chama a função para gerar as estrelas
