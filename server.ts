import express from 'express';
import { router } from './src/routes/routes';

// Initialize express app
const app = express();
const PORT = 3000;

// Integrate routes defined in router with express app
app.use('/', router)

// Start API on PORT number
app.listen(PORT, () => {
    console.log(`Server started at http://localhost${PORT}`);
});
