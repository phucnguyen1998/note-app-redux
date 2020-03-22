import React, { Component } from 'react';
import { Alert, AlertContainer } from "react-bs-notifier";
import { connect } from "react-redux";

class AlertSuccess extends Component {
    hideAlert = () => {
        this.props.alertOff();
    }
    render() {
        return (
            <AlertContainer position="bottom-right">
                <Alert type={this.props.alertType} onDismiss={() => this.hideAlert()} timeout={1000}>{this.props.alertContent }</Alert>
            </AlertContainer>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        alertContent: state.alertContent,
        alertType: state.alertType
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        alertOff: () => {
            dispatch({
                type: "HIDE_ALERT_SUCCESS"
            })
        }  
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AlertSuccess);