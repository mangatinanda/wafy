import React, { useState } from 'react';
import { X, Globe } from 'lucide-react';
import { countries, Country } from '../data/countries';

interface SettingsProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCountry: Country;
  onCountryChange: (country: Country) => void;
}

export function Settings({ isOpen, onClose, defaultCountry, onCountryChange }: SettingsProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.dialCode.includes(searchTerm)
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl w-full max-w-md max-h-[80vh] overflow-hidden border border-gray-200 dark:border-gray-700 animate-scale-in">
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <Globe className="w-5 h-5 text-blue-500" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Settings</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Default Country Code
            </label>
            <input
              type="text"
              placeholder="Search countries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <div className="max-h-64 overflow-y-auto space-y-1">
            {filteredCountries.map((country) => (
              <button
                key={country.iso2}
                onClick={() => {
                  onCountryChange(country);
                  onClose();
                }}
                className={`w-full text-left px-4 py-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                  defaultCountry.dialCode === country.dialCode
                    ? 'bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800'
                    : 'border border-transparent'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-gray-900 dark:text-white font-medium">
                    {country.name}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 font-mono text-sm">
                    {country.dialCode}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}