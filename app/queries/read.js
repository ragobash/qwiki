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

const db = require("./app/models");

module.exports = {
    
    // Queries the Qwiki collection for all Qwiki documents
    allQwikis: (cb) => {
        db.Qwikis
            .find({}, cb)
            .exec((err, qwikis) => {
                if (err) console.log(err);
                cb(qwikis);
            });
    },

    // Queries the Qwiki collection for a specific Qwiki documents, also populates subpages
    getQwiki: (_id, cb) => {
        db.Qwikis
            .findById(_id)
            .populate("Pages")
            .exec((err, qwiki) => {
                if (err) console.log(err);
                cb(qwiki);
            });
    },

    // Queries the Pages collection for any Page document with the specified term in the title
    searchPages: (term, cb) => {
        db.Pages
            .find({
                title: new RegExp('^' + term + '$', "i")
            })
            .exec((err, qwikis) => {
                if (err) console.log(err);
                cb(qwikis);
            });
    },

    // Queries the Pages collection for a specific Page document
    getPage: (_id, cb) => {
        db.Pages
            .findById(_id)
            .exec((err, page) => {
                if (err) console.log(err);
                cb(page);
            });
    },

    // Queries the Users collection for a specific User document
    getUser: (_id, cb) => {
        db.Users
            .findById(_id)
            .exec((err, user) => {
                if (err) console.log(err);
                cb(user);
            });
    }
}