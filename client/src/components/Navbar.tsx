import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { path: "/", label: "Home", num: "00" },
  { path: "/projects", label: "Projects", num: "01" },
  { path: "/experience", label: "Experience", num: "02" },
  { path: "/about", label: "About", num: "03" },
  { path: "/contact", label: "Contact", num: "04" },
  { path: "/resume", label: "Resume", num: "05" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link href="/">
            <a
              className="flex items-center gap-2 group"
              data-testid="link-home-logo"
            >
              <span className="font-display text-lg font-extrabold text-foreground tracking-tight">
                HG
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            </a>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = location === link.path;
              return (
                <Link key={link.path} href={link.path}>
                  <a
                    className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 group ${
                      active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    data-testid={`link-${link.label.toLowerCase()}`}
                  >
                    <span className="font-mono text-[10px] text-primary mr-1 opacity-60">
                      {link.num}
                    </span>
                    {link.label}
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-3 right-3 h-px bg-primary"
                      />
                    )}
                  </a>
                </Link>
              );
            })}
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
              aria-label="Toggle theme"
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors duration-200"
            >
              {theme === "light" ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
            </button>

            <button
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-md"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                >
                  <Link href={link.path}>
                    <a
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                        location === link.path
                          ? "text-foreground bg-accent"
                          : "text-muted-foreground hover:text-foreground hover:bg-accent"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                      data-testid={`link-mobile-${link.label.toLowerCase()}`}
                    >
                      <span className="font-mono text-xs text-primary opacity-70 w-6">
                        {link.num}
                      </span>
                      {link.label}
                    </a>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
