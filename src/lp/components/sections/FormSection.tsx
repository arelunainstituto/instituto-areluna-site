import { ReactNode } from "react";
import EvaluationForm from "@/lp/components/EvaluationForm";

interface FormSectionProps {
  eyebrow?: string;
  title: ReactNode;
  titleHighlight?: ReactNode;
  description?: ReactNode;
  formInteresse: string;
  formDescription: string;
  formWebhookUrl: string;
  formFonteLead?: string;
  formTitle?: string;
  formSuccessRedirect?: string;
  formWhatsappAfterSubmit?: React.ComponentProps<typeof EvaluationForm>["whatsappAfterSubmit"];
}

const FormSection = ({
  eyebrow = "AVALIAÇÃO GRATUITA",
  title,
  titleHighlight,
  description,
  formInteresse,
  formDescription,
  formWebhookUrl,
  formFonteLead,
  formTitle,
  formSuccessRedirect,
  formWhatsappAfterSubmit,
}: FormSectionProps) => {
  return (
    <section id="evaluation-form-anchor" className="py-section-lg bg-gradient-marble">
      <div className="container mx-auto px-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10 md:mb-12">
            <span className="inline-block px-4 py-2 bg-gradient-gold text-white rounded-full text-sm font-medium mb-4">
              {eyebrow}
            </span>
            <h2 className="font-vivant-black text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 text-pretty">
              {title}
              {titleHighlight && (
                <>
                  {" "}
                  <span className="text-transparent bg-gradient-gold bg-clip-text">
                    {titleHighlight}
                  </span>
                </>
              )}
            </h2>
            {description && (
              <p className="font-vivant-light text-lg md:text-xl text-muted-foreground text-pretty">
                {description}
              </p>
            )}
          </div>

          <EvaluationForm
            interesse={formInteresse}
            description={formDescription}
            webhookUrl={formWebhookUrl}
            fonte_lead={formFonteLead}
            title={formTitle}
            successRedirect={formSuccessRedirect}
            whatsappAfterSubmit={formWhatsappAfterSubmit}
          />
        </div>
      </div>
    </section>
  );
};

export default FormSection;
