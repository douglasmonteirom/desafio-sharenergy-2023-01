import express, { Application, Router } from "express";
import connectToMongo from "./infra/db/mongodb";

class App {
  public app: Application
  constructor() {
    this.app = express();
    this.app.use(express.json())

  }

  public startServer(PORT: string | number = 3001): void {
    connectToMongo()
    this.app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))
  }
  public addRouter(router: Router) {
    this.app.use(router);
  }

  public getApp() {
    return this.app;
  }
}

export default App