import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:3000/graphql",
  documents: [],
  ignoreNoDocuments: false,
  generates: {
    "./src/gql-type/": {
      preset: "client",
      plugins: [],
    },
  },
};

export default config;
