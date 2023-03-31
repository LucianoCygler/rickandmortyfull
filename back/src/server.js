require("dotenv").config();
const express = require("express");
const router = require("./routes/index");
const cors = require("cors");

const PORT = process.env.PORT; // || 3001

const server = express();
server.use(cors({ origin: true }));
server.use(express.json());

server.use("/", router);

server.use("*", (req, res) => {
  res.status(404).send({ error: "404: Not Found" });
});

server.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});

module.exports = server;

// server.use((req, res, next) => {
//   const error = new Error("Not Found");
//   error.status = 404;
//   next(error);
// });

// // middleware para manejar los errores
// server.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.json({
//     error: {
//       message: err.message,
//     },
//   });
// });

// const http = require("http");
// const {getCharById} = require("./controllers/getCharById");
// const {getCharDetail} = require("./controllers/getCharDetail");
// const server = http.createServer((req,res)=>{
//       res.setHeader('Access-Control-Allow-Origin', '*');
//        const {url} = req;

//        if(url.includes("onsearch")){
//         const characterId = url.split('/').at(-1);
//         getCharById(res,characterId)
//        }
//        else if(url.includes("detail")){
//           const characterId = url.split('/').at(-1);
//           getCharDetail(res,characterId)
//          }
//          else {
//           res.writeHead(404, { "Content-Type": "text/plain" });
//           res.end("Not Found");
//         }
//       });

// server.listen(3001, () => {
//   console.log("Server listening on port 3001");
// });

// const http = require('http');
// const data = require('./utils/data');
// //const server = http.createServer((req, res) => {
// const server = http.createServer((req, res) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   // Verificar si la URL incluye "rickandmorty/character"
//   const { url } = req;
//   if (url.includes('rickandmorty/character')) {
//     // Obtener el ID del personaje de la URL
//     //const characterId = req.url.split('/')[2];
//     const characterId = url.split('/').at(-1);

//     // Buscar el personaje correspondiente en el archivo data.js
//     const character = data.find(char => char.id === parseInt(characterId));

//     // Si se encuentra el personaje, enviar una respuesta con su información
//     if (character) {
//       // res.setHeader('Content-Type', 'application/json');
//       // res.setHeader('Access-Control-Allow-Origin', '*');
//       // res.write(JSON.stringify(character));
//       res.writeHead(200, { "Content-Type": "application/json" })
//       return res.end(JSON.stringify(character));
//     }
//     // Si no se encuentra el personaje, enviar una respuesta con un mensaje de error
//     else {
//       res.writeHead(404, { 'Content-Type': 'text/plain' });
//       return res.end(JSON.stringify({ error: 'Personaje no encontrado' }));
//     }
//   }
//   // Si la URL no incluye "rickandmorty/character", enviar una respuesta de bienvenida
//   else {
//     res.write('Bienvenido al servidor de Rick y Morty');
//   }

//   res.end();
// })

// server.listen(3001, () => {
//   console.log('Servidor corriendo en el puerto 3001');
// });
