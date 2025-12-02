const doctorMale = "https://res.cloudinary.com/dli5oe4qg/image/upload/v1753954116/instituto-areluna/doctor-male.jpg";

const TeamSection = () => {
  const team = [
    {
      name: "Dr. João Silva",
      specialty: "Medicina Dentária",
      description: "Especialista em estética dental com mais de 15 anos de experiência em harmonização do sorriso.",
      image: doctorMale,
      qualifications: ["Mestrado em Estética Dental", "Especialização em Implantologia", "Certificação Internacional"]
    },
    {
      name: "Dra. Maria Santos",
      specialty: "Medicina Estética",
      description: "Expert em harmonização facial e procedimentos não invasivos, sempre priorizando a naturalidade.",
      image: doctorMale, // You could generate another image here
      qualifications: ["Pós-graduação em Medicina Estética", "Certificação em Toxina Botulínica", "Especialização em Preenchimentos"]
    }
  ];

  return (
    <section id="equipe" className="py-24 bg-pure-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-vivant text-jet mb-6">
            Nossa <span className="text-gold-leaf">Equipe</span>
          </h2>
          <p className="text-xl text-battleship leading-relaxed">
            Profissionais altamente qualificados e experientes, dedicados a proporcionar 
            o melhor cuidado e resultados excepcionais para cada paciente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {team.map((member, index) => (
            <div key={index} className="group bg-gradient-light rounded-2xl p-8 shadow-elegant hover:shadow-gold transition-all duration-500">
              <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full overflow-hidden shadow-elegant group-hover:shadow-gold transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gold-leaf text-jet p-2 rounded-full">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </div>

                <div className="flex-1 text-center lg:text-left space-y-4">
                  <div>
                    <h3 className="text-2xl font-vivant text-jet group-hover:text-gold-leaf transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-gold-leaf font-medium">{member.specialty}</p>
                  </div>
                  
                  <p className="text-battleship leading-relaxed">
                    {member.description}
                  </p>
                  
                  <div className="space-y-2">
                    {member.qualifications.map((qualification, idx) => (
                      <div key={idx} className="flex items-center justify-center lg:justify-start space-x-2">
                        <div className="w-1.5 h-1.5 bg-gold-leaf rounded-full"></div>
                        <span className="text-jet text-sm">{qualification}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-dark text-pure-white p-8 rounded-2xl shadow-elegant max-w-2xl mx-auto">
            <h3 className="text-2xl font-vivant mb-4">
              Quer conhecer nossa equipe pessoalmente?
            </h3>
            <p className="text-battleship mb-6">
              Agende uma consulta e conheça os profissionais que cuidarão da sua beleza e bem-estar.
            </p>
            <button className="bg-gold-leaf text-jet px-8 py-3 rounded-lg font-medium hover:shadow-gold transition-all duration-300">
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;