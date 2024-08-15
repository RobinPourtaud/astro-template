import { ui, defaultLang, languages } from "./ui";

export type uiType = keyof typeof ui;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as uiType;
  return defaultLang;
}

export function useTranslations(lang: uiType) {
  return function t(
    key: string,
    ...args: any[]
  ) {
    let translation = ui[String(key) + "." + (lang ?? defaultLang)] ?? String(key);
    if (args.length > 0) {
      for (let i = 0; i < args.length; i++) {
        translation = translation.replace(`{${i}}`, args[i]);
      }
    }
    if (translation === key && lang !== defaultLang) {
      translation = ui[String(key) + "." + defaultLang] ?? key
    }
    else if (translation === key) {
      console.warn(`Translation for key "${key}" in language "${lang}" not found.`);
    }
    return translation;
  };
}

export function getLocalizedPathname(pathname: string, lang?: uiType): string {
  if (!(lang in languages)) lang = defaultLang;
  if (pathNameStartsWithLanguage(pathname)) {
    const [, , ...parts] = pathname.split('/');
    pathname = parts.join('/');
  }
  if (!pathname.startsWith('/')) {
    pathname = '/' + pathname;
  }
  if (lang === defaultLang) return pathname;
  return `/${lang}${pathname}`;
}

export function pathNameIsInLanguage(pathname: string, lang: uiType) {
  return pathname.startsWith(`/${lang}`) || (lang === defaultLang && !pathNameStartsWithLanguage(pathname));
}
function pathNameStartsWithLanguage(pathname: string) {
  let startsWithLanguage = false;

  const langua = Object.keys(languages);

  for (let i = 0; i < langua.length; i++) {
    const lang = langua[i];
    if (pathname.startsWith(`/${lang}`)) {
      startsWithLanguage = true;
      break;
    }
  }

  return startsWithLanguage;
}