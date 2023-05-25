const callReducer = (state = {}, action) => {
    switch (action.type) {
      case 'MAKE_CALL':
        // Xử lý logic khi thực hiện cuộc gọi
        return state;
      default:
        return state;
    }
  };
  
  export default callReducer;