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

import axios from "axios";

export default {

    // Performs an axios GET request for all Qwikis
    getAllQwikis: () => {
        return axios.get("/api/qwikis");
    },

    // Performs an axios GET request for an individual Qwiki using the id
    getQwikiByID: id => {
        return axios.get("/api/qwikis/" + id);
    },

    // Performs an axios GET request for an individual Page using the id
    getPageByID: id => {
        return axios.get("/api/pages/" + id);
    },

    // Performs an axios GET request for an individual User using the id
    getUserByID: id => {
        return axios.get("/api/users/" + id);
    },

    // Performs an axios GET request for any Pages that contain the specified term
    searchPages: term => {
        return axios.get("/api/pages/search/" + term);
    },

    // Performs an axios GET request for any Users that contain the specified term
    searchUsers: term => {
        return axios.get("/api/users/" + term);
    },

    // Performs an axios POST request to add a new Qwiki
    newQwiki: data => {
        return axios.post("/api/qwikis/new", data);
    },

    // Performs an axios POST request to add a new Page
    newPage: data => {
        return axios.post("/api/pages/new", data);
    },

    // Performs an axios POST request to add a new User
    newUser: data => {
        return axios.post("/api/users/new", data);
    },

    // Performs an axios POST request to update a Qwiki
    updateQwiki: (id, data) => {
        return axios.post("/api/qwikis/" + id, data);
    },

    // Performs an axios POST request to update a Page
    updatePage: (id, data) => {
        return axios.post("/api/pages/" + id, data);
    },

    // Performs an axios POST request to update a User
    updateUser: (id, data) => {
        return axios.post("/api/users/" + id, data);
    },

    // TODO
    login: (data) => {
        return axios.post("/api/login", data);
    }
}