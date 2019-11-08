const mongoose = require('mongoose');
const PERMISSIONS = require('./PermissionsEnum');
const SECTION_TYPES = require('./SectionTypesEnum');
const Schema = mongoose.Schema;

const PagesSchema = new Schema({
    title: {
        type: String
    },
    blurb: {
        type: String
    },
    permissions: {
        type: String,
        enum: Object.values(PERMISSIONS)
    },
    public: {
        type: Boolean,
        default: true
    },
    lastEdit: {
        type: Date,
        default: Date.now
    },
    lastEditor: {
        type: Schema.Types.ObjectId,
        ref: "Users"
    },
    sections: [{
        sectionType: {
            type: String,
            enum: Object.values(SECTION_TYPES)
        },
        content: {
            type: Schema.Types.Mixed
        }
    }]
});

Object.assign(PagesSchema.statics, {
    PERMISSIONS,
    SECTION_TYPES
});

const Pages = mongoose.model("Pages", PagesSchema);

module.exports = Pages;