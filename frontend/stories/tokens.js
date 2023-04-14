/**
 * This is specifically for Storybook Token display.
 * 1. Read CSS Token variables from HTML Document
 * 2. Filter/Group to token types
 * 3. token.stories.mdx displays
 */
const tokens = [].slice
  .call(document.styleSheets)
  .map(styleSheet => [].slice.call(styleSheet.cssRules))
  .flat()
  .filter(cssRule => cssRule.selectorText === ":root")
  .map(cssRule => cssRule.cssText.split("{")[1].split("}")[0].trim().split(";"))
  .flat()
  .filter(text => text !== "")
  .map(text => text.split(":"))
  .map(parts => ({ key: parts[0].trim(), value: parts[1].trim() }));

// console.log(tokens);

// const filter = key => tokens.filter(v => v.key.startsWith(key));
const filter = needles =>
  tokens.filter(t =>
    needles.some(n => {
      // console.log(t.key, n);
      return t.key.startsWith(n);
    })
  );

const FONTSIZE_KEY = "--font-size";
const fontSizes = filter([FONTSIZE_KEY]);

const COLOURS_KEYS = [
  "--color-black",
  "--color-white",
  "--color-orange",
  "--color-yellow",
  "--color-green",
  "--color-lightblue",
  "--color-darkblue",
  "--color-iris",
  "--color-cerise",
  "--color-success",
  "--color-info",
  "--color-warning",
  "--color-error",
];
const colours = filter(COLOURS_KEYS);

const SPACING_KEY = ["--spacing-"];
const spacings = filter(SPACING_KEY);

const BREAKPOINT_KEY = ["--bp-"];
const breakpoints = filter(BREAKPOINT_KEY);

export { tokens, colours, fontSizes, spacings, breakpoints };

// export default [
//   {
//     title: "theme.color.primary",
//     subtitle: "Coral",
//     colors: { "": "#FF4785" },
//   },
// ];
