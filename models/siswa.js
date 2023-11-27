const mongoose = require('mongoose');

const SiswaSchema = new mongoose.Schema({
    nis: {
        type: String,
        required: [true, 'Silahkan isikan nis anda'],
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Silahkan isi alamat email anda'],
    },
    nama: {
        type: String,
        required: [true, 'Silahkan isikan nama anda'],
        unique: false,
    },
    ttl: {
        type: String,
        required: [true, 'Silahkan isikan tempat tanggal lahir anda anda'],
        unique: false,
    },
    jenisKelamin: {
        type: String,
        required: [true, 'Silahkan isikan jenis kelamin anda'],
        unique: false,
    },
    alamat: {
        type: String,
        required: [true, 'Silahkan isikan alamat anda'],
        unique: false,
    }
});

module.exports = mongoose.model('siswa', SiswaSchema);