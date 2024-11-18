export type Language = 'en' | 'fr';

export const getInitialLanguage = (): Language => {
    var userLanguage = 'en';
    if (typeof window !== 'undefined') {
        userLanguage = navigator.language.startsWith('fr') ? 'fr' : 'en';
    }

    return userLanguage === 'fr' ? 'fr' : 'en';
};

export const toggleLanguage = (currentLanguage: Language): Language => {
    return currentLanguage === 'en' ? 'fr' : 'en';
};