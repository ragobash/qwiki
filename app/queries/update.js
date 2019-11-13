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

const db = require("./app/models/index");

module.exports = {

    // Updates a single Qwiki document 
    updateQwiki: (data, cb) => {
        let values = {};

        if (data.title) {
            values.title = data.title;
        }

        if (data.blurb) {
            values.blurb = data.blurb;
        }

        if (data.img) {
            values.img = data.img;
        }

        if (data.permissions) {
            values.permissions = data.permissions;
        }

        if (data.public) {
            values.public = data.public;
        }

        values.lastEdit = Date.now();
        values.lastEditor = data.editor;

        db.Qwikis.findByIdAndUpdate(data.id, values, cb);
    },

    // Updates a single Page document 
    updatePage: (data, cb) => {
        let values = {};

        if (data.title) {
            values.title = data.title;
        }

        if (data.blurb) {
            values.blurb = data.blurb;
        }

        if (data.public) {
            values.public = data.public;
        }

        if (data.sections) {
            values.sections = data.sections;
        }

        values.lastEdit = Date.now();
        values.lastEditor = data.editor;

        db.Pages.findByIdAndUpdate(data.id, values, cb);
    },
    
    // Updates a single User document 
    updateUser: (data, cb) => {
        let values = {};

        if (data.email) {
            values.email = data.email;
        }

        if (data.password) {
            values.password = data.password;
        }

        if (data.displayName) {
            values.displayName = data.displayName;
        }

        db.Users.findByIdAndUpdate(data.id, values, cb);
    }
}