import { useSelector } from 'react-redux';

const useUserAuth = () => {
  const isUserAuthenticated = !!useSelector((state) => state.user.user);

  return isUserAuthenticated;
};

export default useUserAuth;
