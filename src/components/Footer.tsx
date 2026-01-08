const arelunaLogo = "https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954590/instituto-areluna/684037b8-d590-4e39-83d2-b5ce9e85eae9.png"; // Usando logo do lovable-uploads

const Footer = () => {
  return (
    <footer className="bg-jet dark:bg-black text-pure-white relative overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-br from-jet via-jet/95 to-jet"></div>
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: 'radial-gradient(circle at 2px 2px, hsl(var(--gold-leaf)) 1px, transparent 0)',
        backgroundSize: '30px 30px'
      }}></div>

      {/* Elementos decorativos */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-[hsl(var(--gold-leaf))]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-[hsl(var(--gold-leaf))]/8 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Seção principal do footer */}
        <div className="py-16 border-b border-pure-white/10">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo e descrição */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img
                  src="https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954590/instituto-areluna/684037b8-d590-4e39-83d2-b5ce9e85eae9.png"
                  alt="Areluna"
                  loading="lazy"
                  decoding="async"
                  className="h-20 w-auto mb-4"
                />
                <h3 className="text-2xl font-vivant text-[hsl(var(--gold-leaf))] mb-4">
                  Medicina Dentária & Estética Avançada
                </h3>
                <p className="text-pure-white/70 font-vivant-light leading-relaxed max-w-md">
                  Transformamos sorrisos com 25 anos de experiência, utilizando as mais avançadas técnicas
                  e tecnologias para oferecer resultados excepcionais e naturais.
                </p>
              </div>

              {/* Redes sociais */}
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-[hsl(var(--gold-leaf))] rounded-lg flex items-center justify-center hover:bg-amber-400 transition-colors duration-300 group"
                >
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[hsl(var(--gold-leaf))] rounded-lg flex items-center justify-center hover:bg-amber-400 transition-colors duration-300 group"
                >
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[hsl(var(--gold-leaf))] rounded-lg flex items-center justify-center hover:bg-amber-400 transition-colors duration-300 group"
                >
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-[hsl(var(--gold-leaf))] rounded-lg flex items-center justify-center hover:bg-amber-400 transition-colors duration-300 group"
                >
                  <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links rápidos */}
            <div>
              <h4 className="text-lg font-vivant text-[hsl(var(--gold-leaf))] mb-6">Links Rápidos</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#instituto" className="text-pure-white/70 hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 font-vivant-light">
                    O Instituto
                  </a>
                </li>
                <li>
                  <a href="#tratamentos" className="text-pure-white/70 hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 font-vivant-light">
                    Tratamentos
                  </a>
                </li>
                <li>
                  <a href="#turismo" className="text-pure-white/70 hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 font-vivant-light">
                    Turismo Dentário
                  </a>
                </li>
                <li>
                  <a href="#antes-depois" className="text-pure-white/70 hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 font-vivant-light">
                    Antes & Depois
                  </a>
                </li>
                <li>
                  <a href="#contato" className="text-pure-white/70 hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 font-vivant-light">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>

            {/* Informações de contato */}
            <div>
              <h4 className="text-lg font-vivant text-[hsl(var(--gold-leaf))] mb-6">Contacto</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[hsl(var(--gold-leaf))] rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-pure-white/70 font-vivant-light text-sm">
                      Porto, Portugal
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[hsl(var(--gold-leaf))] rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <a href="tel:+351220430090" className="text-pure-white/70 hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 font-vivant-light text-sm">
                      +351 220 430 090
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[hsl(var(--gold-leaf))] rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <a href="mailto:rececao@institutoareluna.pt" className="text-pure-white/70 hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 font-vivant-light text-sm">
                      rececao@institutoareluna.pt
                    </a>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-[hsl(var(--gold-leaf))] rounded-full flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-pure-white/70 font-vivant-light text-sm">
                      Seg-Sex: 09h-19h<br />
                      Sáb: Sob marcação<br />
                      Dom: Encerrado
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Seção inferior */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-pure-white/60 text-sm font-vivant-light">
              © 2024 Areluna - Medicina Dentária & Estética Avançada. Todos os direitos reservados.
            </div>

            {/* Links legais */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-pure-white/60 hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 font-vivant-light">
                Política de Privacidade
              </a>
              <a href="#" className="text-pure-white/60 hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 font-vivant-light">
                Termos de Uso
              </a>
              <a href="#" className="text-pure-white/60 hover:text-[hsl(var(--gold-leaf))] transition-colors duration-300 font-vivant-light">
                Cookies
              </a>
            </div>
          </div>
        </div>

        {/* Badge de qualidade */}
        <div className="absolute bottom-8 right-8 bg-gradient-to-br from-[hsl(var(--jet))] to-[hsl(var(--ring))] dark:from-black dark:via-gray-900 dark:to-black rounded-2xl px-4 py-3 shadow-xl">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <div>
              <p className="text-white font-vivant font-medium text-xs">25 Anos</p>
              <p className="text-white/90 font-vivant-light text-xs">Excelência</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;