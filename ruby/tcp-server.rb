require 'socket'

server = TCPServer.open(20000)
addr = server.addr
addr.shift
printf("server is on %s\n", addr.join(':'))

loop do
  Thread.start(server.accept) do |socket|
    socket_addr = socket.addr
    socket_addr.shift
    client_addr = socket_addr.join(':')
    print("#{client_addr} is accepted\n")
    while socket.gets
      # https://docs.ruby-lang.org/ja/latest/method/Kernel/v/_.html
      # 最後にKernel.#getsまたはKernel.#readlineで読み込んだ文字列
      socket.write($_)
      printf("%s client-> %s", client_addr, $_)
    end
    printf("%s is gone\n", client_addr)
    socket.close
  end
end

