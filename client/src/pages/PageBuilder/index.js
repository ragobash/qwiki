import React from "react";

class PageBuilder extends React.Component {

    constructor() {
        super();

        this.state = {
            title: "",
            blurb: "",
            public: true,
            sections: []
        }
    }
    
    render() {
        return (
            <div></div>
        );
    }
}

export default PageBuilder;