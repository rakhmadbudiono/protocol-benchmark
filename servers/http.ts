import express, { Request, Response } from "express";

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req: Request, res: Response) => {
  return res.json({
    message: "Hello from TypeScript!",
  });
});

app.listen(PORT, () => console.log(`HTTP server starting up!`));
