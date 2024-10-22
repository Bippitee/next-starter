"use client";

import * as React from "react";

import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import { cn } from "@/lib/utils";

const themes = ["blue", "green", "blue-green", "plum"];

export function ThemeSwitcher() {
    const [mounted, setMounted] = React.useState(false);
    const [isDark, setIsDark] = React.useState(false);
    const { setTheme, theme, resolvedTheme } = useTheme();

    React.useEffect(() => {
        setMounted(true);
        // if the theme is dark or contains the word dark, we want to set the switch to true
        if (resolvedTheme === "dark" || theme?.includes("dark")) {
            setIsDark(true);
        }
    }, [resolvedTheme, theme]);

    if (!mounted) {
        return null;
    }

    // our themes are "blue", "green", "blue-green", "plum", and each have a dark version, in addition to this we have 'light' and 'dark' themes.
    // if it's dark mode, we want to set the theme to 'dark' or 'blue-dark', 'green-dark', 'blue-green-dark', 'plum-dark'

    const handleThemeChange = (theme: string) => {
        if (isDark) {
            if (theme === "light") {
                setTheme("dark");
            } else {
                setTheme(`${theme}-dark`);
            }
        } else {
            setTheme(theme);
        }
    };

    const handleDarkModeChange = (checked: boolean) => {
        setIsDark(checked);
        const currentTheme = theme || resolvedTheme;
        console.log("currentTheme", currentTheme);
        if (checked) {
            if (currentTheme === "light") {
                setTheme("dark");
            } else {
                setTheme(`${currentTheme}-dark`);
            }
        } else {
            if (currentTheme === "dark") {
                setTheme("light");
            } else {
                setTheme(currentTheme?.replace("-dark", "") ?? "");
            }
        }
    };

    //make a theme name map so we can keep the theme class names but give them more creative names
    const themeNameMap: { [key: string]: string } = {
        blue: "Bluebell",
        "blue-dark": "Midnight Bluebell",
        green: "Verdant",
        "green-dark": "Emerald Night",
        "blue-green": "Lagoon",
        "blue-green-dark": "Deep Sea",
        plum: "Plum",
        "plum-dark": "Twilight Plum",
        light: "Fox & Bear",
        dark: "Fox & Bear",
        system: "System Default",
    };

    const displayThemeName =
        themeNameMap[theme as keyof typeof themeNameMap] ||
        theme?.replace(/-/g, " ");

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="capitaliz min-w-[200px]">
                    <span className="capitalize flex gap-2 items-center mr-auto">
                        <i
                            className={cn(
                                theme,
                                "size-3 rounded-full bg-primary",
                            )}
                        ></i>
                        {displayThemeName}
                    </span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[200px]">
                <DropdownMenuLabel>Theme Selector</DropdownMenuLabel>
                <DropdownMenuSeparator />

                <DropdownMenuItem
                    onSelect={(e) => {
                        e.preventDefault();
                    }}
                    asChild
                >
                    <div className="flex items-center justify-between gap-4">
                        <Label htmlFor="darkmode-switcher">Dark Mode</Label>
                        <Switch
                            id="darkmode-switcher"
                            checked={isDark}
                            onCheckedChange={handleDarkModeChange}
                        />
                    </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={() => setTheme("system")}>
                    System Default
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleThemeChange("light")}>
                    <span className="capitalize flex gap-4 items-center">
                        <i className="bg-[hsl(29_100%_50%)] size-3 rounded-full"></i>
                        Fox & Bear
                    </span>
                </DropdownMenuItem>
                {themes.map((theme) => (
                    <DropdownMenuItem
                        key={theme}
                        onClick={() => handleThemeChange(theme)}
                    >
                        <span className="capitalize flex gap-4 items-center">
                            <i
                                className={cn(
                                    theme,
                                    "size-3 rounded-full bg-primary",
                                )}
                            ></i>
                            {/* {themeNameMap[theme as keyof tsypeof themeNameMap] || theme} */}
                            {themeNameMap[isDark ? `${theme}-dark` : theme] ||
                                theme.replace(/-/g, " ")}
                        </span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
