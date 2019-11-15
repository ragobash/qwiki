import React from "react";
import API from "../../util/API";

class QwikiHub extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            pages: []
        };
    }

    componentDidMount() {
        API
            .getQwikiByID(this.props.qwikiID)
            .then(res => {
                this.setState({
                    pages: res.data.pages
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div></div>
        );
    }
}

export default QwikiHub;