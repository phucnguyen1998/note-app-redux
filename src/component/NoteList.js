import React, { Component } from 'react';
import ListItem from './listItem/ListItem';
import {noteData} from './../firebaseConnect';
import {connect} from 'react-redux';

class NoteList extends Component {
constructor(props) {
    super(props);
    this.state = {
        dataFirebase: []
    }
}

// dung cwm de lay duoc du lieu truoc khi ham render chay
UNSAFE_componentWillMount() {
    noteData.on('value',(notes) => {
        let arrayData = [];
        notes.forEach(items => {
            const key = items.key;
            const noteTitle = items.val().noteTitle;
            const noteContent = items.val().noteContent;
            arrayData.push({
                key: key,
                noteTitle: noteTitle,
                noteContent: noteContent
            })
        });
        this.setState({
            dataFirebase: arrayData
        }) 
    })
}

getData = () => {

    return this.state.dataFirebase.map((value,key) => {
        return(
            <ListItem key={value.key} note={value} i={key} noteTitle={value.noteTitle} noteContent={value.noteContent}/>
        );
    });
}

    render() {
        return (
            // Note List
            <div className="col">
                <div id="noteList" role="tablist" aria-multiselectable="true">
                    {this.getData()}
                </div>
            </div>
            // End noteList
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
       
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteList)