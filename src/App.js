import React, { Component } from 'react';
import Nav from './component/Nav';
import NoteForm from './component/NoteForm';
import NoteList from './component/NoteList';
import { connect } from 'react-redux';
import AlertSuccess from './component/alert/AlertSuccess';

class App extends Component {
  showFormEdit = () => {
    if(this.props.isEdit){
      return(
        <NoteForm/>
      )
    }
  }

  alert = () => {
    if(this.props.alertSuccess){
      return (
        <AlertSuccess />
      ) 
    }
  }
  
  render() {
    return (
      <>
        <Nav/>
        <div className="container mt-5">
        {this.alert()}
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
    alertSuccess: state.alertSuccess
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

