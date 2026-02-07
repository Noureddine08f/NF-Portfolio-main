import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { blackLangue, whiteLangue } from '../assets/icons';

const LanguageSelector = ({ darkMode }) => {
  const [showPopup, setShowPopup] = useState(false);
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en');

  const languages = [
    { code: 'en', name: 'ENG', fullName: 'English' },
    { code: 'de', name: 'DE', fullName: 'Deutsch' },
    { code: 'ar', name: 'AR', fullName: 'العربية' }
  ];

  const changeLanguage = (languageCode) => {
    i18n.changeLanguage(languageCode);
    setCurrentLanguage(languageCode);

    // Handle Direction
    const direction = languageCode === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
    document.documentElement.lang = languageCode;

    setShowPopup(false);
  };

  useEffect(() => {
    // Sync state with i18n language on mount
    setCurrentLanguage(i18n.language);
    const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.dir = direction;
  }, [i18n.language]);

  return (
    <div className="relative">
      {/* Language Icon */}
      <div
        onClick={() => setShowPopup(!showPopup)}
        className="cursor-pointer transition-all duration-200 "
      >
        <img
          src={darkMode ? whiteLangue : blackLangue}
          alt="language"
          className="p-2 w-10 h-10  transition-all duration-500 hover:scale-110 hover:rotate-12"
        />
      </div>

      {/* Language Popup */}
      {showPopup && (
        <div
          className="absolute right-0 mt-2 w-32 bg-slate-400 rounded-md shadow-lg z-50 border border-gray-700 overflow-hidden"
          onMouseLeave={() => setShowPopup(false)}
        >
          <div className="py-1">
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`px-4 py-2 text-sm cursor-pointer flex items-center justify-between transition-colors
                  ${currentLanguage === lang.code
                    ? 'bg-blue-900 text-coral-red'
                    : 'text-gray-900 hover:bg-gray-200'
                  }`}
              >
                <span className="font-bold">{lang.name}</span>
                <span className="text-xs opacity-75">{lang.fullName}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;