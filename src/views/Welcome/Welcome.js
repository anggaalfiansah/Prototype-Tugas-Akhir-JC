/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import storage from '../../storage/storage';
import NotSignIn from '../NotSignIn/NotSignIn';
import SignIn from '../SignIn/SignIn';

const Welcome = () => {
  const Token = useSelector(state => state.login);
  const [isLogin, setisLogin] = useState(false);

  const dispatch = useDispatch();
  const login = async () => {
    await storage
      .load({
        key: 'loginState',
        autoSync: true,
        syncInBackground: true,
      })
      .then(ret => {
        dispatch({type: 'refresh', data: ret});
      })
      .catch(err => {
        // any exception including data not found
        // goes to catch()
        console.log(err.message);
        switch (err.name) {
          case 'NotFoundError':
            // TODO;
            break;
          case 'ExpiredError':
            // TODO
            break;
        }
      });
  };

  useEffect(() => {
    login();
    console.log(Token);
    if (Token) {
      setisLogin(true);
    } else {
      setisLogin(false);
    }
  }, [Token]);
  return <>{isLogin ? <SignIn /> : <NotSignIn />}</>;
};

export default Welcome;
