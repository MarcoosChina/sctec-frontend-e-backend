//entrar na pasta app_expresjs e rodar o comando: npm install

import express from "express";
import path from "path";

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
