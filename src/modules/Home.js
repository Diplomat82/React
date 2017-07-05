'use strict';

import React from 'react';
import {Button} from 'react-bootstrap';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: ''
        };
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({email: e.target.value});
    }

    componentDidMount() {}

    render() {

        var style = {
            color: 'purple'
        };

        return (

            <section id="home">

                <div className="row">

                    <div className="col-xs-4"></div>

                    <div className="col-xs-4">
                        <h1 className="text-center" style={style}>Page 1</h1>
                    </div>

                    <div className="col-xs-4"></div>

                </div>

            </section>

        );
    }
}
