package main

import (
	"context"
	"encoding/json"
	"log"
	"net"
	"net/http"

	proto "github.com/rakhmadbudiono/protocol-benchmark/proto"
	"google.golang.org/grpc"
)

var message proto.Package = proto.Package{
	Message: "Hello from Go!",
}

type service struct {
	proto.UnimplementedHelloWorldServer
}

func (*service) GetPackage(context.Context, *proto.Void) (*proto.Package, error) {
	return &message, nil
}

func main() {
	go serveHTTP()
	go serveGRPC()

	select {}
}

func serveHTTP() {
	log.Println("HTTP server starting up!")

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		response, err := json.Marshal(message)
		if err != nil {
			log.Fatal(err)
		}

		if _, err := w.Write(response); err != nil {
			log.Fatal(err)
		}
	})

	http.ListenAndServe(":8080", nil)
}

func serveGRPC() {
	log.Println("GRPC server starting up!")

	listener, err := net.Listen("tcp", ":8081")
	if err != nil {
		log.Fatal(err)
	}

	server := grpc.NewServer()
	proto.RegisterHelloWorldServer(server, &service{})

	if err := server.Serve(listener); err != nil {
		log.Fatal(err)
	}
}
