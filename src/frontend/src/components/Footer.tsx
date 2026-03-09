import { Link } from "@tanstack/react-router";
import { Car } from "lucide-react";
import { SiFacebook, SiInstagram, SiX, SiYoutube } from "react-icons/si";

const socialLinks = [
  { label: "Facebook", icon: SiFacebook, url: "https://facebook.com" },
  { label: "Instagram", icon: SiInstagram, url: "https://instagram.com" },
  { label: "X / Twitter", icon: SiX, url: "https://x.com" },
  { label: "YouTube", icon: SiYoutube, url: "https://youtube.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Car className="h-5 w-5 text-primary" />
              <span className="text-lg font-display font-bold text-primary">
                Rishi Car Care
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Complete information about cars in one place. Expert knowledge,
              latest updates, and trusted information for car enthusiasts.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {(
                [
                  { to: "/", label: "Home" },
                  { to: "/about", label: "About Us" },
                  { to: "/cars", label: "Car Models" },
                  { to: "/maintenance", label: "Maintenance" },
                  { to: "/news", label: "Latest News" },
                  { to: "/contact", label: "Contact" },
                ] as const
              ).map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-semibold text-foreground mb-3">
              Contact Info
            </h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>📞 9787683497</li>
              <li>📧 rishikesh042004@gmail.com</li>
              <li>📍 Coimbatore, Tamil Nadu</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-muted-foreground">
            © {currentYear} Rishi Car Care | Powered by Rishi
          </p>
          <p className="text-xs text-muted-foreground">
            Built with ❤️ using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
