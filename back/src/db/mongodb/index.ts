import mongoose from "mongoose";
import { DbConnection } from "../../data/protocols/db/db-connection";


class MongoDataBase implements DbConnection {
  constructor() {
    this._connect()
  }
  _connect() {
    mongoose.connect('mongodb+srv://admin:admin@cluster0.rl23jqu.mongodb.net/teste-sharenergy')
      .then(() => {
        console.log('Database connection successful')
      })
      .catch(err => {
        console.error('Database connection error')
      })
  }
}

export { MongoDataBase, mongoose };
