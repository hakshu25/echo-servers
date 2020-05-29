import { serve, Response } from "https://deno.land/std@0.53.0/http/server.ts";

const port = 8000;
const s = serve({ port });
console.log(`listen on http://localhost:${port}/`);

for await (const req of s) {
  const res: Response = {
    body: req.body,
  };
  req.respond(res);
}
