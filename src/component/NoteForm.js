import React, { Component } from 'react';
import {connect} from 'react-redux';

class NoteForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            noteTitle: '',
            noteContent: '',
            key:''
        }//tao state de luu du lieu tu form
    }

    
    UNSAFE_componentWillMount() {
        if(this.props.editNote){
            //truong hop sua du lieu
            this.setState({
                noteTitle: this.props.editNote.noteTitle,
                noteContent: this.props.editNote.noteContent,
                key:this.props.editNote.key
            });
        }
    }
    

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        });
    }// ham luu du lieu vao state
    
    addData = (title, content) => {
        if(this.state.key){
            // truong hop sua du lieu
            let editObject = {};
            editObject.key = this.state.key;
            editObject.noteTitle = this.state.noteTitle;
            editObject.noteContent = this.state.noteContent;
            this.props.editDataStore(editObject);
            this.props.showAlert("Sua thanh cong","success");
            // dong form 
            this.props.hideForm();
        }else{ 
            // truong hop them moi du lieu
            let item = {};
            item.noteTitle = title;
            item.noteContent = content;
            this.props.addDataStore(item); // su dung reducer o trong store , dispatch ADD_DATA
            this.props.showAlert("Them moi thanh cong","success");
            
        }
        
        
    }// lay du lieu tu state truyen len tren app

    changeTitle = () => {
        if(this.props.changeStatus){
            // true
            return <h4>Thêm mới</h4>
        }else{
            // false
            return <h4>Sửa</h4>
        }
    }

    render() {
        return (
            // Note Form
            <div className="col-4">
            {this.changeTitle()}
                <form>
                    <div className="form-group">
                        <label htmlFor="noteTitle">Tiêu đề Note</label>
                        <input onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteTitle" id="noteTitle" aria-describedby="noteTitle" defaultValue={this.props.editNote.noteTitle} />
                        <small id="noteTitle" className="form-text text-muted">Điền tiêu đề vào đây</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="noteContent">Nội dung Note</label>
                        <textarea onChange={(event) => this.isChange(event)} type="text" className="form-control" name="noteContent" id="noteContent" aria-describedby="noteContent" placeholder="Nội dung" defaultValue={this.props.editNote.noteContent} />
                        <small id="noteContent" className="form-text text-muted">Điền nội dung vào đây</small>
                    </div>
                    <button type="reset" onClick={() => this.addData(this.state.noteTitle, this.state.noteContent)} className="btn btn-primary">Lưu</button>
                </form>
            </div>
            // End NoteForm
        );
    }
}

//B1 mapStateToProps
const mapStateToProps = (state, ownProps) => {
    return {
        editNote: state.editNote,
        changeStatus: state.isAdd
    }
}

// NoteForm se nhan duoc this.props.test

//B2 mapDispatchToProps
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addDataStore: (getItem) => {
            dispatch({type: "ADD_DATA",getItem})
        },
        editDataStore: (getItem) => {
            dispatch({type: "EDIT",getItem})
        },
        hideForm: () => {
            dispatch({
                type: "SHOW_EDIT_FORM"
            })
        },
        showAlert: (alertContent,alertType) => {
            dispatch({
                type: "SHOW_ALERT_SUCCESS",
                alertContent,
                alertType
            })
        },
        hideAlert: (alertType) => {
            dispatch({
                type: "HIDE_ALERT_SUCCESS",
                alertType
            })
        }
    }
}
// NoteForm se nhan duoc this.props.addDataStore

// B3 connect store
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);
