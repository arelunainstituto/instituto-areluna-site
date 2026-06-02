export interface Country {
  code: string;
  iso: string;
  flag: string;
  name: string;
  placeholder: string;
  mask: string;
  minDigits: number;
  maxDigits: number;
}

const PRIORITY: Country[] = [
  { code: "+351", iso: "PT", flag: "🇵🇹", name: "Portugal",      placeholder: "912 345 678",      mask: "### ### ###",     minDigits: 9,  maxDigits: 9  },
  { code: "+41",  iso: "CH", flag: "🇨🇭", name: "Suíça",         placeholder: "78 123 45 67",     mask: "## ### ## ##",    minDigits: 9,  maxDigits: 9  },
  { code: "+352", iso: "LU", flag: "🇱🇺", name: "Luxemburgo",    placeholder: "621 123 456",      mask: "### ### ###",     minDigits: 9,  maxDigits: 9  },
  { code: "+33",  iso: "FR", flag: "🇫🇷", name: "França",        placeholder: "6 12 34 56 78",    mask: "# ## ## ## ##",   minDigits: 9,  maxDigits: 9  },
  { code: "+49",  iso: "DE", flag: "🇩🇪", name: "Alemanha",      placeholder: "1512 1234567",     mask: "#### #######",    minDigits: 10, maxDigits: 11 },
  { code: "+44",  iso: "GB", flag: "🇬🇧", name: "Reino Unido",   placeholder: "7400 123 456",     mask: "#### ### ###",    minDigits: 10, maxDigits: 10 },
  { code: "+31",  iso: "NL", flag: "🇳🇱", name: "Holanda",       placeholder: "6 12345678",       mask: "# ########",      minDigits: 9,  maxDigits: 9  },
];

