export default function CompanyLogos() {
  const logos = [
    {
      name: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    },
    {
      name: "Nestlé",
      logo: "https://upload.wikimedia.org/wikipedia/en/d/d8/Nestl%C3%A9_logo.svg",
    },
    {
      name: "Nespresso",
      logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Nespresso_logo.svg",
    },
    {
      name: "Anytime Fitness",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Anytime_Fitness_logo.svg",
    },
    {
      name: "Vibly",
      logo: "https://via.placeholder.com/120x40/1f2937/ffffff?text=Vibly",
    },
  ];

  return (
    <section className="bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <div className="text-3xl font-bold text-white mb-2">12,000+</div>
          <div className="text-gray-400">Business trust Feedbird</div>
        </div>

        <div className="flex items-center justify-center gap-12 flex-wrap opacity-60">
          {logos.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <img
                src={company.logo}
                alt={company.name}
                className="h-8 w-auto filter brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
