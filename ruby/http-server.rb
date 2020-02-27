require 'webrick'

option = {
  BindAddress: '0.0.0.0',
  Port: '3000',
}
server = WEBrick::HTTPServer.new(option)
logger = server.config[:Logger]

server.mount_proc('/') do |req, res|
  logger.info "Request Header: #{req.header}"
  logger.info "Request Body: #{req.body}"
  res.body = req.body
end

Signal.trap(:INT) { server.shutdown }

server.start

