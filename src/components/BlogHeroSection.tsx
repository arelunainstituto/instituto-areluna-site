const BlogHeroSection = () => {
    return (
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[hsl(var(--jet))] via-[#1a1a1a] to-black pt-36 pb-20">
            {/* Imagem de fundo com baixa opacidade */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954598/instituto-areluna/97a1febf-3c27-4a63-a583-b2522013f3f4.jpg"
                    alt="Background"
                    className="w-full h-full object-cover mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--jet))]/90 via-[#1a1a1a]/80 to-black/90"></div>
            </div>

            {/* Elementos decorativos de fundo */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[hsl(var(--gold-leaf))]/5 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[hsl(var(--ring))]/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }}></div>

                {/* Partículas sutis */}
                <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-[hsl(var(--gold-leaf))]/20 rounded-full blur-sm animate-float"></div>
                <div className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-[hsl(var(--gold-leaf))]/10 rounded-full blur-sm animate-float" style={{ animationDelay: '1.5s' }}></div>
            </div>

            <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
                {/* Ornamento superior */}
                <div className="flex justify-center mb-8 opacity-0 animate-fade-in-up">
                    <div className="w-px h-16 bg-gradient-to-b from-transparent via-[hsl(var(--gold-leaf))]/50 to-transparent"></div>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-vivant-skinny font-thin mb-8 leading-tight tracking-wide text-white opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    Nosso <span className="font-vivant text-[hsl(var(--gold-leaf))]">Blog</span>
                </h1>

                <p className="text-base sm:text-lg lg:text-xl mb-12 font-vivant-light text-white/80 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                    Acompanhe as nossas últimas novidades e artigos sobre saúde e estética
                </p>
            </div>
        </section>
    );
};

export default BlogHeroSection;
