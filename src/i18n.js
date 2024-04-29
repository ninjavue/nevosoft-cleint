import { createI18n } from 'vue-i18n'

import en from './locales/en.json'
import uz from './locales/uz.json'
import ru from './locales/ru.json'


function loadLocaleMessagess() {
    const locales = [
        {
            English:en
        },
        {
            Russian:ru
        },
        {
            Uzbek:uz
        }
    ]
    const messages = {}
    locales.forEach(lang => {
        const key = Object.keys(lang)
        messages[key] = lang[key]
    })
    return messages
}

export default createI18n({
    locale: 'Uzbek',
    fallbackLocale: 'Uzbek',
    messages: loadLocaleMessagess()
})