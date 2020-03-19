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
            // dong form 
            this.props.hideForm();
        }else{ 

            let item = {};
            item.noteTitle = title;
            item.noteContent = content;
            this.props.addDataStore(item); // su dung reducer o trong store , dispatch ADD_DATA
            
        }
        
        
    }// lay du lieu tu state truyen len tren app

    render() {
        return (
            // Note Form
            <div className="col-4">
            <h3>Sửa nội dung</h3>
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
    }
}
// NoteForm se nhan duoc this.props.addDataStore

// B3 connect store
export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);