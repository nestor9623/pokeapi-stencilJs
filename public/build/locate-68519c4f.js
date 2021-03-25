import { l as lodash } from './pokeApiService.service-6ab7793b.js';

function getComponentClosestLanguage(element) {
  let closestElement = element.closest('[lang]');
  return closestElement ? closestElement.lang : 'en';
}
function fetchLocaleStringsForComponent(locale) {
  return new Promise((resolve, reject) => {
    fetch('../i18n/traslate.i18n.' + locale + '.json')
      .then((result) => {
      if (result.ok)
        resolve(result.json());
      else
        reject();
    }, () => reject());
  });
}
async function getLocaleComponentStrings(element, language) {
  let componentName = element.tagName.toLowerCase();
  language = language === 'us' ? 'en' : language;
  let componentLanguage = !lodash.isNil(language) ? language : getComponentClosestLanguage(element);
  let strings;
  try {
    strings = await fetchLocaleStringsForComponent(componentLanguage);
  }
  catch (e) {
    console.warn(`no locale for ${componentName} (${componentLanguage}) loading default locale en.`);
    strings = await fetchLocaleStringsForComponent(language);
  }
  return strings;
}

export { getLocaleComponentStrings as g };
