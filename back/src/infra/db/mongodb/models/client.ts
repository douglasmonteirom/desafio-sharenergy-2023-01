import { mongoose } from "../index";

const ClientSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  email: {
    type: String,
    require: true,
    lowercase: true
  },
  phone: {
    type: String,
    require: true,
  },
  adress: {
    type: String,
    require: true,
    lowercase: true
  },
  cpf: {
    type: Number,
    require: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const Client = mongoose.model('Client', ClientSchema)

export default Client