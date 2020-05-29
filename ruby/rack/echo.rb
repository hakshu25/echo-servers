require 'rack'

class Echo
  def call(env)
    [200, {"Content-Type" => "text/plain"}, [env['rack.input'].read]]
  end
end
