import { Card, CardContent } from "@/components/ui/card";
import * as SimpleIcons from "react-icons/si";
import { IconType } from "react-icons";

interface SkillCardProps {
  name: string;
  icon: string;
}

export default function SkillCard({ name, icon }: SkillCardProps) {
  const IconComponent = (SimpleIcons as Record<string, IconType>)[icon];

  return (
    <Card className="hover-elevate transition-all duration-300 hover:shadow-lg" data-testid={`card-skill-${name.toLowerCase()}`}>
      <CardContent className="flex flex-col items-center justify-center p-6 gap-3">
        {IconComponent && (
          <IconComponent className="h-10 w-10 text-primary" />
        )}
        <p className="text-sm font-medium text-center text-foreground">{name}</p>
      </CardContent>
    </Card>
  );
}
