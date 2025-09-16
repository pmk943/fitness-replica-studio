import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Check, Users, User, Clock, Target, TrendingUp, Heart } from "lucide-react";

const Programmes = () => {
  const programmes = [
    {
      id: "transformation",
      name: "Six Week Transformation Challenge",
      tagline: "Perfect for beginners and returners",
      price: "£497",
      duration: "6 Weeks",
      sessions: "18 Sessions",
      groupSize: "Up to 4 people",
      icon: <Target className="w-8 h-8 text-primary" />,
      description: "Our signature programme designed to kickstart your fitness journey with sustainable results.",
      features: [
        "3 x 40-minute sessions per week",
        "Personalised nutrition guidance", 
        "Weekly progress check-ins",
        "Private studio environment",
        "Flexible booking system",
        "Ongoing WhatsApp support",
        "Goal setting and accountability",
        "Exercise technique coaching"
      ],
      benefits: [
        "Average 1-2 stone weight loss",
        "Improved energy levels",
        "Better sleep quality",
        "Increased confidence",
        "Sustainable habits formed"
      ],
      bestFor: [
        "Complete beginners to exercise",
        "People returning after a break",
        "Those who've struggled with consistency",
        "Anyone intimidated by regular gyms"
      ]
    },
    {
      id: "small-group",
      name: "Small Group Personal Training",
      tagline: "Ongoing support with community",
      price: "From £39",
      duration: "Per Session",
      sessions: "Flexible booking",
      groupSize: "2-4 people",
      icon: <Users className="w-8 h-8 text-primary" />,
      description: "Continue your journey with like-minded people in our supportive small group environment.",
      features: [
        "Maximum 4 people per session",
        "Personalised programmes within group",
        "40-minute focused sessions",
        "Qualified personal trainers",
        "Variety of training styles",
        "Progression tracking",
        "Nutritional support available",
        "Community motivation"
      ],
      benefits: [
        "Cost-effective personal training",
        "Motivation from group dynamic",
        "Continued professional guidance",
        "Variety to prevent boredom",
        "Social fitness community"
      ],
      bestFor: [
        "Post-transformation challenge clients",
        "Those wanting ongoing support",
        "People who enjoy group motivation",
        "Budget-conscious individuals"
      ]
    },
    {
      id: "one-on-one",
      name: "1:1 Personal Training",
      tagline: "Complete personalisation and privacy",
      price: "From £75",
      duration: "Per Session", 
      sessions: "Flexible booking",
      groupSize: "Private sessions",
      icon: <User className="w-8 h-8 text-primary" />,
      description: "Completely bespoke training with full trainer attention for specific goals or preferences.",
      features: [
        "100% personalised programme",
        "Full trainer attention",
        "Private studio environment",
        "Flexible session lengths",
        "Advanced programming options",
        "Injury rehabilitation focus",
        "Sport-specific training",
        "Detailed progress tracking"
      ],
      benefits: [
        "Fastest possible results",
        "Complete programme customisation",
        "Privacy and comfort",
        "Specific goal achievement",
        "Premium service experience"
      ],
      bestFor: [
        "Specific sport or goal focus",
        "Those preferring complete privacy",
        "Injury rehabilitation needs",
        "Advanced fitness levels"
      ]
    }
  ];

  const comparison = [
    { feature: "Session Duration", transformation: "40 minutes", smallGroup: "40 minutes", oneOnOne: "40-60 minutes" },
    { feature: "Group Size", transformation: "Up to 4", smallGroup: "2-4 people", oneOnOne: "Just you" },
    { feature: "Personalisation", transformation: "High", smallGroup: "High", oneOnOne: "Maximum" },
    { feature: "Nutrition Support", transformation: "✓", smallGroup: "Available", oneOnOne: "✓" },
    { feature: "Progress Tracking", transformation: "Weekly", smallGroup: "Ongoing", oneOnOne: "Detailed" },
    { feature: "Flexibility", transformation: "Flexible", smallGroup: "Very Flexible", oneOnOne: "Maximum" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-hero text-primary mb-6">
              OUR PROGRAMMES
            </h1>
            <p className="text-xl text-light mb-8">
              Choose the perfect programme for your fitness journey. All designed around your busy life, 
              not the other way around.
            </p>
            
            <div className="bg-card p-6 rounded-xl shadow-[var(--shadow-card)] inline-block">
              <p className="text-card-foreground font-semibold mb-2">
                🎯 All programmes include:
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <span>• Private Studio Environment</span>
                <span>• Qualified Personal Trainers</span>
                <span>• Flexible Booking</span>
                <span>• Progress Tracking</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Cards */}
      <section className="py-16 section-dark">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {programmes.map((programme, index) => (
              <div key={programme.id} className={`bg-card rounded-2xl shadow-[var(--shadow-card)] overflow-hidden ${index === 0 ? 'ring-2 ring-primary' : ''}`}>
                {index === 0 && (
                  <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold">
                    MOST POPULAR
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    {programme.icon}
                    <h3 className="text-2xl font-bold text-card-foreground mt-4 mb-2">
                      {programme.name}
                    </h3>
                    <p className="text-primary font-semibold">{programme.tagline}</p>
                  </div>

                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold text-primary mb-2">{programme.price}</div>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div>{programme.duration}</div>
                      <div>{programme.sessions}</div>
                      <div>{programme.groupSize}</div>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-center mb-6">
                    {programme.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-card-foreground mb-3">What's Included:</h4>
                      <div className="space-y-2">
                        {programme.features.map((feature, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-card-foreground mb-3">Expected Benefits:</h4>
                      <div className="space-y-2">
                        {programme.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <TrendingUp className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-card-foreground mb-3">Perfect For:</h4>
                      <div className="space-y-2">
                        {programme.bestFor.map((item, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <Heart className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">
                    <Button className="w-full btn-primary">
                      BOOK FREE CONSULTATION
                    </Button>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      LEARN MORE
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Programme Comparison
            </h2>

            <div className="bg-card rounded-2xl shadow-[var(--shadow-card)] overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-primary">
                    <tr>
                      <th className="text-left p-4 text-primary-foreground font-semibold">Features</th>
                      <th className="text-center p-4 text-primary-foreground font-semibold">Transformation</th>
                      <th className="text-center p-4 text-primary-foreground font-semibold">Small Group</th>
                      <th className="text-center p-4 text-primary-foreground font-semibold">1:1 Training</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row, index) => (
                      <tr key={index} className={`border-b border-border ${index % 2 === 0 ? 'bg-muted/5' : ''}`}>
                        <td className="p-4 font-medium text-card-foreground">{row.feature}</td>
                        <td className="p-4 text-center text-muted-foreground">{row.transformation}</td>
                        <td className="p-4 text-center text-muted-foreground">{row.smallGroup}</td>
                        <td className="p-4 text-center text-muted-foreground">{row.oneOnOne}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Not sure which programme is right for you?
              </p>
              <Button className="btn-primary">
                BOOK A FREE CONSULTATION
              </Button>
              <p className="text-sm text-muted-foreground mt-2">
                We'll help you choose the perfect programme for your goals and lifestyle
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 section-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              How To Get Started
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Free Consultation</h3>
                <p className="text-muted-foreground">
                  Book a no-obligation chat to discuss your goals and see our facilities
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Choose Programme</h3>
                <p className="text-muted-foreground">
                  We'll recommend the best programme based on your goals and preferences
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Start Transforming</h3>
                <p className="text-muted-foreground">
                  Begin your journey with expert guidance and support every step of the way
                </p>
              </div>
            </div>

            <div className="mt-12 bg-card p-8 rounded-2xl shadow-[var(--shadow-card)]">
              <h3 className="text-2xl font-bold text-card-foreground mb-4">
                Ready to Transform Your Health?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join hundreds of others who have already transformed their relationship with fitness
              </p>
              <Button className="btn-primary text-lg px-8 py-4">
                BOOK YOUR FREE CONSULTATION TODAY
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programmes;