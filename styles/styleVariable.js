export const color = {
  primary: {
    grayishBlue: "hsl(237, 18%, 59%)",
    softRed: "hsl(345, 95%, 68%)",
  },
  neutral: {
    white: "hsl(0, 0%, 100%)",
    darkDesaturatedBlue: "hsl(236, 21%, 26%)",
    veryDarkBlue: "hsl(235, 16%, 14%)",
    mostlyBlackBlue: "hsl(234, 17%, 12%)",
  },
};

export const font = {
  family: {
    redHat: "'Red Hat Text', sans-serif",
  },
  weight: {
    regular: "400",
    bold: "700",
  },
};

export const BackgroundGradient = `linear-gradient(180deg, ${color.neutral.mostlyBlackBlue}, ${color.neutral.veryDarkBlue})`;
