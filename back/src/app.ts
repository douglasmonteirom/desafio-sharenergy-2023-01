import express, { Application, Router } from "express";

class App {
  public app: Application
  constructor() {
    this.app = express();
    this.app.use(express.json())

  }

  public startServer(PORT: string | number = 3001): void {
    // criar função para conectar no banco de dados
    this.app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
    this.app.get("/", (req, res) => res.send("olá mundo!"))
  }
  public addRouter(router: Router) {
    this.app.use(router);
  }

  public getApp() {
    return this.app;
  }
}

export default App