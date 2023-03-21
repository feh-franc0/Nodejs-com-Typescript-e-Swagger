import express from "express";

import { router } from "./routes";

const app = express();

app.use(express.json());

app.get("/terms", (request, response) => {
  return response.json({
    message: "Termos de Serviços",
  });
});

app.use("/v1", router);
app.listen(3000, () => console.log("Server is running on port 3000"));