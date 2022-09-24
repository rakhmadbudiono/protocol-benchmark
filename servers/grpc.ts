import * as grpc from "@grpc/grpc-js";
import { ServerUnaryCall } from "@grpc/grpc-js";
import { sendUnaryData } from "@grpc/grpc-js/build/src/server-call";
import { Package, Void } from "../proto/hello-world_pb";
import {
  IHelloWorldServer,
  HelloWorldService,
} from "../proto/hello-world_grpc_pb";

class HelloWorldServer implements IHelloWorldServer {
  // @ts-ignore
  getPackage(
    call: ServerUnaryCall<Void, Package>,
    callback: sendUnaryData<Package>
  ): void {
    const response = new Package();
    response.setMessage("Hello from TypeScript!");

    callback(null, response);
  }
}

const server = new grpc.Server();
// @ts-ignore
server.addService(HelloWorldService, new HelloWorldServer());
server.bindAsync(
  `localhost:4001`,
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      throw err;
    }

    console.log("GRPC server starting up!");

    server.start();
  }
);
