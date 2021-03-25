import { isNil as _isNil} from 'lodash';
function getComponentClosestLanguage(element: HTMLElement): string {
  let closestElement = element.closest('[lang]') as HTMLElement;
  return closestElement ? closestElement.lang : 'en';
}

function fetchLocaleStringsForComponent(locale: string): Promise<any> {
  return new Promise((resolve, reject): void => {
    fetch('../i18n/traslate.i18n.' + locale +'.json')
    .then((result) => {
      if (result.ok) resolve(result.json());
      else reject();
    }, () => reject());
  });
}

export async function getLocaleComponentStrings(element: HTMLElement , language: string): Promise<any> {
  let componentName = element.tagName.toLowerCase();
  language = language === 'us' ? 'en' : language;
  let componentLanguage =!_isNil(language) ? language :  getComponentClosestLanguage(element);
  let strings;
  try {
    strings = await fetchLocaleStringsForComponent(componentLanguage);
  } catch (e) {
    console.warn(`no locale for ${componentName} (${componentLanguage}) loading default locale en.`);
    strings = await fetchLocaleStringsForComponent(language);
  }
  return strings;
}
