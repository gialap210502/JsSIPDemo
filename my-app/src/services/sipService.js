import JsSIP from 'jssip';

let activeSession = null; // Biến lưu trữ cuộc gọi hiện tại (nếu có)

const configureJsSIP = () => {
  const socket = new JsSIP.WebSocketInterface('wss://gc03-pbx.tel4vn.com:7444'); // Thay thế bằng địa chỉ máy chủ SIP thực tế

  const configuration = {
    sockets: [socket],
    uri: '101@2-test1.gcalls.vn:50061', // Thay thế bằng thông tin tài khoản SIP thực tế
    password: 'test1101', // Thay thế bằng mật khẩu SIP thực tế
  };

  const userAgent = new JsSIP.UA(configuration);

  // Bắt sự kiện khi JsSIP kết nối thành công
  userAgent.on('connected', () => {
    console.log('JsSIP connected');
    // Đã kết nối thành công với máy chủ SIP
  });

  // Bắt sự kiện khi có cuộc gọi đến
  userAgent.on('newRTCSession', (e) => {
    const session = e.session;
    console.log('New incoming call');
    // Xử lý cuộc gọi đến
    // Ví dụ: lưu trữ cuộc gọi hiện tại và xác định hành động phản hồi
    activeSession = session;
  });

  // Kết nối JsSIP tới máy chủ SIP
  userAgent.start();
};

const makeCall = (phoneNumber) => {
  if (activeSession) {
    console.log('There is an active call. Please end the current call before making a new one.');
    return;
  }

  const session = userAgent.call(`sip:${phoneNumber}@sip.example.com`); // Thay thế bằng địa chỉ máy chủ SIP thực tế

  // Bắt sự kiện khi cuộc gọi được thiết lập thành công
  session.on('accepted', () => {
    console.log('Call connected');
    // Cuộc gọi đã kết nối thành công
  });

  // Bắt sự kiện khi cuộc gọi bị từ chối hoặc kết thúc
  session.on('ended', () => {
    console.log('Call ended');
    // Cuộc gọi đã kết thúc
    activeSession = null;
  });

  activeSession = session;
};

const endCall = () => {
  if (activeSession) {
    activeSession.terminate();
    activeSession = null;
  } else {
    console.log('There is no active call to end.');
  }
};

export { configureJsSIP, makeCall, endCall };
