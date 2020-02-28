package main

import (
	"log"
	"net"
)

func main() {
	listener, err := net.Listen("tcp", "0.0.0.0:8888")
	if err != nil {
		log.Fatal(err)
	}
	log.Printf("server listen on %s", listener.Addr())

	// errorが発生しても終了できるように遅延実行
	defer listener.Close()

	for {
		conn, err := listener.Accept()
		if err != nil {
			log.Fatal(err)
		}
		go echo(conn)
	}
}

func echo(c net.Conn) {
	buf := make([]byte, 1024)

	defer c.Close()

	n, err := c.Read(buf)
	if err != nil {
		log.Fatal(err)
	}

	log.Printf("client->%s", buf[:n])

	_, err = c.Write(buf[:n])
	if err != nil {
		log.Fatal(err)
	}
}
