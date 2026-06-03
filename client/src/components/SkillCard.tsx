import * as SimpleIcons from "react-icons/si";
import { DiJava } from "react-icons/di";
import { IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  icon: string;
}

const iconMap: Record<string, IconType> = {
  ...SimpleIcons,
  DiJava,
};

export default function SkillCard({ name, icon }: SkillCardProps) {
  const Icon = iconMap[icon];

  return (
    <div
      className="group flex items-center gap-3 px-3 py-2.5 rounded-lg border border-border bg-card hover:border-primary/50 hover:bg-accent/50 transition-all duration-200 cursor-default"
      data-testid={`card-skill-${name.toLowerCase()}`}
    >
      {Icon && (
        <Icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200 flex-shrink-0" />
      )}
      <span className="text-sm font-medium text-foreground truncate">{name}</span>
    </div>
  );
}
