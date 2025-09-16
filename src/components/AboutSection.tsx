import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 section-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            LET'S GET CONSISTENT WITH YOUR HEALTH
          </h2>
          
          <p className="text-xl text-primary font-bold mb-8">
            We specialise in helping people that want to be fitter, stronger and more confident 
            in their health and bodies - but struggle with consistency
          </p>

          <div className="text-light text-lg leading-relaxed space-y-6 mb-12">
            <p>
              Whether that's because career takes over, family obligations and kid clubs crowd 
              the calendar, or you feel lost any time you do make and effort to change
            </p>

            <p>
              We're <span className="text-primary font-bold">the "gym" for people that don't love gyms</span>. 
              The people that don't want to slide themselves into lycra and pose in front of a mirror, 
              or eat chicken and broccoli for every meal
            </p>

            <p>
              For over 6 years we've been helping our amazing clients to take tick off their fitness needs 
              with just <span className="text-primary font-bold">3 x 40 minute training sessions a week</span> in 
              our private studios. With diet advice that treats you as a human rather than a robot 
              (so foods you love are still on the menu). And with the support of our full coaching team 
              and community behind you
            </p>
          </div>

          <div className="text-center">
            <p className="text-xl font-bold text-primary mb-8">
              Apply for a zero obligation chat today to see how we can help transform your 
              relationship with your health and fitness, forever.
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