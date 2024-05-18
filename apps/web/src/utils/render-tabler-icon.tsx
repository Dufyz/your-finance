import * as tablerIcons from "@tabler/icons-react";

export default function renderTablerIcon({
  icon,
  size,
  color
}: {
  icon: string;
  size: number;
  color?: string;
}) {
  const Icon = tablerIcons[icon];

  return <Icon size={size} color={color} />;
}
