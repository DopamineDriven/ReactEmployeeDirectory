import React from 'react';
import "./Jumbotron.css";

export default class Jumbotron extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-6">Employee Directory</h1>
                <p className="lead">Click on carrots to filter by heading or use the search box to narrow your results.</p>
            </div>
        )
    }
}