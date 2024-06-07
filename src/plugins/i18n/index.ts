import { createI18n } from 'vue-i18n';
import messages from './locales/messages';
/*const loadedLanguages = ['fr', 'en']; // our default language that is preloaded
function setI18nLanguage(lang) {
    i18n.global.locale = lang;

    return lang;
}*/

/*const messages = Object.fromEntries(
    Object.entries(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        import.meta.glob<{ default: any }>('@/utils/locales/messages/!*.json', { eager: true })
    ).map(([key, value]) => [key.slice(10, -5), value.default])
);*/

export const i18n = createI18n({
    legacy: false,
    locale: 'fr',
    fallbackLocale: 'fr',
    messages: messages,
    silentTranslationWarn: true,
    silentFallbackWarn: true
});
export const t = i18n.global.t;
export default i18n;
