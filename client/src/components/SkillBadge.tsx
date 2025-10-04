import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  skill: string;
}

export default function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <Badge variant="secondary" className="hover-elevate" data-testid={`badge-skill-${skill.toLowerCase()}`}>
      {skill}
    </Badge>
  );
}
