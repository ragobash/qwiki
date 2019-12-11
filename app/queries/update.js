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
  // Updates a single Qwiki document
  updateQwiki: data => {
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

    return db.Qwikis.findByIdAndUpdate(data.id, values);
  },

  // Updates a single Page document
  updatePage: data => {
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

    return db.Pages.findByIdAndUpdate(data.id, values);
  },

  // Updates a single User document
  updateUser: data => {
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

    return db.Users.findByIdAndUpdate(data.id, values);
  },

  // TODO
  followQwiki: (uuid, qid) => {
    return db.Users.findByIdAndUpdate(uuid, { $addToSet: { followed: qid } });
  },

  // TODO
  addPage: (qid, pid) => {
    return db.Qwikis.findByIdAndUpdate(qid, { $push: { pages: pid } });
  }
};
