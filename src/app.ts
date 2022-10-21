import "./config";
import AppConfig from "./config";
import Fastify, { FastifyListenOptions } from "fastify";
import appRoutes from "./routes";

const app = Fastify({
  logger: true,
});
const appConfig = AppConfig();

const options: FastifyListenOptions = {
  host: appConfig.host,
  port: appConfig.port,
};

app.register(appRoutes, {
  prefix: "/api",
});

app.listen(options, (error, address) => {
  if (error) {
    app.log.error(error);
    process.exit(1);
  }
  console.log(`App is running on ${address}`);
});
