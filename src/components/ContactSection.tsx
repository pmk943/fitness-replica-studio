import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const locations = [
    {
      name: "Milton Keynes (Bletchley)",
      address: "Studio 1, Fitness Center, Bletchley MK2 3HE",
      phone: "01908 123456",
      status: "Open Now"
    },
    {
      name: "Towcester", 
      address: "Unit 5, Health Hub, Towcester NN12 6BH",
      phone: "01327 789012",
      status: "Open Now"
    },
    {
      name: "Newport Pagnell",
      address: "Coming September 2024",
      phone: "Opening Soon",
      status: "Coming Soon"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-light max-w-3xl mx-auto">
              Get in touch today to book your free consultation and start your fitness journey 
              with Armoury Coaching Studio
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
            <div className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)]">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Book Your Free Consultation
              </h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name*"
                    className="w-full p-4 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name*"
                    className="w-full p-4 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground"
                    required
                  />
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="w-full p-4 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground"
                  required
                />
                
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="w-full p-4 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground"
                  required
                />

                <select className="w-full p-4 bg-input border border-border rounded-lg text-foreground">
                  <option value="">Select Preferred Location*</option>
                  <option value="milton-keynes">Milton Keynes</option>
                  <option value="towcester">Towcester</option>
                  <option value="newport-pagnell">Newport Pagnell (Coming Soon)</option>
                </select>
                
                <textarea
                  placeholder="Tell us about your fitness goals..."
                  rows={4}
                  className="w-full p-4 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground resize-none"
                ></textarea>
                
                <Button type="submit" className="w-full btn-primary text-lg py-4">
                  BOOK MY FREE CONSULTATION
                </Button>
              </form>
            </div>

            {/* Locations */}
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-8">Our Locations</h3>
              
              <div className="space-y-6">
                {locations.map((location, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl shadow-[var(--shadow-card)]">
                    <div className="flex items-start justify-between mb-4">
                      <h4 className="text-xl font-bold text-card-foreground">{location.name}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        location.status === 'Open Now' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {location.status}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{location.address}</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{location.phone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Opening Hours */}
              <div className="bg-card p-6 rounded-xl shadow-[var(--shadow-card)] mt-6">
                <h4 className="text-xl font-bold text-card-foreground mb-4 flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  Opening Hours
                </h4>
                
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>6:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-card p-6 rounded-xl shadow-[var(--shadow-card)] mt-6">
                <h4 className="text-xl font-bold text-card-foreground mb-4">Get In Touch</h4>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">info@armourycoachingstudio.co.uk</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">01908 123456</span>
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

export default ContactSection;