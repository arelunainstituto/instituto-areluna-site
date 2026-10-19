import React, { createContext, useContext, useState, useMemo, useCallback, useEffect } from "react";

export interface ContactInfo {
  id: string;
  name: string;
  phone: string; // "+351 910 338 912"
  cleanPhone: string; // "+351910338912"
  cleanWhatsapp: string; // "351910338912"
  telUrl: string; // "tel:+351910338912"
  whatsappUrl: string; // "https://wa.me/351910338912"
}

export const CONTACTS: ContactInfo[] = [
  {
    id: "contact_1",
    name: "Contacto 1",
    phone: "+351 910 338 912",
    cleanPhone: "+351910338912",
    cleanWhatsapp: "351910338912",
    telUrl: "tel:+351910338912",
    whatsappUrl: "https://wa.me/351910338912",
  },
  {
    id: "contact_2",
    name: "Contacto 2",
    phone: "+351 910 170 972",
    cleanPhone: "+351910170972",
    cleanWhatsapp: "351910170972",
    telUrl: "tel:+351910170972",
    whatsappUrl: "https://wa.me/351910170972",
  },
];

const STORAGE_LAST_INDEX_KEY = "areluna_rr_last_index";

/**
 * Calcula o próximo índice de contacto no round-robin:
 * 1. Suporta override via query string (?contact=1 / ?contact=2 ou ?contato=1 / ?contato=2).
 * 2. Alterna sequencialmente via localStorage a cada novo carregamento/visitante.
 */
function getInitialContactIndex(): number {
  if (typeof window === "undefined") return 0;

  try {
    const params = new URLSearchParams(window.location.search);
    const param = params.get("contact") || params.get("contato");
    if (param === "1") return 0;
    if (param === "2") return 1;
  } catch {
    // Ignora erros de URLSearchParams
  }

  let nextIndex = 0;
  try {
    const lastStr = localStorage.getItem(STORAGE_LAST_INDEX_KEY);
    if (lastStr !== null) {
      const lastIdx = parseInt(lastStr, 10);
      if (!isNaN(lastIdx)) {
        nextIndex = (lastIdx + 1) % CONTACTS.length;
      }
    }
    localStorage.setItem(STORAGE_LAST_INDEX_KEY, String(nextIndex));
  } catch {
    nextIndex = Math.random() < 0.5 ? 0 : 1;
  }

  return nextIndex;
}

export interface ContactContextValue {
  contact: ContactInfo;
  contacts: ContactInfo[];
  currentIndex: number;
  getWhatsAppUrl: (text?: string) => string;
  rotateContact: () => void;
  setContactByIndex: (index: number) => void;
  onContactClick: () => void;
}

const ContactContext = createContext<ContactContextValue | null>(null);

export const ContactProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(() => getInitialContactIndex());

  const contact = useMemo(() => CONTACTS[currentIndex] ?? CONTACTS[0], [currentIndex]);

  const rotateContact = useCallback(() => {
    setCurrentIndex((prev) => {
      const next = (prev + 1) % CONTACTS.length;
      try {
        localStorage.setItem(STORAGE_LAST_INDEX_KEY, String(next));
      } catch {
        // Ignora erro de localStorage
      }
      return next;
    });
  }, []);

  const setContactByIndex = useCallback((index: number) => {
    const validIndex = Math.abs(index) % CONTACTS.length;
    setCurrentIndex(validIndex);
    try {
      localStorage.setItem(STORAGE_LAST_INDEX_KEY, String(validIndex));
    } catch {
      // Ignora erro de localStorage
    }
  }, []);

  const onContactClick = useCallback(() => {
    try {
      const next = (currentIndex + 1) % CONTACTS.length;
      localStorage.setItem(STORAGE_LAST_INDEX_KEY, String(next));
    } catch {
      // Ignora erro de localStorage
    }
  }, [currentIndex]);

  const getWhatsAppUrl = useCallback(
    (text?: string) => {
      if (!text) return contact.whatsappUrl;
      return `https://wa.me/${contact.cleanWhatsapp}?text=${encodeURIComponent(text)}`;
    },
    [contact]
  );

  // Expõe no window para testes rápidos pelo console do navegador
  useEffect(() => {
    if (typeof window !== "undefined") {
      (window as unknown as { __arelunaContact: unknown }).__arelunaContact = {
        current: contact,
        rotate: rotateContact,
        set: setContactByIndex,
      };
    }
  }, [contact, rotateContact, setContactByIndex]);

  const value = useMemo(
    () => ({
      contact,
      contacts: CONTACTS,
      currentIndex,
      getWhatsAppUrl,
      rotateContact,
      setContactByIndex,
      onContactClick,
    }),
    [contact, currentIndex, getWhatsAppUrl, rotateContact, setContactByIndex, onContactClick]
  );

  return <ContactContext.Provider value={value}>{children}</ContactContext.Provider>;
};

export const useContact = (): ContactContextValue => {
  const context = useContext(ContactContext);
  if (!context) {
    // Fallback gracioso caso seja usado fora do Provider
    const fallbackContact = CONTACTS[0];
    return {
      contact: fallbackContact,
      contacts: CONTACTS,
      currentIndex: 0,
      getWhatsAppUrl: (text?: string) =>
        text
          ? `https://wa.me/${fallbackContact.cleanWhatsapp}?text=${encodeURIComponent(text)}`
          : fallbackContact.whatsappUrl,
      rotateContact: () => {},
      setContactByIndex: () => {},
      onContactClick: () => {},
    };
  }
  return context;
};

/** Helper estático caso precise ser chamado fora do ciclo do React */
export const getDefaultContact = (): ContactInfo => CONTACTS[0];
