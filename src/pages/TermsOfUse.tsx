
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const TermsOfUse = () => {
    return (
        <div className="min-h-screen bg-jet text-pure-white flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-vivant text-[hsl(var(--gold-leaf))] mb-8">
                        Termos de Uso
                    </h1>

                    <div className="prose prose-invert prose-gold max-w-none font-vivant-light">
                        <p className="text-lg text-pure-white/80 mb-8">
                            Última atualização: {new Date().toLocaleDateString('pt-PT')}
                        </p>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-vivant text-pure-white">1. Aceitação dos Termos</h2>
                            <p>
                                Ao aceder e utilizar o website do Instituto Areluna, concorda em cumprir estes Termos de Uso.
                                Se não concordar com algum destes termos, por favor não utilize o nosso website.
                            </p>

                            <h2 className="text-2xl font-vivant text-pure-white">2. Propriedade Intelectual</h2>
                            <p>
                                Todo o conteúdo deste website (textos, imagens, logótipos) é propriedade do Instituto Areluna ou dos seus licenciadores
                                e está protegido por leis de direitos de autor.
                            </p>

                            <h2 className="text-2xl font-vivant text-pure-white">3. Uso Permitido</h2>
                            <p>
                                Este website destina-se apenas a uso pessoal e informativo. É proibido utilizar o website para fins ilegais
                                ou que possam prejudicar a imagem do Instituto Areluna.
                            </p>

                            <h2 className="text-2xl font-vivant text-pure-white">4. Limitação de Responsabilidade</h2>
                            <p>
                                O Instituto Areluna esforça-se por manter a informação do website atualizada, mas não garante a sua total precisão.
                                Não nos responsabilizamos por quaisquer danos resultantes do uso deste website.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <WhatsAppFloat />
            <Footer />
        </div>
    );
};

export default TermsOfUse;
