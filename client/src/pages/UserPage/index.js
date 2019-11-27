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

import React, { Component } from "react";
import API from "../../util/API";

class UserPage extends Component {

    constructor() {
        super();

        this.state = {
            uuid: "",
            displayName: "",
            followed: "",
            joined: ""
        };
    }

    componentDidMount() {
        const uuid = this.props.uuid || this.props.match.params.uuid;

        API.getUserByID(uuid)
            .then(res => {
                this.setState({
                    uuid,
                    displayName: res.data.user.displayName,
                    followed: res.data.user.followed,
                    joined: res.data.user.joined
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default UserPage;