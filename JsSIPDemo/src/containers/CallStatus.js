import React from 'react';
import { connect } from 'react-redux';

const CallStatus = ({ callStatus }) => (
  <div>{callStatus}</div>
);

const mapStateToProps = (state) => ({
  callStatus: state.call.status,
});

export default connect(mapStateToProps)(CallStatus);