document.addEventListener('DOMContentLoaded', () => {
    // Dropdown ელემენტის პოვნა
    const langSelect = document.getElementById('langSelect');
    const defaultLang = 'ka';
    let currentLang = localStorage.getItem('currentLang') || defaultLang;

    const setLanguage = (lang) => { 
        document.documentElement.lang = lang;
        localStorage.setItem('currentLang', lang);

        // ტექსტების გამოჩენა/დამალვა
        document.querySelectorAll('[data-lang]').forEach(element => {
            if (element.dataset.lang === lang) {
                element.classList.remove('hidden');
            } else {
                element.classList.add('hidden');
            }
        });

        // Dropdown-ის მნიშვნელობის განახლება (თუ სკრიპტით შეიცვალა)
        if (langSelect.value !== lang) {
            langSelect.value = lang;
        }
    };

    // Dropdown-ის შეცვლაზე მოსმენა
    langSelect.addEventListener('change', (e) => {
        setLanguage(e.target.value);
    });

    // გვერდის ჩატვირთვისას ენის დაყენება და Dropdown-ის სწორ პოზიციაზე დაყენება
    if (currentLang) {
        setLanguage(currentLang);
        langSelect.value = currentLang;
    }
});