const REST: Country[] = [
  { code: "+27",  iso: "ZA", flag: "🇿🇦", name: "África do Sul",          placeholder: "82 123 4567",   mask: "## ### ####",  minDigits: 9,  maxDigits: 9  },
  { code: "+93",  iso: "AF", flag: "🇦🇫", name: "Afeganistão",            placeholder: "70 123 4567",   mask: "## ### ####",  minDigits: 9,  maxDigits: 9  },
  { code: "+355", iso: "AL", flag: "🇦🇱", name: "Albânia",                placeholder: "67 212 3456",   mask: "## ### ####",  minDigits: 9,  maxDigits: 9  },
  { code: "+49",  iso: "DE-alt", flag: "🇩🇪", name: "Alemanha (alt)",     placeholder: "1512 1234567",  mask: "#### #######", minDigits: 10, maxDigits: 11 },
  { code: "+376", iso: "AD", flag: "🇦🇩", name: "Andorra",                placeholder: "312 345",       mask: "### ###",      minDigits: 6,  maxDigits: 6  },
  { code: "+244", iso: "AO", flag: "🇦🇴", name: "Angola",                 placeholder: "923 123 456",   mask: "### ### ###",  minDigits: 9,  maxDigits: 9  },
  { code: "+966", iso: "SA", flag: "🇸🇦", name: "Arábia Saudita",         placeholder: "51 234 5678",   mask: "## ### ####",  minDigits: 9,  maxDigits: 9  },
  { code: "+213", iso: "DZ", flag: "🇩🇿", name: "Argélia",                placeholder: "551 23 45 67",  mask: "### ## ## ##", minDigits: 9,  maxDigits: 9  },
  { code: "+54",  iso: "AR", flag: "🇦🇷", name: "Argentina",              placeholder: "11 1234-5678",  mask: "## ########",  minDigits: 10, maxDigits: 11 },
  { code: "+374", iso: "AM", flag: "🇦🇲", name: "Arménia",                placeholder: "77 123456",     mask: "## ######",    minDigits: 8,  maxDigits: 8  },
  { code: "+61",  iso: "AU", flag: "🇦🇺", name: "Austrália",              placeholder: "412 345 678",   mask: "### ### ###",  minDigits: 9,  maxDigits: 9  },
  { code: "+43",  iso: "AT", flag: "🇦🇹", name: "Áustria",                placeholder: "660 1234567",   mask: "### #######",  minDigits: 10, maxDigits: 11 },
  { code: "+994", iso: "AZ", flag: "🇦🇿", name: "Azerbaijão",             placeholder: "40 123 45 67",  mask: "## ### ## ##", minDigits: 9,  maxDigits: 9  },
  { code: "+973", iso: "BH", flag: "🇧🇭", name: "Bahrein",                placeholder: "3600 1234",     mask: "#### ####",    minDigits: 8,  maxDigits: 8  },
  { code: "+880", iso: "BD", flag: "🇧🇩", name: "Bangladesh",             placeholder: "1812-345678",   mask: "#### ######",  minDigits: 10, maxDigits: 10 },
  { code: "+32",  iso: "BE", flag: "🇧🇪", name: "Bélgica",                placeholder: "470 12 34 56",  mask: "### ## ## ##", minDigits: 9,  maxDigits: 9  },
  { code: "+501", iso: "BZ", flag: "🇧🇿", name: "Belize",                 placeholder: "622-1234",      mask: "###-####",     minDigits: 7,  maxDigits: 7  },
  { code: "+229", iso: "BJ", flag: "🇧🇯", name: "Benim",                  placeholder: "90 01 12 34",   mask: "## ## ## ##",  minDigits: 8,  maxDigits: 8  },
  { code: "+375", iso: "BY", flag: "🇧🇾", name: "Bielorrússia",           placeholder: "29 491-19-11",  mask: "## ### ## ##", minDigits: 9,  maxDigits: 9  },
  { code: "+591", iso: "BO", flag: "🇧🇴", name: "Bolívia",                placeholder: "71234567",      mask: "########",     minDigits: 8,  maxDigits: 8  },
  { code: "+387", iso: "BA", flag: "🇧🇦", name: "Bósnia e Herzegovina",   placeholder: "61 123 456",    mask: "## ### ###",   minDigits: 8,  maxDigits: 8  },
  { code: "+55",  iso: "BR", flag: "🇧🇷", name: "Brasil",                 placeholder: "11 91234-5678", mask: "## #####-####", minDigits: 10, maxDigits: 11 },
  { code: "+359", iso: "BG", flag: "🇧🇬", name: "Bulgária",               placeholder: "48 123 4567",   mask: "## ### ####",  minDigits: 9,  maxDigits: 9  },
  { code: "+226", iso: "BF", flag: "🇧🇫", name: "Burkina Faso",           placeholder: "70 12 34 56",   mask: "## ## ## ##",  minDigits: 8,  maxDigits: 8  },
  { code: "+238", iso: "CV", flag: "🇨🇻", name: "Cabo Verde",             placeholder: "991 12 34",     mask: "### ## ##",    minDigits: 7,  maxDigits: 7  },
  { code: "+855", iso: "KH", flag: "🇰🇭", name: "Camboja",                placeholder: "91 234 567",    mask: "## ### ###",   minDigits: 8,  maxDigits: 9  },
  { code: "+237", iso: "CM", flag: "🇨🇲", name: "Camarões",               placeholder: "6 71 23 45 67", mask: "# ## ## ## ##", minDigits: 9, maxDigits: 9 },
  { code: "+1",   iso: "CA", flag: "🇨🇦", name: "Canadá",                 placeholder: "506 234 5678",  mask: "### ### ####", minDigits: 10, maxDigits: 10 },
  { code: "+7",   iso: "KZ", flag: "🇰🇿", name: "Cazaquistão",            placeholder: "771 000 9998",  mask: "### ### ####", minDigits: 10, maxDigits: 10 },
  { code: "+56",  iso: "CL", flag: "🇨🇱", name: "Chile",                  placeholder: "9 6123 4567",   mask: "# #### ####",  minDigits: 9,  maxDigits: 9  },
  { code: "+86",  iso: "CN", flag: "🇨🇳", name: "China",                  placeholder: "131 2345 6789", mask: "### #### ####",minDigits: 11, maxDigits: 11 },
  { code: "+357", iso: "CY", flag: "🇨🇾", name: "Chipre",                 placeholder: "96 123456",     mask: "## ######",    minDigits: 8,  maxDigits: 8  },
  { code: "+57",  iso: "CO", flag: "🇨🇴", name: "Colômbia",               placeholder: "321 1234567",   mask: "### #######",  minDigits: 10, maxDigits: 10 },
  { code: "+82",  iso: "KR", flag: "🇰🇷", name: "Coreia do Sul",          placeholder: "10 2123 4567",  mask: "## #### ####", minDigits: 9,  maxDigits: 10 },
  { code: "+506", iso: "CR", flag: "🇨🇷", name: "Costa Rica",             placeholder: "8312 3456",     mask: "#### ####",    minDigits: 8,  maxDigits: 8  },
  { code: "+385", iso: "HR", flag: "🇭🇷", name: "Croácia",                placeholder: "91 234 5678",   mask: "## ### ####",  minDigits: 9,  maxDigits: 9  },
  { code: "+53",  iso: "CU", flag: "🇨🇺", name: "Cuba",                   placeholder: "5 1234567",     mask: "# #######",    minDigits: 8,  maxDigits: 8  },
  { code: "+45",  iso: "DK", flag: "🇩🇰", name: "Dinamarca",              placeholder: "32 12 34 56",   mask: "## ## ## ##",  minDigits: 8,  maxDigits: 8  },
  { code: "+20",  iso: "EG", flag: "🇪🇬", name: "Egito",                  placeholder: "100 123 4567",  mask: "### ### ####", minDigits: 10, maxDigits: 10 },
  { code: "+503", iso: "SV", flag: "🇸🇻", name: "El Salvador",            placeholder: "7012 3456",     mask: "#### ####",    minDigits: 8,  maxDigits: 8  },
  { code: "+971", iso: "AE", flag: "🇦🇪", name: "Emirados Árabes Unidos", placeholder: "50 123 4567",   mask: "## ### ####",  minDigits: 9,  maxDigits: 9  },
  { code: "+593", iso: "EC", flag: "🇪🇨", name: "Equador",                placeholder: "99 123 4567",   mask: "## ### ####",  minDigits: 9,  maxDigits: 9  },
  { code: "+421", iso: "SK", flag: "🇸🇰", name: "Eslováquia",             placeholder: "912 123 456",   mask: "### ### ###",  minDigits: 9,  maxDigits: 9  },
  { code: "+386", iso: "SI", flag: "🇸🇮", name: "Eslovénia",              placeholder: "31 234 567",    mask: "## ### ###",   minDigits: 8,  maxDigits: 8  },
  { code: "+34",  iso: "ES", flag: "🇪🇸", name: "Espanha",                placeholder: "612 34 56 78",  mask: "### ## ## ##", minDigits: 9,  maxDigits: 9  },
  { code: "+1",   iso: "US", flag: "🇺🇸", name: "Estados Unidos",         placeholder: "201 555 0123",  mask: "### ### ####", minDigits: 10, maxDigits: 10 },
  { code: "+372", iso: "EE", flag: "🇪🇪", name: "Estónia",                placeholder: "5123 4567",     mask: "#### ####",    minDigits: 7,  maxDigits: 8  },
  { code: "+63",  iso: "PH", flag: "🇵🇭", name: "Filipinas",              placeholder: "905 123 4567",  mask: "### ### ####", minDigits: 10, maxDigits: 10 },
  { code: "+358", iso: "FI", flag: "🇫🇮", name: "Finlândia",              placeholder: "41 234567",     mask: "## #######",   minDigits: 9,  maxDigits: 10 },
  { code: "+995", iso: "GE", flag: "🇬🇪", name: "Geórgia",                placeholder: "555 12 34 56",  mask: "### ## ## ##", minDigits: 9,  maxDigits: 9  },
  { code: "+30",  iso: "GR", flag: "🇬🇷", name: "Grécia",                 placeholder: "691 234 5678",  mask: "### ### ####", minDigits: 10, maxDigits: 10 },
  { code: "+502", iso: "GT", flag: "🇬🇹", name: "Guatemala",              placeholder: "5123 4567",     mask: "#### ####",    minDigits: 8,  maxDigits: 8  },
  { code: "+504", iso: "HN", flag: "🇭🇳", name: "Honduras",               placeholder: "9123 4567",     mask: "#### ####",    minDigits: 8,  maxDigits: 8  },
  { code: "+852", iso: "HK", flag: "🇭🇰", name: "Hong Kong",              placeholder: "5123 4567",     mask: "#### ####",    minDigits: 8,  maxDigits: 8  },
  { code: "+36",  iso: "HU", flag: "🇭🇺", name: "Hungria",                placeholder: "20 123 4567",   mask: "## ### ####",  minDigits: 9,  maxDigits: 9  },
  { code: "+91",  iso: "IN", flag: "🇮🇳", name: "Índia",                  placeholder: "81234 56789",   mask: "##### #####",  minDigits: 10, maxDigits: 10 },
  { code: "+62",  iso: "ID", flag: "🇮🇩", name: "Indonésia",              placeholder: "812 3456 7890", mask: "### #### ####",minDigits: 10, maxDigits: 12 },
  { code: "+98",  iso: "IR", flag: "🇮🇷", name: "Irão",                   placeholder: "912 345 6789",  mask: "### ### ####", minDigits: 10, maxDigits: 10 },
  { code: "+964", iso: "IQ", flag: "🇮🇶", name: "Iraque",                 placeholder: "791 234 5678",  mask: "### ### ####", minDigits: 10, maxDigits: 10 },
  { code: "+353", iso: "IE", flag: "🇮🇪", name: "Irlanda",                placeholder: "85 012 3456",   mask: "## ### ####",  minDigits: 9,  maxDigits: 9  },
  { code: "+354", iso: "IS", flag: "🇮🇸", name: "Islândia",               placeholder: "611 1234",      mask: "### ####",     minDigits: 7,  maxDigits: 7  },
  { code: "+972", iso: "IL", flag: "🇮🇱", name: "Israel",                 placeholder: "50 234 5678",   mask: "## ### ####",  minDigits: 9,  maxDigits: 9  },
  { code: "+39",  iso: "IT", flag: "🇮🇹", name: "Itália",                 placeholder: "312 345 6789",  mask: "### ### ####", minDigits: 10, maxDigits: 10 },
  { code: "+81",  iso: "JP", flag: "🇯🇵", name: "Japão",                  placeholder: "90 1234 5678",  mask: "## #### ####", minDigits: 10, maxDigits: 10 },
  { code: "+962", iso: "JO", flag: "🇯🇴", name: "Jordânia",               placeholder: "7 9012 3456",   mask: "# #### ####",  minDigits: 9,  maxDigits: 9  },
  { code: "+965", iso: "KW", flag: "🇰🇼", name: "Kuwait",                 placeholder: "500 12345",     mask: "### #####",    minDigits: 8,  maxDigits: 8  },
  { code: "+371", iso: "LV", flag: "🇱🇻", name: "Letónia",                placeholder: "21 234 567",    mask: "## ### ###",   minDigits: 8,  maxDigits: 8  },
  { code: "+961", iso: "LB", flag: "🇱🇧", name: "Líbano",                 placeholder: "71 123 456",    mask: "## ### ###",   minDigits: 7,  maxDigits: 8  },
  { code: "+370", iso: "LT", flag: "🇱🇹", name: "Lituânia",               placeholder: "612 34567",     mask: "### #####",    minDigits: 8,  maxDigits: 8  },
  { code: "+60",  iso: "MY", flag: "🇲🇾", name: "Malásia",                placeholder: "12-345 6789",   mask: "##-### ####",  minDigits: 9,  maxDigits: 10 },
  { code: "+356", iso: "MT", flag: "🇲🇹", name: "Malta",                  placeholder: "9696 1234",     mask: "#### ####",    minDigits: 8,  maxDigits: 8  },
  { code: "+52",  iso: "MX", flag: "🇲🇽", name: "México",                 placeholder: "55 1234 5678",  mask: "## #### ####", minDigits: 10, maxDigits: 10 },
  { code: "+258", iso: "MZ", flag: "🇲🇿", name: "Moçambique",             placeholder: "82 123 4567",   mask: "## ### ####",  minDigits: 9,  maxDigits: 9  },
  { code: "+373", iso: "MD", flag: "🇲🇩", name: "Moldávia",               placeholder: "621 12 345",    mask: "### ## ###",   minDigits: 8,  maxDigits: 8  },
  { code: "+377", iso: "MC", flag: "🇲🇨", name: "Mónaco",                 placeholder: "06 12 34 56 78",mask: "## ## ## ## ##", minDigits: 8, maxDigits: 9 },
  { code: "+505", iso: "NI", flag: "🇳🇮", name: "Nicarágua",              placeholder: "8123 4567",     mask: "#### ####",    minDigits: 8,  maxDigits: 8  },
  { code: "+234", iso: "NG", flag: "🇳🇬", name: "Nigéria",                placeholder: "802 123 4567",  mask: "### ### ####", minDigits: 10, maxDigits: 10 },
  { code: "+47",  iso: "NO", flag: "🇳🇴", name: "Noruega",                placeholder: "406 12 345",    mask: "### ## ###",   minDigits: 8,  maxDigits: 8  },
  { code: "+64",  iso: "NZ", flag: "🇳🇿", name: "Nova Zelândia",          placeholder: "21 123 4567",   mask: "## ### ####",  minDigits: 8,  maxDigits: 10 },
  { code: "+968", iso: "OM", flag: "🇴🇲", name: "Omã",                    placeholder: "9212 3456",     mask: "#### ####",    minDigits: 8,  maxDigits: 8  },
  { code: "+92",  iso: "PK", flag: "🇵🇰", name: "Paquistão",              placeholder: "301 2345678",   mask: "### #######",  minDigits: 10, maxDigits: 10 },
  { code: "+507", iso: "PA", flag: "🇵🇦", name: "Panamá",                 placeholder: "6123 4567",     mask: "#### ####",    minDigits: 8,  maxDigits: 8  },
  { code: "+595", iso: "PY", flag: "🇵🇾", name: "Paraguai",               placeholder: "961 456789",    mask: "### ######",    minDigits: 9, maxDigits: 9  },
  { code: "+51",  iso: "PE", flag: "🇵🇪", name: "Peru",                   placeholder: "912 345 678",   mask: "### ### ###",  minDigits: 9,  maxDigits: 9  },
  { code: "+48",  iso: "PL", flag: "🇵🇱", name: "Polónia",                placeholder: "512 345 678",   mask: "### ### ###",  minDigits: 9,  maxDigits: 9  },
  { code: "+974", iso: "QA", flag: "🇶🇦", name: "Qatar",                  placeholder: "3312 3456",     mask: "#### ####",    minDigits: 8,  maxDigits: 8  },
  { code: "+254", iso: "KE", flag: "🇰🇪", name: "Quénia",                 placeholder: "712 123456",    mask: "### ######",   minDigits: 9,  maxDigits: 9  },
  { code: "+420", iso: "CZ", flag: "🇨🇿", name: "República Checa",        placeholder: "601 123 456",   mask: "### ### ###",  minDigits: 9,  maxDigits: 9  },
  { code: "+40",  iso: "RO", flag: "🇷🇴", name: "Roménia",                placeholder: "712 034 567",   mask: "### ### ###",  minDigits: 9,  maxDigits: 9  },
  { code: "+7",   iso: "RU", flag: "🇷🇺", name: "Rússia",                 placeholder: "912 345-67-89", mask: "### ###-##-##",minDigits: 10, maxDigits: 10 },
  { code: "+381", iso: "RS", flag: "🇷🇸", name: "Sérvia",                 placeholder: "60 1234567",    mask: "## #######",   minDigits: 8,  maxDigits: 9  },
  { code: "+65",  iso: "SG", flag: "🇸🇬", name: "Singapura",              placeholder: "8123 4567",     mask: "#### ####",    minDigits: 8,  maxDigits: 8  },
  { code: "+94",  iso: "LK", flag: "🇱🇰", name: "Sri Lanka",              placeholder: "71 234 5678",   mask: "## ### ####",  minDigits: 9,  maxDigits: 9  },
  { code: "+46",  iso: "SE", flag: "🇸🇪", name: "Suécia",                 placeholder: "70 123 45 67",  mask: "## ### ## ##", minDigits: 9,  maxDigits: 9  },
  { code: "+886", iso: "TW", flag: "🇹🇼", name: "Taiwan",                 placeholder: "912 345 678",   mask: "### ### ###",  minDigits: 9,  maxDigits: 9  },
  { code: "+66",  iso: "TH", flag: "🇹🇭", name: "Tailândia",              placeholder: "81 234 5678",   mask: "## ### ####",  minDigits: 9,  maxDigits: 9  },
  { code: "+90",  iso: "TR", flag: "🇹🇷", name: "Turquia",                placeholder: "501 234 56 78", mask: "### ### ## ##",minDigits: 10, maxDigits: 10 },
  { code: "+380", iso: "UA", flag: "🇺🇦", name: "Ucrânia",                placeholder: "50 123 4567",   mask: "## ### ####",  minDigits: 9,  maxDigits: 9  },
  { code: "+598", iso: "UY", flag: "🇺🇾", name: "Uruguai",                placeholder: "94 231 234",    mask: "## ### ###",   minDigits: 8,  maxDigits: 8  },
  { code: "+58",  iso: "VE", flag: "🇻🇪", name: "Venezuela",              placeholder: "412 1234567",   mask: "### #######",  minDigits: 10, maxDigits: 10 },
  { code: "+84",  iso: "VN", flag: "🇻🇳", name: "Vietname",               placeholder: "91 234 56 78",  mask: "## ### ## ##", minDigits: 9,  maxDigits: 10 },
];

export const COUNTRIES: Country[] = [
  ...PRIORITY,
  ...REST.filter(c => !PRIORITY.some(p => p.code === c.code && p.iso === c.iso))
        .sort((a, b) => a.name.localeCompare(b.name, "pt")),
];

export const DEFAULT_COUNTRY_ISO = "PT";

export function getCountryByIso(iso: string): Country | undefined {
  return COUNTRIES.find(c => c.iso === iso);
}

export function applyPhoneMask(rawDigits: string, mask: string): string {
  const digits = rawDigits.replace(/\D/g, "");
  let result = "";
  let di = 0;
  for (let mi = 0; mi < mask.length && di < digits.length; mi++) {
    if (mask[mi] === "#") {
      result += digits[di];
      di++;
    } else {
      result += mask[mi];
    }
  }
  return result;
}

export function countDigits(value: string): number {
  return (value.match(/\d/g) ?? []).length;
}
