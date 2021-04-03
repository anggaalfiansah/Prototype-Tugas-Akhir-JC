/* eslint-disable prettier/prettier */
const dataToken = {
  login:null,
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
        login: null,
      };
      break;
    default:
      break;
  }
  return state;
};

export default tokenReducer;
