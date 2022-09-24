package main

import (
	"context"
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"

	proto "github.com/rakhmadbudiono/protocol-benchmark/proto"
	"google.golang.org/grpc"
	"google.golang.org/grpc/credentials/insecure"
)

func main() {
	getPackageHTTP()
	getPackageGRPC()
}

func getPackageHTTP() {
	client := http.Client{}

	req, err := http.NewRequest("GET", "http://localhost:8080/", nil)
	if err != nil {
		log.Fatal(err)
	}

	res, err := client.Do(req)
	if err != nil {
		log.Fatal(err)
	}

	pkg := proto.Package{}
	body, err := ioutil.ReadAll(res.Body)
	if err != nil {
		log.Fatal(err)
	}

	if err = json.Unmarshal(body, &pkg); err != nil {
		log.Fatal(err)
	}

	log.Println(pkg.Message)
}

func getPackageGRPC() {
	conn, err := grpc.Dial(":8081", grpc.WithTransportCredentials(insecure.NewCredentials()))
	if err != nil {
		log.Fatal(err)
	}
	defer conn.Close()

	client := proto.NewHelloWorldClient(conn)

	res, err := client.GetPackage(context.Background(), &proto.Void{})
	if err != nil {
		log.Fatal(err)
	}

	log.Println(res.Message)
}
