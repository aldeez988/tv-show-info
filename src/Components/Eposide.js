import React from 'react';
import './eposide.css';
import stripHtml from "string-strip-html";
// const stringStripHtml = require("string-strip-html")
const Eposide = (props) => {

    return (
        <div id="card" className="ui card">
            <h1 className="header">{`S${props.data.season}E${props.data.number}:${props.data.name}`}</h1>
            <div className="image ">
                <img src={props.data.image.original} />
            </div>
            <div class="content">
                <div className="description">
                    {stripHtml(String(props.data.summary))}
                </div>
            </div>
            <div className="extra content">
                <span className="date">Aired: 2013</span>
            </div>
        </div>
    );
};

export default Eposide;

