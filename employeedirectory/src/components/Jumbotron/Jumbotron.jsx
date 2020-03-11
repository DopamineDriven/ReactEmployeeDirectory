import React from 'react';
import "./Jumbotron.css";

export default class Jumbotron extends React.Component {
    constructor(props) {
        super()
    }

    render() {
        return (
            <div className="jumbotron text-white" style={{}}>
                <h1 className="display-6 text-center">Employee Directory</h1>
                <p className="lead text-center">Click on carrots to filter by heading or use the search box to narrow your results.</p>
            </div>
        )
    }
}