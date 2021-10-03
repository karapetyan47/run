import React from 'react';

import LOGO from '../../assets/img/bigLogo.svg';
import MOBILE_LOGO from '../../assets/img/bearFace.png';
import Button from '../../components/Button';
import useLogo from '../../hooks/useLogo';

import './styles.scss';
import { useDispatch, useSelector } from 'react-redux';
import { attemptLogin } from '../../store/user/actions';

const SignIn = () => {
  const userLoading = useSelector((state) => state.user.userLoading);
  const logo = useLogo(LOGO, MOBILE_LOGO);

  const dispatch = useDispatch();

  return (
    <div className="d-flex align-center justify-center login">
      <div className="login-content">
        <img src={logo} alt="logo" className={`image ${userLoading ? 'img-loading' : ''}`} />
        <Button
          disabled={userLoading}
          onClick={() => {
            dispatch(attemptLogin());
          }}
          className="let-me-btn"
          size="large">
          Let me in
        </Button>
      </div>
    </div>
  );
};

export default SignIn;
