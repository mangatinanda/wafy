import React, { useState } from 'react';
import { Settings as SettingsIcon, MessageCircle } from 'lucide-react';
import { PhoneInput } from './components/PhoneInput';
import { Settings } from './components/Settings';
import { ThemeToggle } from './components/ThemeToggle';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useTheme } from './hooks/useTheme';
import { getDefaultCountry, Country } from './data/countries';

function App() {
  useTheme(); // Initialize theme
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [defaultCountry, setDefaultCountry] = useLocalStorage<Country>(
    'wafy-country',
    getDefaultCountry()
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="relative p-4 sm:p-6">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-whatsapp-500 rounded-xl shadow-lg animate-scale-in">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Wafy
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Generate WhatsApp links instantly
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setIsSettingsOpen(true)}
              className="p-2 rounded-lg bg-white/20 dark:bg-gray-800/20 backdrop-blur-sm border border-white/30 dark:border-gray-700/30 hover:bg-white/30 dark:hover:bg-gray-700/30 transition-all duration-200"
              aria-label="Open settings"
            >
              <SettingsIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-4 sm:px-6 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Create WhatsApp Links
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Enter any phone number and generate a direct WhatsApp chat link. 
              Perfect for businesses, support, or personal use.
            </p>
          </div>

          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 dark:border-gray-700/20 p-6 sm:p-8 animate-slide-up">
            <PhoneInput defaultCountry={defaultCountry} />
          </div>

          {/* Features */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-gray-700/20">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Instant Links
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Generate WhatsApp chat links instantly with any phone number format.
              </p>
            </div>

            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-gray-700/20">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <SettingsIcon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Smart Validation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Automatically validates and formats phone numbers from any country.
              </p>
            </div>

            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-xl p-6 border border-white/20 dark:border-gray-700/20">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                Global Support
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Supports all international phone number formats and country codes.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Settings Modal */}
      <Settings
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        defaultCountry={defaultCountry}
        onCountryChange={setDefaultCountry}
      />
    </div>
  );
}

export default App;