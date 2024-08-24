import { DefaultMantineColor, MantineColorsTuple } from "@mantine/core";

type ExtendedCustomColors =
    | "darkEvergreen"
    | "fernGreen"
    | "mossGreen"
    | "barkBrown"
    | "pineNeedle"
    | "mistGrey"
    | DefaultMantineColor;

declare module "@mantine/core" {
    export interface MantineThemeColorsOverride {
        colors: Record<ExtendedCustomColors, MantineColorsTuple>;
    }
}
