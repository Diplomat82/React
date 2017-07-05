'use strict';

import React from 'react'
import NavLink from './NavLink'

export default React.createClass({

    render() {

        return (
            <div>
                <section id="header">
                    <h1 className="text-center">Title</h1>
                    <section role="nav" className="row">
                        <div className="col-xs-4"></div>
                        <div className="col-xs-4">
                            <div className="col-xs-4">
                                <NavLink to="/" onlyActiveOnIndex>Home</NavLink>
                            </div>
                            <div className="col-xs-4">
                                <NavLink to="/page2">Page 2</NavLink>
                            </div>
                            <div className="col-xs-4">
                                <NavLink to="/page3">Page 3</NavLink>
                            </div>
                        </div>
                        <div className="col-xs-4"></div>
                    </section>
                </section>
                {this.props.children}
            </div>
        )
    }
})
