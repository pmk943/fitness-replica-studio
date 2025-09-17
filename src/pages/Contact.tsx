import Header from "@/components/Header";
import ContactForm from "./ContactForm";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  const locations = [
    {
      name: "Milton Keynes Studio",
      subtitle: "Bletchley Location",
      address: "Unit 12, Fitness Quarter, Bletchley, Milton Keynes MK2 3HE",
      phone: "01908 123456",
      email: "mk@Azaraiahcoachingstudio.co.uk",
      status: "Open Now",
      description: "Our flagship studio featuring state-of-the-art equipment and private training rooms.",
      features: ["Private Training Rooms", "Changing Facilities", "Free Parking", "Accessibility Access"]
    },
    {
      name: "Towcester Studio", 
      subtitle: "Northamptonshire Location",
      address: "The Health Hub, Unit 5, Towcester Park, Towcester NN12 6BH",
      phone: "01327 789012",
      email: "towcester@Azaraiahcoachingstudio.co.uk",
      status: "Open Now",
      description: "Intimate studio space perfect for focused personal training sessions.",
      features: ["Boutique Setting", "Premium Equipment", "On-site Parking", "Quiet Environment"]
    },
    {
      name: "Newport Pagnell Studio",
      subtitle: "Coming September 2024",
      address: "Location details to be confirmed",
      phone: "Opening Soon",
      email: "info@Azaraiahcoachingstudio.co.uk",
      status: "Coming Soon",
      description: "Our newest location expanding our reach to serve more clients.",
      features: ["Modern Facilities", "Latest Equipment", "Convenient Location", "Easy Access"]
    }
  ];

  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6 text-primary" />,
      title: "Call Us",
      description: "Speak directly with our team",
      action: "+91 6301949479",
      subtitle: "Mon-Fri: 6AM-9PM, Weekends: 7AM-6PM"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Us", 
      description: "Get in touch via email",
      action: "azaraiahkollurisamson@gmail.com",
      actionHref: "mailto:azaraiahkollurisamson@gmail.com",
      subtitle: "We respond within 24 hours"
    },
    {
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6 mx-auto" />,
      title: "WhatsApp",
      description: "Quick questions and booking",
      action: "Message us on WhatsApp",
      actionHref:'https://wa.me/6301949479?text=Hi%20I%20would%20like%20to%20know%20more%20about%20your%20fitness%20programs',
      subtitle: "Fastest response time"
    },
    {
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" className="w-6 h-6 mx-auto" />,
      title: "Instagram",
      description: "Follow us for updates & tips",
      action: "@azzu_coach",
      actionHref: "https://www.instagram.com/azzu_coach?igsh=ZTYyMWE4bmEyZHdr",
      subtitle: "See our latest posts"
    },
    {
      icon: <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook" className="w-6 h-6 mx-auto" />,
      title: "Facebook",
      description: "Connect with us on Facebook",
      action: "Azaraiahz",
      actionHref: "https://www.facebook.com/Azaraiahz/",
      subtitle: "Send a message or follow us"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-hero text-primary mb-6">
              GET IN TOUCH
            </h1>
            <p className="text-xl text-light mb-8">
              Ready to transform your health and fitness? We're here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 section-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              How Would You Like to Connect?
            </h2>
            <p className="text-light">Choose the method that works best for you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 text-center group cursor-pointer">
                <div className="flex justify-center mb-4">
                  {method.icon}
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">
                  {method.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {method.description}
                </p>
                <a href={method.actionHref} target="_blank" rel="noopener noreferrer" className="font-semibold text-primary group-hover:text-accent transition-colors">
                  {method.action}
                </a>
                <p className="text-xs text-muted-foreground mt-2">
                  {method.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Book Your Free Consultation
              </h2>
              
              <div className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)]">
                <ContactForm />
              </div>
            </div>

            {/* Quick Info */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-8">
                Visit Our Studios
              </h2>

              <div className="space-y-6">
                {locations.map((location, index) => (
                  <div key={index} className="bg-card p-6 rounded-xl shadow-[var(--shadow-card)]">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-card-foreground">{location.name}</h3>
                        <p className="text-sm text-primary font-semibold">{location.subtitle}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        location.status === 'Open Now' 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}>
                        {location.status}
                      </span>
                    </div>
                    
                    <p className="text-muted-foreground text-sm mb-4">{location.description}</p>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground text-sm">{location.address}</span>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{location.phone}</span>
                      </div>

                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{location.email}</span>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-card-foreground mb-2">Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {location.features.map((feature, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-xs text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Opening Hours */}
              <div className="bg-card p-6 rounded-xl shadow-[var(--shadow-card)] mt-6">
                <h3 className="text-xl font-bold text-card-foreground mb-4 flex items-center">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  Opening Hours
                </h3>
                
                <div className="space-y-3 text-muted-foreground">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>6:00 AM - 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Saturday:</span>
                    <span>7:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Sunday:</span>
                    <span>8:00 AM - 4:00 PM</span>
                  </div>
                  <div className="text-xs text-primary mt-4">
                    *Bank holiday hours may vary. Call to confirm.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {[
                {
                  q: "What happens during a free consultation?",
                  a: "We'll discuss your goals, assess your current fitness level, understand your lifestyle constraints, and explain how our programmes can help you succeed."
                },
                {
                  q: "Do I need to be fit to start?",
                  a: "Absolutely not! We specialise in helping people who struggle with consistency or feel intimidated by traditional gyms. We meet you where you are."
                },
                {
                  q: "How long are the sessions?",
                  a: "Our sessions are 40 minutes long - perfect for busy schedules while still being effective for real results."
                },
                {
                  q: "What if I can't make my scheduled session?",
                  a: "We offer flexible rebooking with 24-hour notice. Life happens, and we work around it."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-[var(--shadow-card)]">
                  <h3 className="text-lg font-semibold text-card-foreground mb-3">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;