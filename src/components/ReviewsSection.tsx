import { Star } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Sarah M.",
      text: "Amazing results in just 6 weeks! The team at Armoury made me feel comfortable from day one.",
      rating: 5,
      location: "Milton Keynes"
    },
    {
      name: "James L.",
      text: "Finally found a gym that doesn't intimidate me. Personal approach and great results!",
      rating: 5,
      location: "Towcester"
    },
    {
      name: "Emma T.",
      text: "Lost 2 stone and gained so much confidence. Best decision I ever made for my health.",
      rating: 5,
      location: "Milton Keynes"
    },
    {
      name: "Mike R.",
      text: "The nutrition advice actually works and fits around my busy lifestyle. Highly recommend!",
      rating: 5,
      location: "Towcester"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Over 100 ⭐️⭐️⭐️⭐️⭐️ reviews
          </h2>
          <p className="text-xl text-light">
            From our personal training clients in Milton Keynes and Towcester who 
            <span className="text-primary font-bold"> "never liked gyms"</span> (but love us)
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div key={index} className="bg-card p-6 rounded-xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-glow)] transition-all duration-300">
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-card-foreground mb-4 text-sm leading-relaxed">
                "{review.text}"
              </p>
              
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-card-foreground">{review.name}</p>
                <p className="text-sm text-muted-foreground">{review.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-primary font-bold text-lg mb-4">
            See what our clients are saying about their transformations
          </p>
          <button className="text-primary hover:text-accent underline">
            Read More Success Stories →
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;