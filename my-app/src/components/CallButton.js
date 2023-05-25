// CallButton.js
import React from 'react';
import { connect } from 'react-redux';
import { makeCall } from '../actions/actions';

const CallButton = ({ makeCall }) => {
  const handleButtonClick = () => {
    const phoneNumber = document.getElementById('phoneNumberInput').value;
    makeCall(phoneNumber);
  };

  return (
    <button onClick={handleButtonClick}>Make Call</button>
  );
};

const mapDispatchToProps = {
  makeCall,
};

export default connect(null, mapDispatchToProps)(CallButton);
