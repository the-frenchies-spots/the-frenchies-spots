import { ApolloServer } from "apollo-server-micro";
import { typeDefs, resolvers } from "../../graphql";
import { PageConfig } from "next";
import { authMiddleware } from "../../middleware";
import Cors from "micro-cors";

const cors = Cors();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => authMiddleware(req.headers.authorization || ""),
});

const startServer = apolloServer.start();

export default cors(async function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Accept", "application/json");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://the-frenchies-spots-webui.vercel.app"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  await startServer;
  await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
});

export const config: PageConfig = {
  api: {
    bodyParser: false,
  },
};
