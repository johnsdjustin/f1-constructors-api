import express from 'express';
import { router } from './src/routes/routes';

const app = express();
const PORT = 3000;

app.use('/', router)

app.listen(PORT, () => {
    console.log(`Server started at http://localhost${PORT}`);
});
