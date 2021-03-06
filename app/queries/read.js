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

const db = require("../models/index");

module.exports = {
  // Queries the Qwiki collection for all Qwiki documents
  allQwikis: () => {
    return db.Qwikis.find({}).populate("owner");
  },

  // Queries the Qwiki collection for a specific Qwiki documents
  // Also populates subpages and owner
  getQwiki: _id => {
    return db.Qwikis.findById(_id).populate("pages").populate("owner");
  },

  // TODO
  searchQwikis: term => {
    return db.Qwikis.find({ 
      "title": { $regex: term, $options: "i" },
      "blurb": { $regex: term, $options: "i" }
     }).populate("owner");
  },

  // TODO
  getOwnedQwikis: uuid => {
    return db.Qwikis.find({ "owner": uuid }).populate("owner");
  },

  // Queries the Pages collection for any Page documents with the specified term in the title
  searchPages: term => {
    return db.Pages.find({
      title: new RegExp("^" + term + "$", "i")
    });
  },

  // Queries the Pages collection for a specific Page document
  getPage: _id => {
    return db.Pages.findById(_id).populate("lastEditor");
  },

  // Queries the Users collection for any User documents with the specified term in the displayName
  // Also populates followed qwikis
  searchUsersName: term => {
    return db.Users.find(
      {
        displayName: new RegExp("^" + term + "$", "i")
      },
      "-password"
    ).populate("followed");
  },

  // Queries the Users collection for any User documents with the specified term in the email
  searchUsersEmail: term => {
    return db.Users.findOne({
      email: ("" + term).toLowerCase()
    });
  },

  // Queries the Users collection for a specific User document
  // Also populates followed qwikis
  getUser: _id => {
    return db.Users.findById(_id, "-password").populate("followed").populate({ path: "followed", populate: { path: "owner" }});
  }
};
