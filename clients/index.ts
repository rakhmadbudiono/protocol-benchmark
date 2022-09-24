import * as grpc from "@grpc/grpc-js";
import { Package, Void } from "../proto/hello-world_pb";
import { HelloWorldClient } from "../proto/hello-world_grpc_pb";

const client = new HelloWorldClient(
  `localhost:4001`,
  grpc.credentials.createInsecure()
);

client.getPackage(new Void(), (err: Error, pkg: Package) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }

  console.log(pkg.getMessage());
});
