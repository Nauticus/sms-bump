export const theme = {
    colors: {
        shopifyBlueish: "#F4F6F8",
        smsbump: "#606DC5",
        smallElements: "#707070",
        mainBlue: "#0022A5",
        lines: "#C3CFD8",
        links: "#30A4E2",
        shadows: "#E2E9EF",
        andOr: "#DCDEF0",
        infoText: "#637381",
        green: "#00BA63",
        lightGreen: "#37C351",
        text: "#212B35",
        gray: "#F7F7F7",
    },
    fontSizes: {
        primary: "13px",
        fontSizeXS: "12px",
        fontSizeS: "14px",
        fontSizeM: "16px",
        fontSizeL: "20px",
    },
    lineSpacings: {
        lineSpacing17: "17px",
        lineSpacing19: "19px",
        lineSpacing20: "20px",
        lineSpacing25: "25px",
    },
} as const;

export type Theme = typeof theme;

declare module "styled-components" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface DefaultTheme extends Theme {}
}

export default theme;
