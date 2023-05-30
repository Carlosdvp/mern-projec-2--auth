import express from 'express';
import dotnev from 'dotenv';

dotnev.config();

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req, res) => res.send('Server is ready'));

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
