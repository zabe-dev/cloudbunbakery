"use client";

import { Icon } from "@iconify/react/offline";
import instagram from "@iconify-icons/simple-icons/instagram";
import facebook from "@iconify-icons/simple-icons/facebook";

const icons = { instagram, facebook };

export function SocialIcon({
  name,
  size = 18,
}: {
  name: keyof typeof icons;
  size?: number;
}) {
  return (
    <Icon
      icon={icons[name]}
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      style={{ display: "inline-block", flexShrink: 0, verticalAlign: "middle" }}
    />
  );
}
