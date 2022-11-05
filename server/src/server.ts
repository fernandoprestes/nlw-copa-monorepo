import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";

import { poolRoutes } from "./routes/pool";
import { usersRoutes } from "./routes/user";
import { authRoutes } from "./routes/auth";
import { guessesRoutes } from "./routes/guess";
import { gameRoutes } from "./routes/game";

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  await fastify.register(jwt, {
    secret: "nlwcopa",
  });

  await fastify.register(authRoutes);
  await fastify.register(gameRoutes);
  await fastify.register(guessesRoutes);
  await fastify.register(poolRoutes);
  await fastify.register(usersRoutes);

  await fastify.listen({ port: 3333, host: "0.0.0.0" });
}

bootstrap();
