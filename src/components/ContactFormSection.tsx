import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from "react-i18next";
import {
  COUNTRIES,
  DEFAULT_COUNTRY_ISO,
  applyPhoneMask,
  countDigits,
  getCountryByIso,
} from "@/lp/lib/countries";
import { MessageSquare, MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";

const SMILE_STATE_OPTIONS = [
  "Estou insatisfeito com o meu trabalho dentário antigo.",
  "Gostaria de melhorar o meu sorriso.",
  "Gostaria de melhorar o meu trabalho dentário."
];

const AGE_OPTIONS = [
  "18-24",
  "25-34",
  "35-44",
  "45-54",
  "55-64",
  "65+"
];

const UNIT_OPTIONS = [
  { value: "lisboa", label: "Lisboa (Lumiar) — Nova Unidade ✨" },
  { value: "porto", label: "Porto (Mota Galiza)" },
  { value: "turismo", label: "Turismo Dentário / Sem preferência" }
];

const LANGUAGE_OPTIONS = [
  "Português",
  "English",
  "Français",
  "Español",
  "Deutsch"
];

const CALLBACK_OPTIONS = [
  "Qualquer altura do dia",
  "Manhã (09h - 13h)",
  "Tarde (14h - 18h)",
  "Final do dia (18h - 20h)"
];

const ContactFormSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    unit: 'lisboa',
    nationality: '',
    residence: '',
    preferredLanguage: 'Português',
    smileState: SMILE_STATE_OPTIONS[0],
    callbackTime: '',
    message: '',
    consentPrivacy: false,
    consentMarketing: false
  });

  const [countryIso, setCountryIso] = useState<string>(DEFAULT_COUNTRY_ISO);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccess, setIsSubmittedSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const country = useMemo(
    () => getCountryByIso(countryIso) ?? getCountryByIso(DEFAULT_COUNTRY_ISO)!,
    [countryIso]
  );

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawVal = e.target.value;
    const masked = applyPhoneMask(rawVal, country.mask);
    setFormData(prev => ({ ...prev, phone: masked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.consentPrivacy) {
      toast({
        title: "Consentimento obrigatório",
        description: "Por favor, aceite a Política de Privacidade e Cookies para continuar.",
        variant: "destructive"
      });
      return;
    }

    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length < country.minDigits) {
      toast({
        title: "Telemóvel incompleto",
        description: `Por favor, insira pelo menos ${country.minDigits} dígitos no número de telefone.`,
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    const fullPhone = `${country.code} ${phoneDigits}`;
    const eventId = `lead_${Math.random().toString(36).substring(2, 10)}_${Date.now()}`;

    const sendUrl = import.meta.env.VITE_SEND_FORM_URL || 'https://n8n.automacoesareluna.pt/webhook/lp-vivo-bem-leads';

    const payload = {
      name: formData.name,
      age: formData.age,
      email: formData.email,
      phone: fullPhone,
      phoneDigits,
      countryCode: country.code,
      countryIso: country.iso,
      unit: formData.unit,
      nationality: formData.nationality,
      residence: formData.residence,
      preferredLanguage: formData.preferredLanguage,
      smileState: formData.smileState,
      callbackTime: formData.callbackTime || "Não especificado",
      message: formData.message,
      consentPrivacy: formData.consentPrivacy,
      consentMarketing: formData.consentMarketing,
      source: "Site Institucional - Formulário de Triagem",
      eventId,
      timestamp: new Date().toISOString()
    };

    // Tracking events
    if (typeof window !== "undefined") {
      const win = window as unknown as {
        dataLayer?: unknown[];
        gtag?: (command: string, action: string, params: Record<string, unknown>) => void;
      };
      const dataLayer = (win.dataLayer = win.dataLayer || []);
      dataLayer.push({
        event: "form_submit_lead",
        eventID: eventId,
        lead_data: {
          name: formData.name,
          phone: fullPhone,
          email: formData.email,
          unit: formData.unit,
          smileState: formData.smileState,
          residence: formData.residence
        }
      });

      if (win.gtag) {
        win.gtag("event", "form_submit", {
          form_name: "formulario_triagem_institucional",
          event_category: "leads",
          unit: formData.unit
        });
      }
    }

    try {
      const response = await fetch(sendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setIsSubmittedSuccess(true);
        toast({
          title: "Pedido de Consulta Enviado!",
          description: "Recebemos os seus dados e a nossa equipa clínica entrará em contacto muito em breve.",
        });
      } else {
        throw new Error('Falha no envio do formulário');
      }
    } catch (error) {
      console.error('Erro no envio:', error);
      toast({
        title: "Ocorreu um erro no envio",
        description: "Não conseguimos enviar os dados automaticamente. Por favor, tente novamente ou fale connosco pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contacto-form" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-100/70 via-gray-50/50 to-gray-100/70 dark:from-black dark:via-gray-900/50 dark:to-black relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--gold-leaf)) 1px, transparent 0)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Elementos decorativos */}
      <div className="absolute top-20 right-16 w-44 h-44 bg-gradient-to-br from-[hsl(var(--gold-leaf))]/15 to-[hsl(var(--ring))]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-20 left-16 w-36 h-36 bg-gradient-to-br from-[hsl(var(--jet))]/10 to-[hsl(var(--gold-leaf))]/10 rounded-full blur-2xl pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* Header da seção */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[hsl(var(--gold-leaf))]/10 border border-[hsl(var(--gold-leaf))]/25 text-[hsl(var(--gold-leaf))] text-xs font-semibold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 rounded-full bg-[hsl(var(--gold-leaf))] animate-ping"></span>
            Marcação & Triagem Clínica · Lisboa & Porto
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-vivant text-jet dark:text-white mb-4 drop-shadow-sm">
            Marque a Sua Consulta de Avaliação
          </h2>

          <div className="w-28 h-1 bg-gradient-to-r from-[hsl(var(--gold-leaf))] to-[hsl(var(--ring))] mx-auto mb-5 rounded-full"></div>

          <p className="max-w-3xl mx-auto text-base sm:text-lg text-jet/70 dark:text-gray-300 font-vivant-light leading-relaxed">
            Atendimento exclusivo nas nossas clínicas de <strong>Lisboa (Lumiar)</strong> e <strong>Porto (Mota Galiza)</strong>. Preencha os seus dados para que a equipa médica e de acolhimento prepare a melhor abordagem para o seu caso.
          </p>
        </div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Formulário de Triagem */}
          <div className="lg:col-span-7">
            <div className="bg-white/95 dark:bg-gray-900/90 backdrop-blur-md rounded-3xl p-6 sm:p-10 shadow-2xl border border-[hsl(var(--gold-leaf))]/20 dark:border-[hsl(var(--gold-leaf))]/30 transition-all duration-300">
              {isSubmittedSuccess ? (
                <div className="py-12 text-center space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full mx-auto flex items-center justify-center text-emerald-500">
                    <CheckCircle2 size={42} />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-vivant text-jet dark:text-white">
                    Obrigado pela sua confiança!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 max-w-md mx-auto font-vivant-light text-base leading-relaxed">
                    A sua solicitação foi registada com sucesso na nossa triagem clínica. Um dos nossos coordenadores de tratamento entrará em contacto consigo muito em breve na altura indicada.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                      href="https://wa.me/351910098226"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm transition-all duration-300 shadow-lg"
                    >
                      <MessageSquare size={18} />
                      Falar agora pelo WhatsApp
                    </a>
                    <button
                      onClick={() => setIsSubmittedSuccess(false)}
                      className="px-6 py-3.5 rounded-xl border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-medium transition-colors"
                    >
                      Enviar nova mensagem
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Bloco 1: Unidade de Preferência */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-[hsl(var(--gold-leaf))]/10 via-[hsl(var(--gold-leaf))]/5 to-transparent border border-[hsl(var(--gold-leaf))]/20">
                    <label className="block text-xs font-semibold uppercase tracking-wider text-[hsl(var(--gold-leaf))] mb-2">
                      1. Onde prefere ser atendido? (*)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {UNIT_OPTIONS.map((u) => (
                        <button
                          key={u.value}
                          type="button"
                          onClick={() => handleInputChange('unit', u.value)}
                          className={`px-3 py-3 rounded-xl text-xs font-medium transition-all text-center border ${
                            formData.unit === u.value
                              ? 'bg-[hsl(var(--gold-leaf))] text-white border-[hsl(var(--gold-leaf))] shadow-md'
                              : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:border-[hsl(var(--gold-leaf))]/50'
                          }`}
                        >
                          {u.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Bloco 2: Nome e Idade */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-2 group">
                      <label
                        htmlFor="name"
                        className={`block text-xs font-semibold uppercase tracking-wider mb-2 transition-colors ${
                          focusedField === 'name' ? 'text-[hsl(var(--gold-leaf))]' : 'text-gray-600 dark:text-gray-300'
                        }`}
                      >
                        Nome Completo (*)
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl focus:border-[hsl(var(--gold-leaf))] focus:ring-1 focus:ring-[hsl(var(--gold-leaf))] focus:outline-none transition-all text-sm text-jet dark:text-gray-100 placeholder-gray-400"
                        placeholder="Ex: Maria Santos"
                        required
                      />
                    </div>

                    <div className="group">
                      <label
                        htmlFor="age"
                        className={`block text-xs font-semibold uppercase tracking-wider mb-2 transition-colors ${
                          focusedField === 'age' ? 'text-[hsl(var(--gold-leaf))]' : 'text-gray-600 dark:text-gray-300'
                        }`}
                      >
                        Idade (*)
                      </label>
                      <select
                        id="age"
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                        onFocus={() => setFocusedField('age')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl focus:border-[hsl(var(--gold-leaf))] focus:ring-1 focus:ring-[hsl(var(--gold-leaf))] focus:outline-none transition-all text-sm text-jet dark:text-gray-100"
                        required
                      >
                        <option value="">Selecione...</option>
                        {AGE_OPTIONS.map((age) => (
                          <option key={age} value={age}>{age}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Bloco 3: E-mail e Telefone com DDI internacional */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="group">
                      <label
                        htmlFor="email"
                        className={`block text-xs font-semibold uppercase tracking-wider mb-2 transition-colors ${
                          focusedField === 'email' ? 'text-[hsl(var(--gold-leaf))]' : 'text-gray-600 dark:text-gray-300'
                        }`}
                      >
                        E-mail (*)
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl focus:border-[hsl(var(--gold-leaf))] focus:ring-1 focus:ring-[hsl(var(--gold-leaf))] focus:outline-none transition-all text-sm text-jet dark:text-gray-100 placeholder-gray-400"
                        placeholder="exemplo@dominio.com"
                        required
                      />
                    </div>

                    <div className="group">
                      <label
                        htmlFor="phone"
                        className={`block text-xs font-semibold uppercase tracking-wider mb-2 transition-colors ${
                          focusedField === 'phone' ? 'text-[hsl(var(--gold-leaf))]' : 'text-gray-600 dark:text-gray-300'
                        }`}
                      >
                        Telefone / WhatsApp (*)
                      </label>
                      <div className="flex gap-2">
                        {/* Seletor de país DDI */}
                        <select
                          value={countryIso}
                          onChange={(e) => setCountryIso(e.target.value)}
                          className="w-[110px] px-2.5 py-3 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl focus:border-[hsl(var(--gold-leaf))] focus:outline-none text-xs text-jet dark:text-gray-100"
                        >
                          {COUNTRIES.map((c) => (
                            <option key={c.iso} value={c.iso}>
                              {c.flag} {c.code}
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className="flex-1 px-4 py-3 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl focus:border-[hsl(var(--gold-leaf))] focus:ring-1 focus:ring-[hsl(var(--gold-leaf))] focus:outline-none transition-all text-sm text-jet dark:text-gray-100 placeholder-gray-400"
                          placeholder={country.placeholder}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bloco 4: Nacionalidade, Residência e Língua */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="group">
                      <label
                        htmlFor="nationality"
                        className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-600 dark:text-gray-300"
                      >
                        País de Nacionalidade (*)
                      </label>
                      <input
                        type="text"
                        id="nationality"
                        value={formData.nationality}
                        onChange={(e) => handleInputChange('nationality', e.target.value)}
                        className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl focus:border-[hsl(var(--gold-leaf))] focus:ring-1 focus:ring-[hsl(var(--gold-leaf))] focus:outline-none transition-all text-sm text-jet dark:text-gray-100 placeholder-gray-400"
                        placeholder="Ex: Portugal, Reino Unido..."
                        required
                      />
                    </div>

                    <div className="group">
                      <label
                        htmlFor="residence"
                        className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-600 dark:text-gray-300"
                      >
                        País de Residência (*)
                      </label>
                      <input
                        type="text"
                        id="residence"
                        value={formData.residence}
                        onChange={(e) => handleInputChange('residence', e.target.value)}
                        className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl focus:border-[hsl(var(--gold-leaf))] focus:ring-1 focus:ring-[hsl(var(--gold-leaf))] focus:outline-none transition-all text-sm text-jet dark:text-gray-100 placeholder-gray-400"
                        placeholder="Ex: Portugal, Suíça, França..."
                        required
                      />
                    </div>

                    <div className="group">
                      <label
                        htmlFor="preferredLanguage"
                        className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-600 dark:text-gray-300"
                      >
                        Língua de Preferência (*)
                      </label>
                      <select
                        id="preferredLanguage"
                        value={formData.preferredLanguage}
                        onChange={(e) => handleInputChange('preferredLanguage', e.target.value)}
                        className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl focus:border-[hsl(var(--gold-leaf))] focus:ring-1 focus:ring-[hsl(var(--gold-leaf))] focus:outline-none transition-all text-sm text-jet dark:text-gray-100"
                        required
                      >
                        {LANGUAGE_OPTIONS.map((lang) => (
                          <option key={lang} value={lang}>{lang}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Bloco 5: O PRINCIPAL CAMPO (Anexo 2) */}
                  <div className="p-4 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-[hsl(var(--gold-leaf))]/30">
                    <label
                      htmlFor="smileState"
                      className="block text-xs font-semibold uppercase tracking-wider text-[hsl(var(--gold-leaf))] mb-2"
                    >
                      Como se sente em relação ao seu sorriso ou o estado dos seus dentes? (*)
                    </label>
                    <select
                      id="smileState"
                      value={formData.smileState}
                      onChange={(e) => handleInputChange('smileState', e.target.value)}
                      className="w-full px-4 py-3.5 bg-white dark:bg-gray-800 border-2 border-[hsl(var(--gold-leaf))]/40 rounded-xl focus:border-[hsl(var(--gold-leaf))] focus:outline-none font-medium text-sm text-jet dark:text-gray-100"
                      required
                    >
                      {SMILE_STATE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <span className="block mt-2 text-xs text-gray-500 dark:text-gray-400">
                      Esta informação ajuda-nos a direcionar o especialista mais indicado para o seu plano de tratamento.
                    </span>
                  </div>

                  {/* Bloco 6: Melhor altura para ligar e Mensagem */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="group">
                      <label
                        htmlFor="callbackTime"
                        className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-600 dark:text-gray-300"
                      >
                        Qual a melhor altura para ligarmos de volta?
                      </label>
                      <select
                        id="callbackTime"
                        value={formData.callbackTime}
                        onChange={(e) => handleInputChange('callbackTime', e.target.value)}
                        className="w-full px-4 py-3 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl focus:border-[hsl(var(--gold-leaf))] focus:outline-none transition-all text-sm text-jet dark:text-gray-100"
                      >
                        <option value="">Selecione um horário preferencial...</option>
                        {CALLBACK_OPTIONS.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div className="group">
                      <label
                        htmlFor="message"
                        className="block text-xs font-semibold uppercase tracking-wider mb-2 text-gray-600 dark:text-gray-300"
                      >
                        Mensagem ou detalhes adicionais (opcional)
                      </label>
                      <textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        rows={2}
                        className="w-full px-4 py-2.5 bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 rounded-xl focus:border-[hsl(var(--gold-leaf))] focus:outline-none transition-all text-sm text-jet dark:text-gray-100 placeholder-gray-400 resize-none"
                        placeholder="Alguma dúvida específica ou histórico dental prévio..."
                      />
                    </div>
                  </div>

                  {/* Bloco 7: Consentimentos e RGPD */}
                  <div className="space-y-3 pt-2 text-xs text-gray-600 dark:text-gray-400">
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.consentPrivacy}
                        onChange={(e) => handleInputChange('consentPrivacy', e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[hsl(var(--gold-leaf))] focus:ring-[hsl(var(--gold-leaf))]"
                        required
                      />
                      <span>
                        Li e aceito a{" "}
                        <Link to="/privacidade" className="text-[hsl(var(--gold-leaf))] hover:underline font-medium" target="_blank">
                          Política de Privacidade e Cookies
                        </Link>
                        . (*)
                      </span>
                    </label>

                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        type="checkbox"
                        checked={formData.consentMarketing}
                        onChange={(e) => handleInputChange('consentMarketing', e.target.checked)}
                        className="mt-0.5 w-4 h-4 rounded border-gray-300 text-[hsl(var(--gold-leaf))] focus:ring-[hsl(var(--gold-leaf))]"
                      />
                      <span>
                        Quero receber novidades clínicas e informações do Instituto AreLuna.
                      </span>
                    </label>

                    <p className="text-[11px] text-gray-400 dark:text-gray-500 pt-1">
                      (*) Campos obrigatórios. Os seus dados clínicos e de contacto são tratados com sigilo médico absoluto.
                    </p>
                  </div>

                  {/* Botão de Envio */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[hsl(var(--jet))] via-black to-[hsl(var(--ring))] text-white font-vivant font-semibold px-8 py-4.5 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] border border-[hsl(var(--gold-leaf))]/30 flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed group"
                    >
                      <span className="text-base tracking-wide">
                        {isSubmitting ? "A processar o pedido..." : "SOLICITAR AVALIAÇÃO CLÍNICA"}
                      </span>
                      <span className="text-[hsl(var(--gold-leaf))] group-hover:translate-x-1 transition-transform duration-200">
                        →
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Coluna Lateral: Unidades e Atendimento Imediato */}
          <div className="lg:col-span-5 space-y-6">
            {/* Bloco Unidades: Lisboa & Porto */}
            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-xl border border-[hsl(var(--gold-leaf))]/20">
              <div className="flex items-center gap-2 mb-6 text-[hsl(var(--gold-leaf))]">
                <MapPin className="w-5 h-5" />
                <h4 className="text-xl font-vivant text-jet dark:text-white">Nossas Unidades</h4>
              </div>

              <div className="space-y-6">
                {/* Unidade Lisboa (Destaque) */}
                <div className="p-4 rounded-2xl bg-gradient-to-br from-[hsl(var(--gold-leaf))]/15 via-amber-500/5 to-transparent border border-[hsl(var(--gold-leaf))]/30">
                  <div className="flex items-center justify-between mb-1.5">
                    <h5 className="font-vivant font-semibold text-jet dark:text-white text-base">
                      Lisboa · Lumiar
                    </h5>
                    <span className="text-[10px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-full bg-[hsl(var(--gold-leaf))] text-white">
                      Nova Unidade
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 font-vivant-light leading-relaxed">
                    Alameda das Linhas de Torres / Lumiar, Lisboa
                  </p>
                  <p className="text-[11px] text-[hsl(var(--gold-leaf))] font-medium mt-2">
                    ✓ Abertura de Agendamentos & Avaliações Prioritárias
                  </p>
                </div>

                {/* Unidade Porto */}
                <div className="p-4 rounded-2xl bg-gray-50/80 dark:bg-gray-800/60 border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-1.5">
                    <h5 className="font-vivant font-semibold text-jet dark:text-white text-base">
                      Porto · Mota Galiza
                    </h5>
                    <span className="text-[10px] text-gray-500 dark:text-gray-400">Sede</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 font-vivant-light leading-relaxed">
                    Rua de Júlio Dinis, 194 R/C | 4050-024 Porto
                  </p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mt-1">
                    Registo ERS: E161637 · Licença: 21593/2022
                  </p>
                </div>
              </div>
            </div>

            {/* Bloco Resposta Imediata / WhatsApp */}
            <div className="bg-gradient-to-br from-[#12161b] to-black text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-emerald-500/20 relative overflow-hidden">
              <div className="flex items-center gap-2 mb-3 text-emerald-400">
                <MessageSquare className="w-5 h-5" />
                <h4 className="text-lg font-vivant font-semibold">Prefere Resposta Imediata?</h4>
              </div>
              <p className="text-xs text-gray-300 font-vivant-light leading-relaxed mb-5">
                Para quem não quer aguardar ligação ou busca tirar dúvidas pontuais antes do agendamento, a nossa equipa clínica atende diretamente pelo canal direto oficial:
              </p>
              <a
                href="https://wa.me/351910098226?text=Ol%C3%A1%2C%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20marca%C3%A7%C3%A3o%20de%20consulta%20no%20Instituto%20AreLuna."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition-all duration-300 shadow-lg group"
              >
                <span>Falar com a receção no WhatsApp</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>

            {/* Informações de Contacto & Horários */}
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl p-6 shadow-md border border-gray-200 dark:border-gray-800 space-y-4 text-xs">
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Phone className="w-4 h-4 text-[hsl(var(--gold-leaf))]" />
                <a href="tel:+351220430090" className="hover:text-[hsl(var(--gold-leaf))] transition-colors font-medium">
                  +351 220 430 090 (Porto & Geral)
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <Mail className="w-4 h-4 text-[hsl(var(--gold-leaf))]" />
                <a href="mailto:rececao@institutoareluna.pt" className="hover:text-[hsl(var(--gold-leaf))] transition-colors font-medium">
                  rececao@institutoareluna.pt
                </a>
              </div>
              <div className="flex items-start gap-3 text-gray-600 dark:text-gray-400">
                <Clock className="w-4 h-4 text-[hsl(var(--gold-leaf))] mt-0.5" />
                <div>
                  <p>Segunda a Sexta: 09:00 - 19:00</p>
                  <p>Sábado: Sob marcação prévia</p>
                </div>
              </div>
              <div className="flex items-center gap-2 pt-2 text-[11px] text-gray-500 border-t border-gray-100 dark:border-gray-800">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Sigilo profissional e conformidade integral RGPD / ERS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;