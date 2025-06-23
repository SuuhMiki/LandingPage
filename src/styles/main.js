document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('cta-button');
    
    if (button) {
        button.addEventListener('click', function() {
            // Ao clicar, rola suavemente até a FAQ
            const faqSection = document.getElementById('faq');
            if (faqSection) {
                faqSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });

    // Implementação para os botões "Ver mais" da endurance
    const enduranceButtons = document.querySelectorAll('.endurance__btn');
    enduranceButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            alert('Você clicou em "Ver mais"!');
        });
    });
});