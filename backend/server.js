import express from 'express';
import dotnev from 'dotenv';
import userRoutes from './routes/userRoutes.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';

dotnev.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api/users', userRoutes);
app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
