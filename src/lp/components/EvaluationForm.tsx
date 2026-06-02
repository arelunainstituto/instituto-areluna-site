import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import {
  COUNTRIES,
  DEFAULT_COUNTRY_ISO,
  applyPhoneMask,
  countDigits,
  getCountryByIso,
} from "@/lp/lib/countries";

interface FormData {
  name: string;
  countryIso: string;
  phone: string;
  email: string;
  consent: boolean;
}

interface WhatsappAfterSubmit {
  phone: string;
  buildMessage: (data: { name: string; phone: string; email: string }) => string;
}

interface EvaluationFormProps {
  interesse: string;
  webhookUrl: string;
  description: string;
  fonte_lead?: string;
  title?: string;
  successRedirect?: string;
  whatsappAfterSubmit?: WhatsappAfterSubmit;
}

const EvaluationForm = ({
  interesse,
  webhookUrl,
  description,
  fonte_lead = "Landing Page",
  title,
  successRedirect = "/obrigado",
  whatsappAfterSubmit,
}: EvaluationFormProps) => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      countryIso: DEFAULT_COUNTRY_ISO,
      phone: "",
    },
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [eventId, setEventId] = useState("");

  useEffect(() => {
    setEventId(`lead_${Math.random().toString(36).substring(2, 10)}${Date.now().toString(36)}`);
  }, []);

  const countryIso = watch("countryIso", DEFAULT_COUNTRY_ISO);
  const phoneValue = watch("phone", "");

  const country = useMemo(
    () => getCountryByIso(countryIso) ?? getCountryByIso(DEFAULT_COUNTRY_ISO)!,
    [countryIso],
  );

  useEffect(() => {
    setValue("phone", applyPhoneMask(phoneValue, country.mask));
  }, [country.mask]);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue("phone", applyPhoneMask(e.target.value, country.mask), { shouldValidate: true });
  };

  const validatePhone = (value: string) => {
    const digits = countDigits(value);
    if (digits < country.minDigits) return `Telemóvel incompleto (mínimo ${country.minDigits} dígitos)`;
    if (digits > country.maxDigits) return `Telemóvel inválido`;
    return true;
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    const phoneDigits = data.phone.replace(/\D/g, "");
    const fullPhone = `${country.code}${phoneDigits}`;

    if (typeof window !== "undefined") {
      const dataLayer = ((window as any).dataLayer = (window as any).dataLayer || []);
      dataLayer.push({
        event: "form_submit_lead",
        eventID: eventId,
        lead_data: {
          name: data.name,
          phone: fullPhone,
          email: data.email,
          interesse,
        },
      });

      if ((window as any).gtag) {
        (window as any).gtag("event", "form_submit", {
          form_name: interesse,
          form_type: "evaluation_form",
          event_category: "form",
          event_label: interesse,
        });
      }

      window.dispatchEvent(
        new CustomEvent("form_submit", {
          detail: {
            form_name: interesse,
            form_type: "evaluation_form",
            form_data: { name: data.name, phone: phoneDigits, email: data.email, interesse },
          },
        }),
      );
    }

    try {
      const webhookData = {
        name: data.name,
        countryCode: country.code,
        countryIso: country.iso,
        phone: phoneDigits,
        email: data.email,
        consent: data.consent,
        interesse,
        fonte_lead,
        eventId,
      };

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(webhookData),
      });

      if (!response.ok) throw new Error("Erro ao enviar dados");

      toast({
        title: "✅ Inscrição realizada com sucesso!",
        description: "Redirecionando...",
      });

      if (whatsappAfterSubmit) {
        const message = whatsappAfterSubmit.buildMessage({
          name: data.name,
          phone: fullPhone,
          email: data.email,
        });
        const cleanWhatsapp = whatsappAfterSubmit.phone.replace(/\D/g, "");
        window.open(`https://wa.me/${cleanWhatsapp}?text=${encodeURIComponent(message)}`, "_blank");
      }

      setValue("name", "");
      setValue("phone", "");
      setValue("email", "");
      setValue("consent", false);
      setValue("countryIso", DEFAULT_COUNTRY_ISO);

      setTimeout(() => {
        if (successRedirect.startsWith("http")) {
          window.location.href = successRedirect;
        } else {
          window.location.href = successRedirect;
        }
      }, 1500);
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      toast({
        title: "Erro ao enviar",
        description: "Tente novamente mais tarde ou contacte-nos diretamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card
      className="w-full max-w-full sm:max-w-lg mx-auto bg-white/95 backdrop-blur-md border-2 border-primary/30 shadow-2xl shadow-gold/30 relative overflow-hidden"
      id="evaluation-form"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-gold"></div>

      <CardHeader className="text-center pb-6 pt-8 px-4 sm:px-6">
        <div className="inline-block px-4 py-2 bg-gradient-gold text-white rounded-full text-xs sm:text-sm font-medium mb-4 max-w-full">
          🎯 AVALIAÇÃO ESPECIALIZADA
        </div>
        <CardTitle className="text-xl sm:text-2xl md:text-3xl font-vivant-medium text-foreground leading-tight text-pretty">
          {title ?? `Avaliação de ${interesse}`}
        </CardTitle>
        <p className="text-sm sm:text-base text-muted-foreground mt-2">{description}</p>
      </CardHeader>

      <CardContent className="space-y-6 pb-8 px-4 sm:px-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <input type="hidden" name="Event ID" value={eventId} />

          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-foreground">Nome Completo</Label>
            <Input
              id="name"
              autoComplete="name"
              {...register("name", {
                required: "Nome é obrigatório",
                minLength: { value: 2, message: "Indique o seu nome completo" },
              })}
              className="w-full"
              placeholder="O seu nome completo"
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-foreground">Telemóvel</Label>
            <div className="flex gap-2">
              <Select
                value={countryIso}
                onValueChange={(value) => setValue("countryIso", value)}
              >
                <SelectTrigger className="w-28 sm:w-32 shrink-0" aria-label="Indicativo do país">
                  <SelectValue>
                    <span className="flex items-center gap-2 min-w-0">
                      <span className="shrink-0">{country.flag}</span>
                      <span className="truncate">{country.code}</span>
                    </span>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent className="max-h-[60vh]">
                  {COUNTRIES.map((c) => (
                    <SelectItem key={c.iso} value={c.iso}>
                      <span className="flex items-center gap-2">
                        <span className="shrink-0">{c.flag}</span>
                        <span className="w-12 text-muted-foreground shrink-0">{c.code}</span>
                        <span className="truncate">{c.name}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Input
                id="phone"
                type="tel"
                inputMode="numeric"
                autoComplete="tel"
                {...register("phone", {
                  required: "Telemóvel é obrigatório",
                  validate: validatePhone,
                })}
                onChange={handlePhoneChange}
                value={phoneValue}
                className="flex-1 min-w-0"
                placeholder={country.placeholder}
              />
            </div>
            {errors.phone && <p className="text-sm text-destructive">{errors.phone.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">E-mail</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              {...register("email", {
                required: "E-mail é obrigatório",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "E-mail inválido",
                },
              })}
              className="w-full"
              placeholder="seu@email.com"
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>

          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="consent"
                {...register("consent", { required: "Deve aceitar os termos para continuar" })}
                className="mt-1"
              />
              <div className="text-sm">
                <label htmlFor="consent" className="text-muted-foreground leading-relaxed cursor-pointer">
                  Concordo com o tratamento dos meus dados pessoais para fins de contacto e avaliação clínica,
                  conforme a{" "}
                  <Link to="/politica-privacidade" target="_blank" className="text-primary hover:underline font-medium">
                    Política de Privacidade
                  </Link>
                  . Posso revogar o consentimento a qualquer momento.
                </label>
                {errors.consent && (
                  <p className="text-sm text-destructive mt-1">{errors.consent.message}</p>
                )}
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full h-12 text-base font-medium"
            variant="premium"
            disabled={isSubmitting}
          >
            {isSubmitting ? "A enviar..." : "✨ Marcar Avaliação"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default EvaluationForm;
