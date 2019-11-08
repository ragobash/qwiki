const mongoose = require('mongoose');
const PERMISSIONS = require('./PermissionsEnum');
const Schema = mongoose.Schema;

const QwikisSchema = new Schema({
    title: {
        type: String
    },
    blurb: {
        type: String
    },
    img: {
        type: String
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    mods: [{
        type: Schema.Types.ObjectId,
        ref: "Users"
    }],
    pages: [{
        type: Schema.Types.ObjectId,
        ref: "Pages"
    }],
    permissions: {
        type: String,
        enum: Object.values(PERMISSIONS)
    },
    public: {
        type: Boolean,
        default: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    lastEdit: {
        type: Date,
        default: Date.now
    },
    lastEditor: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    }
});

Object.assign(QwikisSchema.statics, {
    PERMISSIONS
});

const Qwikis = mongoose.model("Qwikis", QwikisSchema);

module.exports = Qwikis;