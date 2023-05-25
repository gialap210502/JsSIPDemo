import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import CallButton from './components/CallButton';
import CallStatus from './containers/CallStatus';
import { makeCall } from './actions/actions';


const store = configureStore();

// ReactDOM.render(
//   <Provider store={store}>
//     <div>
//       <input
//         type="text"
//         id="phoneNumberInput"
//         placeholder="Enter phone number"
//       />
//       <CallButton />
//       <CallStatus />
//     </div>
//   </Provider>,
//   document.getElementById('root')
// );

const App = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  const handleNumberButtonClick = (number) => {
    setPhoneNumber((prevPhoneNumber) => prevPhoneNumber + number);
  };

  const handleCallButtonClick = () => {
    if (phoneNumber.trim() !== '') {
      // Dispatch the makeCall action with the phone number
      store.dispatch(makeCall(phoneNumber));
    }
  };

  return (
    <Provider store={store}>
      <div className="centered-container">
      <div className="phone-container">
        <div className="screen">
          <div className="call-status">
            <CallStatus />
          </div>
          <div className="number-input">
            <input
              type="tel"
              id="phoneNumberInput"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
          </div>
          <div className="dialer">
          <div className="dialer-row">
              <button
                className="dialer-button"
                onClick={() => handleNumberButtonClick('1')}
              >
                1
              </button>
              <button
                className="dialer-button"
                onClick={() => handleNumberButtonClick('2')}
              >
                2
              </button>
              <button
                className="dialer-button"
                onClick={() => handleNumberButtonClick('3')}
              >
                3
              </button>
            </div>
            <div className="dialer-row">
              <button
                className="dialer-button"
                onClick={() => handleNumberButtonClick('4')}
              >
                4
              </button>
              <button
                className="dialer-button"
                onClick={() => handleNumberButtonClick('5')}
              >
                5
              </button>
              <button
                className="dialer-button"
                onClick={() => handleNumberButtonClick('6')}
              >
                6
              </button>
            </div>
            <div className="dialer-row">
              <button
                className="dialer-button"
                onClick={() => handleNumberButtonClick('7')}
              >
                7
              </button>
              <button
                className="dialer-button"
                onClick={() => handleNumberButtonClick('8')}
              >
                8
              </button>
              <button
                className="dialer-button"
                onClick={() => handleNumberButtonClick('9')}
              >
                9
              </button>
            </div>
            <div className="dialer-row">
              <button
                className="dialer-button"
                onClick={() => handleNumberButtonClick('*')}
              >
                *
              </button>
              <button
                className="dialer-button"
                onClick={() => handleNumberButtonClick('0')}
              >
                0
              </button>
              <button
                className="dialer-button"
                onClick={() => handleNumberButtonClick('#')}
              >
                #
              </button>
            </div>
            <div className="dialer-row">
              <button className="call-button" onClick={handleCallButtonClick}>
                Call
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
