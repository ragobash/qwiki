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
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import Image from "../../components/Image";

class QwikiPage extends React.Component {

    constructor({ match, location }) {
        super({ match, location });

        const { params: { id } } = match;

        this.state = {
            id,
            title: "",
            blurb: "",
            sections = []
        }
    }

    componentDidMount() {
        API.getPageByID(this.state.id)
            .then(res => {
                this.setState({
                    title: res.data.title,
                    blurb: res.data.blurb,
                    sections: res.data.sections
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Heading content={this.state.title} />
                <Paragraph content={this.state.blurb} />
                {
                    this.state.sections.map(section => {
                        switch(section.sectionType) {
                            case "HEADING":
                                return <Heading content={section.content} />
                            case "PARAGRAPH":
                                return <Paragraph content={section.content} />
                            case "IMAGE":
                                return <Image content={section.content} />
                        }
                    })
                }
            </div>
        )
    }
}

export default QwikiPage;