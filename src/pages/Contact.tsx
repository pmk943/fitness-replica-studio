import Header from "@/components/Header";
import ContactForm from "./ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
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