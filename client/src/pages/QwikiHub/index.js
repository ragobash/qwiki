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

import React from "react";
import API from "../../util/API";
import SimpleExpansionPanel from "../../components/qWikiPagePopOut/qWikiPagePopOut";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Image from "../../components/Image/Image";

class QwikiHub extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            blurb: "",
            img: "",
            pages: []
        };
    }

    componentDidMount() {
        API
            .getQwikiByID(this.props.qwikiID)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    blurb: res.data.blurb,
                    img: res.data.img,
                    pages: res.data.pages
                });
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <SimpleExpansionPanel pages={this.state.pages} />
                <Heading content={this.state.title} />
                <Paragraph content={this.state.blurb} />
                <Image content={this.state.img} />
            </div>
        );
    }
}

export default QwikiHub;