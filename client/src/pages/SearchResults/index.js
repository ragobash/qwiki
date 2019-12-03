import React from "react";
import QwikiCard from "../../components/QwikiCard";

function SearchResults(props) {
    return (
        <div>
            {this.props.qwikis.map(qwiki => {
                return <QwikiCard qwiki={qwiki} />
            })}
        </div>
    );
}

export default SearchResults;