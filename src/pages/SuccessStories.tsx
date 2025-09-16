import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Star, TrendingUp, Users, Trophy } from "lucide-react";

const SuccessStories = () => {
  const successStories = [
    {
      name: "Sarah Matthews",
      age: 34,
      location: "Milton Keynes",
      before: "Size 16, Low Energy",
      after: "Size 12, Marathon Runner",
      timeframe: "6 months",
      story: "I'd tried every diet and gym membership going, but nothing stuck. The team at Armoury made fitness feel achievable. In 6 months, I went from struggling to climb stairs to completing my first marathon. The support and personalised approach changed everything.",
      results: ["Lost 2.5 stone", "Completed first marathon", "Gained confidence", "Better sleep quality"],
      image: "👩‍💼"
    },
    {
      name: "James Robertson",
      age: 42,
      location: "Towcester", 
      before: "Overweight, Back Pain",
      after: "Strongest I've Ever Been",
      timeframe: "4 months",
      story: "As a busy dad working long hours, I thought I'd never find time for fitness. The flexible scheduling and 40-minute sessions fit perfectly around my life. My back pain is gone, I have more energy for my kids, and I feel 10 years younger.",
      results: ["Lost 3 stone", "No more back pain", "Increased strength by 150%", "Better work-life balance"],
      image: "👨‍💼"
    },
    {
      name: "Emma Thompson",
      age: 28,
      location: "Milton Keynes",
      before: "Post-Pregnancy Struggles",
      after: "Fittest Mum on the Block",
      timeframe: "8 months",
      story: "After having my second child, I felt like I'd lost myself. The judgment-free environment at Armoury was exactly what I needed. They understood the challenges of being a new mum and created a plan that worked around my unpredictable schedule.",
      results: ["Lost all baby weight + more", "Regained core strength", "Improved mental health", "Set positive example for kids"],
      image: "👩‍⚕️"
    },
    {
      name: "Michael Chen",
      age: 55,
      location: "Towcester",
      before: "Sedentary Lifestyle",
      after: "Active Grandfather", 
      timeframe: "12 months",
      story: "I thought it was too late to start at 55, but I was wrong. The team never made me feel embarrassed about my fitness level. Now I can keep up with my grandchildren and have energy I haven't had in decades. It's never too late to start.",
      results: ["Improved cardiovascular health", "Increased mobility", "Lost 2 stone", "Medication reduced"],
      image: "👨‍🦳"
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-primary" />, number: "500+", label: "Lives Transformed" },
    { icon: <TrendingUp className="w-8 h-8 text-primary" />, number: "95%", label: "Success Rate" },
    { icon: <Trophy className="w-8 h-8 text-primary" />, number: "2.5", label: "Average Stone Lost" },
    { icon: <Star className="w-8 h-8 text-primary" />, number: "4.9/5", label: "Average Rating" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
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

      {/* Success Stories */}
      <section className="py-12 section-dark">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {successStories.map((story, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Story Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)]">
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4">{story.image}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-card-foreground">{story.name}</h3>
                        <p className="text-muted-foreground">Age {story.age} • {story.location}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-destructive/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-destructive mb-1">Before</h4>
                        <p className="text-sm text-muted-foreground">{story.before}</p>
                      </div>
                      <div className="bg-primary/10 p-4 rounded-lg">
                        <h4 className="font-semibold text-primary mb-1">After ({story.timeframe})</h4>
                        <p className="text-sm text-muted-foreground">{story.after}</p>
                      </div>
                    </div>

                    <blockquote className="text-card-foreground italic mb-6 text-lg leading-relaxed">
                      "{story.story}"
                    </blockquote>

                    <div>
                      <h4 className="font-semibold text-primary mb-3">Key Results:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {story.results.map((result, i) => (
                          <div key={i} className="flex items-center space-x-2">
                            <Star className="w-4 h-4 text-primary fill-primary" />
                            <span className="text-sm text-muted-foreground">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Before/After Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="bg-card p-8 rounded-2xl shadow-[var(--shadow-card)] text-center">
                    <h4 className="text-xl font-bold text-card-foreground mb-6">
                      {story.name}'s Transformation
                    </h4>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-muted p-6 rounded-lg">
                        <div className="text-6xl mb-4">📉</div>
                        <h5 className="font-semibold text-muted-foreground mb-2">BEFORE</h5>
                        <p className="text-sm text-muted-foreground">{story.before}</p>
                      </div>
                      <div className="bg-primary/10 p-6 rounded-lg">
                        <div className="text-6xl mb-4">📈</div>
                        <h5 className="font-semibold text-primary mb-2">AFTER</h5>
                        <p className="text-sm text-muted-foreground">{story.after}</p>
                      </div>
                    </div>

                    <div className="text-center">
                      <span className="inline-block bg-accent/20 text-primary px-4 py-2 rounded-full text-sm font-semibold">
                        Transformation Time: {story.timeframe}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
              <Button className="btn-primary text-lg px-8 py-4">
                START YOUR FREE CONSULTATION
              </Button>
              <Button variant="outline" className="text-lg px-8 py-4 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                LEARN ABOUT OUR PROGRAMMES
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
    </div>
  );
};

export default SuccessStories;