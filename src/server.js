import http from 'http';

const server = http.createServer((req, res) => {
  // Aqui você lida com as requisições HTTP
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!');
});

const PORT = 3000; // Escolha uma porta que esteja disponível

server.listen(PORT, () => {
    console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
