import React from "react";
import API from "../../util/API";

class QwikiBuilder extends React.Component {

    constructor() {
        super();

        this.state = {
            title: "",
            blurb: "",
            img: "",
            public: true,
            permissions: "OWNER",
            mods: []
        }
    }

    // TODO
    handleInput(event) {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            [name]: value
        });
    }

    // TODO
    switchPublic(event) {
        this.setState({
            public: event.target.checked
        });
    }

    // TODO
    handleSubmit(event) {
        event.preventDefault();

        API.newQwiki(this.state)
            .then(res => console.log(res))
            .catch(err => console.log(err));
    }

    render() {
        return(
            <div>
                
            </div>
        );
    }
}

export default QwikiBuilder;