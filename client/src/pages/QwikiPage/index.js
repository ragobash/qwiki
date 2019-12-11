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
import { HashLink as Link } from 'react-router-hash-link';
import API from "../../util/API";
import Heading from "../../components/Heading/index.js";
import Paragraph from "../../components/Paragraph";
import Image from "../../components/Image";
import PageNav from "../../components/PageNav";

class QwikiPage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            _id: "",
            title: "",
            blurb: "",
            sections: [],
            nav: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        API.getPageByID(id)
            .then(res => {
                console.log(res.data);
                this.setState({
                    _id: res.data.page._id,
                    title: res.data.page.title,
                    blurb: res.data.page.blurb,
                    sections: res.data.page.sections
                }, this.generateNav);
            })
            .catch(err => console.log(err));
    }

    normalizeLink = str => {
        return ("" + str).toLowerCase().trim().replace(" ", "_");
    };

    generateNav = () => {
        let nav = this.state.sections.map(section => {
            return section.sectionType === "HEADING" ? section.content: false
        });

        this.setState({
            nav
        });
    };

    renderNav = title => {
        return (<Link to={() => this.normalizeLink(title)}>{title}</Link>);
    };

    renderSection = section => {
        switch(section.sectionType) {
            case "HEADING":
                return <Heading content={section.content} id={() => this.normalizeLink(section.content)} />
            case "IMAGE":
                return <Image content={section.content} />
            default:
                return <Paragraph content={section.content} />
        }
    };

    render() {
        return (
            <div>
                <Heading content={this.state.title} />
                <Paragraph content={this.state.blurb} />
                <PageNav links={this.state.nav.length > 0 && this.state.nav.map(this.renderNav)} />
                {this.state.sections.length > 0 && this.state.sections.map(this.renderSection)}
            </div>
        )
    }
}

export default QwikiPage;
