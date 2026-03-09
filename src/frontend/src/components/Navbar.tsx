import { Button } from "@/components/ui/button";
import { Link, useRouterState } from "@tanstack/react-router";
import { Car, Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home", ocid: "nav.home_link" },
  { to: "/about", label: "About", ocid: "nav.about_link" },
  { to: "/cars", label: "Car Models", ocid: "nav.cars_link" },
  { to: "/maintenance", label: "Maintenance", ocid: "nav.maintenance_link" },
  { to: "/news", label: "News", ocid: "nav.news_link" },
  { to: "/contact", label: "Contact", ocid: "nav.contact_link" },
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouterState();
  const pathname = router.location.pathname;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Car className="h-6 w-6 text-primary" />
            <div>
              <span className="text-xl font-display font-bold text-primary tracking-tight">
                Rishi Car Care
              </span>
              <span className="hidden sm:block text-xs text-muted-foreground leading-none">
                Powered by Rishi
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                data-ocid={link.ocid}
                className={`nav-link text-sm font-medium transition-colors ${
                  pathname === link.to
                    ? "text-primary active"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile hamburger */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={link.ocid}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.to
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
