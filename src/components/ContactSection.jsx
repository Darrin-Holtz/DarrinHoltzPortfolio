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
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <a
                    href="mailto:darrinholtz@gmail.com"
                    className="flex item-center text-muted-foreground hover:text-primary transition-colors"
                  >
                    darrinholtz@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <a
                    href="tel:+15856307833"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    (585) 630-7833
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Darien Center N.Y. United States
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/darrin-holtz-a6909a2b1/" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
                <a href="https://www.facebook.com/profile.php?id=100095272927131" target="_blank" rel="noopener noreferrer">
                  <Facebook />
                </a>
                <a href="https://www.instagram.com/akadarrinholtz" target="_blank" rel="noopener noreferrer">
                  <Instagram />
                </a>
                <a href="https://github.com/Darrin-Holtz" target="_blank" rel="noopener noreferrer">
                  <Github />
                </a>
              </div>
            </div>
          </div>

          <div
            className="bg-card p-8 rounded-lg shadow-xs"
            // The form's onSubmit should be on the <form> tag itself, not the div
            // onSubmit={handleSubmit} // This was misplaced
          >
            <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate> {/* Corrected onSubmit location */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-md border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary",
                    errors.name ? "border-red-500" : "border-input" // Highlight if error
                  )}
                  placeholder="Darrin Holtz..."
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div style={{ display: 'none' }}> {/* Ensures it's fully hidden */}
                <label htmlFor="hp_email" className="sr-only"></label>
                <input
                  type="text"
                  id="hp_email"
                  name="hp_email"
                  tabIndex="-1" // Makes it non-focusable by keyboard navigation
                  autoComplete="off" // Prevents browser autofill
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-md border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary",
                    errors.email ? "border-red-500" : "border-input" // Highlight if error
                  )}
                  placeholder="darrinholtz@gmail.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-md border bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none",
                    errors.message ? "border-red-500" : "border-input" // Highlight if error
                  )}
                  placeholder="Hello, I'd like to talk about..."
                />
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
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