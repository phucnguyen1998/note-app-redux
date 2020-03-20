import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nav extends Component {

    handleAddNote= (event) => {
         event.preventDefault(); //click vao khong chuyen trang
         this.props.addForm();
         this.props.changeTitleForm();
    }

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
                            <a className="nav-link" href="" onClick={(event) => this.handleAddNote(event)}>Thêm ghi chú</a>
                        </li>
                        </ul>
                    </div>
                </nav>
                {/* End Menu Top */}
            </>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addForm: () => {
            dispatch({type: "SHOW_EDIT_FORM"})
        },
        changeTitleForm: () => {
            dispatch({type: "CHANGE_TITLE_FORM"})
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Nav)