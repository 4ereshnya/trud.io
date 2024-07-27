document.getElementById('backButton').addEventListener('click', function() {
    window.history.back();
});
document.addEventListener("DOMContentLoaded", function() {
    const link = document.querySelector('.navbar__links-text[href="#contacts"]');
    link.addEventListener('click', function(e) {
        e.preventDefault();  // Предотвратить стандартное действие перехода по ссылке
        const contactsSection = document.querySelector('#contacts');
        contactsSection.scrollIntoView({ behavior: 'smooth' });
    });
});
