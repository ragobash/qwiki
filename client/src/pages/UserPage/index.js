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