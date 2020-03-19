import React, { Component } from 'react';

class Nav extends Component {

    render() {
        return (
            <>
                {/* Menu top */}
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" >Note app</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                        <ul className="navbar-nav mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" >Xem danh sách Note</a>
                        </li>
                        </ul>
                    </div>
                </nav>
                {/* End Menu Top */}
            </>
        );
    }
}

export default Nav;
