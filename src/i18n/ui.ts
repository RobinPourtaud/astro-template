export const languages = {
    en: "English",
    fr: "Français",
    ja: "日本語"
};

export const defaultLang = "en";


const _transform = (obj: any, path: string[] = []): Record<string, string> => {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        if (typeof value === "object") {
            return { ...acc, ..._transform(value, [...path, key]) };
        }
        return { ...acc, [[...path, key].join(".")]: value };
    }, {});
};

import ymlTranslations from "./translations.json";
export const ui = _transform(ymlTranslations);