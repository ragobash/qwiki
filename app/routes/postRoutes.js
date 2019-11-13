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
const queries = require("../queries");

const SALT_ROUNDS =  10;

module.exports = (app) => {
    
    app.post("/api/qwikis/new", (req, res) => {
        queries.create.newQwiki(req.data, (err, qwiki) => {
            if (err) {
                console.log(err);
                return res.send(err);
            }

            res.send(qwiki);
        });
    }),

    app.post("/api/pages/new", (req, res) => {
        queries.create.newPage(req.data, (err, page) => {
            if (err) {
                console.log(err);
                return res.send(err);
            }

            res.send(page);
        });
    }),

    app.post("/api/users/new", (req, res) => {
        bcrypt
            .hash(req.data.password, SALT_ROUNDS)
            .then(hash => {
                let data = {...req.data};

                data.passsword = hash;

                queries.create.newUser(data, (err, user) => {
                    if (err) {
                        console.log(err);
                        return res.send(err);
                    }
        
                    res.send(user);
                });
            });
    })

    // TODO: Update queries
}