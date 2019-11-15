import React from "react";
import API from "../../util/API";

class LandingPage extends React.Component {

    constructor() {
        super();

        this.state = {
            qwikis: []
        };
    }

    componentDidMount() {
        API
            .getAllQwikis()
            .then(res => {
                this.setState({
                    qwikis: res.data.qwikis
                }, ()=> {
                    console.log(this.state);
                });
                
            })
            .catch(err => {
                console.log(err);
            });
    }

    // TODO: user login stuff

    render() {
        return (
            <div></div>
        );
    }
}

export default LandingPage;