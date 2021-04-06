/* eslint-disable prettier/prettier */
const dataToken = {
  login: {userID: null, token: null},
};

const tokenReducer = (state = dataToken, action) => {
  switch (action.type) {
    case 'refresh':
      state = {
        ...state,
        login: action.data,
      };
      break;
    case 'Login':
      state = {
        ...state,
        login: action.token,
      };
      break;
    case 'Logout':
      state = {
        ...state,
        login: {userID: null, token: null},
      };
      break;
    default:
      break;
  }
  return state;
};

export default tokenReducer;
