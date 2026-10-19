import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from "@/components/ui/use-toast";
import { useTranslation, Trans } from "react-i18next";
import {
  COUNTRIES,
  DEFAULT_COUNTRY_ISO,
  applyPhoneMask,
  getCountryByIso,
} from "@/lp/lib/countries";
import { MessageSquare, MapPin, Phone, Mail, Clock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useContact } from "@/contexts/ContactContext";
import { SelectShell } from "@/components/contact-form/SelectShell";
import {
  asideCardClasses,
  checkboxClasses,
  fieldClasses,
  highlightBlockClasses,
  highlightLabelClasses,
  labelClasses,
  selectClasses,
  textareaClasses,
  whatsappButtonClasses,
} from "@/components/contact-form/styles";

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
  { value: "porto", labelKey: "unit_porto", defaultLabel: "Porto" },
  { value: "turismo", labelKey: "unit_turismo", defaultLabel: "Vivo fora de Portugal" }
];

const LANGUAGE_OPTIONS = [
  "Português",
  "English",
  "Français",
  "Español",
  "Deutsch"
];

const ContactFormSection = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const { contact, getWhatsAppUrl, onContactClick } = useContact();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    unit: 'porto',
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
        title: t('triage_form.toast_privacy_title', "Consentimento obrigatório"),
        description: t('triage_form.toast_privacy_desc', "Por favor, aceite a Política de Privacidade e Cookies para continuar."),
        variant: "destructive"
      });
      return;
    }

    const phoneDigits = formData.phone.replace(/\D/g, "");
    if (phoneDigits.length < country.minDigits) {
      toast({
        title: t('triage_form.toast_phone_title', "Telemóvel incompleto"),
        description: t('triage_form.toast_phone_desc', "Por favor, insira pelo menos {{min}} dígitos no número de telefone.", { min: country.minDigits }),
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
          title: t('triage_form.toast_success_title', "Pedido de Consulta Enviado!"),
          description: t('triage_form.toast_success_desc', "Recebemos os seus dados e a nossa equipa clínica entrará em contacto muito em breve."),
        });
      } else {
        throw new Error('Falha no envio do formulário');
      }
    } catch (error) {
      console.error('Erro no envio:', error);
      toast({
        title: t('triage_form.toast_error_title', "Ocorreu um erro no envio"),
        description: t('triage_form.toast_error_desc', "Não conseguimos enviar os dados automaticamente. Por favor, tente novamente ou fale connosco pelo WhatsApp."),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contacto-form" tone="muted" width="wide">
      <SectionHeading
        eyebrow={t('triage_form.badge', 'Marcação & Triagem Clínica · Porto')}
        title={t('triage_form.title', 'Marque a Sua Consulta de Avaliação')}
        description={
          <Trans
            i18nKey="triage_form.subtitle_html"
            defaults="Consultas nas nossas clínicas do <strong>Porto (Mota Galiza e Marquês)</strong>. Preencha os seus dados para que a equipa prepare a sua consulta de avaliação."
            components={{ strong: <strong className="font-vivant text-jet dark:text-white" /> }}
          />
        }
      />

      {/* Grid principal */}
      <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">
        {/* Formulário de Triagem */}
        <div className="lg:col-span-7">
          <div className="rounded-2xl border border-jet/10 bg-white p-5 shadow-elegant sm:p-8 lg:p-10 dark:border-white/10 dark:bg-gray-900">
            {isSubmittedSuccess ? (
              <div className="space-y-6 py-10 text-center animate-in fade-in zoom-in duration-500" role="status">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 size={40} aria-hidden="true" />
                </div>
                <h3 className="font-vivant text-2xl text-jet sm:text-3xl dark:text-white">
                  {t('triage_form.success_title', 'Obrigado pela sua confiança!')}
                </h3>
                <p className="mx-auto max-w-md font-vivant-light text-base leading-relaxed text-jet/70 dark:text-gray-300">
                  {t('triage_form.success_desc', 'A sua solicitação foi registada com sucesso na nossa triagem clínica. Um dos nossos coordenadores de tratamento entrará em contacto consigo muito em breve na altura indicada.')}
                </p>
                <div className="flex flex-col justify-center gap-3 pt-2 sm:flex-row">
                  <a
                    href={contact.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onContactClick}
                    className={whatsappButtonClasses}
                  >
                    <MessageSquare aria-hidden="true" />
                    {t('triage_form.success_whatsapp', 'Falar agora pelo WhatsApp')}
                  </a>
                  <Button
                    type="button"
                    variant="outline-dark"
                    size="cta"
                    onClick={() => setIsSubmittedSuccess(false)}
                  >
                    {t('triage_form.success_new_msg', 'Enviar nova mensagem')}
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Bloco 1: Unidade de Preferência - Porto / Fora de Portugal */}
                <div className={highlightBlockClasses} role="group" aria-labelledby="triage-unit-label">
                  <span id="triage-unit-label" className={highlightLabelClasses}>
                    {t('triage_form.step1_title', '1. Onde prefere ser atendido? (*)')}
                  </span>
                  <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {UNIT_OPTIONS.map((u) => {
                      const selected = formData.unit === u.value;
                      return (
                        <button
                          key={u.value}
                          type="button"
                          aria-pressed={selected}
                          onClick={() => handleInputChange('unit', u.value)}
                          className={cn(
                            "flex h-12 items-center justify-center gap-2 rounded-xl border px-3 text-center font-vivant text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf focus-visible:ring-offset-2 dark:focus-visible:ring-offset-gray-900",
                            selected
                              ? "border-jet bg-jet text-white dark:border-gold-leaf dark:bg-gold-leaf/20 dark:text-white"
                              : "border-jet/15 bg-white text-jet/80 hover:border-gold-leaf/60 hover:text-jet dark:border-white/15 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-gold-leaf/60"
                          )}
                        >
                          <span
                            className={cn(
                              "h-2 w-2 shrink-0 rounded-full transition-colors",
                              selected ? "bg-gold-leaf" : "bg-jet/20 dark:bg-white/20"
                            )}
                            aria-hidden="true"
                          />
                          {t(`triage_form.${u.labelKey}`, u.defaultLabel)}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Bloco 2: Nome e Idade */}
                <div className="grid gap-x-4 gap-y-5 sm:grid-cols-3">
                  <div className="sm:col-span-2">
                    <label htmlFor="name" className={labelClasses(focusedField === 'name')}>
                      {t('triage_form.name_label', 'Nome Completo (*)')}
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={fieldClasses}
                      placeholder={t('triage_form.name_placeholder', 'Ex: Maria Santos')}
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="age" className={labelClasses(focusedField === 'age')}>
                      {t('triage_form.age_label', 'Idade (*)')}
                    </label>
                    <SelectShell>
                      <select
                        id="age"
                        value={formData.age}
                        onChange={(e) => handleInputChange('age', e.target.value)}
                        onFocus={() => setFocusedField('age')}
                        onBlur={() => setFocusedField(null)}
                        className={selectClasses}
                        required
                      >
                        <option value="">{t('triage_form.age_placeholder', 'Selecione...')}</option>
                        {AGE_OPTIONS.map((age) => (
                          <option key={age} value={age}>{age}</option>
                        ))}
                      </select>
                    </SelectShell>
                  </div>
                </div>

                {/* Bloco 3: E-mail e Telefone com DDI internacional */}
                <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className={labelClasses(focusedField === 'email')}>
                      {t('triage_form.email_label', 'E-mail (*)')}
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={fieldClasses}
                      placeholder={t('triage_form.email_placeholder', 'exemplo@dominio.com')}
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className={labelClasses(focusedField === 'phone')}>
                      {t('triage_form.phone_label', 'Telefone / WhatsApp (*)')}
                    </label>
                    <div className="flex gap-2">
                      {/* Seletor de país DDI */}
                      <SelectShell className="w-[112px] shrink-0">
                        <select
                          value={countryIso}
                          onChange={(e) => setCountryIso(e.target.value)}
                          aria-label="DDI País"
                          className={cn(selectClasses, "px-3 pr-8 text-xs")}
                        >
                          {COUNTRIES.map((c) => (
                            <option key={c.iso} value={c.iso}>
                              {c.flag} {c.code}
                            </option>
                          ))}
                        </select>
                      </SelectShell>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        onFocus={() => setFocusedField('phone')}
                        onBlur={() => setFocusedField(null)}
                        className={cn(fieldClasses, "min-w-0 flex-1")}
                        placeholder={country.placeholder}
                        autoComplete="tel-national"
                        inputMode="tel"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Bloco 4: Residência e Língua (Removido: País de Nacionalidade conforme solicitado) */}
                <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="residence" className={labelClasses()}>
                      {t('triage_form.residence_label', 'País de Residência (*)')}
                    </label>
                    <input
                      type="text"
                      id="residence"
                      value={formData.residence}
                      onChange={(e) => handleInputChange('residence', e.target.value)}
                      className={fieldClasses}
                      placeholder={t('triage_form.residence_placeholder', 'Ex: Portugal, Suíça, França...')}
                      autoComplete="country-name"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredLanguage" className={labelClasses()}>
                      {t('triage_form.language_label', 'Língua de Preferência (*)')}
                    </label>
                    <SelectShell>
                      <select
                        id="preferredLanguage"
                        value={formData.preferredLanguage}
                        onChange={(e) => handleInputChange('preferredLanguage', e.target.value)}
                        className={selectClasses}
                        required
                      >
                        {LANGUAGE_OPTIONS.map((lang) => (
                          <option key={lang} value={lang}>{lang}</option>
                        ))}
                      </select>
                    </SelectShell>
                  </div>
                </div>

                {/* Bloco 5: O PRINCIPAL CAMPO (Anexo 2) */}
                <div className={highlightBlockClasses}>
                  <label htmlFor="smileState" className={highlightLabelClasses}>
                    {t('triage_form.smile_question', 'Como se sente em relação ao seu sorriso ou o estado dos seus dentes? (*)')}
                  </label>
                  <SelectShell>
                    <select
                      id="smileState"
                      value={formData.smileState}
                      onChange={(e) => handleInputChange('smileState', e.target.value)}
                      className={cn(selectClasses, "border-gold-leaf/50 text-ellipsis dark:border-gold-leaf/40")}
                      aria-describedby="smileState-hint"
                      required
                    >
                      <option value={SMILE_STATE_OPTIONS[0]}>
                        {t('triage_form.smile_opt1', SMILE_STATE_OPTIONS[0])}
                      </option>
                      <option value={SMILE_STATE_OPTIONS[1]}>
                        {t('triage_form.smile_opt2', SMILE_STATE_OPTIONS[1])}
                      </option>
                      <option value={SMILE_STATE_OPTIONS[2]}>
                        {t('triage_form.smile_opt3', SMILE_STATE_OPTIONS[2])}
                      </option>
                    </select>
                  </SelectShell>
                  <span id="smileState-hint" className="mt-2 block text-xs leading-relaxed text-jet/60 dark:text-gray-400">
                    {t('triage_form.smile_hint', 'Esta informação ajuda-nos a preparar a sua consulta de avaliação.')}
                  </span>
                </div>

                {/* Bloco 6: Melhor altura para ligar e Mensagem */}
                <div className="grid gap-x-4 gap-y-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="callbackTime" className={labelClasses()}>
                      {t('triage_form.callback_label', 'Qual a melhor altura para ligarmos de volta?')}
                    </label>
                    <SelectShell>
                      <select
                        id="callbackTime"
                        value={formData.callbackTime}
                        onChange={(e) => handleInputChange('callbackTime', e.target.value)}
                        className={selectClasses}
                      >
                        <option value="">{t('triage_form.callback_placeholder', 'Selecione um horário preferencial...')}</option>
                        <option value="Qualquer altura do dia">{t('triage_form.callback_anytime', 'Qualquer altura do dia')}</option>
                        <option value="Manhã (09h - 13h)">{t('triage_form.callback_morning', 'Manhã (09h - 13h)')}</option>
                        <option value="Tarde (14h - 18h)">{t('triage_form.callback_afternoon', 'Tarde (14h - 18h)')}</option>
                        <option value="Final do dia (18h - 20h)">{t('triage_form.callback_evening', 'Final do dia (18h - 20h)')}</option>
                      </select>
                    </SelectShell>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClasses()}>
                      {t('triage_form.message_label', 'Mensagem ou detalhes adicionais (opcional)')}
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={2}
                      className={textareaClasses}
                      placeholder={t('triage_form.message_placeholder', 'Alguma dúvida específica ou histórico dental prévio...')}
                    />
                  </div>
                </div>

                {/* Bloco 7: Consentimentos e RGPD */}
                <div className="space-y-1 border-t border-jet/10 pt-5 text-sm leading-relaxed text-jet/75 dark:border-white/10 dark:text-gray-300">
                  <label className="flex min-h-[44px] cursor-pointer select-none items-start gap-3 py-1.5">
                    <input
                      type="checkbox"
                      checked={formData.consentPrivacy}
                      onChange={(e) => handleInputChange('consentPrivacy', e.target.checked)}
                      className={checkboxClasses}
                      required
                    />
                    <span>
                      {t('triage_form.consent_privacy_text', 'Li e aceito a')}{" "}
                      <Link
                        to="/privacidade"
                        className="font-vivant text-jet underline decoration-gold-leaf underline-offset-4 hover:text-gold-leaf dark:text-gold-leaf dark:hover:text-white"
                        target="_blank"
                      >
                        {t('triage_form.privacy_policy_link', 'Política de Privacidade e Cookies')}
                      </Link>
                      . (*)
                    </span>
                  </label>

                  <label className="flex min-h-[44px] cursor-pointer select-none items-start gap-3 py-1.5">
                    <input
                      type="checkbox"
                      checked={formData.consentMarketing}
                      onChange={(e) => handleInputChange('consentMarketing', e.target.checked)}
                      className={checkboxClasses}
                    />
                    <span>
                      {t('triage_form.consent_marketing_text', 'Quero receber novidades clínicas e informações do Instituto AreLuna.')}
                    </span>
                  </label>

                  <p className="pt-2 text-xs text-jet/60 dark:text-gray-400">
                    {t('triage_form.required_note', '(*) Campos obrigatórios. Os seus dados clínicos e de contacto são tratados com sigilo médico absoluto.')}
                  </p>
                </div>

                {/* Botão de Envio */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  variant="gold"
                  size="cta"
                  aria-busy={isSubmitting}
                  className="group h-auto min-h-12 w-full whitespace-normal py-3 text-center tracking-wider sm:min-h-14 sm:tracking-widest disabled:cursor-not-allowed"
                >
                  <span>
                    {isSubmitting
                      ? t('triage_form.submitting_btn', 'A processar o pedido...')
                      : t('triage_form.submit_btn', 'SOLICITAR AVALIAÇÃO CLÍNICA')}
                  </span>
                  <ArrowRight
                    className="text-gold-leaf transition-transform duration-200 dark:text-current group-hover:translate-x-1 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Coluna Lateral: Unidades e Atendimento Imediato */}
        <aside className="space-y-6 lg:col-span-5">
          {/* Bloco Unidades: Porto */}
          <div className={asideCardClasses}>
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gold-leaf/30 bg-gold-leaf/10 text-jet dark:text-gold-leaf" aria-hidden="true">
                <MapPin className="h-5 w-5" />
              </span>
              <h3 className="font-vivant text-xl text-jet dark:text-white">
                {t('triage_form.sidebar_units_title', 'Nossas Unidades')}
              </h3>
            </div>

            <div className="space-y-4">
              {/* Unidade Porto */}
              <div className="rounded-xl border border-jet/10 p-4 dark:border-white/10">
                <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-vivant text-base text-jet dark:text-white">
                    {t('triage_form.sidebar_porto_name', 'Porto · Mota Galiza')}
                  </h4>
                  <span className="rounded-full border border-jet/15 px-2.5 py-0.5 font-vivant text-[10px] uppercase tracking-[0.14em] text-jet/70 dark:border-white/15 dark:text-gray-400">
                    {t('triage_form.sidebar_porto_badge', 'Sede')}
                  </span>
                </div>
                <p className="font-vivant-light text-sm leading-relaxed text-jet/70 dark:text-gray-300">
                  {t('triage_form.sidebar_porto_address', 'Rua Júlio Dinis, n.º 194, 4050-327 Porto')}
                </p>
                <p className="mt-2 text-xs text-jet/60 dark:text-gray-400">
                  {t('triage_form.sidebar_porto_reg', 'Registo ERS n.º 161637 · Licença de funcionamento n.º 21593')}
                </p>
              </div>

              {/* Unidade Porto · Marquês */}
              <div className="rounded-xl border border-jet/10 p-4 dark:border-white/10">
                <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-vivant text-base text-jet dark:text-white">
                    {t('triage_form.sidebar_marques_name', 'Porto · Marquês')}
                  </h4>
                </div>
                <p className="font-vivant-light text-sm leading-relaxed text-jet/70 dark:text-gray-300">
                  {t('triage_form.sidebar_marques_address', 'Rua de Faria Guimarães, n.º 450, 4000-205 Porto')}
                </p>
                <p className="mt-2 text-xs text-jet/60 dark:text-gray-400">
                  {t('triage_form.sidebar_marques_reg', 'Registo ERS n.º 175125 · Licença de funcionamento n.º 25345')}
                </p>
              </div>
            </div>
          </div>

          {/* Bloco Resposta Imediata / WhatsApp */}
          <div className="rounded-2xl border border-white/10 bg-gradient-dark p-6 text-white shadow-elegant sm:p-8 dark:bg-black dark:bg-none">
            <div className="mb-3 flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-400" aria-hidden="true">
                <MessageSquare className="h-5 w-5" />
              </span>
              <h3 className="font-vivant text-lg">
                {t('triage_form.sidebar_wa_title', 'Prefere Resposta Imediata?')}
              </h3>
            </div>
            <p className="mb-6 font-vivant-light text-sm leading-relaxed text-white/75">
              {t('triage_form.sidebar_wa_desc', 'Para quem não quer aguardar ligação ou busca tirar dúvidas pontuais antes do agendamento, a nossa equipa clínica atende diretamente pelo canal direto oficial:')}
            </p>
            <a
              href={getWhatsAppUrl("Olá, gostaria de informações sobre marcação de consulta no Instituto AreLuna.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onContactClick}
              className={cn(whatsappButtonClasses, "group h-auto min-h-12 w-full whitespace-normal py-3 text-center sm:min-h-14")}
            >
              <span>{t('triage_form.sidebar_wa_btn', 'Falar com a receção no WhatsApp')}</span>
              <ArrowRight className="transition-transform group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
            </a>
          </div>

          {/* Informações de Contacto & Horários */}
          <div className={cn(asideCardClasses, "space-y-1 text-sm")}>
            <a
              href={contact.telUrl}
              onClick={onContactClick}
              className="flex min-h-[44px] items-center gap-3 rounded-lg text-jet/80 transition-colors hover:text-jet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf dark:text-gray-300 dark:hover:text-gold-leaf"
            >
              <Phone className="h-4 w-4 shrink-0 text-gold-leaf" aria-hidden="true" />
              <span>{contact.phone} (Porto & Geral)</span>
            </a>
            <a
              href="mailto:rececao@institutoareluna.pt"
              className="flex min-h-[44px] items-center gap-3 break-all rounded-lg text-jet/80 transition-colors hover:text-jet focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-leaf dark:text-gray-300 dark:hover:text-gold-leaf"
            >
              <Mail className="h-4 w-4 shrink-0 text-gold-leaf" aria-hidden="true" />
              <span>rececao@institutoareluna.pt</span>
            </a>
            <div className="flex items-start gap-3 py-2.5 text-jet/70 dark:text-gray-400">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-gold-leaf" aria-hidden="true" />
              <div className="space-y-0.5">
                <p>{t('triage_form.sidebar_hours_mon_fri', 'Segunda a Sexta: 09:00 - 19:00')}</p>
                <p>{t('triage_form.sidebar_hours_sat', 'Sábado: Sob marcação prévia')}</p>
              </div>
            </div>
            <div className="!mt-3 flex items-center gap-2 border-t border-jet/10 pt-4 text-xs text-jet/60 dark:border-white/10 dark:text-gray-400">
              <ShieldCheck className="h-4 w-4 shrink-0 text-emerald-600 dark:text-emerald-400" aria-hidden="true" />
              <span>{t('triage_form.sidebar_compliance', 'Sigilo profissional e conformidade integral RGPD / ERS')}</span>
            </div>
          </div>
        </aside>
      </div>
    </Section>
  );
};

export default ContactFormSection;
