const path = require("path");

const createExpoWebpackConfigAsync = require("@expo/webpack-config");

function getWorkspaceModules() {
  const { dependencies } = require("./package.json");
  return Object.entries(dependencies)
    .filter(([, v]) => v.startsWith("workspace:"))
    .map(([k]) => k);
}

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        ...env.babel,
        dangerouslyAddModulePathsToTranspile: getWorkspaceModules(),
      },
    },
    argv
  );

  return {
    ...config,
    watch: true,
    watchOptions: {
      // ignored: ["**/node_modules"],
      aggregateTimeout: 200,
      poll: 1000,
    },
  };
};
