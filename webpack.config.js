const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    app: "./scripts/pages/index.js",
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
};
