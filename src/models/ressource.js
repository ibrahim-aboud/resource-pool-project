const mongoose = require('mongoose');

const ressourceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    categoryId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categorie',
        required: true
    }
});

const Ressource = mongoose.model('Ressource', ressourceSchema);

export default Ressource;
