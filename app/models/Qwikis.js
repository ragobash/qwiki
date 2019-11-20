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
        enum: Object.values(PERMISSIONS),
        default: PERMISSIONS.PUBLIC
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