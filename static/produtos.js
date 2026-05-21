// Controle e Animações Dinâmicas do Catálogo DNLH
document.addEventListener('DOMContentLoaded', () => {

    
    // 1. Verificação de Redirecionamento Direto (Bypass do Splash Screen)
    
    const urlParams = new URLSearchParams(window.location.search);
    
    if (urlParams.get('bypass') === 'true') {
        const welcomeScreen = document.getElementById('welcome-screen');
        const mainSite = document.getElementById('main-site');
        
        // Remove a tela de boas-vindas e mostra o site principal diretamente
        if (welcomeScreen && mainSite) {
            welcomeScreen.style.display = 'none';
            mainSite.classList.remove('hidden');
        }
    }

    
    // 2. Efeito de Opacidade Fluida na Página
    
    document.body.style.opacity = '1';

    
    // 3. Menu Mobile Responsivo (Toggle Hamburger)
    
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navLinksContainer = document.querySelector('nav');
    const navLinks = document.querySelectorAll('nav ul li a');

    if (mobileMenuBtn && navLinksContainer) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinksContainer.classList.toggle('active');
        });

        // Fecha o menu ao clicar em qualquer âncora de categoria
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinksContainer.classList.remove('active');
            });
        });
    }

    
    // 4. Intersection Observer para Animação dos Cards sob Demanda
    
    const productCards = document.querySelectorAll('.product-card');
    
    const cardObserverOptions = {
        root: null,
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px'
    };

    const cardObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); 
            }
        });
    }, cardObserverOptions);

    productCards.forEach(card => {
        cardObserver.observe(card);
    });
});


// 5. Função Global de Entrada no Site (Cliques no Botão Explorar Portfólio)

function startWebsite() {
    const welcomeScreen = document.getElementById('welcome-screen');
    const mainSite = document.getElementById('main-site');
    
    if (welcomeScreen && mainSite) {
        welcomeScreen.style.display = 'none';
        mainSite.classList.remove('hidden');
    }
}