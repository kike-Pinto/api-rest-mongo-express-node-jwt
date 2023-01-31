import mongoose from 'mongoose'

try {
  mongoose.set('strictQuery', false)
  mongoose.connect(process.env.URI_MONGO, () => {
    console.log('Connected to MongoDB')
  })
} catch (error) {
  console.log('Error de conexion mongobd:' + error)
}
