import "dotenv/config";
import express from "express";
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { connectDB } from "./config/typeorm";
import { UserResolver } from "./resolvers/UserResolver";
import { AuthResolver } from "./resolvers/AuthResolver";
import { SuscriptionResolver } from "./resolvers/SuscriptionResolver";
import { VideoResolver } from "./resolvers/VideoResolvers";

(async () => {
	const PORT = process.env.PORT || 4000;
	const app = express();
	connectDB();
	const server = new ApolloServer({
		schema: await buildSchema({
			resolvers: [
				UserResolver,
				AuthResolver,
				SuscriptionResolver,
				VideoResolver,
			],
		}),
		context: ({ req, res }) => ({ req, res }),
	});
	server.applyMiddleware({ app, cors: false });

	app.listen(PORT, () => console.log("Server Started"));
})();
