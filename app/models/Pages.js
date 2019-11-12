/**
 * 
 * qWiki
 * Copyright (C) 2019  Andrew Brooking, Josh Munoz, and Ryan Harris
 * 
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 * 
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 * 
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 * 
 */

const mongoose = require('mongoose');
const SECTION_TYPES = require('./SectionTypesEnum');
const Schema = mongoose.Schema;

const PagesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    blurb: {
        type: String
    },
    public: {
        type: Boolean,
        default: true,
        required: true
    },
    created: {
        type: Date,
        default: Date.now,
        required: true
    },
    lastEdit: {
        type: Date,
        default: Date.now,
        required: true
    },
    lastEditor: {
        type: Schema.Types.ObjectId,
        ref: "Users",
        required: true
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