import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Facebook,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({}); // New state for validation errors
  const { toast } = useToast();

  // Function to validate form data
  const validateForm = (data) => {
    let newErrors = {};

    if (!data.name || data.name.trim() === "") {
      newErrors.name = "Name is required.";
    } else if (data.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    if (!data.email || data.email.trim() === "") {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.email.trim())) { // Basic regex for email format
      newErrors.email = "Invalid email address format.";
    }

    if (!data.message || data.message.trim() === "") {
      newErrors.message = "Message is required.";
    } else if (data.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    } else if (data.message.trim().length > 1000) {
      newErrors.message = "Message cannot exceed 1000 characters.";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({}); // Clear previous errors on new submission attempt

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    // --- Frontend Validation Check ---
    const formValidationErrors = validateForm(data);
    if (Object.keys(formValidationErrors).length > 0) {
      setErrors(formValidationErrors);
      setIsSubmitting(false); // Stop submission if there are validation errors
      toast({
        title: "Validation Error",
        description: "Please correct the highlighted fields.",
        variant: "destructive",
      });
      return; // Exit the function early
    }
    // --- End Frontend Validation Check ---

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
          variant: "success",
        });
        e.target.reset(); // clear form
      } else {
        // If backend sends specific errors (e.g., from express-validator)
        const errorData = await res.json();
        if (errorData && errorData.errors) {
          // Map backend errors to frontend error state for display
          const backendErrors = {};
          errorData.errors.forEach(err => {
            backendErrors[err.path] = err.msg; // Assumes express-validator format { msg, path }
          });
          setErrors(backendErrors);
          toast({
            title: "Submission Error",
            description: "Please correct the highlighted fields and try again.",
            variant: "destructive",
          });
        } else {
          throw new Error(errorData.error || 'Failed to send message.');
        }
      }
    } catch (err) {
      console.error("Fetch error:", err); // Log the actual error for debugging
      toast({
        title: "Error",
        description: err.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden px-4 py-24">
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-8 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
      </div>

      <div className="container mx-auto">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
            Contact
          </span>
          <h2 className="mt-5 text-3xl font-bold leading-tight md:text-5xl">
            Let&apos;s Build Something <span className="text-primary">Together</span>
          </h2>
          <p className="mt-4 text-base text-white/80 md:text-lg">
            Have a project in mind or want to collaborate? I&apos;m always open
            to discussing new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.4fr]">

          {/* Left — contact info */}
          <div className="flex flex-col gap-5">
            {/* Info cards */}
            {[
              { icon: Mail, label: "Email", value: "darrinholtz@gmail.com", href: "mailto:darrinholtz@gmail.com" },
              { icon: Phone, label: "Phone", value: "(716) 461-3129", href: "tel:+17164613129" },
              { icon: MapPin, label: "Location", value: "Newfane, N.Y. — United States", href: null },
            ].map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-center gap-4 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 backdrop-blur-md transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.09]">
                <div className="rounded-xl border border-white/20 bg-black/25 p-3 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] uppercase tracking-widest text-white/50 font-semibold">{label}</p>
                  {href ? (
                    <a href={href} className="text-sm font-medium text-white hover:text-primary transition-colors">{value}</a>
                  ) : (
                    <p className="text-sm font-medium text-white">{value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Social links */}
            <div className="rounded-2xl border border-white/15 bg-white/5 px-5 py-5 backdrop-blur-md">
              <p className="mb-4 text-left text-xs font-semibold uppercase tracking-widest text-white/50">Connect With Me</p>
              <div className="flex items-center gap-3">
                {[
                  { href: "https://www.linkedin.com/in/darrin-holtz-a6909a2b1/", icon: Linkedin, label: "LinkedIn" },
                  { href: "https://www.facebook.com/profile.php?id=100095272927131", icon: Facebook, label: "Facebook" },
                  { href: "https://www.instagram.com/akadarrinholtz", icon: Instagram, label: "Instagram" },
                  { href: "https://github.com/Darrin-Holtz", icon: Github, label: "GitHub" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/20 bg-black/25 text-white/70 transition-all duration-300 hover:border-primary/50 hover:text-primary hover:bg-white/10"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-3xl border border-white/15 bg-white/5 p-7 backdrop-blur-md md:p-8">
            <h3 className="mb-6 text-left text-xl font-semibold text-white">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              {/* Honeypot */}
              <div style={{ display: 'none' }}>
                <label htmlFor="hp_email" className="sr-only" />
                <input type="text" id="hp_email" name="hp_email" tabIndex="-1" autoComplete="off" />
              </div>

              {/* Name */}
              <div>
                <label htmlFor="name" className="mb-1.5 block text-left text-xs font-semibold uppercase tracking-widest text-white/60">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Darrin Holtz..."
                  className={cn(
                    "w-full rounded-xl border bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 backdrop-blur focus:outline-none focus:ring-2 focus:ring-primary transition-colors",
                    errors.name ? "border-red-500" : "border-white/15"
                  )}
                />
                {errors.name && <p className="mt-1.5 text-left text-xs text-red-400">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="mb-1.5 block text-left text-xs font-semibold uppercase tracking-widest text-white/60">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="darrinholtz@gmail.com"
                  className={cn(
                    "w-full rounded-xl border bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 backdrop-blur focus:outline-none focus:ring-2 focus:ring-primary transition-colors",
                    errors.email ? "border-red-500" : "border-white/15"
                  )}
                />
                {errors.email && <p className="mt-1.5 text-left text-xs text-red-400">{errors.email}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="mb-1.5 block text-left text-xs font-semibold uppercase tracking-widest text-white/60">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Hello, I'd like to talk about..."
                  className={cn(
                    "w-full rounded-xl border bg-black/20 px-4 py-3 text-sm text-white placeholder:text-white/30 backdrop-blur focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-colors",
                    errors.message ? "border-red-500" : "border-white/15"
                  )}
                />
                {errors.message && <p className="mt-1.5 text-left text-xs text-red-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};