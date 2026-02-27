import { useState } from "react";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    mode: "",
    interest: "",
    message: "",
    consent: false,
    updates: false,
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
    if (formData.interest) {
      message += `Interest: ${formData.interest}%0A`;
    }
    if (formData.message) {
      message += `Message: ${formData.message}%0A`;
    }
    const whatsappUrl = `https://wa.me/6301949479?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name*"
        className="w-full p-4 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
        required
        value={formData.name}
        onChange={e => setFormData({ ...formData, name: e.target.value })}
      />
      <input
        type="tel"
        placeholder="Phone Number*"
        className="w-full p-4 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
        required
        value={formData.phone}
        onChange={e => setFormData({ ...formData, phone: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-4 bg-input border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
        value={formData.email}
        onChange={e => setFormData({ ...formData, email: e.target.value })}
      />
      <select
        className="w-full p-4 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
        required
        value={formData.mode}
        onChange={e => setFormData({ ...formData, mode: e.target.value })}
      >
        <option value="">Mode of Coaching*</option>
        <option value="Online">Online</option>
        <option value="Offline">Offline</option>
      </select>
      <select
        className="w-full p-4 bg-input border border-border rounded-lg text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
        value={formData.interest}
        onChange={e => setFormData({ ...formData, interest: e.target.value })}
      >
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
        value={formData.message}
        onChange={e => setFormData({ ...formData, message: e.target.value })}
      ></textarea>
      <div className="space-y-4">
        <label className="flex items-start space-x-3">
          <input type="checkbox" className="mt-1 text-primary" required checked={formData.consent} onChange={e => setFormData({ ...formData, consent: e.target.checked })} />
          <span className="text-sm text-muted-foreground">
            I understand that Azaraiah Coaching Studio can only work with a limited number of client transformations at one time and consent to receive communication to book in my consultation if space is available.*
          </span>
        </label>
        <label className="flex items-start space-x-3">
          <input type="checkbox" className="mt-1 text-primary" checked={formData.updates} onChange={e => setFormData({ ...formData, updates: e.target.checked })} />
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
  );
};

export default ContactForm;