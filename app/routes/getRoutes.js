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

const queries = require("../queries/index");

module.exports = (app) => {

    // Sends the results of the allQwikis query (an array of Qwiki documents) to the client
    app.get("/api/qwikis/all", (req, res) => {
        queries.read.allQwikis((err, qwikis) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.send(qwikis);
            }
        });
    });

    // Sends the results of the getQwiki query (a single Qwiki document) to the client
    app.get("/api/qwikis/:id", (req, res) => {
        queries.read.getQwiki(req.params.id, (err, qwiki) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.send(qwiki);
            }
        });
    });

    // Sends the results of the searchPages query (an array of Page documents) to the client
    app.get("/api/pages/:term", (req, res) => {
        queries.read.searchPages(req.params.term, (err, pages) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.send(pages);
            }
        });
    });

    // Sends the results of the getPage query (a single Page document) to the client
    app.get("/api/pages/:id", (req, res) => {
        queries.read.getPage(req.params.id, (err, page) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.send(page);
            }
        });
    });

    // Sends the results of the searchUsers query (an array of User documents) to the client
    app.get("/api/users/:term", (req, res) => {
        queries.read.searchUsers(req.params.term, (err, users) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.send(users);
            }
        });
    });
    
    // Sends the results of the getUser query (a single User document)
    app.get("/api/users/:id", (req, res) => {
        queries.read.getUser(req.params.id, (err, user) => {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                res.send(user);
            }
        });
    });
}