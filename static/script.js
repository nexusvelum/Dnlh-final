// Função para ocultar a tela de boas-vindas e exibir o site principal com efeito suave
function startWebsite() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainSite = document.getElementById('main-site');
    
    welcomeScreen.style.opacity = '0';
    welcomeScreen.style.transform = 'scale(0.95)';
    
    setTimeout(() => {
        welcomeScreen.classList.add('hidden');
        mainSite.classList.remove('hidden');
        window.scrollTo(0, 0);
    }, 800);
}

// Menu de Navegação Mobile Responsivo
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinksContainer = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });

    // Fecha o menu ao clicar em qualquer link de navegação
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinksContainer.classList.remove('active');
        });
    });
});

// Função para ocultar o site principal e exibir a tela de Produtos
document.addEventListener('DOMContentLoaded', () => {
    const produtosLink = document.getElementById('produtos-link');
    const mainSite = document.getElementById('main-site');

    if (produtosLink && mainSite) {
        produtosLink.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            const targetUrl = this.getAttribute('href');

            mainSite.classList.add('fade-out');

            setTimeout(() => {
                window.location.href = targetUrl;
            }, 600);
        });
    }
});