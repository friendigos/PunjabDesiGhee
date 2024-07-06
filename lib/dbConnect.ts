import mongoose from 'mongoose';

async function dbConnect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI!)
    console.log("db connected");
  } catch (error) {
    throw new Error('Connection failed!')
  }
//   try {
//     var db = mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true, dbName: 'swag-shop' });
//     console.log('success connection');
// }
// catch (error) {
//     console.log('Error connection: ' + error);
// }
}

export default dbConnect
