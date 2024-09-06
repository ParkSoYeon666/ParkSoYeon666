document.addEventListener('DOMContentLoaded', () => {
    const languageButtons = document.querySelectorAll('#languageList button');

    languageButtons.forEach(button => {
        button.addEventListener('click', () => {
            const language = button.getAttribute('data-lang');
            alert(`You selected ${language}`);
        });
    });
});
