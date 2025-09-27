import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const specialistAreas = [
    "Weight Training", "HIIT", "HIT", "Tabata", "Turbulence Training",
    "Pyramid Training", "FHT 7", "P90X", "Pilates", "Circuit Training",
    "Endurance", "Resistance", "Strength", "Muscle Building", "Weight Loss",
    "Body Toning", "Flexibility Training", "Mixed Martial Arts (Muay Thai)",
    "Reflexology", "Nutritional Expert", "Aerobics", "Physiotherapist",
    "Corporate Training", "Seminars", "Schools & Colleges", "De-addiction"
  ];

  const physicalSpecialties = [
    "Sub-acute soft tissue Injury", "Electro Therapy", "Joint Mobilisation Techniques",
    "BPPV Vertigo Treatment", "Gait Analysis", "Posture Correction",
    "Injury Management - Strengthening service offering"
  ];

  const physiologicalConditions = [
    "Thyroid Issues", "PCOS", "Chronic Bloating", "Sexual dysfunctions",
    "Obesity", "Mental Health Without Medication", "Nutrition",
    "Sports Conditioning", "Zero to Hero Transformation",
    "The Centurions - Biggest Loser", "The academy"
  ];

  const certifications = [
    "International Certified Personal Trainer by FISAF (National College of Fitness)",
    "ASFA (American Sports and Fitness Association)",
    "ISSA (International Sports Science Association)",
    "IFA (International Fitness Association)",
    "USA Weight Lifting",
    "Cross Fit Forging Elite Fitness",
    "NASM (National Academy of Sports Medicine)",
    "FFT (Future Fit Training)",
    "RSA (Repeated Sprint Ability Sports Council)"
  ];

  return (
    <section id="about" className="py-20 section-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Company Profile */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Company Profile
            </h2>
            <div className="text-lg text-light leading-relaxed space-y-4">
              <p>Our aim is to create a lifestyle in which the intervention of modern medicine is left to the most minimal level.</p>
              <p>There are cures for numerous health conditions and physical ailments that do not require a chronic dependency on medication.</p>
              <p className="text-primary font-medium">This can only be achieved by thoroughly educating the client and making sure they stick to a disciplined regime.</p>
            </div>
          </div>

          {/* Director Profile */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent text-center">
              Director Profile
            </h2>
            <div className="bg-primary/5 rounded-xl p-8 backdrop-blur">
              <p className="text-xl font-semibold text-primary mb-4">International Certified Kinesio Therapist and Optimal Health Care Professional</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                <div className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span>10+ Years of Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-primary">•</span>
                  <span>Transformed over 10,000+ clients Globally</span>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Services Offered
            </h2>
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              {["Physical", "Physiological", "Mental"].map((service) => (
                <div key={service} className="bg-primary/5 rounded-xl p-6 hover:bg-primary/10 transition-all duration-300">
                  <h3 className="text-xl font-semibold text-primary">{service}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Specialist Areas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent text-center">
              Specialist Areas
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {specialistAreas.map((area) => (
                <div key={area} className="bg-primary/5 rounded-lg p-4 hover:bg-primary/10 transition-all duration-300">
                  <p className="text-sm text-foreground/80">{area}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Physical Specialties */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent text-center">
              Physical Specialties
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {physicalSpecialties.map((specialty) => (
                <div key={specialty} className="bg-primary/5 rounded-lg p-4 hover:bg-primary/10 transition-all duration-300">
                  <p className="text-sm text-foreground/80">{specialty}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Physiological Conditions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent text-center">
              Common Physiological Conditions & Programs
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {physiologicalConditions.map((condition) => (
                <div key={condition} className="bg-primary/5 rounded-lg p-4 hover:bg-primary/10 transition-all duration-300">
                  <p className="text-sm text-foreground/80">{condition}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent text-center">
              Certifications Acquired
            </h2>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert} className="bg-primary/5 rounded-lg p-4 hover:bg-primary/10 transition-all duration-300">
                  <p className="text-sm text-foreground/80">{cert}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-xl font-bold text-primary mb-8">
              Ready to transform your life with expert guidance?
            </p>
            <Button className="btn-primary text-lg px-8 py-4">
              BOOK YOUR FREE CONSULTATION
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;