import { Button } from "@/components/ui/button";
import { CheckCircle2, Clock, Users, Trophy } from "lucide-react";

const TransformationSection = () => {
  const features = [
    {
      icon: <Trophy className="w-8 h-8 text-primary" />,
      title: "Personalised Programme",
      description: "A programme designed around your current fitness levels and goals"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Lifestyle-Focused Diet",
      description: "A diet that fits around your lifestyle, not the other way around"
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Flexible Booking",
      description: "A flexible booking calendar that works around your busy life"
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-primary" />,
      title: "Weekly Support",
      description: "Weekly check ins and support to keep you on track"
    }
  ];

  return (
    <section className="py-20 section-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 lowercase">
              our six week transformation challenge
            </h2>
            
            <p className="text-xl text-light max-w-4xl mx-auto leading-relaxed">
              Our Six Week Transformation Challenge has been designed to change your relationship 
              with your health and fitness forever. A programme designed around your current fitness 
              levels and goal, a diet that fits around your lifestyle, a flexible booking calendar 
              that works around your busy life, and weekly check ins and support to keep you on track. 
              Here's exactly how it works:
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-card p-6 rounded-xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300 h-full">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Process Steps */}
          <div className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)] mb-12">
            <h3 className="text-2xl font-bold text-center text-card-foreground mb-8">
              How The Challenge Works
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="font-bold text-card-foreground mb-2">Free Consultation</h4>
                <p className="text-muted-foreground text-sm">
                  We discuss your goals, challenges, and create your personalized plan
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="font-bold text-card-foreground mb-2">6 Week Programme</h4>
                <p className="text-muted-foreground text-sm">
                  3 x 40 minute sessions per week in our private studio with expert coaching
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="font-bold text-card-foreground mb-2">Transform Forever</h4>
                <p className="text-muted-foreground text-sm">
                  Build sustainable habits that last a lifetime with ongoing support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationSection;