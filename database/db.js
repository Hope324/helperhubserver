import mongoose from 'mongoose';
export const connectMongoDB=async()=> {
  
  const connectionString='mongodb+srv://honeybhatt5:lqrEgpGcI2IVEDfJ@cluster0.elqsaa8.mongodb.net/'
  try {
    await mongoose.connect(connectionString);
    console.log('Database connected successfully...');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error.message);
  }
}