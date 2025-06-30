import { parsePhoneNumber, isValidPhoneNumber, CountryCode } from 'libphonenumber-js';

export interface PhoneValidationResult {
  isValid: boolean;
  formattedNumber?: string;
  whatsappLink?: string;
  error?: string;
}

export function validateAndFormatPhone(
  input: string, 
  defaultCountryCode: string = '+91'
): PhoneValidationResult {
  if (!input.trim()) {
    return {
      isValid: false,
      error: 'Please enter a phone number'
    };
  }

  try {
    let numberToValidate = input.trim();
    
    // If input is just digits and doesn't start with +, add default country code
    if (/^\d{10}$/.test(numberToValidate)) {
      numberToValidate = defaultCountryCode + numberToValidate;
    }

    // Parse the phone number
    const phoneNumber = parsePhoneNumber(numberToValidate);
    
    if (!phoneNumber || !isValidPhoneNumber(numberToValidate)) {
      return {
        isValid: false,
        error: 'Please enter a valid phone number'
      };
    }

    const formattedNumber = phoneNumber.formatInternational();
    const whatsappNumber = phoneNumber.number.replace(/\D/g, '');
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    return {
      isValid: true,
      formattedNumber,
      whatsappLink
    };
  } catch (error) {
    return {
      isValid: false,
      error: 'Please enter a valid phone number'
    };
  }
}