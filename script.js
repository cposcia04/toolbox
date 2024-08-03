// Funzionalità accordion-like per i tool-box principali
document.querySelectorAll('.tool-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        const otherContents = document.querySelectorAll('.tool-content');

        otherContents.forEach(c => {
            if (c !== content) c.style.display = 'none';
        });

        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
});


