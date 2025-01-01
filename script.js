function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

document.addEventListener("DOMContentLoaded", () => {
    // Criação da chuva de corações
    const heartsContainer = document.querySelector('.hearts');
    setInterval(() => {
        const heart = document.createElement('span');
        heart.innerText = '❤️';
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Aleatório de 3s a 5s
        heart.style.fontSize = `${Math.random() * 1 + 2}em`;
        heart.style.color = ['red', 'green', 'pink', 'yellow'][Math.floor(Math.random() * 4)];
        heartsContainer.appendChild(heart);

        // Remover corações após animação
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 200); // Cria um coração a cada 200ms
});
