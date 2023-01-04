import mongoose from "mongoose";

const mongoURI = 'mongodb+srv://admin:admin@cluster0.rl23jqu.mongodb.net/test'

const connectToMongo = (dataBaseUri: string = mongoURI || process.env.MONGO_URI) => {
  mongoose.connect(dataBaseUri)
  mongoose.Promise = global.Promise;
}


export default connectToMongo;
