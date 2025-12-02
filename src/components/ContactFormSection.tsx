import { useState } from 'react';

const ContactFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio do formulário
    console.log('Formulário enviado:', formData);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email",
      value: "contato@areluna.pt",
      link: "mailto:contato@areluna.pt"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: "Telefone",
      value: "+351 XXX XXX XXX",
      link: "tel:+351XXXXXXXXX"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Localização",
      value: "Porto, Portugal",
      link: "#"
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Horário",
      value: "Seg-Sex: 9h às 18h",
      link: "#"
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-100/60 via-gray-50/40 to-gray-100/60 dark:from-black dark:via-gray-900/40 dark:to-black relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--gold-leaf)) 1px, transparent 0)', 
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-20 right-16 w-40 h-40 bg-gradient-to-br from-[hsl(var(--gold-leaf))]/12 to-[hsl(var(--ring))]/6 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-16 w-32 h-32 bg-gradient-to-br from-[hsl(var(--jet))]/10 to-[hsl(var(--gold-leaf))]/8 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1.5s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-[hsl(var(--gold-leaf))]/6 rounded-full blur-xl"></div>

      {/* Background text sutil */}
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 pointer-events-none overflow-hidden">
        <span className="text-[16rem] font-vivant text-[hsl(var(--gold-leaf))]/5 select-none whitespace-nowrap">
          Contato
        </span>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header da seção */}
        <div className="text-center mb-16 sm:mb-20">
          {/* Ornamento superior */}
          <div className="flex justify-center items-center mb-6 sm:mb-8">
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent to-[hsl(var(--gold-leaf))]/40 rounded-full"></div>
            <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[hsl(var(--gold-leaf))]/20 rounded-full mx-3 sm:mx-4 border-2 border-[hsl(var(--gold-leaf))]/40"></div>
            <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-[hsl(var(--gold-leaf))]/40 to-[hsl(var(--gold-leaf))]/20 rounded-full"></div>
            <div className="w-2 sm:w-3 h-2 sm:h-3 bg-[hsl(var(--gold-leaf))]/30 rounded-full mx-2 sm:mx-3"></div>
            <div className="w-24 sm:w-32 h-px bg-gradient-to-r from-[hsl(var(--gold-leaf))]/20 to-[hsl(var(--gold-leaf))]/40 rounded-full"></div>
            <div className="w-3 sm:w-4 h-3 sm:h-4 bg-[hsl(var(--gold-leaf))]/20 rounded-full mx-3 sm:mx-4 border-2 border-[hsl(var(--gold-leaf))]/40"></div>
            <div className="w-12 sm:w-16 h-px bg-gradient-to-r from-[hsl(var(--gold-leaf))]/40 to-transparent rounded-full"></div>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-vivant text-jet mb-6 drop-shadow-sm">
            Entre em Contato
          </h2>
          
          <div className="w-32 h-1 bg-gradient-to-r from-[hsl(var(--jet))] to-[hsl(var(--ring))] mx-auto mb-6 sm:mb-8 rounded-full"></div>
          
          <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-vivant text-jet mb-4 sm:mb-6">
              Transforme o Seu Sorriso
            </h3>
            <p className="text-base sm:text-lg text-jet/70 font-vivant-light leading-relaxed">
              Entre em contacto connosco e agende a sua consulta. Estamos prontos para criar o sorriso dos seus sonhos 
              com os mais altos padrões de qualidade e excelência.
            </p>
          </div>
        </div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Formulário */}
          <div className="order-2 lg:order-1">
            <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-3xl p-6 sm:p-8 shadow-2xl border border-[hsl(var(--gold-leaf))]/15 dark:border-[hsl(var(--gold-leaf))]/30">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Nome */}
                <div className="group">
                  <label 
                    htmlFor="name" 
                    className={`block text-sm font-vivant font-medium mb-2 transition-colors duration-300 ${
                      focusedField === 'name' ? 'text-[hsl(var(--gold-leaf))]' : 'text-jet/70'
                    }`}
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-4 bg-white/70 dark:bg-gray-800/70 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-[hsl(var(--gold-leaf))] focus:outline-none transition-all duration-300 font-vivant-light placeholder-gray-400 dark:placeholder-gray-500 text-jet dark:text-gray-100"
                    placeholder="Introduza o seu nome completo"
                    required
                  />
                </div>

                {/* Email e Telefone */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <label 
                      htmlFor="email" 
                      className={`block text-sm font-vivant font-medium mb-2 transition-colors duration-300 ${
                        focusedField === 'email' ? 'text-[hsl(var(--gold-leaf))]' : 'text-jet/70'
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 bg-white/70 dark:bg-gray-800/70 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-[hsl(var(--gold-leaf))] focus:outline-none transition-all duration-300 font-vivant-light placeholder-gray-400 dark:placeholder-gray-500 text-jet dark:text-gray-100"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div className="group">
                    <label 
                      htmlFor="phone" 
                      className={`block text-sm font-vivant font-medium mb-2 transition-colors duration-300 ${
                        focusedField === 'phone' ? 'text-[hsl(var(--gold-leaf))]' : 'text-jet/70'
                      }`}
                    >
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-4 bg-white/70 dark:bg-gray-800/70 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-[hsl(var(--gold-leaf))] focus:outline-none transition-all duration-300 font-vivant-light placeholder-gray-400 dark:placeholder-gray-500 text-jet dark:text-gray-100"
                      placeholder="+351 XXX XXX XXX"
                    />
                  </div>
                </div>

                {/* Assunto */}
                <div className="group">
                  <label 
                    htmlFor="subject" 
                    className={`block text-sm font-vivant font-medium mb-2 transition-colors duration-300 ${
                      focusedField === 'subject' ? 'text-[hsl(var(--gold-leaf))]' : 'text-jet/70'
                    }`}
                  >
                    Assunto
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-4 bg-white/70 dark:bg-gray-800/70 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-[hsl(var(--gold-leaf))] focus:outline-none transition-all duration-300 font-vivant-light text-jet dark:text-gray-100"
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="consulta">Agendar Consulta</option>
                    <option value="tratamentos">Informações sobre Tratamentos</option>
                    <option value="turismo">Turismo Dentário</option>
                    <option value="emergencia">Consulta de Emergência</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                {/* Mensagem */}
                <div className="group">
                  <label 
                    htmlFor="message" 
                    className={`block text-sm font-vivant font-medium mb-2 transition-colors duration-300 ${
                      focusedField === 'message' ? 'text-[hsl(var(--gold-leaf))]' : 'text-jet/70'
                    }`}
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    rows={5}
                    className="w-full px-4 py-4 bg-white/70 dark:bg-gray-800/70 border-2 border-gray-200 dark:border-gray-600 rounded-xl focus:border-[hsl(var(--gold-leaf))] focus:outline-none transition-all duration-300 font-vivant-light placeholder-gray-400 dark:placeholder-gray-500 text-jet dark:text-gray-100 resize-none"
                    placeholder="Descreva como podemos ajudá-lo..."
                    required
                  />
                </div>

                {/* Botão de envio */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[hsl(var(--jet))] to-[hsl(var(--ring))] text-white font-vivant font-semibold px-8 py-5 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] border border-white/20 group relative overflow-hidden"
                  >
                    <span className="relative z-10">ENVIAR MENSAGEM</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Informações de contato */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-[hsl(var(--gold-leaf))]/15 dark:border-[hsl(var(--gold-leaf))]/30">
              <h4 className="text-2xl font-vivant text-jet mb-6">Informações de Contacto</h4>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center space-x-4 group hover:bg-[hsl(var(--gold-leaf))]/5 p-3 rounded-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <h5 className="font-vivant text-jet font-medium">{info.title}</h5>
                      <p className="text-jet/70 font-vivant-light">{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Mapa ou informação adicional */}
            <div className="bg-gradient-to-br from-[hsl(var(--gold-leaf))]/10 to-[hsl(var(--ring))]/5 dark:from-[hsl(var(--gold-leaf))]/20 dark:to-[hsl(var(--ring))]/10 rounded-3xl p-8 border border-[hsl(var(--gold-leaf))]/15">
              <h4 className="text-xl font-vivant text-jet mb-4">Horário de Funcionamento</h4>
              <div className="space-y-3 text-jet/70 font-vivant-light">
                <div className="flex justify-between">
                  <span>Segunda - Sexta</span>
                  <span className="text-[hsl(var(--gold-leaf))] font-medium">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados</span>
                  <span className="text-jet/50">Fechado</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos</span>
                  <span className="text-jet/50">Fechado</span>
                </div>
                <div className="border-t border-[hsl(var(--gold-leaf))]/20 pt-3 mt-4">
                  <div className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-[hsl(var(--gold-leaf))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm text-[hsl(var(--gold-leaf))] font-medium">
                      Consultas de emergência disponíveis 24/7
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection; 