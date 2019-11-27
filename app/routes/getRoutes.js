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
    app.get("/api/qwikis", (req, res) => {
        queries.read.allQwikis()
            .then(qwikis => {
                res.json({
                    error: false,
                    msg: "Success",
                    qwikis
                });
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    error: true,
                    msg: "GET request could not be processed"
                });
            });
    });

    // Sends the results of the getQwiki query (a single Qwiki document) to the client
    app.get("/api/qwikis/:id", (req, res) => {
        queries.read.getQwiki(req.params.id)
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
                    msg: "GET request could not be processed"
                });
            });
    });

    // Sends the results of the searchPages query (an array of Page documents) to the client
    app.get("/api/pages/search/:term", (req, res) => {
        let term = ("" + req.params.term);

        queries.read.searchPages(term)
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
                    msg: "GET request could not be processed"
                });
            });
    });

    // Sends the results of the getPage query (a single Page document) to the client
    app.get("/api/pages/:id", (req, res) => {
        queries.read.getPage(req.params.id)
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
                    msg: "GET request could not be processed"
                });
            });
    });

    // Sends the results of the searchUsers query (an array of User documents) to the client
    app.get("/api/users/search/:term", (req, res) => {
        let term = ("" + req.params.term);

        queries.read.searchUsers(term)
            .then(users => {
                res.json({
                    error: false,
                    msg: "Success",
                    users
                });
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    error: true,
                    msg: "GET request could not be processed"
                });
            });
    });
    
    // Sends the results of the getUser query (a single User document)
    app.get("/api/users/:id", (req, res) => {
        queries.read.getUser(req.params.id)
            .then(user => {
                res.json({
                    error: false,
                    msg: "Success",
                    user
                });
            })
            .catch(err => {
                console.log(err);
                res.status(400).json({
                    error: true,
                    msg: "GET request could not be processed"
                });
            });
    });
}