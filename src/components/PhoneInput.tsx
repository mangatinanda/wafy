import React, { useState, useEffect } from 'react';
import { Phone, ExternalLink, Link, AlertCircle } from 'lucide-react';
import { validateAndFormatPhone, PhoneValidationResult } from '../utils/phoneValidation';
import { Country } from '../data/countries';

interface PhoneInputProps {
  defaultCountry: Country;
}

export function PhoneInput({ defaultCountry }: PhoneInputProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [validation, setValidation] = useState<PhoneValidationResult>({ isValid: false });
  const [showLink, setShowLink] = useState(false);

  useEffect(() => {
    if (phoneNumber.trim()) {
      const result = validateAndFormatPhone(phoneNumber, defaultCountry.dialCode);
      setValidation(result);
    } else {
      setValidation({ isValid: false });
      setShowLink(false);
    }
  }, [phoneNumber, defaultCountry.dialCode]);

  const handleStart = () => {
    if (validation.isValid) {
      setShowLink(true);
    }
  };

  const handleGo = () => {
    if (validation.whatsappLink) {
      window.open(validation.whatsappLink, '_blank');
    }
  };

  const copyToClipboard = async () => {
    if (validation.whatsappLink) {
      try {
        await navigator.clipboard.writeText(validation.whatsappLink);
        // Could add a toast notification here
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Phone className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder={`Enter phone number (${defaultCountry.dialCode} for ${defaultCountry.name})`}
            className="w-full pl-12 pr-4 py-4 text-lg rounded-xl border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-whatsapp-500 focus:border-transparent transition-all duration-200 shadow-sm"
            autoComplete="tel"
          />
        </div>

        {validation.error && (
          <div className="flex items-center gap-2 text-red-500 text-sm animate-slide-up bg-red-50 dark:bg-red-900/20 px-4 py-2 rounded-lg border border-red-200 dark:border-red-800">
            <AlertCircle className="w-4 h-4" />
            <span>{validation.error}</span>
          </div>
        )}

        {validation.isValid && validation.formattedNumber && (
          <div className="bg-green-50 dark:bg-green-900/20 px-4 py-3 rounded-lg border border-green-200 dark:border-green-800 animate-slide-up">
            <p className="text-green-700 dark:text-green-300 text-sm font-medium">
              Formatted: {validation.formattedNumber}
            </p>
          </div>
        )}
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleStart}
          disabled={!validation.isValid}
          className="flex-1 bg-gradient-to-r from-whatsapp-500 to-whatsapp-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-whatsapp-600 hover:to-whatsapp-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <Link className="w-5 h-5" />
          Start
        </button>
        <button
          onClick={handleGo}
          disabled={!validation.isValid}
          className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
        >
          <ExternalLink className="w-5 h-5" />
          Go
        </button>
      </div>

      {showLink && validation.whatsappLink && (
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 animate-slide-up">
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">WhatsApp Link:</p>
              <p className="text-sm font-mono text-gray-900 dark:text-white break-all bg-white dark:bg-gray-700 px-3 py-2 rounded-lg border">
                {validation.whatsappLink}
              </p>
            </div>
            <button
              onClick={copyToClipboard}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
              title="Copy to clipboard"
            >
              <Link className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}