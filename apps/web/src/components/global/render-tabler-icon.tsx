import * as tablerIcons from "@tabler/icons-react";

export type TablerIcon = keyof typeof tablerIcons;

export default function RenderTablerIcon({
  icon,
  size,
  color
}: {
  icon: TablerIcon;
  size: number;
  color?: string;
}) {
  const Icon = tablerIcons[icon] as tablerIcons.Icon;

  if (!Icon) return null;

  return <Icon size={size} color={color} />;
}
