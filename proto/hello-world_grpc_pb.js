// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_hello$world_pb = require('../proto/hello-world_pb.js');

function serialize_Package(arg) {
  if (!(arg instanceof proto_hello$world_pb.Package)) {
    throw new Error('Expected argument of type Package');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Package(buffer_arg) {
  return proto_hello$world_pb.Package.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Void(arg) {
  if (!(arg instanceof proto_hello$world_pb.Void)) {
    throw new Error('Expected argument of type Void');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Void(buffer_arg) {
  return proto_hello$world_pb.Void.deserializeBinary(new Uint8Array(buffer_arg));
}


var HelloWorldService = exports.HelloWorldService = {
  getPackage: {
    path: '/HelloWorld/GetPackage',
    requestStream: false,
    responseStream: false,
    requestType: proto_hello$world_pb.Void,
    responseType: proto_hello$world_pb.Package,
    requestSerialize: serialize_Void,
    requestDeserialize: deserialize_Void,
    responseSerialize: serialize_Package,
    responseDeserialize: deserialize_Package,
  },
};

exports.HelloWorldClient = grpc.makeGenericClientConstructor(HelloWorldService);
