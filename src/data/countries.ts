import { allCountries } from 'country-telephone-data';

export interface Country {
  name: string;
  iso2: string;
  dialCode: string;
  format?: string;
}

export const countries: Country[] = allCountries.map(country => ({
  name: country.name,
  iso2: country.iso2,
  dialCode: `+${country.dialCode}`,
  format: country.format
})).sort((a, b) => a.name.localeCompare(b.name));

export const getCountryByDialCode = (dialCode: string): Country | undefined => {
  return countries.find(country => country.dialCode === dialCode);
};

export const getDefaultCountry = (): Country => {
  return countries.find(country => country.dialCode === '+91') || countries[0];
};