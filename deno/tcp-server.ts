const port = 8080;
const listener = Deno.listen({ port });
console.log(`listen on http://localhost:${port}`);

for await (const conn of listener) {
  Deno.copy(conn, conn);
}
