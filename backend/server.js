import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import productRoutes from './routes/productRoutes.js';

dotenv.config()

const app = express();

connectDb();

app.get('/',(req, res)=>{
    res.send('API is up running...')
})

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server is running on in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));