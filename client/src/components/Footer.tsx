import { Github, Linkedin, Code2 } from "lucide-react";
import { socialLinks } from "@/constants/data";

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  code: Code2,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Hiten Gupta. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors hover-elevate active-elevate-2 p-2 rounded-md"
                  data-testid={`link-${link.name.toLowerCase()}`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
