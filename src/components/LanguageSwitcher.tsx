
import { useTranslation } from 'react-i18next';
import { Globe, ChevronDown } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
    { code: 'pt', label: 'Português', short: 'PT' },
    { code: 'en', label: 'English', short: 'EN' },
    { code: 'fr', label: 'Français', short: 'FR' },
    { code: 'de', label: 'Deutsch', short: 'DE' },
    { code: 'it', label: 'Italiano', short: 'IT' },
    { code: 'es', label: 'Español', short: 'ES' },
    { code: 'nl', label: 'Nederlands', short: 'NL' },
];

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const currentLanguageCode = i18n.language ? i18n.language.split('-')[0] : 'pt';
    const currentLanguage = languages.find(l => l.code === currentLanguageCode) || languages[0];

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center space-x-1 outline-none group">
                <Globe className="w-4 h-4 text-white/80 group-hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300" />
                <span className="text-xs font-medium text-white/90 group-hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 uppercase tracking-wide min-w-[1.5rem] text-center">
                    {currentLanguage.short}
                </span>
                <ChevronDown className="w-3 h-3 text-white/60 group-hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 opacity-0 group-hover:opacity-100 -ml-1" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-[hsl(var(--gold-leaf))]/20 z-[60]">
                {languages.map((lang) => (
                    <DropdownMenuItem
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`cursor-pointer text-xs font-light tracking-wide ${currentLanguageCode === lang.code
                                ? 'text-[hsl(var(--gold-leaf))] font-medium bg-[hsl(var(--gold-leaf))]/10'
                                : 'text-gray-700 dark:text-gray-300 hover:text-[hsl(var(--gold-leaf))] hover:bg-[hsl(var(--gold-leaf))]/5'
                            }`}
                    >
                        <span className="w-6 uppercase text-[10px] opacity-70 mr-2">{lang.short}</span>
                        {lang.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LanguageSwitcher;
