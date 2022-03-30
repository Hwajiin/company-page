/**
 * sm: Mobile
 * md: Tablet
 * lg: Desktop
 */

export const breakpoint = {
  md: 768,
  lg: 1200,
};

const responsive = {
  gutter: 10,

  columns: {
    sm: 4,
    md: 12,
    lg: 12,
  },

  margin: {
    sm: 10,
    md: 30,
  },

  maxWidth: {
    md: 960,
    lg: 1140,
  },

  mediaQuery: {
    tablet: `@media screen and (min-width: ${breakpoint.md}px)`,
    desktop: `@media screen and (min-width: ${breakpoint.lg}px)`,
  },

  range: {
    "sm-only": `
      @media screen and (min-width: ${breakpoint.md}px) {
        diplay: none !important;
      }
    `,
    "md-only": `
      @media screen and (max-width: ${breakpoint.md - 1}px) and (min-width: ${
      breakpoint.lg
    }px) {
        diplay: none !important;
      }
    `,
    "lg-only": `
      @media screen and (min-width: ${breakpoint.lg - 1}px) {
        diplay: none !important;
      }
    `,
    "sm-hidden": `
      @media screen and (max-width: ${breakpoint.md - 1}px) {
        diplay: none !important;
      }
    `,
    "md-hidden": `
      @media screen and (min-width: ${breakpoint.md}px) and (max-width: ${
      breakpoint.lg - 1
    }px) {
        diplay: none !important;
      }
    `,
    "lg-hidden": `
      @media screen and (min-width: ${breakpoint.lg}px) {
        diplay: none !important;
      }
    `,
  },
};

export default responsive;
