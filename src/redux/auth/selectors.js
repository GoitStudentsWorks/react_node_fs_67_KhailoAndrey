import { useSelector } from 'react-redux';

const selectIsRefreshing = state => state.auth.isRefreshing;
const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUser = state => state.auth.user;

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};