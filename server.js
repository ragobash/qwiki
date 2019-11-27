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

// Imports
const express = require("express");
const path = require("path");
// const session = require('express-session');
const mongoose = require("mongoose");

// Constants
const PORT = process.env.PORT || 3001;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/qwikiDevDB";

// Express App
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Connect to mongo DB
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Setup user session handler
// app.use(session({
//   name: "qwiki.sid",
//   secret: "qwiki-sessions",
//   resave: false,
//   saveUninitialized: false,
//   rolling: true,
//   cookie: {
//     maxAge: 3600000,
//     secure: "auto",
//     sameSite: true
//   }
// }));

// Import API routes
require("./app/routes/getRoutes")(app);
require("./app/routes/postRoutes")(app);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "/"));
});

// Setup server listener
app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
