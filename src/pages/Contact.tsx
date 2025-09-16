import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, MessageCircle, Calendar } from "lucide-react";

const Contact = () => {
  const locations = [
    {
      name: "Milton Keynes Studio",
      subtitle: "Bletchley Location",
      address: "Unit 12, Fitness Quarter, Bletchley, Milton Keynes MK2 3HE",
      phone: "01908 123456",
      email: "mk@armourycoachingstudio.co.uk",
      status: "Open Now",
      description: "Our flagship studio featuring state-of-the-art equipment and private training rooms.",
      features: ["Private Training Rooms", "Changing Facilities", "Free Parking", "Accessibility Access"]
    },
    {
      name: "Towcester Studio", 
      subtitle: "Northamptonshire Location",
      address: "The Health Hub, Unit 5, Towcester Park, Towcester NN12 6BH",
      phone: "01327 789012",
      email: "towcester@armourycoachingstudio.co.uk",
      status: "Open Now",
      description: "Intimate studio space perfect for focused personal training sessions.",
      features: ["Boutique Setting", "Premium Equipment", "On-site Parking", "Quiet Environment"]
    },
    {
      name: "Newport Pagnell Studio",
      subtitle: "Coming September 2024",
      address: "Location details to be confirmed",
      phone: "Opening Soon",
      email: "info@armourycoachingstudio.co.uk",
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
      action: "01908 123456",
      subtitle: "Mon-Fri: 6AM-9PM, Weekends: 7AM-6PM"
    },
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "Email Us", 
      description: "Get in touch via email",
      action: "info@armourycoachingstudio.co.uk",
      subtitle: "We respond within 24 hours"
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-primary" />,
      title: "WhatsApp",
      description: "Quick questions and booking",
      action: "Message us on WhatsApp",
      subtitle: "Fastest response time"
    },
    {
      icon: <Calendar className="w-6 h-6 text-primary" />,
      title: "Book Online",
      description: "Schedule your consultation",
      action: "Book Free Consultation",
      subtitle: "Available slots shown in real-time"
    }
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
                <div className="font-semibold text-primary group-hover:text-accent transition-colors">
                  {method.action}
                </div>
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
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name*"
                      className="w-full p-4 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last Name*"
                      className="w-full p-4 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <input
                    type="email"
                    placeholder="Email Address*"
                    className="w-full p-4 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                  
                  <input
                    type="tel"
                    placeholder="Phone Number*"
                    className="w-full p-4 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />

                  <select className="w-full p-4 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">Select Preferred Location*</option>
                    <option value="milton-keynes">Milton Keynes (Bletchley)</option>
                    <option value="towcester">Towcester</option>
                    <option value="newport-pagnell">Newport Pagnell (Coming Soon)</option>
                  </select>

                  <select className="w-full p-4 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent">
                    <option value="">What are you most interested in?</option>
                    <option value="transformation">6 Week Transformation Challenge</option>
                    <option value="1on1">1:1 Personal Training</option>
                    <option value="small-group">Small Group Training</option>
                    <option value="nutrition">Nutrition Coaching</option>
                  </select>
                  
                  <textarea
                    placeholder="Tell us about your fitness goals and any questions you have..."
                    rows={4}
                    className="w-full p-4 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground resize-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>

                  <div className="space-y-4">
                    <label className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1 text-primary" required />
                      <span className="text-sm text-muted-foreground">
                        I understand that Armoury Coaching Studio can only work with a limited number of client transformations at one time and consent to receive communication to book in my consultation if space is available.*
                      </span>
                    </label>

                    <label className="flex items-start space-x-3">
                      <input type="checkbox" className="mt-1 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        I would like to receive occasional updates about new programmes, success stories, and health tips via email.
                      </span>
                    </label>
                  </div>
                  
                  <Button type="submit" className="w-full btn-primary text-lg py-4">
                    BOOK MY FREE CONSULTATION
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    No obligation • Free consultation • Professional advice
                  </p>
                </form>
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