const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const Schema = mongoose.Schema;

const WinesSchema = new Schema({
    Id: Number,
    name: {
        type: String,
        required: true,
    },

    year: {
        type: Number,
        required: true,
    },

    country: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        enum: ['red', 'white', 'rose'],
        default: 'red',
        required: true,
    },

    description: String,

}, {
    _id: false,
});
WinesSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret._id;
    },
});
WinesSchema.plugin(AutoIncrement);

module.exports = mongoose.model('wines', WinesSchema);
