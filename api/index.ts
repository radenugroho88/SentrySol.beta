import express from 'express';
// Pastikan path import ini benar setelah file dipindahkan
import { router } from '../server/routes/demo'; 

const app = express();

/**
 * Vercel secara otomatis akan mengarahkan request dari /api/* ke file ini.
 * Path yang diterima oleh Express app di sini adalah path *setelah* /api.
 * Contoh: Request ke https://<domain-anda>.vercel.app/api/demo
 * akan diterima oleh Express sebagai request ke path '/demo'.
 * * Karena router Anda sudah memiliki route '/demo', kita bisa langsung menggunakannya.
 */
app.use('/', router);

// Export 'app' agar Vercel dapat menggunakannya.
export default app;