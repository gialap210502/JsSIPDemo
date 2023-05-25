import JsSIP from 'jssip';

// Action types
export const MAKE_CALL = 'MAKE_CALL';
export const END_CALL = 'END_CALL';

// Action creators
export const makeCall = (phoneNumber) => {
  return (dispatch) => {
    dispatch({ type: MAKE_CALL });

    // Create a new JsSIP User Agent instance
    const socket = new JsSIP.WebSocketInterface('wss://gc03-pbx.tel4vn.com:7444');
    const configuration = {
      sockets: [socket],
      uri: '101@2-test1.gcalls.vn:50061',
      password: 'test1101',
    };
    const userAgent = new JsSIP.UA(configuration);

    // Start the User Agent
    userAgent.start();

    // Make the call
    const session = userAgent.call(`sip:${phoneNumber}`);

    // Event listeners for call state changes
    session.on('connecting', () => {
      console.log('Call connecting');
    });

    session.on('accepted', () => {
      console.log('Call accepted');
    });

    session.on('failed', () => {
      console.log('Call failed');
      dispatch({ type: END_CALL });
    });

    session.on('ended', () => {
      console.log('Call ended');
      dispatch({ type: END_CALL });
    });
  };
};

export const endCall = () => {
  return (dispatch) => {
    dispatch({ type: END_CALL });

    // End the call
    // You need to have access to the JsSIP session object here to end the call
  };
};
