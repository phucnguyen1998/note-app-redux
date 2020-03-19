import React, { Component } from 'react';
import Nav from './component/Nav';
import NoteForm from './component/NoteForm';
import NoteList from './component/NoteList';
import { connect } from 'react-redux';

class App extends Component {
  showFormEdit = () => {
    if(this.props.isEdit){
      return(
        <NoteForm/>
      )
    }
  }
  
  render() {
    return (
      <>
        <Nav/>
        <div className="container mt-5">
          <div className="row">
            <NoteList/>
            {this.showFormEdit()}
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isEdit: state.isEdit,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

