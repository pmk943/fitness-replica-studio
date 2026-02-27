import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/fitness-hero.png";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    mode: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mobile validation
    const phone = formData.phone.trim();
    let valid = false;
    if (phone.startsWith('0')) {
      valid = phone.length === 11;
    } else if (phone.startsWith('+91')) {
      valid = phone.length === 13;
    } else {
      valid = phone.length === 10 && /^\d{10}$/.test(phone);
    }
    if (!valid) {
      alert('Please enter a valid mobile number.\nStarts with 0: 11 digits\nStarts with +91: 13 digits\nOtherwise: 10 digits');
      return;
    }
    // Build WhatsApp message
    let message = `Hey Azaraih,%0A`;
    message += `I am '${formData.name}' interested in '${formData.mode}' mode of coaching.%0A`;
    message += `Below are my contact details:%0A`;
    message += `mobile: ${formData.phone}%0A`;
    if (formData.email) {
      message += `email: ${formData.email}%0A`;
    }
    const whatsappUrl = `https://wa.me/6301949479?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <h1 className="text-hero text-accent mb-6">
              Internation qualified fitness coach
              <br />
              <span className="text-primary">Providing Online & Offline</span>
              <br />
              <span className="text-primary">Personal Training, Diet & Nutrition Guidance</span>
            </h1>
            
            <div className="mb-8">
              <p className="text-xl mb-4 text-light">
                Find the strongest version of yourself with our{' '}
                <span className="font-bold text-primary">Six Week Transformation Challenge</span>, perfect if:
              </p>
              
              <div className="space-y-3">
                {[
                  "You've struggled with staying consistent with exercise",
                  "Have started and stopped different diets and trends", 
                  "You don't love the idea of normal \"gyms\"",
                  "& have found yourself letting your health move down your list of priorities time and time again"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-light">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-xl text-light mb-2">
                Let us transform your relationship with health and fitness for life,{' '}
                <span className="font-bold text-primary">apply for your free consultation today</span>
              </p>
            </div>

            {/* <div className="text-primary font-bold text-lg">
              <p>LOCATIONS IN MILTON KEYNES (BLETCHLEY), TOWCESTER</p>
              <p>& COMING TO NEWPORT PAGNELL THIS SEPTEMBER</p>
            </div> */}
          </div>

          {/* Right Form */}
          {/* <div className="bg-card/95 backdrop-blur-sm p-8 rounded-2xl shadow-[var(--shadow-card)]">
            <div className="text-center mb-6">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg inline-block mb-4">
                ⬇️ ENTER YOUR DETAILS BELOW FOR YOUR FREE CONSULTATION ⬇️
              </div>
            </div>


            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Name*"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-input border-border"
                required
              />
              <Input
                placeholder="Phone*"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="bg-input border-border"
                required
              />
              <Input
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="bg-input border-border"
              />
              <Select onValueChange={(value) => setFormData({...formData, mode: value})}>
                <SelectTrigger className="bg-input border-border">
                  <SelectValue placeholder="Mode of Coaching*" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="online">Online</SelectItem>
                  <SelectItem value="offline">Offline</SelectItem>
                </SelectContent>
              </Select>

              <Button type="submit" className="w-full btn-primary text-lg py-6">
                APPLY FOR YOUR FREE CONSULTATION
              </Button>

              <div className="text-xs text-muted-foreground mt-4">
                <label className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" required />
                  <span>
                    I Understand The Azaraiah Coaching Studio can only work with a limited 
                    number of client transformations at one time and consent to receive 
                    communication to book in my consultation if space is available
                  </span>
                </label>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;