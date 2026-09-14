const translations = {
    ru: {
        "main.title": "Официальный сайт sosirsOS",
        "main.description": "Сайт для sosirsOS. Официально, от создателя sosirsOS."
    },
    en: {
        "main.title": "sosirsOS oficial website",
        "main.description": "Website for sosirsOS. Oficial, by sosirsOS creator"
    }
}

const translate = (id, lang) => {
    return translations[lang][id]
}

export { translations, translate }