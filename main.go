package main

import (
	"log"
	"net/http"
	"os"
)

func main() {
	server := NewServer()
	defer server.RediStore.Close()
	defer server.RedisPool.Close()

	port := os.Getenv("PORT")
	if port == "" {
		port = "8000"
	}

	addr := "127.0.0.1:" + port

	log.Println("started server at " + addr)
	log.Fatal(http.ListenAndServe(addr, NewRouter(&server)))
}
