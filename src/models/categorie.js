const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    explanation: {
        type: String,
        required: true
    },
    imagePath: {
        type: String,
        required: true
    },
});

const Categorie = mongoose.models.Categorie || mongoose.model('Categorie', categorySchema);

export default Categorie;
