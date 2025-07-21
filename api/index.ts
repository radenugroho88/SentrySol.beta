// File: api/index.ts

import { Hono } from 'hono';
import { handle } from 'hono/vercel';
// Impor 'demoRoute' yang merupakan instance Hono dari file demo.ts
import { demoRoute } from '../server/routes/demo';

// Inisialisasi aplikasi Hono utama dengan base path /api.
// Vercel akan mengarahkan semua request yang dimulai dengan /api ke file ini.
const app = new Hono().basePath('/api');

// Pasang rute dari demoRoute ke aplikasi utama.
// Karena demoRoute sudah mendefinisikan path '/demo',
// maka request ke '/api/demo' akan ditangani dengan benar.
app.route('/', demoRoute);

// Ekspor handler yang sudah di-wrap oleh adapter Vercel untuk runtime Node.js.
export default handle(app);
