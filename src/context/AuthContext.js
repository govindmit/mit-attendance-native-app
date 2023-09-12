import createDataContext from './createDataContext';
import { userLogin } from '../API/auth';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'signout':
      return {token: null, email: ''};
    case 'signin':
    case 'forgotPassword':
    case 'signup':
      return {
        token: action.payload.token,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

const signup = dispatch => {
  return ({email, password}) => {
    console.log('Signup');
  };
};

const forgotPassword = dispatch => {
    return ({email, password}) => {
      console.log('ForgotPassword');
    };
  };

const signin = dispatch => {
  return ({username, password}) => {
    // const formData = new FormData();
    //   formData.append('username', email);
    //   formData.append('password', password);
    

    const response =  userLogin({username,password});
   
    if(response) {
        console.log('Signin', response.data);
        dispatch({
        type: 'signin',
        payload: {
            token: response.data.token,
        },
        });
    }
  };
};

const signout = dispatch => {
  return () => {
    dispatch({type: 'signout'});
  };
};

export const {Provider, Context} = createDataContext(
  authReducer,
  {signin, signout, signup, forgotPassword},
  {token: null, username: ''}, 
);