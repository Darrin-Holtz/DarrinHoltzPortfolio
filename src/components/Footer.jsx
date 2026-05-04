export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto py-6 text-center text-sm text-white/50">
        &copy; {year} All rights reserved. Created by{" "}
        <a
          href="mailto:darrinholtz@holtzdigital.com"
          className="text-primary hover:text-primary/80 transition-colors duration-200"
        >
          darrinholtz@holtzdigital
        </a>
      </div>
    </footer>
  );
};
