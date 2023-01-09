import mongoose from "mongoose";
import { DbConnection } from "../../../data/protocols/db/db-connection";
import env from "../../../main/config/env";


class MongoDataBase implements DbConnection {
  constructor() {
    this._connect()
  }
  _connect() {
    mongoose.set("strictQuery", true);
    mongoose.connect(env.mongoUrl)
      .then(() => {
        console.log('Database connection successful')
      })
      .catch(err => {
        console.error('Database connection error')
      })
  }
}

export { MongoDataBase, mongoose };
