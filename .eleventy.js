let Nunjucks = require("nunjucks");

module.exports = function(eleventyConfig) {
  let nunjucksEnvironment = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader("pages")
  );
  eleventyConfig.setLibrary("njk", nunjucksEnvironment);

  return {
    dir:  {
      input: "pages",
      output: "public",
      data: ".data"
    },
    passthroughFileCopy: true,
    templateFormats: [
      "njk",
      "css","png","svg","js", "json"
      ]
  }
};

