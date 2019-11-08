const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsersSchema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
    displayName: {
        type: String
    },
    followed: [{
        type: Schema.Types.ObjectId,
        ref: "Qwikis"
    }],
    joined: {
        type: Date,
        default: Date.now
    }
});

const Users = mongoose.model("Users", UsersSchema);

module.exports = Users;