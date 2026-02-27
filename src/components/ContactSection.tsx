import ContactForm from "@/pages/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const locations = [
    {
      name: "Azzus Studio",
      address: "Municipal No. 4-3/298/309/502, Teja Enclave, 6th floor, Flat no. 502, Near friends colony ghmc park, Puppalguda, Manikonda, Pin Code: 500075",
      phone: "+91 6301949479",
      status: "Open Now"
    },
    // {
    //   name: "Towcester", 
    //   address: "Unit 5, Health Hub, Towcester NN12 6BH",
    //   phone: "01327 789012",
    //   status: "Open Now"
    // },
    {
      name: "Azzu Elite fitness studio",
      address: "Jubilee hills, Hyderabad, Telangana, India",
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
              with Azaraiah Coaching Studio
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Form */}
           <ContactForm />

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
                    <span className="text-muted-foreground">azaraiahkollurisamson@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <span className="text-muted-foreground">+91 6301-949479</span>
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