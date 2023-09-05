function mask(value: string, pattern: string) {
  let i = 0;
  return pattern.replace(/_/g, () => value[i++]);
}

export function getPhoneLabel(phoneNumber: string) {
  return mask(phoneNumber, '(___) ___-____');
}

export function getWebSiteLabel(webSite: string) {
  return webSite.replace(/http[s]?:\/\//, '');
}

export function getMailTo(address: string) {
  return `mailto:${address}?subject=A citizen has contacted you from CitizenContact`;
}

export const getStringAbbreviation = (value: string) => {
  const abbreviation = value.split(' ');
  let stringAbbreviation: string = '';

  if (abbreviation) {
    stringAbbreviation = abbreviation[0][0];

    if (abbreviation.length >= 2) {
      stringAbbreviation += abbreviation[1][0];
    }

    if (abbreviation.length >= 3) {
      stringAbbreviation += abbreviation[2][0];
    }
  }

  return stringAbbreviation;
};

export function getColorRgb(color: string): string {
  const el = document.createElement('div');
  el.style.color = color;
  document.body.appendChild(el);
  const rgb = window.getComputedStyle(el).getPropertyValue('color');
  document.body.removeChild(el);
  return rgb;
}
