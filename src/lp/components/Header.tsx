import { Button } from "@/components/ui/button";

const scrollToForm = () =>
  document.getElementById("evaluation-form")?.scrollIntoView({ behavior: "smooth" });

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-3 sm:px-4 md:px-8">
        <div className="flex items-center justify-between gap-2 h-16 md:h-20">
          <img
            src="/lp/lovable-uploads/c3666a59-2f87-4c93-a341-911c9b6c6777.png"
            alt="Instituto Areluna"
            className="h-8 md:h-10 object-contain shrink-0"
          />

          <div className="flex items-center gap-4 min-w-0">
            <p className="hidden lg:block font-vivant-light text-sm text-muted-foreground truncate">
              Sorria com Confiança: Transformação em 24 Horas
            </p>
            <Button
              variant="premium"
              size="sm"
              onClick={scrollToForm}
              className="font-sans font-medium text-xs sm:text-sm whitespace-nowrap"
            >
              <span className="sm:hidden">Marcar avaliação</span>
              <span className="hidden sm:inline">Quero marcar a minha avaliação</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;