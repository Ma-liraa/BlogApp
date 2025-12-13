/** @type {import('tailwindcss').Config} */

import { fontFamily } from "tailwindcss/defaultTheme";

function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          900: withOpacity("--color-primary-900"),
          800: withOpacity("--color-primary-800"),
          200: withOpacity("--color-primary-200"),
          100: withOpacity("--color-primary-100"),
        },
        text: withOpacity("--color-text"),
        paragraph: withOpacity("--color-paragraph"),
        icon: withOpacity("--color-icon"),
        success: {
          100: withOpacity("--color-success-100"),
          500: withOpacity("--color-success-500"),
        },
        warning: {
          100: withOpacity("--color-warning-100"),
          500: withOpacity("--color-warning-500"),
        },
        error: {
          100: withOpacity("--color-error-100"),
          500: withOpacity("--color-error-500"),
        },

        // --color-primary-900: 62, 123, 166;
        //     --color-primary-800: 127, 165, 201;
        //     --color-primary-200: 204, 225, 250;
        //     --color-primary-100: 248, 244, 243;

        //     --color-text: 33, 33, 33;
        //     --color-paragraph: 30, 30, 30;
        //     --color-icon: 33, 33, 33;

        //     --color-success-500: 61, 193, 60;
        //     --color-success-100: 206, 239, 206;

        //     --color-warning-500: 243, 187, 27;
        //     --color-warning-100: 252, 238, 198;

        //     --color-error-500: 252, 0, 0;
        //     --color-error-100: 255, 186, 186;
      },
      fontFamily: {
        sans: ["var(--font-iranYekan)", ...fontFamily.sans],
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
