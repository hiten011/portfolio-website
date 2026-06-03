import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Github, Linkedin, Code2, Send } from "lucide-react";
import { personalInfo, socialLinks } from "@/constants/data";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  code: Code2,
};

const contactItems = [
  { icon: Mail, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}`, testId: "link-email" },
  { icon: Phone, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}`, testId: "link-phone" },
  { icon: MapPin, label: "Location", value: personalInfo.location, href: undefined, testId: "text-location" },
];

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      "service_upf8y7o",
      "template_l6mvebm",
      { name: formData.name, email: formData.email, message: formData.message, time: new Date().toLocaleString() },
      "wY8zpx2w5xcbe_2n0"
    )
    .then(() => {
      toast({ title: "Message sent!", description: "I'll get back to you soon." });
      setFormData({ name: "", email: "", message: "" });
    })
    .catch(() => {
      toast({ title: "Error", description: "Failed to send. Please try again.", variant: "destructive" });
    })
    .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >

          {/* Header */}
          <div className="mb-14">
            <div className="flex items-center gap-2 mb-5">
              <span className="font-mono text-xs text-primary">04</span>
              <span className="h-px w-6 bg-primary/50" />
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Contact</span>
            </div>
            <h1
              className="font-display text-4xl md:text-6xl font-extrabold text-foreground tracking-tight leading-none mb-4"
              data-testid="text-page-title"
            >
              Get<br />
              <span className="text-primary">In Touch</span>
            </h1>
            <p className="text-muted-foreground text-base max-w-xl leading-relaxed">
              Open to new opportunities, collaborations, or just a good conversation about software.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="rounded-lg border border-border bg-card overflow-hidden">
                <div className="px-6 py-4 border-b border-border/60 bg-muted/20 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-border" />
                    <span className="w-2.5 h-2.5 rounded-full bg-border" />
                    <span className="w-2.5 h-2.5 rounded-full bg-primary/60" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground ml-2">message.send()</span>
                </div>

                <form onSubmit={handleSubmit} className="px-6 py-6 space-y-5">
                  <div>
                    <label htmlFor="name" className="block font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">
                      Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      required
                      data-testid="input-name"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">
                      Email <span className="text-primary">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      data-testid="input-email"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors duration-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={5}
                      required
                      data-testid="input-message"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-colors duration-200 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    data-testid="button-submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 disabled:opacity-60 transition-opacity duration-200 cursor-pointer"
                  >
                    {loading ? (
                      <span className="font-mono">Sending...</span>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Sidebar info */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-2 space-y-5"
            >
              {/* Contact details */}
              <div className="rounded-lg border border-border bg-card px-6 py-5">
                <p className="font-mono text-xs text-primary mb-4 uppercase tracking-widest">Contact Info</p>
                <div className="space-y-4">
                  {contactItems.map(({ icon: Icon, label, value, href, testId }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="p-1.5 rounded-md bg-accent mt-0.5">
                        <Icon className="h-3.5 w-3.5 text-primary" />
                      </div>
                      <div>
                        <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest">{label}</p>
                        {href ? (
                          <a
                            href={href}
                            data-testid={testId}
                            className="text-sm text-foreground hover:text-primary transition-colors duration-200"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-sm text-foreground" data-testid={testId}>{value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="rounded-lg border border-border bg-card px-6 py-5">
                <p className="font-mono text-xs text-primary mb-4 uppercase tracking-widest">Find Me On</p>
                <div className="space-y-2">
                  {socialLinks.map((link) => {
                    const Icon = iconMap[link.icon as keyof typeof iconMap];
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-social-${link.name.toLowerCase()}`}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-accent hover:text-primary text-muted-foreground transition-all duration-200 group"
                      >
                        <Icon className="h-4 w-4 group-hover:text-primary transition-colors" />
                        <span className="text-sm font-medium text-foreground">{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
