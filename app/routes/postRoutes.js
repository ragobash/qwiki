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

const bcrypt = require("bcrypt");
const validator = require("validator");
const queries = require("../queries/index");

const SALT_ROUNDS = 10;

module.exports = app => {
  // Adds a new Qwiki to the database and sends the result back to the client
  app.post("/api/qwikis/new", (req, res) => {
    let { title, blurb, img, public, permissions, mods } = req.body;

    title = "" + title;
    blurb = "" + blurb;
    img = "" + img;
    public = "" + public;
    permissions = "" + permissions;

    if (validator.isEmpty(title)) {
      return res.status(400).json({
        error: true,
        msg: "TITLE field cannot be empty"
      });
    } else if (!validator.isURL(img)) {
      return res.status(400).json({
        error: true,
        msg: "IMG field must be a valid URL"
      });
    } else if (!validator.isBoolean(public)) {
      return res.status(400).json({
        error: true,
        msg: "PUBLIC field must be a true or false"
      });
    }

    queries.create
      .newQwiki({ title, blurb, img, public, permissions, mods })
      .then(qwiki => {
        res.json({
          error: false,
          msg: "Success",
          qwiki
        });
      })
      .catch(err => {
        console.log(err);
        res.status(400).json({
          error: true,
          msg: "POST request could not be processed"
        });
      });
  }),
    // Adds a new Page to the database and sends the result back to the client
    app.post("/api/pages/new", (req, res) => {
      let { title, blurb, sections } = req.body;

      title = "" + title;
      blurb = "" + blurb;

      if (validator.isEmpty(title)) {
        return res.status(400).json({
          error: true,
          msg: "TITLE field cannot be empty"
        });
      }

      sections = sections.map(section => {
        let { sectionType, content } = section;

        sectionType = "" + sectionType;
        content = "" + content;

        if (validator.isEmpty(sectionType)) {
          return {};
        }

        return { sectionType, content };
      });

      queries.create
        .newPage({ title, blurb, sections })
        .then(page => {
          res.json({
            error: false,
            msg: "Success",
            page
          });
        })
        .catch(err => {
          console.log(err);
          res.status(400).json({
            error: true,
            msg: "POST request could not be processed"
          });
        });
    }),
    // Adds a new User to the database and sends the result back to the client
    app.post("/api/register", (req, res) => {
      // console.log("Received request");

      let { email, displayName, password } = req.body;

      email = ("" + email).toLowerCase();
      displayName = "" + displayName;
      password = "" + password;

      // console.log(email, displayName, password);

      if (!validator.isEmail(email) || validator.isEmpty(email)) {
        console.log("Failed to register new user: Error: email field");
        return res.status(400).json({
          error: true,
          msg: "EMAIL field must contain a valid email address"
        });
      } else if (validator.isEmpty(displayName)) {
        console.log("Failed to register new user: Error: displayName field");
        return res.status(400).json({
          error: true,
          msg: "DISPLAYNAME field cannot be empty"
        });
      } else if (
        validator.isEmpty(password) ||
        !validator.isLength(password, { min: 8, max: 32 })
      ) {
        console.log("Failed to register new user: Error: password field");
        return res.status(400).json({
          error: true,
          msg: "PASSWORD field must be between 8-32 characters"
        });
      }

      bcrypt
        .hash(password, SALT_ROUNDS)
        .then(hash => {
          let data = {
            email: validator.normalizeEmail(email),
            displayName: displayName,
            password: hash
          };

          queries.create
            .newUser(data)
            .then(user => {
              res.json({
                error: false,
                msg: "Success",
                uuid: user._id
              });
            })
            .catch(err => {
              console.log(err);
              res.status(400).json({
                error: true,
                msg: "Something went wrong when creating the new usser account"
              });
            });
        })
        .catch(err => {
          console.log(err);
          res.status(400).json({
            error: true,
            msg: "POST request could not be processed"
          });
        });
    }),
    // Updates a Qwiki document and sends the result back to the client
    app.post("/api/qwikis/:id", (req, res) => {
      let id = req.params.id;
      let { title, blurb, img } = req.body;

      id = "" + id;
      title = "" + title;
      blurb = "" + blurb;
      img = "" + img;

      if (validator.isEmpty(id) || !validator.isMongoId(id)) {
        return res.status(400).json({
          error: true,
          msg: "ID field must be a valid mongo id"
        });
      } else if (validator.isEmpty(title)) {
        return res.status(400).json({
          error: true,
          msg: "TITLE field cannot be empty"
        });
      } else if (!validator.isURL(img)) {
        return res.status(400).json({
          error: true,
          msg: "IMG field must be a valid URL"
        });
      }

      queries.update
        .updateQwiki({ id, title, blurb, img })
        .then(qwiki => {
          res.json({
            error: false,
            msg: "Success",
            qwiki
          });
        })
        .catch(err => {
          console.log(err);
          res.status(400).json({
            error: true,
            msg: "POST request could not be processed"
          });
        });
    }),
    // Updates a Page document and sends the result back to the client
    app.post("/api/pages/:id", (req, res) => {
      let id = req.params.id;
      let { title, blurb, sections } = req.body;

      id = "" + id;
      title = "" + title;
      blurb = "" + blurb;

      if (validator.isEmpty(id) || !validator.isMongoId(id)) {
        return res.status(400).json({
          error: true,
          msg: "ID field must be a valid mongo id"
        });
      } else if (validator.isEmpty(title)) {
        return res.status(400).json({
          error: true,
          msg: "TITLE field cannot be empty"
        });
      }

      sections = sections.map(section => {
        let { sectionType, content } = section;

        sectionType = "" + sectionType;
        content = "" + content;

        if (validator.isEmpty(sectionType)) {
          return {};
        }

        return { sectionType, content };
      });

      queries.update
        .updatePage({ id, title, blurb, sections })
        .then(page => {
          res.json({
            error: false,
            msg: "Success",
            page
          });
        })
        .catch(err => {
          console.log(err);
          res.status(400).json({
            error: true,
            msg: "POST request could not be processed"
          });
        });
    }),
    // Updates a User document and sends the result back to the client
    app.post("/api/users/:id", (req, res) => {
      let id = req.params.id;
      let { email, displayName, password } = req.body;

      email = ("" + email).toLowerCase();
      displayName = "" + displayName;
      password = "" + password;

      if (!validator.isEmail(email) || validator.isEmpty(email)) {
        return res.status(400).json({
          error: true,
          msg: "EMAIL field must contain a valid email address"
        });
      } else if (validator.isEmpty(displayName)) {
        return res.status(400).json({
          error: true,
          msg: "DISPLAYNAME field cannot be empty"
        });
      } else if (
        validator.isEmpty(password) ||
        validator.isLength(password, { min: 8, max: 32 })
      ) {
        return res.status(400).json({
          error: true,
          msg: "PASSWORD field must be between 8-32 characters"
        });
      }

      bcrypt.hash(password, SALT_ROUNDS).then(hash => {
        queries.update
          .updateUser({ id, email, displayName, password: hash })
          .then(user => {
            res.json({
              error: false,
              msg: "Success",
              uuid: user._id
            });
          })
          .catch(err => {
            console.log(err);
            res.status(400).json({
              error: true,
              msg: "POST request could not be processed"
            });
          });
      });
    }),
    // Handles user login requests
    app.post("/api/login", (req, res) => {
      let { email, password } = req.body;

      email = ("" + email).toLowerCase();
      password = "" + password;

      if (!validator.isEmail(email) || validator.isEmpty(email)) {
        return res.status(400).json({
          error: true,
          msg: "EMAIL field must contain a valid email address"
        });
      } else if (validator.isEmpty(password)) {
        return res.status(400).json({
          error: true,
          msg: "PASSWORD field cannot be empty"
        });
      }

      queries.read
        .searchUsersEmail(email)
        .then(user => {
          bcrypt
            .compare(password, user.password)
            .then(match => {
              if (!match) {
                return res.status(400).json({
                  error: true,
                  msg: "Invalid credentials"
                });
              }

              res.json({
                error: false,
                msg: "Success",
                uuid: user._id
              });
            })
            .catch(err => {
              console.log(err);
              res.status(400).json({
                error: true,
                msg: ""
              });
            });
        })
        .catch(err => {
          console.log(err);
          res.status(400).json({
            error: true,
            msg: "POST request could not be processed"
          });
        });
    });
};
