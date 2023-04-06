// module.exports = function (api) {
//   api.cache(true);
//   return {
//     presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
//     plugins: ["react-native-paper/babel"],
//   };
// };

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // plugins: [
    //   [
    //     "module:react-native-dotenv",
    //     {
    //       envName: "APP_ENV",
    //       moduleName: "@env",
    //       path: ".env",
    //     },
    //   ],
    // ],
  };
};
