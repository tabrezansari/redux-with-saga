import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { simpleFlow } from "./actions/login.action";
function Auth(props) {
  const fireReduxAction = () => {
    console.log("firing action to redux ");
    props.actions.simpleFlow();
  };
  return (
    <div>
      This is Auth
      <button onClick={fireReduxAction}>click here to setup redux-saga</button>
    </div>
  );
}

const MapPropsToState = state => {
  return {
    userInfo: state.userInfo
  };
};
const MapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ simpleFlow }, dispatch)
});

export default connect(
  MapPropsToState,
  MapDispatchToProps
)(Auth);
