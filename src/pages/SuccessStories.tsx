import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Users, Trophy } from "lucide-react";
import { useState } from "react";
import ContactFormModal from "@/components/ContactFormModal";

const SuccessStories = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const stats = [
    { icon: <Users className="w-8 h-8 text-primary" />, number: "500+", label: "Lives Transformed" },
    { icon: <TrendingUp className="w-8 h-8 text-primary" />, number: "100%", label: "Success Rate" },
    { icon: <Trophy className="w-8 h-8 text-primary" />, number: "10.5", label: "Average Stone Lost" },
    { icon: <Star className="w-8 h-8 text-primary" />, number: "4.9/5", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-36 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-7xl mx-auto">
            <h1 className="text-hero text-primary mb-6">
              SUCCESS STORIES
            </h1>
            <p className="text-xl text-light mb-8">
              Real transformations from real people who "never liked gyms" but found their perfect fit with us
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-[var(--shadow-card)]">
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personal Journey Section */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent tracking-tight">
            My Transformation Journey
          </h2>
          <div className="max-w-7xl mx-auto mb-16">
            <div className="bg-primary/5 rounded-xl p-6 hover:bg-primary/10 transition-all duration-300">
              <div 
                className="aspect-[16/9] rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage("transform5.png")}
              >
                <img
                  src="transform5.png"
                  alt="My Personal Transformation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="mt-4 text-lg text-center text-foreground/80 font-medium">
                A testament to dedication and consistent effort
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-semibold mb-8 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent tracking-tight">
            Client Success Stories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {[
              "transform1.png",
              "transform2.png",
              "transform3.png",
              "transform4.png",
              "transform6.png",
              "transform7.png",
              "transform8.png",
              "transform9.png",
              "transform10.png"
            ].map((image, index) => (
              <div key={index} className="bg-primary/5 rounded-xl p-4 hover:bg-primary/10 transition-all duration-300">
                <div 
                  className="aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(`${image}`)}
                >
                  <img
                    src={`${image}`}
                    alt={`Client Transformation ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-light mb-8">
              Join hundreds of others who have transformed their relationship with health and fitness forever
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="btn-primary text-lg px-8 py-4"
                onClick={() => setIsContactModalOpen(true)}
              >
                START YOUR FREE CONSULTATION
              </Button>
            </div>

            <div className="mt-12 bg-card p-6 rounded-xl shadow-[var(--shadow-card)]">
              <div className="flex items-center justify-center space-x-4 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-card-foreground font-semibold mb-2">
                "Life-changing experience. Best investment I've ever made."
              </p>
              <p className="text-muted-foreground text-sm">
                - Recent client review from Google
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl mx-auto">
            <img
              src={selectedImage}
              alt="Selected transformation"
              className="max-h-[90vh] w-auto mx-auto rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-primary bg-black/50 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Contact Form Modal */}
      <ContactFormModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        title="Start Your Transformation Journey"
      />
    </div>
  );
};

export default SuccessStories;