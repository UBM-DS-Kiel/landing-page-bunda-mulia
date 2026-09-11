const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.json());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

app.get('/api/info', (req, res) => {
    res.json({
        nama: "Kelas DS Bunda Mulia",
        deskripsi: "Pelatihan digital skill profesional",
        tahun: 2026
    });
});

module.exports = app;
