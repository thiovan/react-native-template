const initialState = {
  isLogin: false,
  name: ''
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN':
      return {
        isLogin: true,
        name: action.name
      };
    case 'USER_LOGOUT':
      return {
        isLogin: false,
        name: ''
      };
    default:
      return state;
  }
};

export default LoginReducer;
