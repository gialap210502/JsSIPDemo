import React, { useState } from 'react';
import JsSIP from 'jssip';

const Call = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [status, setStatus] = useState('');

  const makeCall = () => {
    const socket = new JsSIP.WebSocketInterface('wss://sbc03.tel4vn.com:7444');
    const configuration = {
      sockets: [socket],
      uri: 'sip:103@2-test1.gcalls.vn:50061',
      password: 'test1103'
    };

    const userAgent = new JsSIP.UA(configuration);

    var options = {
        'mediaConstraints' : { 'audio': true, 'video': true }
      };

    userAgent.on('registered', () => {
      const session = userAgent.call(`sip:${phoneNumber}@2-test1.gcalls.vn:50061`, options);
      setStatus('Calling...');
      session.on('ended', () => {
        setStatus('Call ended.');
      });
    });

    userAgent.start();
  };

  return (
    <div>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={makeCall}>Call</button>
      <p>{status}</p>
    </div>
  );
};

export default Call;
