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
  // Creates a new Qwiki document using the provided data
  newQwiki: data => {
    return db.Qwikis.create({
      title: data.title,
      blurb: data.blurb || "",
      img: data.img || "",
      owner: data.owner,
      mods: data.mods || [],
      pages: [],
      permissions: data.permissions,
      public: data.public,
      created: Date.now(),
      lastEdit: Date.now(),
      lastEditor: data.owner
    });
  },

  // Creates a new Page document using the provided data, and links it to the correct Qwiki
  newPage: data => {
    return db.Pages.create({
      title: data.title,
      blurb: data.blurb || "",
      public: data.public,
      created: Date.now(),
      lastEdit: Date.now(),
      lastEditor: data.editor,
      sections: data.sections || []
    });
  },

  // Creates a new User document using the provided data
  newUser: data => {
    return db.Users.create({
      email: data.email,
      password: data.password,
      displayName: data.displayName,
      followed: [],
      joined: Date.now()
    });
  }
};
