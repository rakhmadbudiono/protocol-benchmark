// GENERATED CODE -- DO NOT EDIT!

// package: 
// file: proto/hello-world.proto

import * as proto_hello_world_pb from "../proto/hello-world_pb";
import * as grpc from "grpc";

interface IHelloWorldService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getPackage: grpc.MethodDefinition<proto_hello_world_pb.Void, proto_hello_world_pb.Package>;
}

export const HelloWorldService: IHelloWorldService;

export interface IHelloWorldServer extends grpc.UntypedServiceImplementation {
  getPackage: grpc.handleUnaryCall<proto_hello_world_pb.Void, proto_hello_world_pb.Package>;
}

export class HelloWorldClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getPackage(argument: proto_hello_world_pb.Void, callback: grpc.requestCallback<proto_hello_world_pb.Package>): grpc.ClientUnaryCall;
  getPackage(argument: proto_hello_world_pb.Void, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_hello_world_pb.Package>): grpc.ClientUnaryCall;
  getPackage(argument: proto_hello_world_pb.Void, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_hello_world_pb.Package>): grpc.ClientUnaryCall;
}
