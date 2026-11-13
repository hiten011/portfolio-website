import { Github, Linkedin, Code2 } from "lucide-react";
import { socialLinks } from "@/constants/data";
import { Link } from "wouter";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  code: Code2,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">

          <div className="flex items-center gap-3">
            <Link href="/">
              <a className="font-display text-base font-bold text-foreground tracking-tight">
                HG
              </a>
            </Link>
            <span className="text-border">·</span>
            <p className="text-sm text-muted-foreground font-mono">
              © {year} Hiten Gupta
            </p>
          </div>

          <div className="flex items-center gap-1">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-accent transition-all duration-200"
                  data-testid={`link-${link.name.toLowerCase()}`}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
