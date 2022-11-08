export const mediaQueries = (key) => {
    return (style) => `@media (max-width: ${key}em) { ${style} }`;
  };