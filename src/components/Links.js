import React from "react";
import Github from "../data/user/github"

function Links(props){
    return (
        <div id="links">
        <h3>Links</h3>
        <a>{props.links.github}</a>
        <a>{props.links.linkedin}</a>
        </div>
    )
}

export default Links;
