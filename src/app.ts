import "./config";
import AppConfig from "./config";
import Fastify, { FastifyListenOptions } from "fastify";
import apiRoutes from "./api/routes";

const app = Fastify({
  logger: true,
});
const appConfig = AppConfig();

const options: FastifyListenOptions = {
  host: appConfig.host,
  port: appConfig.port,
};

app.register(apiRoutes, {
  prefix: "/api",
});

app.listen(options, (error, address) => {
  if (error) {
    app.log.error(error);
    process.exit(1);
  }
  console.log(`App is running on ${address}`);
});
