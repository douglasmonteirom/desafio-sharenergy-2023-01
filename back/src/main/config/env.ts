export default {
  mongoUrl: process.env.MONGO_URL || 'mongodb+srv://admin:admin@cluster0.rl23jqu.mongodb.net/teste-sharenergy',
  port: process.env.PORT || 3001,
  jwtSecret: process.env.JWT_SECRET || 'af77112fb9a47b745da3f0f75a9b1a0d'
}