import React, { Component } from 'react';
import { connect } from 'react-redux';

class ListItem extends Component {

    showEdit = () => {
        this.props.editForm(); // show form
        //gui du lieu len store, hien thi du lieu ra form
        //console.log(this.props.note);
        this.props.showEditForm(this.props.note);
    }

    deleteData = () => {
        this.props.deleteItem(this.props.note);
        //console.log(this.props.note);
        this.props.showAlert("Xoa thanh cong ", "danger");
    }

    render() {
        return (
            <div className="card">
                <div className="card-header" role="tab" id="note1">
                    <h5 className="float-left">
                    <a data-toggle="collapse" data-parent="#noteList" href={"#noteKey-"+this.props.i} aria-expanded="true" aria-controls="noteContent1">
                        {this.props.noteTitle}
                    </a>
                    </h5>
                    <div className="float-right">
                        <button type="button" className="btn btn-info" onClick={() => this.showEdit()}>Sửa</button>
                        <button type="button" className="btn btn-danger" onClick={() => {this.deleteData()}}>Xóa</button>
                    </div>
                </div>
                <div id={"noteKey-"+this.props.i} className="collapse in" role="tabpanel" aria-labelledby="note1">
                    <div className="card-body">
                        {this.props.noteContent}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editForm: () => {
            dispatch({
                type: "SHOW_EDIT_FORM"
            })
        },
        showEditForm: (editNote) => {
            dispatch({
                type: "GET_EDIT_DATA",editNote
            })
        },
        deleteItem: (isDelete) => {
            dispatch({
                type: "DELETE_DATA",isDelete
            })
        },
        showAlert: (alertContent,alertType) => {
            dispatch({
                type: "SHOW_ALERT_SUCCESS",
                alertContent,
                alertType
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListItem)