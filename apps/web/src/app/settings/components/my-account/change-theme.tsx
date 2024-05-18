"use client";

import { Switch } from "@/components/ui/switch";
import getCookie from "@/utils/get-cookie";
import setCookie from "@/utils/set-cookie";
import { useTheme } from "next-themes";

export default function ChangeTheme() {
  // const isDarkMode = getCookie({
  //   name: 'theme'
  // }) === 'dark';

  const isDarkMode = false;

  const { setTheme } = useTheme();

  const handleChangeTheme = (value: boolean) => {
    const newTheme = value ? "dark" : "light";
    // setCookie({
    //   name: 'theme',
    //   value: newTheme,
    //   expires_at: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 365).getTime()
    // })
    setTheme(newTheme);
  };

  return (
    <Switch
      checked={isDarkMode}
      onCheckedChange={(value) => handleChangeTheme(value)}
    />
  );
}
