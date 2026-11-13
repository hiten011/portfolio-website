import SkillBadge from "../SkillBadge";

export default function SkillBadgeExample() {
  return (
    <div className="p-6 flex gap-2 flex-wrap">
      <SkillBadge skill="React" />
      <SkillBadge skill="TypeScript" />
      <SkillBadge skill="Node.js" />
    </div>
  );
}
