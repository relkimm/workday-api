import fastify, { FastifyListenOptions } from "fastify";

const app = fastify();

const options: FastifyListenOptions = {
  port: 3000,
};

app.get("/", (request, reply) => {
  reply.send("Hello workday!");
});

app.listen(options, (error, address) => {
  console.log(`App is running on PORT ${options.port}`);
});
