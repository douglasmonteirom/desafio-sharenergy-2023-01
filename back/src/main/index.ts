import { MongoDataBase } from "../infra/db/mongodb";
import env from "./config/env";

(async function () {
  new MongoDataBase()
  const { setupApp } = await import('./config/app')
  const app = await setupApp()
  app.listen(3001, () => console.log(`Server running at http://localhost:${env.port}`))
}())