
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen bg-jet text-pure-white flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-4xl md:text-5xl font-vivant text-[hsl(var(--gold-leaf))] mb-8">
                        Política de Privacidade
                    </h1>

                    <div className="prose prose-invert prose-gold max-w-none font-vivant-light">
                        <p className="text-lg text-pure-white/80 mb-8">
                            Última atualização: {new Date().toLocaleDateString('pt-PT')}
                        </p>

                        <section className="space-y-6">
                            <h2 className="text-2xl font-vivant text-pure-white">1. Introdução</h2>
                            <p>
                                O Instituto Areluna ("nós", "nosso") respeita a sua privacidade e compromete-se a proteger os seus dados pessoais.
                                Esta Política de Privacidade explica como recolhemos, utilizamos e protegemos as suas informações quando visita o nosso website.
                            </p>

                            <h2 className="text-2xl font-vivant text-pure-white">2. Recolha de Dados</h2>
                            <p>
                                Podemos recolher os seguintes tipos de informações:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Informações de contacto (nome, email, telefone) quando preenche os nossos formulários.</li>
                                <li>Dados de navegação e cookies para melhorar a experiência do utilizador.</li>
                            </ul>

                            <h2 className="text-2xl font-vivant text-pure-white">3. Utilização dos Dados</h2>
                            <p>
                                Utilizamos os seus dados para:
                            </p>
                            <ul className="list-disc pl-6 space-y-2">
                                <li>Responder aos seus pedidos de contacto e marcações.</li>
                                <li>Melhorar os nossos serviços e o conteúdo do website.</li>
                                <li>Comunicar novidades e ofertas (caso tenha consentido).</li>
                            </ul>

                            <h2 className="text-2xl font-vivant text-pure-white">4. Os Seus Direitos</h2>
                            <p>
                                De acordo com o RGPD, tem o direito de aceder, retificar ou eliminar os seus dados pessoais.
                                Para exercer estes direitos, por favor contacte-nos através do email: rececao@institutoareluna.pt
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

export default PrivacyPolicy;
