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