https://github.com/expo/expo/issues/7036

```
const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(
    {
      ...env,
      babel: {
        dangerouslyAddModulePathsToTranspile: ['deprecated-react-native-listview'],
      },
    },
    argv,
  );
  return config;
};
```

packages :

"main": "./src/index.tsx",
"types": "./src/index.tsx",
"sources": "./src/index.tsx",
