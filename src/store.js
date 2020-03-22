import {noteData} from './firebaseConnect';

let redux = require('redux');

const noteInitialState = {
    isEdit: false,
    editNote: {},
    isAdd: false,
    alertSuccess: false,
    alertContent: {},
    alertype: ''
};// trang thai ban dau cua state
//reducer quan ly state va action 
const allReducer = (state = noteInitialState, action) => {
    switch (action.type) {
        case "ADD_DATA":
            //console.log(action.getItem);
            noteData.push(action.getItem);
            return state

        case "SHOW_EDIT_FORM":
            return {...state,isEdit:!state.isEdit} 

        case "CHANGE_TITLE_FORM":
            return {...state,isAdd:!state.isAdd,editNote:{}} 

        case "GET_EDIT_DATA":
            return {...state,editNote:action.editNote}

        case "EDIT":
            noteData.child(action.getItem.key).update({
                noteTitle: action.getItem.noteTitle,
                noteContent: action.getItem.noteContent
            });
            return {...state,editNote:{}}
        
        case "SHOW_ALERT_SUCCESS":
            return {...state, alertSuccess: true, alertContent: action.alertContent, alertType: action.alertType}

        case "HIDE_ALERT_SUCCESS":
            return {...state,alertSuccess: false}

        case "DELETE_DATA":
            noteData.child(action.isDelete.key).remove();
            return state

        default:
            return state
    }
}

let store = redux.createStore(allReducer); //store quan ly reducer
store.subscribe(function(){
    console.log("subscribe",JSON.stringify(store.getState()));
})
export default store;