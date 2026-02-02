import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, CheckCircle } from "lucide-react";

const offices = [
  {
    name: "Northern Beaches",
    phone: "+61 2 9916 9600",
    email: "sydneyoffice@gairlegal.com.au",
    address: "Dee Why, NSW",
  },
  {
    name: "Chatswood",
    phone: "+61 2 9916 9675",
    email: "chatswoodoffice@gairlegal.com.au",
    address: "Chatswood, NSW",
  },
  {
    name: "Newcastle",
    phone: "+61 2 9916 9650",
    email: "newcastleoffice@gairlegal.com.au",
    address: "Newcastle, NSW",
  },
  {
    name: "Melbourne",
    phone: "+61 3 8637 9950",
    email: "melbourneoffice@gairlegal.com.au",
    address: "Melbourne, VIC",
  },
];

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organisation: "",
    message: "",
    honeypot: "", // Spam protection
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check
    if (formData.honeypot) {
      return;
    }
    
    // Simulate form submission
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      {/* Page Header */}
      <section className="page-header">
        <div className="container-narrow text-center relative z-10">
          <p className="text-gold text-sm uppercase tracking-widest mb-3 font-medium">
            Get in Touch
          </p>
          <h1 className="text-primary-foreground mb-6">
            Contact Us
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">
            Ready to discuss your legal needs? Our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="card-premium p-8 md:p-10">
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Send Us a Message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Message Sent Successfully
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for contacting us. A member of our team will be in 
                      touch with you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Honeypot field - hidden from users */}
                    <input
                      type="text"
                      name="honeypot"
                      value={formData.honeypot}
                      onChange={handleChange}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+61 XXX XXX XXX"
                          className="h-12"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="organisation">Organisation</Label>
                        <Input
                          id="organisation"
                          name="organisation"
                          type="text"
                          value={formData.organisation}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="h-12"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="How can we help you?"
                        rows={6}
                      />
                    </div>

                    <Button type="submit" variant="gold" size="xl" className="w-full">
                      Send Message
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our Privacy Policy. 
                      We'll never share your information with third parties.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">
                  Our Offices
                </h3>
                <div className="space-y-6">
                  {offices.map((office) => (
                    <div key={office.name} className="card-premium p-5">
                      <h4 className="font-semibold text-foreground mb-3">
                        {office.name}
                      </h4>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gold" />
                          {office.address}
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-gold" />
                          <a 
                            href={`tel:${office.phone.replace(/\s/g, '')}`}
                            className="hover:text-gold transition-colors"
                          >
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail className="w-4 h-4 text-gold" />
                          <a 
                            href={`mailto:${office.email}`}
                            className="hover:text-gold transition-colors text-xs"
                          >
                            {office.email}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card-premium p-6 bg-navy text-primary-foreground">
                <h3 className="text-lg font-semibold mb-2">
                  Need Urgent Assistance?
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  For urgent matters, please contact our Northern Beaches 
                  office directly.
                </p>
                <a 
                  href="tel:+61299169600"
                  className="flex items-center gap-2 text-gold font-medium"
                >
                  <Phone className="w-4 h-4" />
                  +61 2 9916 9600
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
