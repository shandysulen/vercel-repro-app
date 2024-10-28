import { defineConfig } from "@pandacss/dev";

import { GLOBAL_NAV_HEIGHT } from "@/constants";
// import { styledRemixIconRecipe } from "@/styles/panda/recipes";
// import { transitionMap } from "@/styles/panda/utilities/transition";
// import { ELECTRIC_COLORS } from "@/styles/tokens";
// import { MEDIA_QUERIES } from "@/utils/breakpoints";
// import { Z_INDEXES } from "@/utils/z-index";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for css declarations
  include: ["./src/**/*.{ts,tsx}"],

  // Files to exclude
  exclude: ["./src/**/*.generated.{ts,tsx}"],

  staticCss: {
    recipes: "*",
    css: [
      {
        properties: {
          colorPalette: ["black", "pink", "blue", "like"],
        },
      },
    ],
  },

  utilities: {
    extend: {
      size: {
        className: "size",
        values: "spacing",
        transform(value) {
          return { width: value, height: value };
        },
      },
      truncate: {
        className: "truncate",
        values: { type: "boolean" },
        transform(value) {
          if (!value) return {};
          return {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          };
        },
      },
      // transition: {
      //   className: "trs",
      //   values: Object.keys(transitionMap),
      //   group: "Transition",
      //   transform(value: string) {
      //     return transitionMap[value] ?? { transition: value };
      //   },
      // },
    },
  },

  theme: {
    extend: {
      // recipes: {
      //   styledRemixIcon: styledRemixIconRecipe,
      // },
      keyframes: {
        // fadeInDown: {
        //   from: { transform: "translateY(0)", opacity: 1 },
        //   to: {
        //     transform: `translateY(${onGridPx(4)})`,
        //     opacity: 0,
        //   },
        // },
        // fadeInUp: {
        //   from: {
        //     transform: `translateY(${onGridPx(4)})`,
        //     opacity: 0,
        //   },
        //   to: { transform: "translateY(0)", opacity: 1 },
        // },
        blink: {
          "0%": { opacity: 1 },
          "49%": { opacity: 1 },
          "50%": { opacity: 0 },
          "100%": { opacity: 0 },
        },
        followPath: {
          to: {
            offsetDistance: "100%",
          },
        },
        landingSection4: {
          // use transform to move from bottom to top and starting right, in the middle we are the left and end back on the right
          "0%": {
            transform: "translateY(60%) translateX(50%)",
          },
          "50%": {
            transform: "translateY(0%) translateX(-25%)",
          },
          "100%": {
            transform: "translateY(-60%) translateX(25%)",
          },
        },
        pulseDotScale: {
          "0%": { transform: "scale(1)" },
          "35%": { transform: "scale(1.65)" },
          "50%": { transform: "scale(1.65)" },
          "100%": { transform: "scale(1)" },
        },
        pulseBgScale: {
          "0%": { transform: "scale(0.75)" },
          "35%": { transform: "scale(1)" },
          "50%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.75)" },
        },
        pulseOuter: {
          "0%": {
            opacity: 0,
            transform: "scale(0.75)",
          },
          "35%": {
            opacity: 0.7,
          },
          "90%, 100%": {
            opacity: 0,
            transform: "scale(1.5)",
          },
        },
        snake: {
          to: { strokeDashoffset: 0 },
        },
      },
      // breakpoints: {
      //   sm: `${breakpoints[0]}px`, // 640
      //   md: `${breakpoints[1]}px`, // 832
      //   lg: `${breakpoints[2]}px`, // 1024
      //   xl: `${breakpoints[3]}px`, // 1152
      //   "2xl": `${breakpoints[4]}px`, // 1280
      //   "3xl": `${breakpoints[5]}px`, // 1477
      //   "4xl": `1600px`, // 1600
      // },
      tokens: {
        fontWeights: {
          regular: { value: 400 },
          medium: { value: 500 },
          semibold: { value: 600 },
        },
        // letterSpacings: {
        //   mono: { value: "0.0725em" },
        //   [-1]: { value: `${typography.letterSpacings[-1] / 100}em` },
        //   [-2]: { value: `${typography.letterSpacings[-2] / 100}em` },
        //   [-3]: { value: `${typography.letterSpacings[-3] / 100}em` },
        //   0: { value: `${typography.letterSpacings[0] / 100}em` },
        //   [1]: { value: `${typography.letterSpacings[1] / 100}em` },
        //   [2]: { value: `${typography.letterSpacings[2] / 100}em` },
        //   [3]: { value: `${typography.letterSpacings[3] / 100}em` },
        // },
        // lineHeights: {
        //   0: { value: typography.lineHeights[0] },
        //   1: { value: typography.lineHeights[1] },
        //   2: { value: typography.lineHeights[2] },
        //   3: { value: typography.lineHeights[3] },
        //   formElement0: { value: `${sizes.formElementHeights[0]}px` },
        //   formElement1: { value: `${sizes.formElementHeights[1]}px` },
        //   formElement2: { value: `${sizes.formElementHeights[2]}px` },
        // },
        // radii: {
        //   0: { value: "0px" },
        //   1: { value: onGridPx(1) },
        //   2: { value: onGridPx(2) },
        //   3: { value: onGridPx(3) },
        //   4: { value: onGridPx(4) },
        //   5: { value: onGridPx(5) },
        //   6: { value: onGridPx(6) },
        //   round: { value: "9999px" },
        // },
        // sizes: {
        //   formElement0: { value: `${sizes.formElementHeights[0]}px` },
        //   formElement1: { value: `${sizes.formElementHeights[1]}px` },
        //   formElement2: { value: `${sizes.formElementHeights[2]}px` },
        //   avatar0: { value: `${sizes.avatars[0]}px` },
        //   avatar1: { value: `${sizes.avatars[1]}px` },
        //   avatar2: { value: `${sizes.avatars[2]}px` },
        //   avatar3: { value: `${sizes.avatars[3]}px` },
        //   avatar4: { value: `${sizes.avatars[4]}px` },
        //   avatar5: { value: `${sizes.avatars[5]}px` },
        //   avatar6: { value: `${sizes.avatars[6]}px` },
        //   avatar7: { value: `${sizes.avatars[7]}px` },
        //   avatar8: { value: `${sizes.avatars[8]}px` },
        //   avatar9: { value: `${sizes.avatars[9]}px` },
        //   icon0: { value: `${sizes.icons[0]}px` },
        //   icon1: { value: `${sizes.icons[1]}px` },
        //   icon2: { value: `${sizes.icons[2]}px` },
        //   icon3: { value: `${sizes.icons[3]}px` },
        //   icon4: { value: `${sizes.icons[4]}px` },
        //   container: { value: "2000px" },
        //   nav: { value: toPx(GLOBAL_NAV_HEIGHT) },
        // },
        // easings: {
        //   ease: { value: transitions.ease },
        //   expo: { value: transitions.expo },
        // },
        // durations: {
        //   0: { value: toMs(motion.durations[0]) },
        //   1: { value: toMs(motion.durations[1]) },
        //   2: { value: toMs(motion.durations[2]) },
        //   3: { value: toMs(motion.durations[3]) },
        // },
        // zIndex: {
        //   sheetPositionOverlay: {
        //     value: Z_INDEXES.sheetPositionOverlay,
        //   },
        //   sheetBackgroundOverlay: {
        //     value: Z_INDEXES.sheetBackgroundOverlay,
        //   },
        //   modalPositionOverlay: {
        //     value: Z_INDEXES.modalPositionOverlay,
        //   },
        //   modalBackgroundOverlay: {
        //     value: Z_INDEXES.modalBackgroundOverlay,
        //   },
        //   standaloneStatusBarBlocker: {
        //     value: Z_INDEXES.standaloneStatusBarBlocker,
        //   },
        //   mobileInstallAppBanner: {
        //     value: Z_INDEXES.mobileInstallAppBanner,
        //   },
        //   nav: {
        //     value: Z_INDEXES.nav,
        //   },
        //   tooltip: {
        //     value: Z_INDEXES.tooltip,
        //   },
        // },
        fonts: {
          body: {
            value: `"Suisse", "Suisse Fallback", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
          },
          mono: {
            value: `"SuisseMono", Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace`,
          },
        },
        // fontSizes: {
        //   0: { value: toPx(typography.fontSizes.body0) },
        //   1: { value: toPx(typography.fontSizes.body1) },
        //   2: { value: toPx(typography.fontSizes.body2) },
        //   3: { value: toPx(typography.fontSizes.body3) },
        //   4: { value: toPx(typography.fontSizes.body4) },
        //   5: { value: toPx(typography.fontSizes.body5) },
        //   6: { value: toPx(typography.fontSizes.body6) },
        //   7: { value: toPx(typography.fontSizes.body7) },
        //   8: { value: toPx(typography.fontSizes.body8) },
        //   9: { value: toPx(typography.fontSizes.body9) },
        //   10: { value: toPx(typography.fontSizes.body10) },
        //   mono0: { value: toPx(typography.fontSizes.mono0) },
        //   mono1: { value: toPx(typography.fontSizes.mono1) },
        //   mono2: { value: toPx(typography.fontSizes.mono2) },
        //   mono3: { value: toPx(typography.fontSizes.mono3) },
        //   mono4: { value: toPx(typography.fontSizes.mono4) },
        //   mono5: { value: toPx(typography.fontSizes.mono5) },
        //   mono6: { value: toPx(typography.fontSizes.mono6) },
        //   mono7: { value: toPx(typography.fontSizes.mono7) },
        // },

        colors: {
          // Temporarily using this until the color system is ready
          // blue: { value: ELECTRIC_COLORS.blue },
          // lime: { value: ELECTRIC_COLORS.lime },
          // green: {
          //   value: ELECTRIC_COLORS.green,
          //   10: {
          //     value: "rgba(0, 207, 106, 0.10);",
          //   },
          // },
          // brightGreen: { value: ELECTRIC_COLORS.brightGreen },
          // orange: { value: ELECTRIC_COLORS.orange },
          // darkOrange: { value: ELECTRIC_COLORS.darkOrange },
          // lightPink: { value: ELECTRIC_COLORS.lightPink },
          // darkPink: { value: ELECTRIC_COLORS.darkPink },
          // darkGreen: { value: ELECTRIC_COLORS.darkGreen },
          // pink: {
          //   value: ELECTRIC_COLORS.pink,
          //   10: {
          //     value: "rgba(255, 85, 255, 0.10)",
          //   },
          //   15: {
          //     value: ELECTRIC_COLORS.lightPink,
          //   },
          // },
          // red: {
          //   value: ELECTRIC_COLORS.red,
          //   bright: { value: ELECTRIC_COLORS.brightRed },
          //   4: {
          //     value: colors.red[4],
          //   },
          // },
          // yellow: { value: ELECTRIC_COLORS.yellow },
          // purple: {
          //   value: ELECTRIC_COLORS.purple,
          //   500: {
          //     value: "#A26EFE",
          //   },
          //   900: {
          //     value: "#492C7E",
          //   },
          //   farcaster: {
          //     value: ELECTRIC_COLORS.farcasterPurple,
          //   },
          // },
          // lightBlue: { value: ELECTRIC_COLORS.lightBlue },
          // teal: { value: ELECTRIC_COLORS.teal },

          black: {
            5: {
              value: "#F2F2F2",
            },
            10: {
              value: "#E6E6E6",
            },
            20: {
              value: "#CCCCCC",
            },
            30: {
              value: "#B3B3B3",
            },
            40: {
              value: "#999999",
            },
            50: {
              value: "#7F7F7F",
            },
            60: {
              value: "#666666",
            },
            70: {
              value: "#4D4D4D",
            },
            80: {
              value: "#333333",
            },
            90: {
              value: "#1A1A1A",
            },
            95: {
              value: "#0D0D0D",
            },
          },

          // shade: {
          //   0: {
          //     value: colors.black[0],
          //   },
          //   1: {
          //     value: colors.black[1],
          //   },
          //   2: {
          //     value: colors.black[2],
          //   },
          //   3: {
          //     value: colors.black[3],
          //   },
          //   4: {
          //     value: colors.black[4],
          //   },
          //   5: {
          //     value: colors.black[5],
          //   },
          //   10: {
          //     value: colors.black[10],
          //   },
          //   15: {
          //     value: colors.black[15],
          //   },
          //   20: {
          //     value: colors.black[20],
          //   },
          //   25: {
          //     value: colors.black[25],
          //   },
          //   30: {
          //     value: colors.black[30],
          //   },
          //   35: {
          //     value: colors.black[35],
          //   },
          //   40: {
          //     value: colors.black[40],
          //   },
          //   45: {
          //     value: colors.black[45],
          //   },
          //   50: {
          //     value: colors.black[50],
          //   },
          //   60: {
          //     value: colors.black[60],
          //   },
          //   70: {
          //     value: colors.black[70],
          //   },
          //   80: {
          //     value: colors.black[80],
          //   },
          //   90: {
          //     value: colors.black[90],
          //   },
          //   100: {
          //     value: colors.black[100],
          //   },
          // },
        },

        shadows: {
          // Unfortunately we can't use alpha modifiers here {colors.black/15}
          regular0: {
            value: `0px 0px 2px rgba(0, 0, 0, 0.15), 0px 2px 5px rgba(0, 0, 0, 0.05), 0px 8px 40px rgba(0, 0, 0, 0.04)`,
          },
          regular1: {
            value: `0px 0px 2px rgba(0, 0, 0, 0.15), 0px 4px 7px rgba(0, 0, 0, 0.05), 0px 12px 40px rgba(0, 0, 0, 0.10)`,
          },
          regular2: {
            value: `0px 0px 2px rgba(0, 0, 0, 0.15), 0px 4px 7px rgba(0, 0, 0, 0.07), 0px 12px 40px rgba(0, 0, 0, 0.15)`,
          },
          soft0: {
            value: `0px 0px 4px rgba(0, 0, 0, 0.02), 0px 8px 16px rgba(0, 0, 0, 0.02), 0px 16px 32px rgba(0, 0, 0, 0.04)`,
          },
          soft1: {
            value: `0px 0px 4px rgba(0, 0, 0, 0.02), 0px 10px 16px rgba(0, 0, 0, 0.03), 0px 18px 32px rgba(0, 0, 0, 0.05)`,
          },
          soft2: {
            value: `0px 0px 4px rgba(0, 0, 0, 0.02), 0px 12px 16px rgba(0, 0, 0, 0.04), 0px 20px 32px rgba(0, 0, 0, 0.08)`,
          },
        },
      },
      // semanticTokens: {
      //   colors: {
      //     alert: { value: "{colors.red.bright}" },
      //     "coinbase-blue": {
      //       value: "#0053FF",
      //     },
      //     like: { value: "{colors.red.bright}" },
      //   },
      // },
    },
  },

  globalCss: {
    ":where([data-sonner-toaster])": {
      fontFamily: "{fonts.body} !important",
    },
    // ".fs_1__suggestions": {
    //   /**
    //    * Override react-mention built-in styles
    //    * @see https://github.com/signavio/react-mentions/blob/a75fe1f707906446ad341b5b27bb548db50ebd5b/src/SuggestionsOverlay.js#L172
    //    */
    //   zIndex: `${Z_INDEXES.modalPositionOverlay} !important`,
    // },
  },

  conditions: {
    extend: {
      focusVisible: ["&:is(:focus-visible, [data-focus-visible])"],
      unchecked: ["&[data-state=unchecked]", "&[aria-checked=false]"],
      hover: [
        "@media (hover: hover) and (pointer: fine)",
        "&:is(:hover, [data-hover]):not(:disabled)",
      ],
      active: [
        "&:is(:active, &[data-active], &[data-state=open]):not(:disabled)",
      ],
      groupHover: [
        "@media (hover: hover) and (pointer: fine)",
        ".group:is(:hover, [data-hover]) &",
      ],
      noHover: ["@media (hover: none)"],
      standalone: ["@media (display-mode: standalone)"],
      // mobile: [`@media ${MEDIA_QUERIES.mobile}`],
    },
  },

  // The output directory for your css system
  outdir: "src/panda",
  outExtension: "js",
  /**
   * Addresses issue with hot module reloading not always working in development
   * @see https://panda-css.com/docs/guides/debugging#hmr-does-not-work-when-i-use-tsconfig-paths
   *
   * This must match outDir (in this file), and align with what we have under compilerOptions.paths in tsconfig.json
   */
  importMap: "@/panda",

  // Prevent Panda from clashing with Tailwind
  layers: {
    reset: "panda_reset",
    base: "panda_base",
    tokens: "panda_tokens",
    recipes: "panda_recipes",
    utilities: "panda_utilities",
  },

  jsxFramework: "react",
});
